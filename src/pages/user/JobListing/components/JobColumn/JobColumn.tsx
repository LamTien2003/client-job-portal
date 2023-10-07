import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import Job from '@/types/Job';

interface Props {
    data: Job[];
}

function JobColumn(props: Props) {
    const { data: jobs } = props;
    console.log(jobs)
    return (
        <>
            {jobs?.map((job) => {
                return (
                    <div key={job.id} className=" mb-7 flex flex-col">
                        <div className="bg-white border border-content-border rounded pt-7 pb-7 pr-6 pl-6 duration-300 hover:border-primary-blur ">
                            <div className=" mb-8 relative tb:mb-6">
                                <div className=" flex items-center tb:flex-col tb:items-start ">
                                    <div className=" flex tb:mb-8">
                                        <img className=" w-13 h-13 rounded-full mr-2.5 lg:w-12" src={job.postedBy.photo} />
                                        <div className=" flex flex-col">
                                            <h3 className=" text-content-title text-lg font-semibold cursor-pointer duration-300 hover:text-primary-100 lg:text-base ">
                                                {job.title}
                                            </h3>
                                            <p className=" text-content-text text-sm cursor-pointer duration-300 hover:text-primary-100 lg:text-sm">
                                                {job.postedBy.location}
                                            </p>
                                        </div>
                                    </div>
                                    <div className=" w-px h-11 border-r border-primary-blur mr-5 ml-5 tb:hidden "></div>
                                    <div className=" flex flex-col">
                                        <div className=" flex items-center before:w-2 before:h-2 before:bg-primary-100 before:rounded-full before:mr-1.5 -mt-3">
                                            <p className=" text-content-text text-cb font-medium lg:text-sm ">
                                                Lương:{' '}
                                                <span className=" text-content-title font-medium">
                                                    {job.salary.toLocaleString('it')}đ /{' '}
                                                </span>{' '}
                                                <span className=" text-sm">tháng</span>
                                            </p>
                                        </div>
                                        <div className=" flex items-center before:w-2 before:h-2 before:bg-primary-100 before:rounded-full before:mr-1.5 mt-1">
                                            <p className=" text-content-text text-cb font-medium lg:text-sm">
                                                Hạn chót:{' '}
                                                <span className=" text-content-title font-medium">05 April, 2023</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className=" group ">
                                    <div className=" w-7 h-7 bg-content-bgsave rounded-full top-0 right-0 absolute duration-300 cursor-pointer group-hover:bg-primary-100">
                                        <FontAwesomeIcon
                                            className=" text-primary-100 text-sm top-1.5 right-2 absolute duration-300 group-hover:text-white"
                                            icon={faBookmark}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className=" flex items-center relative mb:flex-col mb:items-start">
                                <div className=" flex">
                                    <div className=" text-content-title text-sm font-semibold bg-content-bg-full-time rounded-3xl pt-1.5 pb-1.5 pl-6 pr-6 lg:text-xs mb:pb-1 mb:pt-1 mb:pl-4 mb:pr-3 mb:font-medium">
                                        Full Time
                                    </div>
                                    <div className=" text-content-title text-sm font-semibold bg-content-bg-part-time rounded-3xl pt-1.5 pb-1.5 pl-6 pr-6 mr-5 ml-5 lg:text-xs mb:pb-1 mb:pt-1 mb:pl-3 mb:pr-4 mb:mr-2 mb:ml-2 mb:font-medium">
                                        Part Time
                                    </div>
                                    <div className=" text-content-title text-sm font-semibold bg-content-bg-remote rounded-3xl pt-1.5 pb-1.5 pl-6 pr-6 lg:text-xs mb:pb-1 mb:pt-1 mb:pl-4 mb:pr-3 mb:font-medium">
                                        Remote
                                    </div>
                                </div>
                                <div className=" group right-0 absolute mb:static mb:mt-3 mb:ml-2">
                                    <Link
                                        to={'/job-detail/' + job.id}
                                        className=" text-primary-100 flex items-center relative group-hover:cursor-pointer "
                                    >
                                        <img
                                            className="-left-2 top-1.5 absolute duration-300 group-hover:-left-1 mb:top-1"
                                            src="https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/icon/apply-arrow.svg"
                                        />
                                        <img src="https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/icon/apply-ellipse.svg" />
                                        <span className=" text-sm font-medium ml-1 mb:text-xs ">Apply Now</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </>
    );
}

export default JobColumn;
