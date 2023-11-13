import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import Job from '@/types/Job';

interface Props {
    data: Job[];
    changePage: (page:number) => void
}
function JobColumn(props: Props) {

    return (
        <>
            {props.data.length === 0 && 'Hiện danh mục này chưa có công việc nào'}
            {props.data?.map((job) => {
                const date = new Date(job.deadline)
                const mydeadline = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear() 
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
                                            </div>
                                            
                                            <div className=' flex'>
                                                <div className=" flex mr-4">
                                                    <div className=" text-content-title text-sm font-semibold bg-gray-300 rounded-3xl pt-1.5 pb-1.5 pl-6 pr-6 lg:text-xs mb:pb-1 mb:pt-1 mb:pl-4 mb:pr-3 mb:font-medium">
                                                        Full Time
                                                    </div>
                                                </div>
                                                <div className=" flex mr-4">
                                                    <div className=" text-content-title text-sm font-semibold bg-gray-300 rounded-3xl pt-1.5 pb-1.5 pl-6 pr-6 lg:text-xs mb:pb-1 mb:pt-1 mb:pl-4 mb:pr-3 mb:font-medium">
                                                        Part Time
                                                    </div>
                                                </div>
                                                <div className=" flex mr-4">
                                                    <div className=" text-content-title text-sm font-semibold bg-gray-300 rounded-3xl pt-1.5 pb-1.5 pl-6 pr-6 lg:text-xs mb:pb-1 mb:pt-1 mb:pl-4 mb:pr-3 mb:font-medium">
                                                        Remote
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
                                                    <span className=" text-content-title font-medium">{mydeadline}</span>
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
                                            <span className=" text-sm font-medium mb:text-xs ">Xem thêm</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                }
                
            })}
        </>
    );
}

export default JobColumn;
