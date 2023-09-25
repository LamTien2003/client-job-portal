

function Company() {
    return (
        <form className="bg-white rounded-2xl border-teal-100 border  px-16 py-12  mb-4">
            <div className="email mb-4 pb-2">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                    Email*
                </label>
                {/* <span className="w-1 h-1 border-black bg-black absolute inset-y-0 left-0 flex items-center pl-2"></span> */}
                <label className="relative block">
                    <span className="sr-only">Search</span>
                    <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                        <svg className="h-5 w-5 fill-teal-700" viewBox="0 0 20 20"><path d="M17.388,4.751H2.613c-0.213,0-0.389,0.175-0.389,0.389v9.72c0,0.216,0.175,0.389,0.389,0.389h14.775c0.214,0,0.389-0.173,0.389-0.389v-9.72C17.776,4.926,17.602,4.751,17.388,4.751 M16.448,5.53L10,11.984L3.552,5.53H16.448zM3.002,6.081l3.921,3.925l-3.921,3.925V6.081z M3.56,14.471l3.914-3.916l2.253,2.253c0.153,0.153,0.395,0.153,0.548,0l2.253-2.253l3.913,3.916H3.56z M16.999,13.931l-3.921-3.925l3.921-3.925V13.931z"></path></svg>
                    </span>
                    <input className=" placeholder:text-slate-400 block bg-white w-full border  border-teal-100  hover:border-teal-400 rounded-md py-2 pl-9 pr-3 focus:outline-none focus:border-teal-200  focus:shadow-outline" placeholder="abc123@gmail.com" type="text" name="email" />
                </label>
            </div>
            <div className="mb-4 pb-2">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                    Password*
                </label>
                <input className=" placeholder:text-slate-400 appearance-none border border-teal-100  hover:border-teal-400 rounded w-full py-2 px-3 focus:border-teal-200 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
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
                    Register
                </button>
            </div>
            <div className="flex flex-wrap">
                <h6>Already have an account? </h6>
                <p> <a className="font-bold  text-teal-500 pl-2" href="#">Login </a>here</p>
            </div>
            <div className="button mt-16 mb-10 flex-wrap">
                <button className="bg-white hover:bg-teal-400 hover:text-white text-black font-bold  mx-3 w-44 focus:outline-none focus:shadow-outline rounded border-teal-100 border" type="button">
                    <a href="https://myaccount.google.com/">Log in with Google</a>
                    <img src="https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/icon/google1.svg" alt="" />
                </button>
                <button className="bg-white hover:bg-teal-400 hover:text-white text-black font-bold py-2 px-4 mx-3 w-44 focus:outline-none focus:shadow-outline rounded border-teal-100 border" type="button">
                    Company
                </button>
            </div>
        </form>
    );
}

export default Company;