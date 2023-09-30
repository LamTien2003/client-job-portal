import { useEffect, useState, useRef } from 'react';
import { useNavigate, useLocation, NavLink } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { useLoginMutation } from '@/services/authApiSlice';
import { setToken } from '@/utils/storage';

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from.pathname || '/';

    const [login, { isLoading }] = useLoginMutation();
    const dispatch = useDispatch();

    // const {setAuth} = useAuth()

    const emailRef = useRef<HTMLInputElement | null>();
    const errRef = useRef<HTMLElement | null>();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errMsg, setErrMsg] = useState('');

    useEffect(() => {
        emailRef?.current?.focus();
    }, []);

    useEffect(() => {
        setErrMsg('');
    }, [email, password]);

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        try {
            const userData = await login({ email, password });
            console.log(userData);
            const role = userData.data.data.data.role;
            const accessToken = userData.data.data.accessToken;
            dispatch(setCredentials({ email, accessToken, role }));
            accessToken && setToken(accessToken);
            setEmail('');
            setPassword('');
            navigate(from, { replace: true });
        } catch (error) {
            if (!error?.response) {
                setErrMsg('No server response');
            } else if (error.response?.status === 400) {
                setErrMsg('Thiếu email hoặc mật khẩu');
            } else if (error.response?.status === 401) {
                setErrMsg('unauthorized');
            } else {
                setErrMsg('Đăng nhập không thành công');
            }
            errRef?.current?.focus();
        }
    };

    return (
        <>
            {isLoading ? (
                <h1>Loading...</h1>
            ) : (
                <section>
                    <p ref={errRef} className={errMsg ? 'flex' : 'hidden'} aria-live="assertive">
                        {errMsg}
                    </p>
                    <div className="login-area pt-120 tb-120 mb-120 p-0 m-auto my-32">
                        <div className="container mr-auto ml-auto">
                            <div className="border-black">
                                <h3 className="sn-h3 text-center text-teal-500 m-120 text-3xl font-bold">
                                    Log In Here!!!
                                </h3>
                                <div className=" mr-auto ml-auto justify-center items-center flex">
                                    <div className="w-10 border-t border-red-600 justify-center"></div>
                                    <div className="w-2 h-2 rounded-full bg-red-500 justify-center m-2"></div>
                                    <div className="w-10 border-t border-red-600 justify-center"></div>
                                </div>
                            </div>
                            <div className="w-5/12 h-2/3 m-auto mt-16 pt-12">
                                <form
                                    onSubmit={handleSubmit}
                                    className="bg-white rounded-2xl border-teal-100 border  px-16 py-12  mb-4"
                                >
                                    {/* Email */}
                                    <div className="email mb-4 pb-2 relative">
                                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
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
                                            onChange={(e) => setEmail(e.target.value)}
                                            value={email}
                                            required
                                            placeholder="info@example.com"
                                            className="appearance-none border border-teal-100 rounded w-full py-2 px-3 pl-14 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        />
                                    </div>

                                    {/* Password */}
                                    <div className="mb-4 pb-2">
                                        <label
                                            className="block text-gray-700 text-sm font-bold mb-2"
                                            htmlFor="password"
                                        >
                                            Password*
                                        </label>
                                        <input
                                            type="password"
                                            id="password"
                                            onChange={(e) => setPassword(e.target.value)}
                                            value={password}
                                            required
                                            placeholder="******************"
                                            className="appearance-none border border-teal-100 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                                        />
                                        <p className="text-red-500 text-xs italic">Please choose a password.</p>
                                    </div>

                                    <div className="flex flex-wrap place-content-between ">
                                        <label className="md:w-2/3 block text-gray-500 font-bold">
                                            <input className="mr-2 leading-tight" type="checkbox" />
                                            <span className="text-sm ">Remember Me</span>
                                        </label>
                                        <a
                                            className="inline-block align-baseline font-bold  text-blue-500 hover:text-teal-500 underline underline-offset-3"
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
                                        <NavLink to="/register" className="font-bold  text-teal-500 pl-2" href="#">
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
