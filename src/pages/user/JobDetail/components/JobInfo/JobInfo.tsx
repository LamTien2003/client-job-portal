import { CategoryType, useGetCategoriesQuery } from "@/services/jobsApiSlice";
import Job from "@/types/Job";
import { useEffect, useState } from "react";

type Props = {
    data: Job
}

function JobInfo(props: Props) {
    const {data: job} = props
    const [categories, setCategories] = useState<CategoryType[]>([])
    const { data, isLoading, isError } = useGetCategoriesQuery()
    
    const category = categories.map(item => {
        return job.type.id === item.id ? item.categoryName : ''
    })

    useEffect(() => {
        if(!isError && !isLoading && data?.data?.data) {
            setCategories(data?.data?.data)
        }
    }, [isLoading, isError, data?.data?.data])
    

    return (
        <>
            <div className=" h-1.5 bg-primary-100 rounded-t-lg"></div>
            <div className=" border-b border-content-border pt-6 pb-6 pr-4 rounded-b-lg pl-4 mb-8 flex justify-between bg-[#f8f8f8] mb:flex-col">
                <div className=" flex mb:mb-7">
                    <div className=' flex items-center '>
                        <img className=' w-10 rounded-full mr-2.5 ' src='https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/bg/company-logo/company-01.png' />
                        <div className=' flex flex-col'>
                            <h3 className=' text-content-title text-base font-semibold cursor-pointer duration-300 hover:text-primary-100 '>{job.title}</h3>
                            <p className=' text-content-text text-sm font-medium duration-300 lg:text-sm'>{job.postedBy.companyName}</p>
                        </div>
                    </div>
                </div>
                <div className=" flex justify-end xl:ml-5 lg:flex-col mb:ml-0">
                    <div className=" mr-6 xl:mr-3 lg:mb-2">
                        <div className=" mb-2 flex items-center relative">
                            <img className=" mr-1.5 top-1.25 absolute" src="https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/icon/map-2.svg" />
                            <p className=" text-content-text text-cb font-normal ml-4"><span className=" text-content-title font-medium mr-1.5">Location:</span>{job.postedBy.location}</p>
                        </div>
                        <div className=" flex items-center relative">
                            <img className=" mr-1.5 top-1.25 absolute" src="https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/icon/category-2.svg" />
                            <p className=" text-content-text text-cb font-normal ml-5"><span className=" text-content-title font-medium mr-1.5">Category:</span>{category}</p>
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
        </>
    );
}

export default JobInfo;