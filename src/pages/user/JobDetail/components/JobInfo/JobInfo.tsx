type JobInfo = {
    nameJob: string
    nameCompany: string
    location: string
    jobType: string
    category: string
    salary: string
}

const JobInfo: React.FC<JobInfo> = ({nameJob, nameCompany, location, jobType, category, salary}) => {
    return (
        <div className=" border-b border-content-border pb-12 mb-8 flex justify-between mb:flex-col">
            <div className=" flex mb:mb-7">
                <div className=' flex items-center '>
                    <img className=' w-10 rounded-full mr-2.5 ' src='https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/bg/company-logo/company-01.png' />
                    <div className=' flex flex-col'>
                        <h3 className=' text-content-title text-base font-semibold cursor-pointer duration-300 hover:text-primary-100 '>{nameJob || ''}</h3>
                        <p className=' text-content-text text-sm font-medium duration-300 lg:text-sm'>{nameCompany || ''}</p>
                    </div>
                </div>
            </div>
            <div className=" flex justify-end xl:ml-5 lg:flex-col mb:ml-0">
                <div className=" mr-6 xl:mr-3 lg:mb-2">
                    <div className=" mb-2 flex items-center relative">
                        <img className=" mr-1.5 top-1.25 absolute" src="https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/icon/map-2.svg" />
                        <p className=" text-content-text text-cb font-normal ml-4"><span className=" text-content-title font-medium mr-1.5">Location:</span>{location || ''}</p>
                    </div>
                    <div className=" flex items-center relative">
                        <img className=" mr-1.5 top-1.25 absolute" src="https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/icon/category-2.svg" />
                        <p className=" text-content-text text-cb font-normal ml-5"><span className=" text-content-title font-medium mr-1.5">Category:</span>{category || ''}</p>
                    </div>
                </div>
                <div>
                    <div className=" mb-2 flex items-center relative">
                        <img className=" mr-1.5 top-1.25 absolute" src="https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/icon/company-2.svg" />
                        <p className=" text-content-text text-cb font-normal ml-5"><span className=" text-content-title font-medium mr-1.5">Job Type:</span>{jobType || ''}</p>
                    </div>
                    <div className=" flex items-center relative">
                        <img className=" mr-1.5 top-1.25 absolute" src="https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/icon/salary-2.svg" />
                        <p className=" text-content-text text-cb font-normal ml-5"><span className=" text-content-title font-medium mr-1.5">Salary:</span>{salary || ''}/Per Month</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default JobInfo;