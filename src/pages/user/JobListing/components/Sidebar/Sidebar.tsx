import { useEffect, useState } from 'react';
import Category from './Category/Category';
import { CategoryType, useGetCategoriesQuery } from '@/services/jobsApiSlice';
import Job from '@/types/Job';
import SalaryRange from './SalaryRange/SalaryRange';

type Props = {
    filter: (newJobs: Job[]) => void
};
function Sidebar(props: Props) {
    const { data, isLoading, isError } = useGetCategoriesQuery();

    const [category, setCategory] = useState<CategoryType[]>([]);
    const [newJobs, setNewJobs] = useState<Job[] | undefined>()
    const [isFilterCategory, setIsFilterCategory] = useState<boolean>(false)
    const [value, setValue] = useState<number[]>()
    const [isFilterRangeSalary, setIsFilterRangeSalary] = useState<boolean>(false)

    const handleFilterCategory = (jobFiltered: Job[]) => {
        setNewJobs(jobFiltered)
        setIsFilterCategory(true)
        props.filter(jobFiltered)
    }

    const handleFilterRangeSalary = (jobFiltered: Job[], value: number[]) => {
        setValue(value)
        setIsFilterRangeSalary(true)
        props.filter(jobFiltered)
    }

    useEffect(() => {
        if (data?.data?.data && !isLoading && !isError) setCategory(data?.data?.data);
    }, [data?.data?.data, isLoading, isError]);

    return (
        <div className=" w-1/4 pr-3 mr-auto ml-auto mb-8 xl:w-5/12 lg:pr-0 lg:w-10/12 mb:w-11/12">
            <div className=" w-full bg-content-bg rounded-xl pl-5 pr-5 pt-5 pb-1">
                <div>
                    <Category data={category} filter={handleFilterCategory} value={value} isFilterRangeSalary={isFilterRangeSalary} />

                    <SalaryRange filter={handleFilterRangeSalary} newJobs={newJobs} isFilterCategory={isFilterCategory} />

                    <div className=" bg-white border-content-border border rounded-md pt-5 pb-5 pl-6 pr-3 mb-5">
                        <h3 className=" text-content-title font-semibold text-lg mb-2 lg:text-lg">Date of Post</h3>
                        <div className=" flex flex-wrap">
                            <p className=" text-content-text font-semibold text-sm mr-4 mb-3 duration-300 cursor-pointer hover:text-primary-100">
                                Technology,
                            </p>
                            <p className=" text-content-text font-semibold text-sm mr-4 mb-3 duration-300 cursor-pointer hover:text-primary-100">
                                Marketing,
                            </p>
                            <p className=" text-content-text font-semibold text-sm mr-4 mb-3 duration-300 cursor-pointer hover:text-primary-100">
                                Sales,
                            </p>
                            <p className=" text-content-text font-semibold text-sm mr-4 mb-3 duration-300 cursor-pointer hover:text-primary-100">
                                Transport,
                            </p>
                            <p className=" text-content-text font-semibold text-sm mr-4 mb-3 duration-300 cursor-pointer hover:text-primary-100">
                                Medical,
                            </p>
                            <p className=" text-content-text font-semibold text-sm mr-4 mb-3 duration-300 cursor-pointer hover:text-primary-100">
                                Design,
                            </p>
                            <p className=" text-content-text font-semibold text-sm mr-4 mb-3 duration-300 cursor-pointer hover:text-primary-100">
                                Data Analyst,
                            </p>
                            <p className=" text-content-text font-semibold text-sm mr-4 mb-3 duration-300 cursor-pointer hover:text-primary-100">
                                Development,
                            </p>
                            <p className=" text-content-text font-semibold text-sm mr-4 mb-3 duration-300 cursor-pointer hover:text-primary-100">
                                Non-Profit,
                            </p>
                            <p className=" text-content-text font-semibold text-sm mr-4 mb-3 duration-300 cursor-pointer hover:text-primary-100">
                                Manager,
                            </p>
                            <p className=" text-content-text font-semibold text-sm mr-4 mb-3 duration-300 cursor-pointer hover:text-primary-100">
                                Health.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
