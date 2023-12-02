import { faFacebookF, faInstagram, faLinkedinIn, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function BotFooter() {
    return (
        <div className=" mt-[90px] px-5 relative">
            <img className=" top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 absolute lg:hidden tb:hidden mb:hidden" src="https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/footer-logo.svg" />

            <div className=" flex items-center justify-between lg:flex-col tb:flex-col mb:flex-col">
                <div className=" flex items-center justify-start border-b border-gray-800 pb-10 xl:pb-[50px] lg:border-none lg:pb-0 lg:w-full lg:justify-center tb:border-none tb:pb-[30px] mb:border-none mb:pb-[25px] ">
                    <img className=" pl-3 lg:w-[35px]" src="https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/icon/footer-support-icon.svg" />
                    <h3 className=" text-lg font-semibold font-family-title before:w-px before:h-5 before:border-l before:border-primary-100 before:mx-2 xl:text-lg mb:text-base">Đường dây hỗ trợ:</h3>
                    <p className=" text-[#00A7AC] text-lg font-medium underline pl-[25px] duration-300 cursor-pointer hover:text-[#b3b3b3] xl:text-lg mb:text-base">+099-035 7398 3465</p>
                </div>
                <div className=" flex items-center justify-end border-b border-gray-800 pb-10 pr-3 gap-[40px] xl:gap-[25px] lg:w-full lg:justify-center lg:-mt-[25px] tb:gap-[20px]">
                    <p className="text-[#b3b3b3] text-sm font-medium tracking-wide duration-300 hover:text-primary-100 cursor-pointer xl:text-[15px] tb:text-sm">Chính sách bảo mật</p>
                    <p className="text-[#b3b3b3] text-sm font-medium tracking-wide duration-300 hover:text-primary-100 cursor-pointer xl:text-[15px] tb:text-sm">Điều khoản dịch vụ</p>
                    <p className="text-[#b3b3b3] text-sm font-medium tracking-wide duration-300 hover:text-primary-100 cursor-pointer xl:text-[15px] tb:text-sm">Sơ đồ Website</p>
                </div>
            </div>

            <div className=" flex items-center justify-between py-5 lg:flex-col mb:py-3 ">
                <div className=" flex items-center justify-start">
                    <p className=" text-sm ml-3">©Copyright 2023 
                        <span className=" text-primary-100 duration-300 cursor-pointer hover:text-[#b3b3b3]"> JOBES </span>
                        | Thiết kế bởi
                        <span className=" text-primary-100 duration-300 cursor-pointer hover:text-[#b3b3b3]"> tên nhóm</span>
                        
                    </p>
                </div>
                <div className=" flex items-center justify-end pt-[25px] tb:pt-5">
                    <p className=" text-sm font-medium">Theo dõi JOBHUB:</p>
                    <div className=" flex items-center gap-[10px] ml-[15px]">
                        <div className=" flex items-center justify-center w-[26px] h-[26px] text-primary-100 text-sm border border-primary-100 rounded-full">
                            <FontAwesomeIcon icon={faFacebookF} />
                        </div>
                        <div className=" flex items-center justify-center w-[26px] h-[26px] text-primary-100 text-sm border border-primary-100 rounded-full">
                            <FontAwesomeIcon icon={faXTwitter} />
                        </div>
                        <div className=" flex items-center justify-center w-[26px] h-[26px] text-primary-100 text-sm border border-primary-100 rounded-full">
                            <FontAwesomeIcon icon={faLinkedinIn} />
                        </div>
                        <div className=" flex items-center justify-center w-[26px] h-[26px] text-primary-100 text-sm border border-primary-100 rounded-full">
                            <FontAwesomeIcon icon={faInstagram} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BotFooter;