import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpLong, faArrowDownLong, faMobileScreen, faDisplay, faTabletScreenButton } from "@fortawesome/free-solid-svg-icons";
import { faGoogle, faTiktok, faInstagram } from "@fortawesome/free-brands-svg-icons";
import images from "@/assets/images";

function Admin() {
    return (
        <div className="w-9/12 ml-[25%] pr-10">
            <div className=" flex items-center justify-between pt-6 pb-6 pr-6 pl-6 mb-6 bg-white rounded-xl">
                <div className=" flex flex-col">
                    <div className=" flex items-center text-content-text mr-2">
                        <p className=" text-content-title font-medium">Số Dư Hiện Tại</p>    
                        <div className=" pt-0.5 pb-0.5 pr-1 pl-1 ml-2 text-black text-xs bg-[#F4F6F6] rounded-lg">
                            <FontAwesomeIcon className=" w-2 mr-1" icon={faArrowUpLong} />
                            10.0%
                        </div>
                    </div>
                    <h1 className=" text-primary-100 mt-3 mb-1.5 text-2xl font-medium italic tracking-widest">$1,567.99</h1>
                    <p className=" text-content-title text-sm font-medium">Thứ 3, Ngày 17, Tháng 10, 2023</p>
                </div>
                <div className=" flex flex-col">
                    <div className=" flex items-center text-content-text mr-2">
                        <p className=" text-content-title font-medium">Thu Nhập Hôm Nay</p>    
                        <div className=" pt-0.5 pb-0.5 pr-1 pl-1 ml-2 text-[#FF0000] text-xs bg-[#ffe4e4] rounded-lg">
                            <FontAwesomeIcon className=" w-2 mr-1" icon={faArrowDownLong} />
                            3.0%
                        </div>
                    </div>
                    <h1 className=" text-primary-100 mt-3 mb-1.5 text-2xl font-medium italic tracking-widest">$2,868.99</h1>
                    <p className=" text-content-title text-sm font-medium">241 người dùng</p>
                </div>
                <div className=" flex flex-col">
                    <div className=" flex items-center text-content-text mr-2">
                        <p className=" text-content-title font-medium">Lượt Truy Cập</p>    
                        <div className=" pt-0.5 pb-0.5 pr-1 pl-1 ml-2 text-black text-xs bg-[#F4F6F6] rounded-lg">
                            <FontAwesomeIcon className=" w-2 mr-1" icon={faArrowUpLong} />
                            3.2%
                        </div>
                    </div>
                    <h1 className=" text-primary-100 mt-3 mb-1.5 text-2xl font-medium italic tracking-widest">165K</h1>
                    <p className=" text-content-title text-sm font-medium">32k Người Truy Cập</p>
                </div>
                <div className=" flex flex-col">
                    <div className=" flex items-center text-content-text mr-2">
                        <p className=" text-content-title font-medium">Số Người Đăng Kí</p>    
                        <div className=" pt-0.5 pb-0.5 pr-1 pl-1 ml-2 text-[#3D37F1] text-xs bg-[#F4F6F6] rounded-lg">
                            <FontAwesomeIcon className=" w-2 mr-1" icon={faArrowUpLong} />
                            8.3%
                        </div>
                    </div>
                    <h1 className=" text-primary-100 mt-3 mb-1.5 text-2xl font-medium italic tracking-widest">3,442</h1>
                    <p className=" text-content-title text-sm font-medium">$34.28 Thu Nhập Trung Bình</p>
                </div>
            </div>

            <div className=" flex mb-6">
                <div className=" w-8/12 p-6 mr-3 bg-white rounded-xl">
                    <div className=" flex items-center justify-between mb-6">
                        <h2 className=" text-content-title text-xl font-medium italic">Hiệu Suất Trên Các Nền Tảng Khác</h2>
                        <p className=" pt-2 pb-2 pr-1 pl-1 text-sm text-[#1A2B88] font-medium italic bg-[#F6F6F6] rounded-md cursor-pointer">Xem Tất Cả</p>
                    </div>
                    <div className=" flex items-center mb-3">
                        <div className=" w-4/12 flex justify-start text-content-text font-medium">Nền tảng</div>
                        <div className=" w-6/12 flex justify-between text-content-text font-medium">
                            <p className=" w-5/12 text-center">Lượt Hiển Thị</p>
                            <p className=" w-4/12 text-center">Lượt Xem</p>
                            <p className=" w-3/12 text-center">CPC</p>
                        </div>
                        <div className=" w-2/12 flex justify-end text-content-text font-medium">Chi Phí</div>
                    </div>
                    <div className="w-full h-px border-b border-[#EFEFEF]"></div>
                    <div className=" flex flex-col">
                        <div className=" flex items-center mt-4">
                            <div className=" w-4/12 flex items-center justify-start text-content-text font-medium">
                                <div className=" flex items-center justify-center mr-2 w-10 h-10 text-white bg-primary-100 rounded-full">
                                    <FontAwesomeIcon icon={faGoogle} />
                                </div>
                                <p>Google Ads</p>
                            </div>
                            <div className=" w-6/12 flex justify-between text-content-title font-medium">
                                <p className=" w-5/12 text-center">189k</p>
                                <p className=" w-4/12 text-center">9k</p>
                                <p className=" w-3/12 text-center">$8.12</p>
                            </div>
                            <div className=" w-2/12 flex justify-end text-content-title font-medium">$56,123.12</div>
                        </div>
                        <div className=" flex items-center mt-4">
                            <div className=" w-4/12 flex items-center justify-start text-content-text font-medium">
                                <div className=" flex items-center justify-center mr-2 w-10 h-10 text-white bg-primary-100 rounded-full">
                                    <FontAwesomeIcon icon={faTiktok} />
                                </div>
                                <p>TikTok</p>
                            </div>
                            <div className=" w-6/12 flex justify-between text-content-title font-medium">
                                <p className=" w-5/12 text-center">189k</p>
                                <p className=" w-4/12 text-center">9k</p>
                                <p className=" w-3/12 text-center">$8.12</p>
                            </div>
                            <div className=" w-2/12 flex justify-end text-content-title font-medium">$56,123.12</div>
                        </div>
                        <div className=" flex items-center mt-4">
                            <div className=" w-4/12 flex items-center justify-start text-content-text font-medium">
                                <div className=" flex items-center justify-center mr-2 w-10 h-10 text-white bg-primary-100 rounded-full">
                                    <FontAwesomeIcon icon={faInstagram} />
                                </div>
                                <p>Instagram</p>
                            </div>
                            <div className=" w-6/12 flex justify-between text-content-title font-medium">
                                <p className=" w-5/12 text-center">189k</p>
                                <p className=" w-4/12 text-center">9k</p>
                                <p className=" w-3/12 text-center">$8.12</p>
                            </div>
                            <div className=" w-2/12 flex justify-end text-content-title font-medium">$56,123.12</div>
                        </div>
                    </div>
                </div>
                <div className=" w-4/12 p-6 ml-3 bg-white rounded-xl">
                    <h2 className=" mb-8 text-content-title text-xl font-medium italic">Thiết Bị Truy Cập</h2>
                    <div className=" flex flex-col">
                        <div className=" flex items-center justify-between mb-5">
                            <div className=" flex items-center">
                                <div className=" flex items-center justify-center mr-3 w-12 h-12 text-primary-100 text-lg bg-[#F2F1FF] rounded-xl">
                                    <FontAwesomeIcon icon={faDisplay} />
                                </div>
                                <p className=" text-content-title text-base font-medium">Desktop</p>
                            </div>
                            <span className=" text-primary-100 text-base font-medium italic tracking-wider">80%</span>
                        </div>
                        <div className=" flex items-center justify-between mb-5">
                            <div className=" flex items-center">
                                <div className=" flex items-center justify-center mr-3 w-12 h-12 text-primary-100 text-lg bg-[#F2F1FF] rounded-xl">
                                    <FontAwesomeIcon icon={faMobileScreen} />
                                </div>
                                <p className=" text-content-title text-base font-medium">Mobile</p>
                            </div>
                            <span className=" text-primary-100 text-base font-medium italic tracking-wider">15%</span>
                        </div>
                        <div className=" flex items-center justify-between mb-5">
                            <div className=" flex items-center">
                                <div className=" flex items-center justify-center mr-3 w-12 h-12 text-primary-100 text-lg bg-[#F2F1FF] rounded-xl">
                                    <FontAwesomeIcon icon={faTabletScreenButton} />
                                </div>
                                <p className=" text-content-title text-base font-medium">Tablet</p>
                            </div>
                            <span className=" text-primary-100 text-base font-medium italic tracking-wider">5%</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className=" flex mb-6">
                <div className=" w-8/12 p-6 mr-3 bg-white rounded-xl">
                    <div className=" flex items-center justify-between mb-6">
                        <h2 className=" text-content-title text-xl font-medium italic">Hiệu Suất Trên Các Nền Tảng Khác</h2>
                        <p className=" pt-2 pb-2 pr-1 pl-1 text-sm text-[#1A2B88] font-medium italic bg-[#F6F6F6] rounded-md cursor-pointer">Xem Tất Cả</p>
                    </div>
                    <div className=" flex items-center mb-3">
                        <div className=" w-4/12 flex justify-start text-content-text font-medium">Nền tảng</div>
                        <div className=" w-6/12 flex justify-between text-content-text font-medium">
                            <p className=" w-5/12 text-center">Lượt Hiển Thị</p>
                            <p className=" w-4/12 text-center">Lượt Xem</p>
                            <p className=" w-3/12 text-center">CPC</p>
                        </div>
                        <div className=" w-2/12 flex justify-end text-content-text font-medium">Chi Phí</div>
                    </div>
                    <div className="w-full h-px border-b border-[#EFEFEF]"></div>
                    <div className=" flex flex-col">
                        <div className=" flex items-center mt-4">
                            <div className=" w-4/12 flex items-center justify-start text-content-text font-medium">
                                <div className=" flex items-center justify-center mr-2 w-10 h-10 text-white bg-primary-100 rounded-full">
                                    <FontAwesomeIcon icon={faGoogle} />
                                </div>
                                <p>Google Ads</p>
                            </div>
                            <div className=" w-6/12 flex justify-between text-content-title font-medium">
                                <p className=" w-5/12 text-center">189k</p>
                                <p className=" w-4/12 text-center">9k</p>
                                <p className=" w-3/12 text-center">$8.12</p>
                            </div>
                            <div className=" w-2/12 flex justify-end text-content-title font-medium">$56,123.12</div>
                        </div>
                        <div className=" flex items-center mt-4">
                            <div className=" w-4/12 flex items-center justify-start text-content-text font-medium">
                                <div className=" flex items-center justify-center mr-2 w-10 h-10 text-white bg-primary-100 rounded-full">
                                    <FontAwesomeIcon icon={faTiktok} />
                                </div>
                                <p>Google Ads</p>
                            </div>
                            <div className=" w-6/12 flex justify-between text-content-title font-medium">
                                <p className=" w-5/12 text-center">189k</p>
                                <p className=" w-4/12 text-center">9k</p>
                                <p className=" w-3/12 text-center">$8.12</p>
                            </div>
                            <div className=" w-2/12 flex justify-end text-content-title font-medium">$56,123.12</div>
                        </div>
                        <div className=" flex items-center mt-4">
                            <div className=" w-4/12 flex items-center justify-start text-content-text font-medium">
                                <div className=" flex items-center justify-center mr-2 w-10 h-10 text-white bg-primary-100 rounded-full">
                                    <FontAwesomeIcon icon={faInstagram} />
                                </div>
                                <p>Google Ads</p>
                            </div>
                            <div className=" w-6/12 flex justify-between text-content-title font-medium">
                                <p className=" w-5/12 text-center">189k</p>
                                <p className=" w-4/12 text-center">9k</p>
                                <p className=" w-3/12 text-center">$8.12</p>
                            </div>
                            <div className=" w-2/12 flex justify-end text-content-title font-medium">$56,123.12</div>
                        </div>
                    </div>
                </div>
                
                <div className=" w-4/12 p-6 ml-3 bg-white rounded-xl">
                    <h2 className=" mb-8 text-content-title text-xl font-medium italic">Quốc Gia</h2>
                    <div className=" flex flex-col">
                        <div className=" flex items-center justify-between mb-5">
                            <div className=" flex items-center">
                                <img className=" mr-3 w-12 h-12 rounded-full" src={images.flag.vnFlag} />
                                <p className=" text-content-title text-base font-medium">Việt Nam</p>
                            </div>
                            <span className=" text-primary-100 text-base font-medium italic tracking-wider">48%</span>
                        </div>
                        <div className=" flex items-center justify-between mb-5">
                            <div className=" flex items-center">
                                <img className=" mr-3 w-12 h-12 rounded-full" src={images.flag.japanFlag} />
                                <p className=" text-content-title text-base font-medium">Nhật Bản</p>
                            </div>
                            <span className=" text-primary-100 text-base font-medium italic tracking-wider">12%</span>
                        </div>
                        <div className=" flex items-center justify-between mb-5">
                            <div className=" flex items-center">
                                <img className=" mr-3 w-12 h-12 rounded-full" src={images.flag.usaFlag} />
                                <p className=" text-content-title text-base font-medium">Mỹ</p>
                            </div>
                            <span className=" text-primary-100 text-base font-medium italic tracking-wider">9%</span>
                        </div>
                    </div>
                    <p className=" text-center text-primary-100 text-base font-medium italic tracking-wider underline duration-300 cursor-pointer hover:text-black ">Xem thêm</p>
                </div>
            </div>
        </div>
    );
}

export default Admin;
