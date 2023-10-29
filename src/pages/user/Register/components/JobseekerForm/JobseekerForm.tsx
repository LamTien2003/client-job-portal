import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RegisterJobseekerRequest, useRegisterJobseekerMutation } from '@/services/authApiSlice';
import { useFormik } from 'formik';
import * as Yup from 'Yup';
import { EMAILREGEX, PHONEREGEX, PWDREGEX } from '../../Register';
import { useDispatch } from 'react-redux';
import { setCurrentUser, setcredentialsToken } from '@/store/userSlice';
import { setToken } from '@/utils/storage';
import Fields from '../Fields/Fields';
import SelectLocation from '../SelectLocation/SelectLocation';
import Loader from '@/components/Loader/Loader';

const initialValues: RegisterJobseekerRequest = {
    type: 'jobseeker',
    firstName: '',
    lastName: '',
    email: '',
    location: '',
    phoneNumber: '',
    introduce: '',
    password: '',
    passwordConfirm: ''
}
function JobseekerForm() {
    const [registerJobseeker, {isLoading}] = useRegisterJobseekerMutation();
    
    const navigate = useNavigate();
    const dispatch = useDispatch()

    const [errMsg, setErrMsg] = useState('');

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: Yup.object({
            firstName: Yup.string().required('Họ không được để trống').min(2, 'Họ phải tối thiểu 2 kí tự').max(30, 'Họ chỉ tối đa 30 kí tự'),
            lastName: Yup.string().required('Tên không được để trống').min(2, 'Tên phải tối thiểu 2 kí tự').max(30, 'Tên chỉ tối đa 30 kí tự'),
            email: Yup.string().required('Email không được để trống').matches(EMAILREGEX, 'Email phải đúng định dạng'),
            location: Yup.string().required('Khu vực không được để trống'),
            phoneNumber: Yup.string().required('Số điện thoại không được để trống').matches(PHONEREGEX, 'Số điện thoại phải đúng định dạng'),
            introduce: Yup.string().max(250, 'Giới thiệu chỉ tối đa 250 kí tự'),
            password: Yup.string().required('Mật khẩu không được để trống').matches(PWDREGEX, 'Mật khẩu phải ít nhất 8 kí tự. Phải có ít nhất 1 chữ hoa, 1 chữ thường, 1 số và 1 kí tự đặc biệt'),
            passwordConfirm: Yup.string().required('Nhập lại mật khẩu không được để trống').oneOf([Yup.ref('password')], 'Mật khẩu không trùng khớp'),
        }),
        onSubmit: async (values: RegisterJobseekerRequest) => {
            try {
                const response:any = await registerJobseeker(values);
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
                        label='Introduce'
                        id='introduce'
                        name='introduce'
                        value={formik.values.introduce}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.errors.introduce}
                        touched={formik.touched.introduce}
                        placeholder="Introduce"
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

export default JobseekerForm;