
function Sidebar() {
    return (
        <div className=" w-1/4 pr-3 mx-auto mb-8 lg:pr-0 tb:pr-0 mb:pr-0 lg:w-10/12 tb:w-10/12 mb:w-11/12">
            <div className=' bg-white border-[#eee] border rounded-md pt-5 pb-5 pl-6 pr-3 mb-5'>
                <h3 className=' font-family-title text-content-title font-semibold text-lg mb-2 lg:text-lg'>Date of Post</h3>
                <div className=' flex flex-wrap'>
                    <p className=' text-content-text font-semibold text-sm mr-4 mb-3 duration-300 cursor-pointer hover:text-primary-100'>Technology,</p>
                    <p className=' text-content-text font-semibold text-sm mr-4 mb-3 duration-300 cursor-pointer hover:text-primary-100'>Marketing,</p>
                    <p className=' text-content-text font-semibold text-sm mr-4 mb-3 duration-300 cursor-pointer hover:text-primary-100'>Sales,</p>
                    <p className=' text-content-text font-semibold text-sm mr-4 mb-3 duration-300 cursor-pointer hover:text-primary-100'>Transport,</p>
                    <p className=' text-content-text font-semibold text-sm mr-4 mb-3 duration-300 cursor-pointer hover:text-primary-100'>Medical,</p>
                    <p className=' text-content-text font-semibold text-sm mr-4 mb-3 duration-300 cursor-pointer hover:text-primary-100'>Design,</p>
                    <p className=' text-content-text font-semibold text-sm mr-4 mb-3 duration-300 cursor-pointer hover:text-primary-100'>Data Analyst,</p>
                    <p className=' text-content-text font-semibold text-sm mr-4 mb-3 duration-300 cursor-pointer hover:text-primary-100'>Development,</p>
                    <p className=' text-content-text font-semibold text-sm mr-4 mb-3 duration-300 cursor-pointer hover:text-primary-100'>Non-Profit,</p>
                    <p className=' text-content-text font-semibold text-sm mr-4 mb-3 duration-300 cursor-pointer hover:text-primary-100'>Manager,</p>
                    <p className=' text-content-text font-semibold text-sm mr-4 mb-3 duration-300 cursor-pointer hover:text-primary-100'>Health.</p>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;