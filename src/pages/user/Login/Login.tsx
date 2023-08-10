import { useEffect } from 'react';
import { toast } from 'react-toastify';
const Login = () => {
    useEffect(() => {
        toast.success('Test thông bao');
    }, []);

    return (
        <div className="login-area pt-120 tb-120 mb-120 m-0 p-0 m-auto my-32">
            <div className="container">
                <div className="border-black">
                    <h3 className="sn-h3 text-center text-teal-500 m-120 text-3xl font-bold">Log In Here!!!</h3>
                    <div className=" mr-auto ml-auto justify-center items-center flex">
                        <div className="w-10 border-t border-red-600 justify-center"></div>
                        <div className="w-2 h-2 rounded-full bg-red-500 justify-center m-2"></div>
                        <div className="w-10 border-t border-red-600 justify-center"></div>
                    </div>
                </div>
                <div className="w-5/12 h-2/3 m-auto mt-16 pt-12">
                    <form className="bg-white rounded-2xl border-teal-100 border  px-16 py-12  mb-4">
                        <div className="email mb-4 pb-2">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                Email*
                            </label>
                            {/* <img className="img align-middle" src="https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/icon/email-2.svg"/> */}
                            <input className="appearance-none border border-teal-100 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="info@example.com" />
                        </div>
                        <div className="mb-4 pb-2">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                Password*
                            </label>
                            <input className="appearance-none border border-teal-100 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
                            <p className="text-red-500 text-xs italic">Please choose a password.</p>
                        </div>
                        <div className="flex flex-wrap place-content-between ">
                            <label className="md:w-2/3 block text-gray-500 font-bold">
                                <input className="mr-2 leading-tight" type="checkbox" />
                                <span className="text-sm ">
                                    Remember Me
                                </span>
                            </label>
                            <a className="inline-block align-baseline font-bold  text-blue-500 hover:text-teal-500 underline underline-offset-3" href="#">
                                Forget Password?
                            </a>
                        </div>
                        <div className="flex items-center justify-between">
                            <button className="bg-teal-500 hover:bg-teal-900 text-white font-bold py-2 px-4 my-6 w-full rounded focus:outline-none focus:shadow-outline" type="button">
                                Login
                            </button>
                        </div>
                        <div className="flex flex-wrap">
                            <h6>Don’t have an account? </h6>
                            <a className="font-bold  text-teal-500 pl-2" href="#">Register </a>
                        </div>
                    </form>
                    <p className="text-center text-gray-500 text-xs">
                        &copy;2020 Acme Corp. All rights reserved.
                    </p>
                </div>
            </div>
        </div>
    )
};

export default Login;
