import Job from "@/types/Job";

type Props = {
    data: Job
}
function JobInfo(props: Props) {
    const {data: job} = props

    return (
        <div className=" w-2/3 pl-3 pr-3 lg:w-full ">
            <div className=" h-1.5 bg-primary-100 rounded-t-lg"></div>
            <div className=" border-b border-content-border pt-6 pb-6 pr-4 rounded-b-lg pl-4 mb-8 flex justify-between bg-[#f8f8f8] mb:flex-col">
                <div className=" flex mb:mb-7">
                    <div className=' flex items-center '>
                        <img className=' w-10 rounded-full mr-2.5 ' src='https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/bg/company-logo/company-01.png' />
                        <div className=' flex flex-col'>
                            <h3 className=' text-content-title font-family-title text-lg font-semibold cursor-pointer duration-300 hover:text-primary-100 '>{job.title}</h3>
                            <p className=' text-content-text text-sm font-medium duration-300 lg:text-sm'>{job.postedBy.companyName}</p>
                        </div>
                    </div>
                </div>
                <div className=" flex justify-end xl:ml-5 lg:flex-col mb:ml-0">
                    <div className=" mr-6 xl:mr-3 lg:mb-2">
                        <div className=" mb-2 flex items-center relative">
                            <img className=" mr-1.5 top-1.25 absolute" src="https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/icon/map-2.svg" />
                            <p className=" text-content-text text-cb font-normal ml-4"><span className=" text-content-title font-medium mr-1.5">Location:</span>{job.postedBy.location.city}</p>
                        </div>
                        <div className=" flex items-center relative">
                            <img className=" mr-1.5 top-1.25 absolute" src="https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/icon/category-2.svg" />
                            <p className=" text-content-text text-cb font-normal ml-5"><span className=" text-content-title font-medium mr-1.5">Category:</span>{job.type.categoryName}</p>
                        </div>
                    </div>
                    <div>
                        <div className=" mb-2 flex items-center relative">
                            <img className=" mr-1.5 top-1.25 absolute" src="https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/icon/company-2.svg" />
                            <p className=" text-content-text text-cb font-normal ml-5"><span className=" text-content-title font-medium mr-1.5">Job Type:</span>fulltime</p>
                        </div>
                        <div className=" flex items-center relative">
                            <img className=" mr-1.5 top-1.25 absolute" src="https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/icon/salary-2.svg" />
                            <p className=" text-content-text text-cb font-normal ml-5"><span className=" text-content-title font-medium mr-1.5">Salary:</span>{job.salary.toLocaleString('it')}vnđ / tháng</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                {/* Description */}
                <div className=" mb-9">
                    <p className=" text-content-text text-base font-medium mb-3">
                        <span className=" font-family-title text-content-title text-lg font-semibold mr-2">Job Description:</span>
                        {job.description}
                    </p>
                </div>

                {/* Skill require */}
                <div className=" mb-9">
                    <div className=" text-content-text text-base font-medium">
                        <p className=" font-family-title text-content-title text-lg font-semibold mr-2 mb-3">Skills Requirements:</p>
                        <div>
                            {job.skillsRequire?.map(skill => {
                                return (
                                    <p
                                        key={skill}
                                        className=" text-content-text text-cb font-medium flex items-center mb-2.5 ml-3 relative before:w-2 before:h-2 before:rounded-full before:bg-primary-100 before:-ml-3 before:pr-2 before:top-2 before:absolute"
                                    >
                                        {skill}
                                    </p>
                                )
                            })}
                        </div>
                    </div>
                </div>

                {/* Description */}
                <div className=" mb-9">
                    <div className=" text-content-text text-base font-medium mb-3">
                        <p className=" font-family-title text-content-title text-lg font-semibold mr-2 mb-3">Experiences:</p>
                        <div
                            className=" text-content-text text-cb font-medium flex items-center mb-2.5 ml-3 relative before:w-2 before:h-2 before:rounded-full before:bg-primary-100 before:-ml-3 before:pr-2 before:top-2 before:absolute">
                            2-3 năm kinh nghiệm
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default JobInfo;