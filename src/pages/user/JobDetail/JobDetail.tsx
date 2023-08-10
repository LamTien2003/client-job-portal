import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faTwitter, faLinkedinIn, faInstagram} from '@fortawesome/free-brands-svg-icons'

import Banner from "@/components/Banner/Banner";
import { Link } from "react-router-dom";

function JobDetail() {
    return (
        <div>
            <Banner page="Job Detail" />

            <div className=" w-10/12 mr-auto ml-auto pt-28 mb-28 flex lg:flex-col marker:">
                {/* job detail */}
                <div className=" w-2/3 pl-3 pr-3 lg:w-full ">
                    <div className=" border-b border-content-border pb-12 mb-8 flex justify-between mb:flex-col">
                        <div className=" flex mb:mb-7">
                            <div className=' flex items-center '>
                                <img className=' w-10 rounded-full mr-2.5 ' src='https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/bg/company-logo/company-01.png' />
                                <div className=' flex flex-col'>
                                    <h3 className=' text-content-title text-base font-semibold cursor-pointer duration-300 hover:text-primary-100 '>Senior UI/UX Engineer</h3>
                                    <p className=' text-content-text text-sm font-medium duration-300 lg:text-sm'>Bistro.Tech Group Ltd</p>
                                </div>
                            </div>
                        </div>
                        <div className=" flex justify-end xl:ml-5 lg:flex-col mb:ml-0">
                            <div className=" mr-6 xl:mr-3 lg:mb-2">
                                <div className=" mb-2 flex items-center relative">
                                    <img className=" mr-1.5 top-1.25 absolute" src="https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/icon/map-2.svg" />
                                    <p className=" text-content-text text-cb font-normal ml-4"><span className=" text-content-title font-medium mr-1.5">Location:</span>Dhaka, Bangladesh</p>
                                </div>
                                <div className=" flex items-center relative">
                                    <img className=" mr-1.5 top-1.25 absolute" src="https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/icon/category-2.svg" />
                                    <p className=" text-content-text text-cb font-normal ml-5"><span className=" text-content-title font-medium mr-1.5">Category:</span>Creative Design</p>
                                </div>
                            </div>
                            <div>
                                <div className=" mb-2 flex items-center relative">
                                    <img className=" mr-1.5 top-1.25 absolute" src="https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/icon/company-2.svg" />
                                    <p className=" text-content-text text-cb font-normal ml-5"><span className=" text-content-title font-medium mr-1.5">Job Type:</span>Full-Time</p>
                                </div>
                                <div className=" flex items-center relative">
                                    <img className=" mr-1.5 top-1.25 absolute" src="https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/icon/salary-2.svg" />
                                    <p className=" text-content-text text-cb font-normal ml-5"><span className=" text-content-title font-medium mr-1.5">Salary:</span>$40K-$78K/Per Month</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p className=" text-content-text text-base font-medium mb-8">
                            <span className=" text-content-title text-lg font-semibold mr-2">Job Description:</span>
                            A UI/UX (User Interface/User Experience) designer is 
                            responsible for designing and creating engaging and effective interfaces for software 
                            and web applications. This includes designing the layout, visual design, and interactivity 
                            of the user interface.
                        </p>
                        <div className=" mb-9">
                            <p className=" text-content-text text-base font-medium mb-3">
                                <span className=" text-content-title text-lg font-semibold mr-2">Job Responsibility:</span>
                                Collaborating with cross-functional teams: UI/UX designers often work closely with other teams, 
                                including product management, engineering, and marketing, to ensure that the user interface is aligned 
                                with business and technical requirements. You will need to be able to effectively communicate 
                                your design ideas and gather feedback from other team members.
                            </p>
                        
                            <p className=" text-content-text text-cb font-medium flex items-center mb-2.5 ml-3 relative before:w-2 before:h-2 before:rounded-full before:bg-primary-100 before:-ml-3 before:pr-2 before:top-2 before:absolute">Conducting user research and testing to understand user needs and behaviors.</p>
                            <p className=" text-content-text text-cb font-medium flex items-center mb-2.5 ml-3 relative before:w-2 before:h-2 before:rounded-full before:bg-primary-100 before:-ml-3 before:pr-2 before:top-2 before:absolute">Designing wireframes, prototypes, and high-fidelity mockups.</p>
                            <p className=" text-content-text text-cb font-medium flex items-center mb-2.5 ml-3 relative before:w-2 before:h-2 before:rounded-full before:bg-primary-100 before:-ml-3 before:pr-2 before:top-2 before:absolute">Developing and maintaining design systems and style guides.</p>
                            <p className=" text-content-text text-cb font-medium flex items-center mb-2.5 ml-3 relative before:w-2 before:h-2 before:rounded-full before:bg-primary-100 before:-ml-3 before:pr-2 before:top-2 before:absolute">Collaborating with cross-functional teams, including product management, engineering, and marketing.</p>
                            <p className=" text-content-text text-cb font-medium flex items-center mb-2.5 ml-3 relative before:w-2 before:h-2 before:rounded-full before:bg-primary-100 before:-ml-3 before:pr-2 before:top-2 before:absolute">Staying up-to-date with the latest design trends and technologies.</p>
                            <p className=" text-content-text text-cb font-medium flex items-center mb-2.5 ml-3 relative before:w-2 before:h-2 before:rounded-full before:bg-primary-100 before:-ml-3 before:pr-2 before:top-2 before:absolute">Gathering and analyzing user requirements to inform the design of new software or web applications.</p>
                        </div>
                        <div className=" mb-9">
                            <h3 className=" text-content-title text-lg font-semibold pb-3">Educational Requirements:</h3>
                            <p className=" text-content-text text-cb font-medium flex items-center mb-2.5 ml-3 relative before:w-2 before:h-2 before:rounded-full before:bg-primary-100 before:-ml-3 before:pr-2 before:top-2 before:absolute">Conducting user research and testing to understand user needs and behaviors.</p>
                            <p className=" text-content-text text-cb font-medium flex items-center mb-2.5 ml-3 relative before:w-2 before:h-2 before:rounded-full before:bg-primary-100 before:-ml-3 before:pr-2 before:top-2 before:absolute">Designing wireframes, prototypes, and high-fidelity mockups.</p>
                            </div>
                        <div className=" mb-9">
                            <h3 className=" text-content-title text-lg font-semibold pb-3">Experiences:</h3>
                            <p className=" text-content-text text-cb font-medium flex items-center mb-2.5 ml-3 relative before:w-2 before:h-2 before:rounded-full before:bg-primary-100 before:-ml-3 before:pr-2 before:top-2 before:absolute">Conducting user research and testing to understand user needs and behaviors.</p>
                        </div>
                        <div className=" mb-9">
                            <p className=" text-content-text text-base font-medium mb-3">
                                <span className=" text-content-title text-lg font-semibold mr-2">Main Duties:</span>
                                Some specific tasks that a UI/UX designer might be responsible for include:
                            </p>
                            <p className=" text-content-text text-cb font-medium flex items-center mb-2.5 ml-3 relative before:w-2 before:h-2 before:rounded-full before:bg-primary-100 before:-ml-3 before:pr-2 before:top-2 before:absolute">Conducting user research and testing to understand user needs and behaviors.</p>
                        </div>
                        <div className=" mb-9 lg:mb-20">
                            <p className=" text-content-text text-base font-medium mb-3">
                                <span className=" text-content-title text-lg font-semibold mr-2">Extra Benefits:</span>
                                Some specific tasks that a UI/UX designer might be responsible for include:
                            </p>
                            <p className=" text-content-text text-cb font-medium flex items-center mb-2.5 ml-3 relative before:w-2 before:h-2 before:rounded-full before:bg-primary-100 before:-ml-3 before:pr-2 before:top-2 before:absolute">Conducting user research and testing to understand user needs and behaviors.</p>
                        </div>
                    </div>
                </div>
                
                {/* more info */}
                <div className=" w-1/3 pl-3 pr-3 lg:w-full ">
                    <div className=" mb-12 flex items-center justify-end">
                        <div className=" group flex items-center cursor-pointer relative">
                            <p className=" text-content-text text-lg font-medium duration-300 mr-2.5 group-hover:text-primary-100 xl:text-base lg:text-lg mb:text-sm">Save Job</p>
                            <div className=' w-7 h-7 bg-content-bgsave rounded-full duration-300 group-hover:bg-primary-100'>
                                <FontAwesomeIcon className=' w-3 text-primary-100 text-sm top-1.5 right-2 absolute duration-300 group-hover:text-white' icon={faBookmark}/>
                            </div>
                        </div>
                        <button className=" font-medium pt-2 pb-2 pl-7 pr-7 bg-primary-100 text-white rounded ml-8 duration-500 hover:bg-black xl:pl-3 xl:pr-3 xl:text-sm xl:ml-4 lg:pl-7 lg:pr-7 lg:text-base mb:pl-4 mb:pr-4">
                            Apply Position
                        </button>
                    </div>
                    <div className=" w-full h-1.5 rounded-t-md bg-primary-100"></div>
                    <div className=" w-full bg-content-bg pt-17.5 pb-17.5 pl-10 pr-10 mb-12 ">
                        <h3 className=" text-content-title text-lg font-semibold mr-2 mb-6">Job Summary:</h3>
                        <div className=" relative before:w-2 before:h-2 before:rounded-full before:bg-primary-blur before:mr-1.5 before:pr-2 before:top-2 before:absolute">
                            
                            <p className=" text-content-text text-base font-medium mb-2.5 ml-4 "><span className=" text-content-title font-medium mr-2">Job Posted:</span>02 February, 2023dsa dsad  dsa dsad s.</p>
                        </div>
                        <div className=" relative before:w-2 before:h-2 before:rounded-full before:bg-primary-blur before:mr-1.5 before:pr-2 before:top-2 before:absolute">
                            
                            <p className=" text-content-text text-base font-medium mb-2.5 ml-4 "><span className=" text-content-title font-medium mr-2">Expiration:</span>02 February, 2023dsa dsad  dsa dsad s.</p>
                        </div>
                        <div className=" relative before:w-2 before:h-2 before:rounded-full before:bg-primary-blur before:mr-1.5 before:pr-2 before:top-2 before:absolute">
                            
                            <p className=" text-content-text text-base font-medium mb-2.5 ml-4 "><span className=" text-content-title font-medium mr-2">Vacancy:</span>02 February, 2023dsa dsad  dsa dsad s.</p>
                        </div>
                        <div className=" relative before:w-2 before:h-2 before:rounded-full before:bg-primary-blur before:mr-1.5 before:pr-2 before:top-2 before:absolute">
                            
                            <p className=" text-content-text text-base font-medium mb-2.5 ml-4 "><span className=" text-content-title font-medium mr-2">Experiences:</span>02 February, 2023dsa dsad  dsa dsad s.</p>
                        </div>
                        <div className=" relative before:w-2 before:h-2 before:rounded-full before:bg-primary-blur before:mr-1.5 before:pr-2 before:top-2 before:absolute">
                            
                            <p className=" text-content-text text-base font-medium mb-2.5 ml-4 "><span className=" text-content-title font-medium mr-2">Education:</span>02 February, 2023dsa dsad  dsa dsad s.</p>
                        </div>
                        <div className=" relative before:w-2 before:h-2 before:rounded-full before:bg-primary-blur before:mr-1.5 before:pr-2 before:top-2 before:absolute">
                            
                            <p className=" text-content-text text-base font-medium mb-2.5 ml-4 "><span className=" text-content-title font-medium mr-2">Gender:</span>02 February, 2023dsa dsad  dsa dsad s.</p>
                        </div>
                    </div>
                    <div className=" flex mb-7.5">
                        <img className=" mr-1.5" src="https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/icon/company-2.svg" />
                        <Link className=" text-content-text text-cb font-medium duration-300 hover:text-primary-100" to={'/job-listing'}>View All Jobs In This Company</Link>
                    </div>
                    <div className=" flex items-center mb-12 mb:flex-col mb:items-start">
                        <p className=" text-content-title text-cb font-semibold mr-6 mb:mb-2">Job Link Share:</p>
                        <div className=" flex">
                            <div className=" group mr-3.5 ">
                                <button className=" w-6.5 h-6.5 border border-primary-100 rounded-full duration-300 group-hover:bg-primary-100 ">
                                    <FontAwesomeIcon className=" w-3.5 text-primary-100 duration-300 group-hover:text-white" icon={faLink} />
                                </button>
                            </div>
                            <div className=" group mr-3.5 ">
                                <button className=" w-6.5 h-6.5 border border-primary-100 rounded-full duration-300 group-hover:bg-primary-100 ">
                                    <FontAwesomeIcon className=" w-3 text-primary-100 duration-300 group-hover:text-white" icon={faFacebookF} />
                                </button>
                            </div>
                            <div className=" group mr-3.5 ">
                                <button className=" w-6.5 h-6.5 border border-primary-100 rounded-full duration-300 group-hover:bg-primary-100 ">
                                    <FontAwesomeIcon className=" w-3.5 text-primary-100 duration-300 group-hover:text-white" icon={faTwitter} />
                                </button>
                            </div>
                            <div className=" group mr-3.5 ">
                                <button className=" w-6.5 h-6.5 border border-primary-100 rounded-full duration-300 group-hover:bg-primary-100 ">
                                    <FontAwesomeIcon className=" w-3 text-primary-100 duration-300 group-hover:text-white" icon={faLinkedinIn} />
                                </button>
                            </div>
                            <div className=" group mr-3.5 ">
                                <button className=" w-6.5 h-6.5 border border-primary-100 rounded-full duration-300 group-hover:bg-primary-100 ">
                                    <FontAwesomeIcon className=" w-3.5 text-primary-100 duration-300 group-hover:text-white" icon={faInstagram} />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className=" border border-content-border rounded p-7.5 mb-12">
                        <div className=" mb-3 flex items-center justify-around">
                            <div className=" w-25 h-px border-t border-content-border xl:w-18 lg:w-4/12 mb:w-1/4"></div>
                            <div className=" flex">
                                <img src="https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/icon/email-2.svg" />
                                <p className=" text-content-title font-medium -ml-2 xl:ml-1.5">Email Now</p>
                            </div>
                            <div className=" w-25 h-px border-t border-content-border xl:w-18 lg:w-4/12 mb:w-1/4"></div>
                        </div>
                        <div className=" text-center">
                            <p className=" text-cb font-normal ">Send your resume at <span className=" text-content-link font-semibold ">info@example.com</span></p>
                        </div>
                    </div>
                    <div>
                        <p className=" text-content-title text-cb font-semibold mr-6 mb-7.5">Get Location:</p>
                        <div>
                            <iframe 
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3318.8770501856025!2d106.62763122385324!3d10.854294556256413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752bee0b0ef9e5%3A0x5b4da59e47aa97a8!2zQ8O0bmcgVmnDqm4gUGjhuqduIE3hu4FtIFF1YW5nIFRydW5n!5e0!3m2!1svi!2s!4v1691659559618!5m2!1svi!2s" 
                                className=" w-full h-52 rounded-md lg:h-72"
                            >
                            </iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default JobDetail;