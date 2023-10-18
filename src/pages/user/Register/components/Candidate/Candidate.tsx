import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

import { useFormik } from 'formik';
import * as Yup from 'Yup';

import { RegisterJobseekerRequest, useRegisterJobseekerMutation } from '@/services/authApiSlice';
import FirstName from './Fields/FirstName';
import LastName from './Fields/LastName';
import Email from './Fields/Email';
import PhoneNumber from './Fields/PhoneNumber';
import Password from './Fields/Password';
import PasswordConfirm from './Fields/PasswordConfirm';
import Location from './Fields/Location';
import { useDispatch } from 'react-redux';
import { setcredentialsToken, setCurrentUser } from '@/store/userSlice';
import { setToken } from '@/utils/storage';
import { ResponseApi } from '@/types/ResponseApi';
import JobSeeker from '@/types/JobSeeker';

// eslint-disable-next-line no-useless-escape
export const EMAIL_REGEX = /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/;
export const PNUMBER_REGEX = /^(0|84)(2(0[3-9]|1[0-6|8|9]|2[0-2|5-9]|3[2-9]|4[0-9]|5[1|2|4-9]|6[0-3|9]|7[0-7]|8[0-9]|9[0-4|6|7|9])|3[2-9]|5[5|6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])([0-9]{7})$/;
export const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

// export const locationArray = [
//     'TPHCM (Quận 1)',
//     'TPHCM (Quận 2)',
//     'TPHCM (Quận 3)',
//     'TPHCM (Quận 4)',
//     'TPHCM (Quận 5)',
//     'TPHCM (Quận 6)',
//     'TPHCM (Quận 7)',
//     'TPHCM (Quận 8)',
//     'TPHCM (Quận 9)',
//     'TPHCM (Quận 10)',
//     'TPHCM (Quận 11)',
//     'TPHCM (Quận 12)',
//     'TPHCM (Quận Bình Tân)',
//     'TPHCM (Quận Bình Thạnh)',
//     'TPHCM (Quận Gò Vấp)',
//     'TPHCM (Quận Phú Nhuận)',
//     'TPHCM (Quận Tân Bình)',
//     'TPHCM (Quận Tân Phú)',
//     'TPHCM (Quận Thủ Đức)',
//     'TPHCM (Huyện Bình Chánh)',
//     'TPHCM (Huyện Cần Giờ)',
//     'TPHCM (Huyện Củ Chi)',
//     'TPHCM (Huyện Hóc Môn)',
//     'TPHCM (Huyện Nhà Bè)',
//     'TPHN , (Quận Ba Đình)',
//     'TPHN , (Quận Bắc Từ ',
//     'TPHN , (Quận Đống Đa)',
//     'TPHN , (Quận Hà Đông)',
//     'TPHN , (Quận Hai Bà Trưng',
//     'TPHN , (Quận Hoàn Kiếm)',
//     'TPHN , (Quận Hoàng Mai)',
//     'TPHN , (Quận Long Biên)',
//     'TPHN , (Quận Nam Từ Liêm',
//     'TPHN , (Quận Tây Hồ)',
//     'TPHN , (Quận Thanh Xuân)',
//     'TPHN , (Huyện Ba Vì)',
//     'TPHN , (Huyện Chương Mỹ)',
//     'TPHN , (Huyện Đan Phượng)',
//     'TPHN , (Huyện Đông Anh)',
//     'TPHN , (Huyện Gia Lâm)',
//     'TPHN , (Huyện Hoài Đức)',
//     'TPHN , (Huyện Mê Linh)',
//     'TPHN , (Huyện Mỹ Đức)',
//     'TPHN , (Huyện Phú Xuyên)',
//     'TPHN , (Huyện Phúc Thọ)',
//     'TPHN , (Huyện Quốc Oai)',
//     'TPHN , (Huyện Sóc Sơn)',
//     'TPHN , (Huyện Thạch Thất)',
//     'TPHN , (Huyện Thanh Oai)',
//     'TPHN , (Huyện Thanh Trì)',
//     'TPHN , (Huyện Thường Tín)',
//     'TPHN , (Huyện Ứng Hòa.',
//     'TPHN , (Thị xã Sơn Tây)',
//     'Khác'
// ]

export const locationArray = [
    'Hồ Chí Minh',
    'Hà Nội',
    'Đà Nẵng',
    'Khác',
]

function Candidate() {
    const [registerJobSeeker] = useRegisterJobseekerMutation();
    
    const navigate = useNavigate();
    const dispatch = useDispatch()

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);



    const formik = useFormik({
        initialValues: {
            type: 'jobseeker',
            firstName: '',
            lastName: '',
            email: '',
            location: 'Hồ Chí Minh',
            phoneNumber: '',
            password: '',
            passwordConfirm: '',
            introduce: 'Giới thiệu về tôi', 
        },
        validationSchema: Yup.object({
            firstName: Yup
                .string()
                .required('Không được để trống')
                .min(2, 'Họ phải tối thiểu 2 kí tự')
                .max(30, 'Họ chỉ tối đa 30 kí tự'),
            lastName: Yup
                .string()
                .required('Không được để trống')
                .min(2, 'Tên phải tối thiểu 2 kí tự')
                .max(30, 'Họ chỉ tối đa 30 kí tự'),
            email: Yup
                .string()
                .required('Không được để trống')
                .matches(EMAIL_REGEX, 'Email phải đúng định dạng'),
            phoneNumber: Yup
                .string()
                .required('Không được để trống')
                .matches(PNUMBER_REGEX, 'Số điện thoại phải là số và đúng định dạng'),
            location: Yup
                .string()
                .required('Không được để trống'),
            password: Yup
                .string()
                .required('Không được để trống')
                .matches(
                    PWD_REGEX,
                    'Mật khẩu phải từ 8 đến 24 kí tự. Phải có ít nhất 1 chữ hoa, 1 chữ thường, số và 1 kí tự đặc biệt',
                ),
            passwordConfirm: Yup
                .string()
                .required('Không được để trống')
                .matches(
                    PWD_REGEX,
                    'Mật khẩu phải từ 8 đến 24 kí tự. Phải có ít nhất 1 chữ hoa, 1 chữ thường, số và 1 kí tự đặc biệt',
                )
                .oneOf([Yup.ref('password')], 'Mật khẩu không trùng khớp'),
        }),
        onSubmit: async (values: RegisterJobseekerRequest) => {
            try {
                console.log(values)
                const response:any = await registerJobSeeker(values);
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
    });

    return (
        <>
            {success ? (
                <section>
                    <h1>Success!</h1>
                    <p onClick={() => navigate('/login')}>Sign in</p>
                </section>
            ) : (
                <section>
                    <p>{errMsg}</p>
                    <form
                        onSubmit={formik.handleSubmit}
                        className="bg-white rounded-2xl border-teal-100 border py-10 mb-4"
                    >
                        <div className='flex flex-wrap justify-center'>
                            <FirstName 
                                value={formik.values.firstName} 
                                error={formik.errors.firstName}
                                handleChange={formik.handleChange} 
                            />
                            <LastName 
                                value={formik.values.lastName} 
                                error={formik.errors.lastName} 
                                handleChange={formik.handleChange}
                            />
                            <Email 
                                value={formik.values.email} 
                                error={formik.errors.email} 
                                handleChange={formik.handleChange}
                            />
                            <PhoneNumber 
                                value={formik.values.phoneNumber} 
                                error={formik.errors.phoneNumber} 
                                handleChange={formik.handleChange}
                            />
                            <Password 
                                value={formik.values.password} 
                                error={formik.errors.password} 
                                handleChange={formik.handleChange}
                            />
                            <PasswordConfirm 
                                value={formik.values.passwordConfirm} 
                                error={formik.errors.passwordConfirm} 
                                handleChange={formik.handleChange}
                            />
                            <Location 
                                value={formik.values.location} 
                                error={formik.errors.location} 
                                handleChange={formik.handleChange} 
                            />
                        </div>

                        <div className=' pr-16 pl-16'>
                            <div className="flex flex-wrap place-content-between ">
                                <label className="block text-gray-500 font-bold">
                                    <input className="mr-2 leading-tight" type="checkbox" />
                                    <span className="text-sm ">Tôi đồng ý vào các điều khoản & điều kiện của công ty</span>
                                </label>
                            </div>
                            <div className="flex items-center justify-between">
                                <button
                                    type="submit"
                                    className="bg-teal-500 hover:bg-teal-900 text-white font-bold py-2 px-4 my-6 w-full rounded focus:outline-none focus:shadow-outline"
                                >
                                    Sign up
                                </button>
                            </div>
                            <div className="flex flex-wrap">
                                <h6>Already have an account? </h6>
                                <p>
                                    {' '}
                                    <a className="font-bold  text-teal-500 pl-2" onClick={() => navigate('/login')}>
                                        Login{' '}
                                    </a>
                                    here
                                </p>
                            </div>
                            <div className="flex justify-center button mt-6 flex-wrap">
                                <button
                                    className="flex items-center bg-white hover:bg-teal-400 hover:text-white text-black font-bold py-2 px-4 mx-3 w-56 focus:outline-none focus:shadow-outline rounded border-teal-100 border"
                                    type="button"
                                >
                                    <img
                                        className='mr-2'
                                        src="https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/icon/google1.svg"
                                        alt=""
                                    />
                                    <a href="https://myaccount.google.com/">Log in with Google</a>
                                </button>
                                <button
                                    className="bg-white hover:bg-teal-400 hover:text-white text-black font-bold py-2 px-4 mx-3 w-56 focus:outline-none focus:shadow-outline rounded border-teal-100 border"
                                    type="button"
                                >
                                    Company
                                </button>
                            </div>
                        </div>
                    </form>
                </section>
            )}
        </>
    );
}

export default Candidate;
