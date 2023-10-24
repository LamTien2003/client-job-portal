import Job from '@/types/Job';
import { Link } from 'react-router-dom';

interface Props {
    data: Job[];
    changePage: (page:number) => void
}

function JobGutter(props: Props) {
    const { data: jobList } = props;

    return (
        <>
            {jobList.length === 0 && 'Hiện danh mục này chưa có công việc nào'}
            <div className=" flex flex-wrap tb:flex-col ">
                {jobList?.map((job) => {
                    return (
                        <div key={job.id} className=" w-6/12 pl-3 pr-3 mb-6 tb:w-full ">
                            <div className=" border-content-border border rounded p-4 relative">
                                <img
                                    className=" rounded tb:w-full"
                                    src={job.postedBy.coverPhoto ? job.postedBy.coverPhoto : "https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/bg/job-list-1.png"}
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
                                        <div className=" text-content-text text-sm font-medium flex items-center xl:flex-col xl:items-start tb:flex-row mb:flex-col mb:items-start mb:text-xs ">
                                            {job.postedBy.companyName}
                                            <div className=" h-3.5 w-px bg-content-title mr-2.5 ml-2.5 xl:hidden"></div>
                                            <p className=" text-content-title font-semibold flex mb:text-xs mb:ml-0 ">
                                                Hạn chót <span className=" font-medium">: 05 April, 2023</span>{' '}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className=" list-none border-t border-content-border pt-5">
                                    <div className=" flex items-center mb-2 before:w-2 before:h-2 before:rounded-full before:bg-primary-200 before:mr-2">
                                        <p className=" text-content-text font-medium text-cb lg:text-sm mb:text-xs ">
                                            Lương: 
                                            <span className=" text-content-title font-semibold ml-1">
                                                {job.salary.toLocaleString('it')}đ /
                                            </span>{' '}
                                            tháng
                                        </p>
                                    </div>
                                    <div className=" flex items-center mb-2 before:w-2 before:h-2 before:rounded-full before:bg-primary-200 before:mr-2">
                                        <p className=" text-content-text font-medium text-cb lg:text-sm mb:text-xs ">
                                            Kĩ năng yêu cầu: 
                                            <span className=" text-content-title font-semibold ml-1">
                                                {job.skillsRequire}
                                            </span>
                                        </p>
                                    </div>
                                    <div className=" flex items-center mb-2 before:w-2 before:h-2 before:rounded-full before:bg-primary-200 before:mr-2">
                                        <p className=" text-content-text font-medium text-cb lg:text-sm mb:text-xs ">
                                            Nơi làm việc: 
                                            <span className=" text-content-title font-semibold ml-1">
                                                {job.postedBy.location}
                                            </span>
                                        </p>
                                    </div>
                                </div>
                                <div className=" mt-5 mb-3 flex relative">
                                    {/* <div className=' text-content-title text-sm font-semibold bg-content-bg-full-time rounded-3xl pt-1.5 pb-1.5 pl-6 pr-6 lg:text-xs '>Full Time</div> */}
                                    {/* <div className=' text-content-title text-sm font-semibold bg-content-bg-part-time rounded-3xl pt-1.5 pb-1.5 pl-6 pr-6 mr-5 ml-5 lg:text-xs '>Part Time</div> */}
                                    <div className=" text-content-title text-sm font-semibold bg-content-bg-remote rounded-3xl pt-1.5 pb-1.5 pl-6 pr-6 lg:text-xs ">
                                        Remote
                                    </div>

                                    <div className=" group bottom-2 right-0 absolute cursor-pointer ">
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
                        </div>
                    );
                })}
            </div>
            <div className=' flex justify-center'>
                <div className=' flex justify-center items-center w-10 h-10 text-white text-lg font-semibold bg-primary-100 rounded-full mr-2 ml-2 cursor-pointer' onClick={() => props.changePage(1)}>1</div>
                <div className=' flex justify-center items-center w-10 h-10 text-white text-lg font-semibold bg-primary-100 rounded-full mr-2 ml-2 cursor-pointer' onClick={() => props.changePage(2)}>2</div>
            </div>
        </>
    );
}

export default JobGutter;
