import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-router-dom";


function MainMenu() {
    const [dropdownJob, setDropdownJob] = useState<boolean>(false)

    const handleDropdown = (arg: string) => {
        if(arg === 'job') {
            setDropdownJob(true)
        }
    }

    const handleDropdownOff = (arg: string) => {
        if(arg === 'job') {
            setDropdownJob(false)
        }
    }
    
    return (
        <div className=' flex items-center xl:text-sm lg:hidden tb:hidden mb:hidden '>
            <div className=' flex items-center p-[30px] xl:p-[18px] duration-300 cursor-pointer hover:text-primary-100'>
                <Link to={'/'}>Home</Link>
            </div>
            <div className=' flex items-center p-[30px] xl:p-[18px] duration-300 cursor-pointer hover:text-primary-100 relative' onMouseEnter={() => handleDropdown('job')} onMouseLeave={() => handleDropdownOff('job')}>
                <p>Find Job</p>
                <div className=" w-4 text-xs ml-1 mt-1">
                    <FontAwesomeIcon icon={faAngleDown} />
                </div>
                <div className={"w-[200px] flex flex-col text-white px-[10px] bg-[#061421] left-0 top-full duration-500 absolute " + (dropdownJob ? 'translate-y-0 opacity-1' : 'translate-y-5 opacity-0')}>
                    <div className=" text-sm px-[20px] py-[15px] duration-300 hover:text-primary-100"><Link to={'/job-listing'}>Job Listing</Link></div>
                    <div className=" text-sm px-[20px] py-[15px] duration-300 hover:text-primary-100"><Link to={'/job-cagegory'}>Job Category</Link></div>
                </div>
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