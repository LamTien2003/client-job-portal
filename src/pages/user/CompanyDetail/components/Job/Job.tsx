

import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";

type JobType = {
    logo: string
    position: string
    nameCompany: string
    location: string
    experience: string
    salary: string
    published: string
    fullTime: boolean
    partTime: boolean
    remote: boolean
    amountRecruit: number
}

const Job: React.FC<JobType> = ({logo, position, nameCompany, location, experience, salary, published, fullTime=true, partTime=true, remote=true, amountRecruit}) => {
    return (
        <div className=" w-full border border-content-border rounded pt-6 pb-6 pl-7.5 pr-7.5 mb-7.5">
            <div className=" flex flex-col relative">
                <div className=" mb-7.5 flex items-center relative lg:flex-col lg:items-start">
                    <div className=" flex items-center lg:flex-col lg:items-start lg:mb-8">
                        <img className=" w-13 rounded-full mr-2.5 lg:mb-3" src={logo} />
                        <div className=" flex flex-col">
                            <h2 className=" text-content-title text-lg font-semibold mb-0.5 duration-300 cursor-pointer hover:text-primary-100">{position}</h2>
                            <p className=" text-sm font-medium duration-300 cursor-pointer hover:text-primary-100">{nameCompany}</p>
                        </div>
                    </div>
                    <div className=" w-px h-11 border-l border-primary-blur ml-7 mr-7 lg:hidden"></div>
                    <div className=" flex tb:flex-col">
                        <div className=" flex flex-col tb:mb-1 ">
                            <div className=" relative pl-3 mb-1 before:w-2 before:h-2 before:rounded-full before:bg-primary-100 before:top-1.75 before:left-0 before:absolute">
                                <p className=" text-cb font-medium">Location:<span className=" font-semibold ml-1.5">{location}</span></p>
                            </div>
                            <div className=" relative pl-3 before:w-2 before:h-2 before:rounded-full before:bg-primary-100 before:top-1.75 before:left-0 before:absolute">
                                <p className=" text-cb font-medium">Salary:<span className=" font-semibold ml-1.5">{salary} /</span> Per Month</p>
                            </div>
                        </div>
                        <div className=" ml-12 flex flex-col tb:ml-0">
                            <div className=" relative pl-3 mb-1 before:w-2 before:h-2 before:rounded-full before:bg-primary-100 before:top-1.75 before:left-0 before:absolute">
                                <p className=" text-cb font-medium">Experience:<span className=" font-semibold ml-1.5">{experience}</span></p>
                            </div>
                            <div className=" relative pl-3 before:w-2 before:h-2 before:rounded-full before:bg-primary-100 before:top-1.75 before:left-0 before:absolute">
                                <p className=" text-cb font-medium">Published:<span className=" font-semibold ml-1.5">{published}</span></p>
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
                        <p className=" text-sm font-medium ml-2">Job Applied:<span className=" font-semibold ml-1.5">{amountRecruit} Person</span></p>
                    </div>
                    <div className=" flex flex-wrap">
                        { fullTime && <div className=' text-content-title text-sm font-semibold bg-content-bg-full-time rounded-3xl pt-1.5 pb-1.5 pl-6 pr-6 lg:text-xs tb:pr-5 tb:pl-5 mb:pr-3 mb:pl-3 mb:text-xs mb:mb-3 '>Full Time</div>}
                        { partTime && <div className=' text-content-title text-sm font-semibold bg-content-bg-part-time rounded-3xl pt-1.5 pb-1.5 pl-6 pr-6 mr-5 ml-5 lg:text-xs tb:pr-5 tb:pl-5 mb:pr-3 mb:pl-3 mb:text-xs mb:ml-2 mb:mr-2 mb:mb-3'>Part Time</div>}
                        { remote && <div className=' text-content-title text-sm font-semibold bg-content-bg-remote rounded-3xl pt-1.5 pb-1.5 pl-6 pr-6 lg:text-xs tb:pr-5 tb:pl-5 mb:pr-3 mb:pl-3 mb:text-xs mb:mb-3'>Remote</div>}
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
    );
}

export default Job;