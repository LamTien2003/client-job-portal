import { Link, useNavigate } from 'react-router-dom';
import { RegisterJobseekerRequest, useRegisterJobseekerMutation } from '@/services/authApiSlice';
import { useFormik } from 'formik';
import * as Yup from 'Yup';
import { EMAILREGEX, PHONEREGEX } from '@/constants/regex';
import { useDispatch } from 'react-redux';
import Fields from '../Fields/Fields';
import SelectLocation from '../SelectLocation/SelectLocation';
import Loader from '@/components/Loader/Loader';
import { toast } from 'react-toastify';
import { setCurrentUser, setcredentialsToken } from '@/store/userSlice';
import { setToken } from '@/utils/storage';

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

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: Yup.object({
            firstName: Yup.string().required('Họ không được để trống').min(2, 'Họ phải tối thiểu 2 kí tự').max(30, 'Họ chỉ tối đa 30 kí tự'),
            lastName: Yup.string().required('Tên không được để trống').min(2, 'Tên phải tối thiểu 2 kí tự').max(30, 'Tên chỉ tối đa 30 kí tự'),
            email: Yup.string().required('Email không được để trống').matches(EMAILREGEX, 'Email phải đúng định dạng'),
            location: Yup.string().required('Khu vực không được để trống'),
            phoneNumber: Yup.string().required('Số điện thoại không được để trống').matches(PHONEREGEX, 'Số điện thoại phải đúng định dạng'),
            introduce: Yup.string().max(250, 'Giới thiệu chỉ tối đa 250 kí tự'),
            password: Yup.string().required('Mật khẩu không được để trống').min(8, 'Mật khẩu phải có ít nhất 8 ký tự'),
            passwordConfirm: Yup.string().required('Nhập lại mật khẩu không được để trống').oneOf([Yup.ref('password')], 'Mật khẩu không trùng khớp'),
        }),
        onSubmit: async (values: RegisterJobseekerRequest) => {
            try {
                const response = await registerJobseeker(values).unwrap();
                if(response.status === 201) {
                    toast.success(response.data.msg)
                    const user = response.data.data;
                    const accessToken = response.data.accessToken;
                    if(user && accessToken) {
                        dispatch(setCurrentUser(user));
                        dispatch(setcredentialsToken(accessToken));
                        setToken(accessToken);
                    }
                    navigate('/job-listing')
                }
            } catch (error:any) {
                if(error?.status === 400) {
                    toast.error('Email này đã được sử dụng. Vui lòng sử dụng email khác!')
                } else {
                    toast.error('Lỗi đăng ký.')
                }
            }
        },
    })

    return (
        <>
            {isLoading && <Loader />}
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
                
                <div className=" flex items-center justify-start text-white text-lg mb-4">
                    <p>Already have an account?</p>
                    <Link to="/login" className=" ml-1.5 cursor-pointer">
                        Log In
                    </Link>
                </div>
            </form>
        </>
    );
}

export default JobseekerForm;