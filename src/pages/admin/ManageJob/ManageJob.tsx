import { useEffect, useState } from "react";
import { useGetJobsQuery } from "@/services/jobsApiSlice";

import Job from "@/types/Job";

import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import Censored from "./components/Censored/Censored"
import Uncensored from "./components/Uncensored/Uncensored"

import images from "@/assets/images"

function ManageJob() {
    const {data, isLoading, isError} = useGetJobsQuery({})

    const [censored, setCensored] = useState<boolean>(true)
    const [uncensored, setUncensored] = useState<boolean>(false)
    const [jobs, setJobs] = useState<Job[]>([])

    const handleActive = (arg:string) => {
        if(arg === 'jobseeker') {
            setCensored(true)
            setUncensored(false)
        }
        if(arg === 'company') {
            setCensored(false)
            setUncensored(true)
        }
    }

    useEffect(() => {
        if(data?.data?.data && !isLoading && !isError) {
            setJobs(data?.data?.data)
        }
    }, [data?.data?.data, isLoading, isError])

    return (
        <div className="w-9/12 flex flex-col ml-[25%] pr-10 pb-40">
            <div className=" flex items-center justify-start">
                <div className={" w-1/3 flex items-center justify-between bg-white p-4 cursor-pointer " + (censored === true ? 'shadow-xl pb-6 px-4 pt-4' : 'shadow-sm')} onClick={() => handleActive('jobseeker')}>
                    <div>
                        <p className=" text-primary-100 text-lg font-semibold mb-8">5.321</p>
                        <span className=" text-content-title text-lg font-medium">Đã Kiểm Duyệt</span>
                    </div>
                    <img className=" w-[70px] h-[70px]" src={images.admin.censored} />
                </div>
                <div className={" w-1/3 flex items-center justify-between bg-white p-4 mx-10 cursor-pointer " + (uncensored === true ? 'shadow-xl pb-6 px-4 pt-4' : 'shadow-sm')} onClick={() => handleActive('company')}>
                    <div>
                        <p className=" text-primary-100 text-lg font-semibold mb-8">261</p>
                        <span className=" text-content-title text-lg font-medium">Chưa Kiểm Duyệt</span>
                    </div>
                    <img className=" w-[70px] h-[70px]" src={images.admin.uncensored} />
                </div>
            </div>

            <div className=" flex justify-end mt-4">
                <div className=" w-[314px] flex items-center bg-white rounded-3xl border border-[#EFEEEB]">
                    <div className=" pr-3 pl-4 pt-1.5 pb-1.5 text-lg border-r border-[#BCBCBC] cursor-pointer">
                        <FontAwesomeIcon  icon={faMagnifyingGlass}/>
                    </div>
                    <input className=" outline-none pt-1.5 pb-1.5 pl-2 pr-3 " placeholder="Tìm kiếm" />
                    <p className=" pt-2 pb-2 pl-3 pr-2.5 bg-primary-100 text-white rounded-r-3xl cursor-pointer">Tìm</p>
                </div>
            </div>

            {censored && <Censored data={jobs} />}
            {uncensored && <Uncensored data={jobs} />}
        </div>
    );
}

export default ManageJob;