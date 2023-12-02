import Job from '@/types/Job';
import { Link } from 'react-router-dom';

interface Props {
    data: Job[];
}

function JobGutter(props: Props) {
    const { data: jobList } = props;

    return (
        <>
            {jobList.length === 0 && 'Hiện đang không có công việc nào theo yêu cầu của bạn.'}
            <div className=" flex flex-wrap tb:flex-col ">
                {jobList?.map((job) => {
                    const date = new Date(job.deadline)
                    const mydeadline = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear() 
                    return (
                        <div key={job.id} className=" w-6/12 pl-3 pr-3 mb-6 tb:w-full ">
                            <div className=" border-[#eee] border rounded p-4 relative">
                                <img
                                    className=" rounded tb:w-full"
                                    src={job.postedBy.coverPhoto}
                                />
                                <div className=" mt-5 mb-5 flex items-center">
                                    <img
                                        className=" w-10 h-10 rounded-full mr-3"
                                        src={job.postedBy.photo}
                                    />
                                    <div className="flex flex-col">
                                        <h3 className=" text-content-title font-semibold text-lg xl:text-base mb:text-cb">
                                            {job.title}
                                        </h3>
                                        <div className=" font-family-title text-content-text text-sm font-medium flex items-center xl:flex-col xl:items-start tb:flex-row mb:flex-col mb:items-start mb:text-xs ">
                                            {job.postedBy.companyName}
                                            <div className=" h-3.5 w-px bg-content-title mr-2.5 ml-2.5 xl:hidden"></div>
                                            <p className=" text-content-title font-semibold flex mb:text-xs mb:ml-0 ">
                                                Hạn chót <span className=" font-medium">: {mydeadline}</span>{' '}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className=" list-none border-t border-[#eee] pt-5">
                                    <div className=" flex items-center mb-2 before:w-2 before:h-2 before:rounded-full before:bg-primary-200 before:mr-2">
                                        <p className=" text-content-text font-medium text-base lg:text-sm mb:text-xs ">
                                            Lương: 
                                            <span className=" text-content-title font-medium ml-1">
                                                {job.salary.toLocaleString('it')}đ /
                                            </span>{' '}
                                            tháng
                                        </p>
                                    </div>
                                    <div className=" flex items-center mb-2 before:w-2 before:h-2 before:rounded-full before:bg-primary-200 before:mr-2">
                                        <p className=" text-content-text font-medium text-base lg:text-sm mb:text-xs ">
                                            Kĩ năng yêu cầu: 
                                            <span className=" text-content-title font-medium ml-1">
                                                {job.skillsRequire}
                                            </span>
                                        </p>
                                    </div>
                                    <div className=" flex items-center mb-2 before:w-2 before:h-2 before:rounded-full before:bg-primary-200 before:mr-2">
                                        <p className=" text-content-text font-medium text-base lg:text-sm mb:text-xs ">
                                            Nơi làm việc: 
                                            <span className=" text-content-title font-medium ml-1">
                                                {job.postedBy.location.city}
                                            </span>
                                        </p>
                                    </div>
                                </div>
                                <div className=" mt-5 mb-3 flex relative">
                                    <div className=" text-content-title text-sm font-medium bg-gray-300 rounded-3xl pt-1.5 pb-1.5 pl-6 pr-6 lg:text-xs ">
                                        Fulltime
                                    </div>

                                    <div className=" group bottom-2 right-0 absolute cursor-pointer ">
                                        <div className=" border border-primary-100 pr-5 pl-5 pt-1 pb-1 rounded-md group duration-300 hover:bg-primary-100 right-0 mb:static mb:mt-3 mb:ml-2">
                                            <Link
                                                to={'/job-detail/' + job._id}
                                                className=" text-primary-100 flex items-center duration-300 group-hover:text-white group-hover:cursor-pointer "
                                            >
                                                <span className=" text-sm font-medium mb:text-xs ">Xem thêm</span>
                                            </Link>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
}

export default JobGutter;
