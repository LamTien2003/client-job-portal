import { useEffect, useState, useRef } from 'react';
import { useNavigate, useLocation, NavLink } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { useLoginMutation } from '@/services/authApiSlice';
import { removeToken, setToken } from '@/utils/storage';
import { setCurrentUser, setcredentialsToken } from '@/store/userSlice';
import { useFormik } from 'formik';
import * as Yup from 'Yup'
import { EMAIL_REGEX, PWD_REGEX } from '../Register/components/Candidate/Candidate';

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from.pathname || '/';

    const [login, { isLoading }] = useLoginMutation();
    const dispatch = useDispatch();

    // const {setAuth} = useAuth()

    const emailRef = useRef<HTMLInputElement>(null);
    const errRef = useRef<HTMLParagraphElement>(null);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errMsg, setErrMsg] = useState('');

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            phoneNumber: '',
            location: 'Tp Hồ Chí Minh, (Quận 1)',
            password: '',
            passwordConfirm: '',
        },
        validationSchema: Yup.object({
            email: Yup
                .string()
                .required('Không được để trống')
                .matches(EMAIL_REGEX, 'Email phải đúng định dạng'),
            password: Yup
                .string()
                .required('Không được để trống')
                .matches(
                    PWD_REGEX,
                    'Mật khẩu phải từ 8 đến 24 kí tự. Phải có ít nhất 1 chữ hoa, 1 chữ thường, số và 1 kí tự đặc biệt',
                )
        }),
        onSubmit: async (values) => {
            try {
                removeToken();
                const response: any = await login(values);
                const user = response.data.data.data;
                const accessToken = response.data.data.accessToken;
                if (user && accessToken) {
                    dispatch(setCurrentUser(user));
                    dispatch(setcredentialsToken(accessToken));
                    setToken(accessToken);
                }
                navigate(from, { replace: true });
            } catch (error) {
                setErrMsg('Đăng ký không thành công');
            }
        },
    });

    useEffect(() => {
        emailRef.current?.focus();
    }, []);

    useEffect(() => {
        setErrMsg('');
    }, [email, password]);


    return (
        <>
            {isLoading ? (
                <h1>Loading...</h1>
            ) : (
                <section>
                    <p ref={errRef} className={errMsg ? 'flex' : 'hidden'} aria-live="assertive">
                        {errMsg}
                    </p>
                    <div className=" m-auto my-10">
                        <div className="container mr-auto ml-auto">
                            <div className="border-black">
                                <h3 className="sn-h3 text-center text-teal-500 text-3xl font-bold">
                                    Login Here
                                </h3>
                                <div className=' flex items-center justify-center'>
                                    <div className=' w-20 h-0.5 bg-content-underline'></div>
                                    <div className=' w-2 h-2 bg-content-underline rounded-full mr-2 ml-2'></div>
                                    <div className=' w-20 h-0.5 bg-content-underline'></div>
                                </div>
                            </div>
                            <div className="w-5/12 h-2/3 m-auto mt-10">
                                <form
                                    onSubmit={formik.handleSubmit}
                                    className="bg-white rounded-2xl border-teal-100 border  px-16 py-12  mb-4"
                                >
                                    {/* Email */}
                                    <div className="email mb-4 pb-2 relative">
                                        <label className="block text-gray-700 text-sm font-bold mb-2">
                                            Email*
                                        </label>
                                        <img
                                            className=" absolute top-10.5 left-1 pl-5"
                                            src="https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/icon/email-2.svg"
                                        />
                                        <input
                                            type="text"
                                            id="email"
                                            ref={emailRef}
                                            autoComplete="off"
                                            onChange={formik.handleChange}
                                            value={formik.values.email}
                                            required
                                            placeholder="info@example.com"
                                            className="appearance-none border border-teal-100 rounded w-full py-2 px-3 pl-14 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        />
                                        <p
                                            className={formik.errors.email && formik.values.email ? 'text-red-500 text-xs italic' : 'hidden'}
                                        >
                                            {formik.errors.email}
                                        </p>
                                    </div>

                                    {/* Password */}
                                    <div className="mb-4 pb-2">
                                        <label className="block text-gray-700 text-sm font-bold mb-2">
                                            Password*
                                        </label>
                                        <input
                                            type="password"
                                            id="password"
                                            onChange={formik.handleChange}
                                            value={formik.values.password}
                                            required
                                            placeholder="******************"
                                            className="appearance-none border border-teal-100 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                                        />
                                        <p
                                            className={formik.errors.password && formik.values.password ? 'text-red-500 text-xs italic' : 'hidden'}
                                        >
                                            {formik.errors.password}
                                        </p>
                                    </div>

                                    <div className="flex flex-wrap place-content-between ">
                                        <label className="md:w-2/3 block text-gray-500 font-bold">
                                            <input className="mr-2 leading-tight" type="checkbox" />
                                            <span className="text-sm ">Remember Me</span>
                                        </label>
                                        <a
                                            className="inline-block align-baseline font-bold  text-blue-500 hover:text-primary-100 duration-300 underline underline-offset-3"
                                            href="#"
                                        >
                                            Forget Password?
                                        </a>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <button className="bg-teal-500 duration-300 hover:bg-teal-900 text-white font-bold py-2 px-4 my-6 w-full rounded focus:outline-none focus:shadow-outline">
                                            Login
                                        </button>
                                    </div>
                                    <div className="flex flex-wrap">
                                        <h6>Don't have an account? </h6>
                                        <NavLink to="/register" className="font-bold  text-teal-500 pl-2">
                                            Register
                                        </NavLink>
                                    </div>
                                </form>
                                <p className="text-center text-gray-500 text-xs">
                                    &copy;2020 Acme Corp. All rights reserved. ...
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            )}
        </>
    );
};

export default Login;
