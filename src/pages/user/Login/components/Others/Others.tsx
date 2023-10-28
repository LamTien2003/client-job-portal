
function Others() {
    return (
        <div className=" flex flex-col text-white">
            <div className=" flex items-center justify-between mt-2">
                <div className=" flex items-center">
                    <input id="rememberme" type="checkbox" className=" cursor-pointer"/>
                    <label htmlFor="rememberme" className=" ml-1 cursor-pointer">Remember my preference</label>
                </div>
                <p className=" cursor-pointer">Forgot Password?</p>
            </div>
            <div className=" text-center">
                <button type="submit" className=" w-full h-[50px] text-primary-100 font-semibold bg-white rounded-[0.625rem] mt-6 mb-4">Sign Me In</button>
            </div>
            <div className=" flex items-center justify-start mb-4">
                <p>Dont't have an account?</p>
                <a className=" ml-1.5 cursor-pointer">Sign up</a>
            </div>
        </div>
    );
}

export default Others;