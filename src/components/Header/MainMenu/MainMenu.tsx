
import { Link } from "react-router-dom";

function MainMenu() {
    
    return (
        <div className=' flex items-center xl:text-sm lg:hidden tb:hidden mb:hidden '>
            <div className=' flex items-center p-[30px] xl:p-[18px] duration-300 cursor-pointer hover:text-primary-100'>
                <Link to={'/'}>Home</Link>
            </div>
            <div className=' flex items-center p-[30px] xl:p-[18px] duration-300 cursor-pointer hover:text-primary-100 relative'>
                <Link to={'/job-listing'}>Find Jobs</Link>
            </div>
            <div className=' flex items-center p-[30px] xl:p-[18px] duration-300 cursor-pointer hover:text-primary-100 relative'>
                <Link to={'/company-listing'}>Company</Link>
            </div>
            <div className=' flex items-center p-[30px] xl:p-[18px] duration-300 cursor-pointer hover:text-primary-100 relative'>
                <Link to={'/blogs'}>Blog</Link>
            </div>
            <div className=' flex items-center p-[30px] xl:p-[18px] duration-300 cursor-pointer hover:text-primary-100 relative'>
                <Link to={'/contact'}>Contact</Link>
            </div>
        </div>
    );
}

export default MainMenu;