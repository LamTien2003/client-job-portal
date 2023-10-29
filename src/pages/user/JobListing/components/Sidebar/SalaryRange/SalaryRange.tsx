import { useState } from "react";

import Slider from 'rc-slider';
import { useGetJobsQuery } from "@/services/jobsApiSlice";
import Job from "@/types/Job";

type Props = {
    filter: (newJobs: Job[], value: number[]) => void
    newJobs: Job[] | undefined
    isFilterCategory: boolean
}
function SalaryRange({filter, newJobs, isFilterCategory}: Props) {
    
    const [salaryRange, setSalaryRange] = useState({
        minValue: 500000,
        maxValue: 10000000,
    });

    const {data, isLoading, isError} = useGetJobsQuery({
        page: 1, 
        limit: 5, 
        "salary[gte]":salaryRange.minValue,
        "salary[lte]":salaryRange.maxValue
    })

    const handleChange = (value: any) => {
        setSalaryRange({minValue: value[0], maxValue: value[1],})
        if(isFilterCategory && newJobs) {
            filter(newJobs, value)
        } else {
            data?.data?.data && !isLoading && !isError && filter(data?.data?.data, value)
        }
    };

    return (
        <div className=" bg-white border-content-border border rounded-md pt-5 pb-5 pl-6 pr-3 mb-5">
            <h3 className=" text-content-title font-semibold text-lg mb-2 lg:text-lg">Salary Range</h3>
            <p>
                {salaryRange.minValue.toLocaleString('IT')} - {salaryRange.maxValue.toLocaleString('IT')}
            </p>
            <Slider range min={500000} max={10000000} onChange={handleChange} />
            <div className=" max-h-64 overflow-scroll"></div>
        </div>
    );
}

export default SalaryRange;