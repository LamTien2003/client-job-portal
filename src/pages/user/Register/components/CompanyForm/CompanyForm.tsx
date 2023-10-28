import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { RegisterCompanyRequest, useRegisterCompanyMutation } from '@/services/authApiSlice';
import { useFormik } from 'formik';
import * as Yup from 'Yup';
import { EMAILREGEX, PHONEREGEX, PWDREGEX } from '../../Register';
import { useDispatch } from 'react-redux';
import { setCurrentUser, setcredentialsToken } from '@/store/userSlice';
import { setToken } from '@/utils/storage';
import Fields from '../Fields/Fields';
import SelectLocation from '../SelectLocation/SelectLocation';
import SelectDate from '../SelectDate/SelectDate';
import Loader from '@/components/Loader/Loader';

const initialValues = {
    type: 'company',
    firstName: '',
    lastName: '',
    email: '',
    location: '',
    phoneNumber: '',
    password: '',
    passwordConfirm: '',
    companyName: '',
    description: '',
    establishDate: new Date,
    companySizeFrom: '',
    companySizeTo: '',
}
function CompanyForm() {
    const [RegisterCompany, {isLoading}] = useRegisterCompanyMutation();
    
    const navigate = useNavigate();
    const dispatch = useDispatch()

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: Yup.object({
            firstName: Yup.string().required('Họ không được để trống').min(2, 'Họ phải tối thiểu 2 kí tự').max(30, 'Họ chỉ tối đa 30 kí tự'),
            lastName: Yup.string().required('Tên không được để trống').min(2, 'Tên phải tối thiểu 2 kí tự').max(30, 'Tên chỉ tối đa 30 kí tự'),
            email: Yup.string().required('Email không được để trống').matches(EMAILREGEX, 'Email phải đúng định dạng'),
            location: Yup.string().required('Khu vực không được để trống'),
            phoneNumber: Yup.string().required('Số điện thoại không được để trống').matches(PHONEREGEX, 'Số điện thoại phải đúng định dạng'),
            companyName: Yup.string().required('Tên công ty không được để trống').min(2, 'Tên công ty phải tối thiểu 2 kí tự').max(100, 'Tên công ty chỉ tối đa 100 kí tự'),
            description: Yup.string().max(500, 'Mô tả chỉ tối đa 500 kí tự'),
            EstablishDate: Yup.date().min(Yup.ref('originalEndDate'), ({ min }) => `Thời gian thành lập phải là quá khứ ${formatDate(min)}!!`,),
            // EstablishDate: Yup.date().min(new Date(), 'Không được chọn ngày hôm nay và ở quá khứ!'),
            companySizeFrom: Yup.number().typeError('Chỉ được nhập số').required('companysizefrom không được để trống').min(1, 'Số lượng bắt đầu quy mô công ty phải có ít nhất 1 người'),
            companySizeTo: Yup.number().typeError('Chỉ được nhập số').required('companysizeto không được để trống').moreThan(Yup.ref('companySizeFrom'), 'Phải ít hơn số lượng trước'),
            password: Yup.string().required('Mật khẩu không được để trống').matches(PWDREGEX, 'Mật khẩu phải ít nhất 8 kí tự. Phải có ít nhất 1 chữ hoa, 1 chữ thường, 1 số và 1 kí tự đặc biệt'),
            passwordConfirm: Yup.string().required('Nhập lại mật khẩu không được để trống').oneOf([Yup.ref('password')], 'Mật khẩu không trùng khớp'),
        }),
        onSubmit: async (values) => {
            try {
                const myValues = {
                    type: values.type,
                    firstName: values.firstName,
                    lastName: values.lastName,
                    email: values.email,
                    location: values.location,
                    phoneNumber: values.phoneNumber,
                    password: values.password,
                    passwordConfirm: values.passwordConfirm,
                    companyName: values.companyName,
                    description: values.description,
                    establishDate: values.establishDate,
                    companySize: {
                        from: values.companySizeFrom,
                        to: values.companySizeTo,
                    } 
                } as RegisterCompanyRequest
                const response:any = await RegisterCompany(myValues);
                const user = response.data.data.data;
                const accessToken = response.data.data.accessToken;
                if(user && accessToken) {
                    dispatch(setCurrentUser(user));
                    dispatch(setcredentialsToken(accessToken));
                    setToken(accessToken);
                }
                navigate('/')
            } catch (error) {
                error;
                setErrMsg('Đăng ký không thành công');
            }
        },
    })

    function formatDate(date:Date | string) {
        return new Date(date).toLocaleDateString()
    }

    return (
        <>
            {isLoading && <Loader isLoading={isLoading} />}
            <form onSubmit={formik.handleSubmit}>
                <div className=' flex flex-wrap justify-between mt-4'>
                    <Fields
                        type='text'
                        label='First Name'
                        id='firstName'
                        name='firstName'
                        value={formik.values.firstName}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.errors.firstName}
                        touched={formik.touched.firstName}
                        placeholder="First Name"
                    />
                    <Fields
                        type='text'
                        label='Last Name'
                        id='lastName'
                        name='lastName'
                        value={formik.values.lastName}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.errors.lastName}
                        touched={formik.touched.lastName}
                        placeholder="Last Name"
                    />
                    <Fields
                        type='text'
                        label='Email'
                        id='email'
                        name='email'
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.errors.email}
                        touched={formik.touched.email}
                        placeholder="Email"
                    />
                    <Fields
                        type='text'
                        label='Phone Number'
                        id='phoneNumber'
                        name='phoneNumber'
                        value={formik.values.phoneNumber}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.errors.phoneNumber}
                        touched={formik.touched.phoneNumber}
                        placeholder="Phone Number"
                    />
                    <Fields
                        type='text'
                        label='Company Name'
                        id='companyName'
                        name='companyName'
                        value={formik.values.companyName}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.errors.companyName}
                        touched={formik.touched.companyName}
                        placeholder="Company Name"
                    />
                    <Fields
                        type='text'
                        label='Description'
                        id='description'
                        name='description'
                        value={formik.values.description}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.errors.description}
                        touched={formik.touched.description}
                        placeholder="Description"
                    />
                    <SelectLocation
                        label='Location'
                        id='location'
                        name='location'
                        value={formik.values.location}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.errors.location}
                        touched={formik.touched.location}
                    />
                    <SelectDate
                        label='EstablistDate'
                        id='establishDate'
                        value={formik.values.establishDate}
                        onChange={formik.handleChange}
                        error={formik.errors.establishDate}
                        touched={formik.touched.establishDate}
                    />
                    <Fields
                        type='text'
                        label='Company Size (from)'
                        id='companySizeFrom'
                        name='companySizeFrom'
                        value={formik.values.companySizeFrom}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.errors.companySizeFrom}
                        touched={formik.touched.companySizeFrom}
                        placeholder="Company Size (from)"
                    />
                    <Fields
                        type='text'
                        label='Company Size (to)'
                        id='companySizeTo'
                        name='companySizeTo'
                        value={formik.values.companySizeTo}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.errors.companySizeTo}
                        touched={formik.touched.companySizeTo}
                        placeholder="Company Size (to)"
                    />
                    <Fields
                        type='password'
                        label='Password'
                        id='password'
                        name='password'
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.errors.password}
                        touched={formik.touched.password}
                        placeholder="Password"
                    />
                    <Fields
                        type='password'
                        label='Password Confirm'
                        id='passwordConfirm'
                        name='passwordConfirm'
                        value={formik.values.passwordConfirm}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.errors.passwordConfirm}
                        touched={formik.touched.passwordConfirm}
                        placeholder="Password Confirm"
                    />
                </div>
                <div className=" text-center">
                    <button type="submit" className=" w-full h-[50px] text-primary-100 font-semibold bg-white rounded-[0.625rem] mt-6 mb-4">Sign Me Up</button>
                </div>
            </form>
        </>
    );
}

export default CompanyForm;