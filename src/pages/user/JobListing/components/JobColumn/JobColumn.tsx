import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import Job from '@/types/Job';
import { useState } from 'react';

interface Props {
    data: Job[];
    changePage: (page:number) => void
}

function JobColumn(props: Props) {
    const { data: jobList } = props;

    const [page, setPage] = useState(1)

    const handleChangePage = (number:number):void => {
        setPage(prev => prev + number)
        props.changePage(page)
    }

    return (
        <>
            {jobList.length === 0 && 'Hiện danh mục này chưa có công việc nào'}
            {jobList?.map((job) => {
                if(job.isAccepted === true) {
                    return (
                        <div key={job.id} className=" mb-7 flex flex-col">
                            <div className="flex justify-between bg-white border border-content-border rounded pt-7 pb-7 pr-6 pl-6 duration-300 hover:border-primary-blur ">
                                <div className=" tb:mb-6">
                                    <div className=" flex items-center tb:flex-col tb:items-start ">
                                        <div className=' flex flex-col'>
                                            <div className=" flex mb-10 tb:mb-8">
                                                <img
                                                    className=" w-13 h-13 rounded-full mr-4 lg:w-12"
                                                    src={job.postedBy.photo ? job.postedBy.photo : ''}
                                                />
                                                <div className=" flex flex-col">
                                                    <h3 className=" text-content-title text-lg font-semibold cursor-pointer pb-1 duration-300 hover:text-primary-100 lg:text-base ">
                                                        {job.title}
                                                    </h3>
                                                    <p className=" text-content-text text-sm cursor-pointer pt-1 duration-300 hover:text-primary-100 lg:text-sm">
                                                        {job.postedBy.location}
                                                    </p>
                                                </div>
                                                <div className=" ml-3 group ">
                                                    <div className=" w-7 h-7 bg-content-bgsave rounded-full top-0 right-0 relative duration-300 cursor-pointer group-hover:bg-primary-100">
                                                        <FontAwesomeIcon
                                                            className=" text-primary-100 text-sm top-1.5 right-2 absolute duration-300 group-hover:text-white"
                                                            icon={faBookmark}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <div className=' flex'>
                                                <div className=" flex mr-4">
                                                    <div className=" text-content-title text-sm font-semibold bg-gray-300 rounded-3xl pt-1.5 pb-1.5 pl-6 pr-6 lg:text-xs mb:pb-1 mb:pt-1 mb:pl-4 mb:pr-3 mb:font-medium">
                                                        Full Time
                                                    </div>
                                                </div>
                                                <div className=" flex mr-4">
                                                    <div className=" text-content-title text-sm font-semibold bg-gray-300 rounded-3xl pt-1.5 pb-1.5 pl-6 pr-6 lg:text-xs mb:pb-1 mb:pt-1 mb:pl-4 mb:pr-3 mb:font-medium">
                                                        Full Time
                                                    </div>
                                                </div>
                                                <div className=" flex mr-4">
                                                    <div className=" text-content-title text-sm font-semibold bg-gray-300 rounded-3xl pt-1.5 pb-1.5 pl-6 pr-6 lg:text-xs mb:pb-1 mb:pt-1 mb:pl-4 mb:pr-3 mb:font-medium">
                                                        Full Time
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className=" w-px h-32 border-r border-primary-blur mr-5 ml-5 tb:hidden "></div>
                                        <div className=" flex flex-col mt-3">
                                            <div className=" flex items-center pb-1 before:w-2 before:h-2 before:bg-primary-100 before:rounded-full before:mr-1.5 -mt-3">
                                                <p className=" text-content-text text-cb font-medium lg:text-sm ">
                                                    Lương:{' '}
                                                    <span className=" text-content-title font-medium">
                                                        {job.salary.toLocaleString('it')}đ /{' '}
                                                    </span>{' '}
                                                    <span className=" text-sm">tháng</span>
                                                </p>
                                            </div>
                                            <div className=" flex items-center pb-1 before:w-2 before:h-2 before:bg-primary-100 before:rounded-full before:mr-1.5 mt-1">
                                                <p className=" text-content-text text-cb font-medium lg:text-sm">
                                                    Hạn chót:{' '}
                                                    <span className=" text-content-title font-medium">05 April, 2023</span>
                                                </p>
                                            </div>
                                            <div className=" flex items-center pb-1 before:w-2 before:h-2 before:bg-primary-100 before:rounded-full before:mr-1.5 mt-1">
                                                <p className=" text-content-text text-cb font-medium lg:text-sm">
                                                    Yêu cầu kĩ năng:{' '}
                                                    <span className=" text-content-title font-medium">{job.skillsRequire}</span>
                                                </p>
                                            </div>
                                            <div className=" flex items-center pb-1 before:w-2 before:h-2 before:bg-primary-100 before:rounded-full before:mr-1.5 mt-1">
                                                <p className=" text-content-text text-cb font-medium lg:text-sm">
                                                    Công ty:{' '}
                                                    <span className=" text-content-title font-medium">{job.postedBy.companyName}</span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className=" flex items-center relative mb:flex-col mb:items-start">
                                    <div className=" border border-primary-100 pr-5 pl-5 pt-1 pb-1 rounded-md group duration-300 hover:bg-primary-100 right-0 mb:static mb:mt-3 mb:ml-2">
                                        <Link
                                            to={'/job-detail/' + job.id}
                                            className=" text-primary-100 flex items-center duration-300 group-hover:text-white group-hover:cursor-pointer "
                                        >
                                            <span className=" text-sm font-medium mb:text-xs ">Apply Now</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                }
                
            })}
            <div className=' flex justify-center'>
                <div className=' flex justify-center items-center w-10 h-10 text-white text-lg font-semibold bg-primary-100 rounded-full mr-2 ml-2 cursor-pointer' onClick={() => props.changePage(1)}>1</div>
                <div className=' flex justify-center items-center w-10 h-10 text-white text-lg font-semibold bg-primary-100 rounded-full mr-2 ml-2 cursor-pointer' onClick={() => props.changePage(2)}>2</div>
            </div>
        </>
    );
}

export default JobColumn;
