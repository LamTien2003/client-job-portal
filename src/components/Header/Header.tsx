
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { faUser, faBell } from "@fortawesome/free-regular-svg-icons";

const Header = () => {
    return (
        <header className="w-[90%] h-[86px] m-auto grid grid-cols-12 gap-4 text-[15px] ">
            <div className="col-span-2 pt-4 border-r-[0.5px] border-gray-400">
                <img src="https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/header1-logo.svg" alt="" />
            </div>


            {/* MENU CHÍNH */}
            <div className="col-span-7 flex justify-between items-center gap-4">
                <div className=" w-[100%] grid grid-cols-7">
                    <div className="text-center relative group">
                        <a href="#" className="the_a_menu">
                            Home
                            <FontAwesomeIcon icon={faAngleDown} className="ml-1 translate-y-1" />
                        </a>
                        <div className="absolute left-0 w-[200px] bg-menu-bg text-footer-color-hover shadow-md rounded-lg mt-2 p-4 hidden group-hover:block">
                            {/* Thêm nội dung menu con tại đây */}
                            <a href="#" className="block">Submenu Item 1</a>
                            <a href="#" className="block">Submenu Item 2</a>
                            {/* ... và các mục khác */}
                        </div>
                    </div>

                    <div className="text-center">
                        <a href="#" className="the_a_menu">
                            Find Jobs
                            <FontAwesomeIcon icon={faAngleDown} className="ml-1 translate-y-1" />
                        </a>
                    </div>

                    <div className="text-center">
                        <a href="#" className="the_a_menu">
                            Pages
                            <FontAwesomeIcon icon={faAngleDown} className="ml-1 translate-y-1" />
                        </a>
                    </div>

                    <div className="text-center">
                        <a href="#" className="the_a_menu">
                            Company
                            <FontAwesomeIcon icon={faAngleDown} className="ml-1 translate-y-1" />
                        </a>
                    </div>

                    <div className="text-center">
                        <a href="#" className="the_a_menu">
                            Blog
                            <FontAwesomeIcon icon={faAngleDown} className="ml-1 translate-y-1" />
                        </a>
                    </div>

                    <div className="text-center">
                        <a href="#" className="the_a_menu">
                            Contact

                        </a>
                    </div>
                </div>

            </div>


            <div className="col-span-3  flex justify-between items-center">
                <ul className="w-[100%] grid grid-cols-5 gap-8">
                    <li className="text-footer-color-hover">
                        <div className="pt-[10px] w-10 h-10  border rounded-full bg-gray-200 translate-x-3 translate-y-1">
                            <FontAwesomeIcon icon={faBell} className="text-[20px] translate-x-[10px]" />


                            <div className="w-4 h-4  border rounded-full bg-footer-color-hover text-white text-[10px] pl-[4px] translate-x-6 -translate-y-9">5</div>
                        </div>
                    </li>
                    <li className="col-span-2">
                        <div className="w-[133px] h-[45px] rounded-md text-center pt-[10px] font-medium  border-solid border  border-footer-color-hover hover:bg-footer-color-hover hover:text-white">
                            <a href="#">
                                <FontAwesomeIcon icon={faUser} className="mr-[5px]" />
                                Sign In
                            </a>
                        </div>
                    </li>
                    <li className="col-span-2">
                        <div className="w-[133px] h-[45px] rounded-md text-center pt-[10px] font-medium   bg-footer-color-hover hover:bg-black text-white">
                            <a href="#">

                                Post Job
                                <FontAwesomeIcon icon={faBriefcase} className="ml-[5px]" />
                            </a>
                        </div>
                    </li>
                </ul>

            </div>
        </header>
    );
};

export default Header;
