
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faTwitter, faLinkedinIn, faInstagram} from '@fortawesome/free-brands-svg-icons'

import Banner from "@/components/Banner/Banner";
import { Link } from "react-router-dom";

function CompanyDetail() {
    return (
        <div>
            <Banner page="Company Detail" />

            <div className=" w-10/12 mt-28 mb-28 text-content-text mr-auto ml-auto">
                <div className=" relative">
                    <img className=" w-full mr-auto ml-auto rounded-t-xl" src="https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/bg/blog-dt-img.png" />
                    <div className=" w-22.5 h-22.5 bg-content-bg rounded -bottom-11.25 left-1/2 -translate-x-1/2 rotate-45 flex items-center justify-center absolute">
                        <img className=" rounded-full" src="https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/bg/blog-dt-logo.png" />
                    </div>
                </div>
                <div className=" w-full pt-7.5 pr-7.5 pl-7.5 pb-12 mr-auto ml-auto flex justify-between lg:flex-col">
                    <div className=" flex flex-col lg:mb-2">
                        <h1 className=" text-content-title text-2xl font-semibold mb-2.5">Elite Hangstroman</h1>
                        <div className=" flex">
                            <div className=" flex">
                                <img src="https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/icon/map-2.svg" />
                                <p className=" text-sm font-medium ml-2">Dhaka, Bangladesh</p>
                            </div>
                            <div className=" flex ml-7 ">
                                <img src="https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/icon/category-2.svg" />
                                <p className=" text-sm font-medium ml-2"><span className=" text-content-title font-semibold mr-1.5">Category:</span>Software Agency</p>
                            </div>
                        </div>
                    </div>
                    <div className=" flex mb:flex-col">
                        <div className=" flex flex-col items-center lg:items-start mb:mb-2">
                            <div className=" mb-2 flex">
                                <img src="https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/icon/web-5.svg" />
                                <p className=" text-content-title font-medium text-cb ml-2">Website Link:</p>
                            </div>
                            <a className=" text-content-link text-sm font-medium">www.example24.com</a>
                        </div>
                        <div className=" ml-10 flex flex-col mb:items-start mb:ml-0">
                            <div className=" mb-3 flex">
                                <img src="https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/icon/share-icon.svg" />
                                <p className=" text-content-title font-medium text-cb ml-2">Follow Company:</p>
                            </div>
                            <div className=" flex lg:justify-between">
                                <FontAwesomeIcon className=" mr-3" icon={faFacebookF} />
                                <FontAwesomeIcon className=" mr-3 ml-3" icon={faTwitter} />
                                <FontAwesomeIcon className=" mr-3 ml-3" icon={faLinkedinIn} />
                                <FontAwesomeIcon className=" ml-3" icon={faInstagram} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" flex lg:flex-col ">
                    <div className=" w-2/3 pr-3 lg:w-full">
                        <div className=" mb-10">
                            <h3 className=" text-content-title text-lg font-semibold mb-4">About Company</h3>
                            <p className=" text-base font-medium">
                                A software company is a business that develops and sells computer software. 
                                Some software companies specialize in a particular type of software, such as 
                                operating systems, productivity tools, or games, while others develop a range 
                                of software products. Many software companies also offer services such as custom 
                                software development, consulting, and technical support to their customers. 
                                The size and scope of software companies can vary greatly, from small startups 
                                to large multinational corporations.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-content-title text-lg font-semibold mb-4">Working Area</h3>
                            <div className=" tb:flex-col">
                                <div className=" pt-5 mb-12 flex justify-start tb:flex-col">
                                    <div className=" w-5/12 mr-32 flex items-start tb:w-2/3 tb:mb-12 ">
                                        <img src="https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/icon/creative-design.svg" />
                                        <div className=" pl-5 flex flex-col relative">
                                            <h4 className=" text-content-title text-base font-semibold mb-2">Creative Design</h4>
                                            <p>Creative design is a process that involves creating</p>
                                            <span className=" text-primary-100 font-semibold text-base top-0 right-0 absolute">01</span>
                                        </div>
                                    </div>
                                    <div className=" w-5/12 flex items-start tb:w-2/3">
                                        <img src="https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/icon/react-next.svg" />
                                        <div className=" pl-5 flex flex-col relative">
                                            <h4 className=" text-content-title text-base font-semibold mb-2">Creative Design</h4>
                                            <p>Creative design is a process that involves creating</p>
                                            <span className=" text-primary-100 font-semibold text-base top-0 right-0 absolute">02</span>
                                        </div>
                                    </div>
                                </div>
                                <div className=" flex justify-start tb:flex-col">
                                    <div className=" w-5/12 mr-32 flex items-start tb:w-2/3 tb:mb-12 ">
                                        <img src="	https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/icon/html-tem.svg" />
                                        <div className=" pl-5 flex flex-col relative">
                                            <h4 className=" text-content-title text-base font-semibold mb-2">Creative Design</h4>
                                            <p>Creative design is a process that involves creating</p>
                                            <span className=" text-primary-100 font-semibold text-base top-0 right-0 absolute">03</span>
                                        </div>
                                    </div>
                                    <div className=" w-5/12 flex items-start tb:w-2/3">
                                        <img src="https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/icon/wordpress.svg" />
                                        <div className=" pl-5 flex flex-col relative">
                                            <h4 className=" text-content-title text-base font-semibold mb-2">Creative Design</h4>
                                            <p>Creative design is a process that involves creating</p>
                                            <span className=" text-primary-100 font-semibold text-base top-0 right-0 absolute">04</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=" w-1/3 pl-3 lg:w-full">
                        <div className=" w-full border border-content-border rounded pt-12 pb-12 pl-10 pr-10 mb-12">
                            <h3 className=" text-content-title text-lg font-semibold mb-6">Company Overview:</h3>
                            <div className=" mb-2.5 flex relative before:w-2 before:h-2 before:rounded-full before:bg-primary-blur before:left-0 before:top-1.75 before:absolute">
                                <p className=" text-cb pl-3.5 font-medium"><span className=" text-content-title font-semibold mr-1.5">Company Name:</span>Elite Hangstroman.</p>
                            </div>
                            <div className=" mb-2.5 flex relative before:w-2 before:h-2 before:rounded-full before:bg-primary-blur before:left-0 before:top-1.75 before:absolute">
                                <p className=" text-cb pl-3.5 font-medium"><span className=" text-content-title font-semibold mr-1.5">Category:</span>Software Agency.</p>
                            </div>
                            <div className=" mb-2.5 flex relative before:w-2 before:h-2 before:rounded-full before:bg-primary-blur before:left-0 before:top-1.75 before:absolute">
                                <p className=" text-cb pl-3.5 font-medium"><span className=" text-content-title font-semibold mr-1.5">Location:</span>Dhaka, Bangladesh.</p>
                            </div>
                            <div className=" mb-2.5 flex relative before:w-2 before:h-2 before:rounded-full before:bg-primary-blur before:left-0 before:top-1.75 before:absolute">
                                <p className=" text-cb pl-3.5 font-medium"><span className=" text-content-title font-semibold mr-1.5">Member Since:</span>03 April, 1982.</p>
                            </div>
                            <div className=" mb-2.5 flex relative before:w-2 before:h-2 before:rounded-full before:bg-primary-blur before:left-0 before:top-1.75 before:absolute">
                                <p className=" text-cb pl-3.5 font-medium"><span className=" text-content-title font-semibold mr-1.5">Company size:</span>40 People.</p>
                            </div>
                            <div className=" mb-2.5 flex relative before:w-2 before:h-2 before:rounded-full before:bg-primary-blur before:left-0 before:top-1.75 before:absolute">
                                <p className=" text-cb pl-3.5 font-medium"><span className=" text-content-title font-semibold mr-1.5">Completed Job:</span>08.</p>
                            </div>
                            <div className=" mb-2.5 flex relative before:w-2 before:h-2 before:rounded-full before:bg-primary-blur before:left-0 before:top-1.75 before:absolute">
                                <p className=" text-cb pl-3.5 font-medium"><span className=" text-content-title font-semibold mr-1.5">Last Job Posted:</span>06 January, 2023.</p>
                            </div>

                        </div>
                        <button className=" w-full text-white font-medium bg-primary-100 rounded-md pt-3 pb-3 mb-7.5 duration-300 hover:bg-black">Job Available 23</button>
                        <button className=" w-full text-primary-100 font-medium border border-content-border rounded-md pt-3 pb-3 duration-300 hover:bg-primary-100 hover:text-white lg:mb-12">Go Our Site Map</button>
                    </div>
                </div>
                <div>
                    <h1 className=" text-content-title text-xl font-bold mb-6">Lastest Job</h1>
                    <div className=" w-full border border-content-border rounded pt-6 pb-6 pl-7.5 pr-7.5 mb-7.5">
                        <div className=" flex flex-col relative">
                            <div className=" mb-7.5 flex items-center relative lg:flex-col lg:items-start">
                                <div className=" flex items-center lg:flex-col lg:items-start lg:mb-8">
                                    <img className=" w-13 rounded-full mr-2.5 lg:mb-3" src="https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/bg/company-logo/company-01.png" />
                                    <div className=" flex flex-col">
                                        <h2 className=" text-content-title text-lg font-semibold mb-0.5 duration-300 cursor-pointer hover:text-primary-100">Senior Receptionist</h2>
                                        <p className=" text-sm font-medium duration-300 cursor-pointer hover:text-primary-100">Medico.co Ltd</p>
                                    </div>
                                </div>
                                <div className=" w-px h-11 border-l border-primary-blur ml-7 mr-7 lg:hidden"></div>
                                <div className=" flex tb:flex-col">
                                    <div className=" flex flex-col tb:mb-1 ">
                                        <div className=" relative pl-3 mb-1 before:w-2 before:h-2 before:rounded-full before:bg-primary-100 before:top-1.75 before:left-0 before:absolute">
                                            <p className=" text-cb font-medium">Location:<span className=" font-semibold ml-1.5">Dhaka, Bangladesh</span></p>
                                        </div>
                                        <div className=" relative pl-3 before:w-2 before:h-2 before:rounded-full before:bg-primary-100 before:top-1.75 before:left-0 before:absolute">
                                            <p className=" text-cb font-medium">Salary:<span className=" font-semibold ml-1.5">$20K-$50K /</span> Per Month</p>
                                        </div>
                                    </div>
                                    <div className=" ml-12 flex flex-col tb:ml-0">
                                        <div className=" relative pl-3 mb-1 before:w-2 before:h-2 before:rounded-full before:bg-primary-100 before:top-1.75 before:left-0 before:absolute">
                                            <p className=" text-cb font-medium">Location:<span className=" font-semibold ml-1.5">Dhaka, Bangladesh</span></p>
                                        </div>
                                        <div className=" relative pl-3 before:w-2 before:h-2 before:rounded-full before:bg-primary-100 before:top-1.75 before:left-0 before:absolute">
                                            <p className=" text-cb font-medium">Location:<span className=" font-semibold ml-1.5">Dhaka, Bangladesh</span></p>
                                        </div>
                                    </div>
                                </div>
                                <div className=' group right-0 top-0 absolute '>
                                    <div className=' w-7 h-7 bg-content-bgsave rounded-full duration-300 cursor-pointer group-hover:bg-primary-100 relative'>
                                        <FontAwesomeIcon className=' text-primary-100 text-sm top-1.5 right-2 absolute duration-300 group-hover:text-white' icon={faBookmark}/>
                                    </div>
                                </div>
                            </div>
                            <div className=" flex items-center justify-between lg:flex-col lg:items-start">
                                <div className=" flex lg:mb-4">
                                    <img src="https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/icon/company-4.svg" />
                                    <p className=" text-sm font-medium ml-2">Job Applied:<span className=" font-semibold ml-1.5">07 Person</span></p>
                                </div>
                                <div className=" flex flex-wrap">
                                    <div className=' text-content-title text-sm font-semibold bg-content-bg-full-time rounded-3xl pt-1.5 pb-1.5 pl-6 pr-6 lg:text-xs tb:pr-5 tb:pl-5 mb:pr-3 mb:pl-3 mb:text-xs mb:mb-3 '>Full Time</div>
                                    <div className=' text-content-title text-sm font-semibold bg-content-bg-part-time rounded-3xl pt-1.5 pb-1.5 pl-6 pr-6 mr-5 ml-5 lg:text-xs tb:pr-5 tb:pl-5 mb:pr-3 mb:pl-3 mb:text-xs mb:ml-2 mb:mr-2 mb:mb-3'>Part Time</div>
                                    <div className=' text-content-title text-sm font-semibold bg-content-bg-remote rounded-3xl pt-1.5 pb-1.5 pl-6 pr-6 lg:text-xs tb:pr-5 tb:pl-5 mb:pr-3 mb:pl-3 mb:text-xs mb:mb-3'>Remote</div>
                                </div>
                                <div className=' group lg:absolute lg:right-0 lg:bottom-2 mb:static '>
                                    <Link to='/job-detail' className=' text-primary-100 flex items-center relative group-hover:cursor-pointer '>
                                        <img className='-left-2 top-1.5 absolute duration-300 group-hover:-left-1 ' src='https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/icon/apply-arrow.svg' />
                                        <img src='https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/icon/apply-ellipse.svg' />
                                        <span className=' text-sm font-medium ml-1 '>Apply Now</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CompanyDetail;