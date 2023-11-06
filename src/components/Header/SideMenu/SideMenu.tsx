import images from "@/assets/images";
import { User, Vali } from "@/components/Icons";
import { faFacebookF, faInstagram, faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

type Props = {
    sideMenu: boolean
    setSideMenu: (arg: boolean) => void
}
function SideMenu({sideMenu, setSideMenu}: Props) {
    return (
        <div className={" w-[280px] h-full font-medium bg-white shadow-md py-[30px] px-[20px] duration-300 top-0 fixed z-20 " + (sideMenu ? ' left-0' : '-left-[280px]')}>
            <div className=" flex items-center justify-between">
                <img className=" w-[110px]" src={images.logo.logoBlack} />
                <div className=" text-lg" onClick={() => setSideMenu(false)}>
                    <FontAwesomeIcon icon={faClose} />
                </div>
            </div>
            <div className=" flex flex-col pt-[50px] pb-[35px] pr-[10px]">
                <Link to={'/'} className=" flex items-center justify-between py-[10px]">
                    <p className=" text-sm duration-300 hover:text-primary-100">Home</p>
                </Link>
                <Link to={'/job-listing'} className=" flex items-center justify-between py-[10px] duration-300">
                    <p className=" text-sm duration-300 hover:text-primary-100">Find Jobs</p>
                </Link>
                <Link to={'/company-listing'} className=" flex items-center justify-between py-[10px] duration-300">
                    <p className=" text-sm duration-300 hover:text-primary-100">Company</p>
                </Link>
                <Link to={'/blogs'} className=" flex items-center justify-between py-[10px]">
                    <p className=" text-sm duration-300 hover:text-primary-100">Blogs</p>
                </Link>
                <Link to={'/contact'} className=" flex items-center justify-between py-[10px]">
                    <p className=" text-sm duration-300 hover:text-primary-100">Contact</p>
                </Link>
            </div>
            <div>
                <Link to={'/login'} className=" flex items-center justify-center w-full border border-[#dfe9e5] rounded-[5px] py-[9px] mb-[25px] duration-300 hover:bg-primary-100">
                    <User />
                    <p className=" text-[15px] ml-2">Sign In</p>
                </Link>
                <Link to={'/post-job'} className=" flex items-center justify-center w-full text-white bg-primary-100 rounded-[5px] py-[9px] mb-[30px] duration-300 hover:bg-black">
                    <div className=" fill-white"><Vali /></div>
                    <p className=" text-[15px] ml-2">Post Job</p>
                </Link>
                <div className=" flex items-center justify-around">
                    <div className=" flex items-center justify-center w-[30px] h-[30px] text-white bg-primary-100 rounded-full">
                        <FontAwesomeIcon icon={faFacebookF} />
                    </div>
                    <div className=" flex items-center justify-center w-[30px] h-[30px] text-white bg-primary-100 rounded-full">
                        <FontAwesomeIcon icon={faTwitter} />
                    </div>
                    <div className=" flex items-center justify-center w-[30px] h-[30px] text-white bg-primary-100 rounded-full">
                        <FontAwesomeIcon icon={faLinkedinIn} />
                    </div>
                    <div className=" flex items-center justify-center w-[30px] h-[30px] text-white bg-primary-100 rounded-full">
                        <FontAwesomeIcon icon={faInstagram} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SideMenu;