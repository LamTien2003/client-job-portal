
import { useEffect, useState } from 'react';

import Slider from 'rc-slider'
import Category from "./Category/Category";
import { CategoryType, useGetCategoriesQuery } from '@/services/jobsApiSlice';

type Props = {
    filterJob: Function
}
function Sidebar(props: Props) {

    const [salaryRange, setSalaryRange] = useState({
        minValue: 1,
        maxValue: 1500,
    })
    const [category, setCategory] = useState<CategoryType[]>([])

    const {data, isLoading, isError} = useGetCategoriesQuery()

    useEffect(() => {
        if(data?.data?.data && !isLoading && !isError) setCategory(data?.data?.data)
    }, [data?.data?.data, isLoading, isError])

    // useEffect(() => {
    //     toast.success('Test thông bao');
    // }, []);

    const handleRange = (value:any) => {
        setSalaryRange(prev => {
            return {
                minValue: value[0],
                maxValue: value[1]
            }
        })
    }

    function myFilter(id:string) {
        props.filterJob(id)
    }

    return (
        <div>
            
            <Category data={category} handleFilter={myFilter} />
            
            <div className=' bg-white border-content-border border rounded-md pt-5 pb-5 pl-6 pr-3 mb-5'>
                <h3 className=' text-content-title font-semibold text-lg mb-2 lg:text-lg'>Salary Range</h3>
                <p>{salaryRange.minValue}K - {salaryRange.maxValue}K</p>
                <Slider 
                    range 
                    min={1} 
                    max={1500}
                    onChange={handleRange}
                />
                <div className=' max-h-64 overflow-scroll'>
                </div>
            </div>
            <div className=' bg-white border-content-border border rounded-md pt-5 pb-5 pl-6 pr-3 mb-5'>
                <h3 className=' text-content-title font-semibold text-lg mb-2 lg:text-lg'>Date of Post</h3>
                <div className=' flex flex-wrap'>
                    <p className=' text-content-text font-semibold text-sm mr-4 mb-3 duration-300 cursor-pointer hover:text-primary-100'>Technology,</p>
                    <p className=' text-content-text font-semibold text-sm mr-4 mb-3 duration-300 cursor-pointer hover:text-primary-100'>Marketing,</p>
                    <p className=' text-content-text font-semibold text-sm mr-4 mb-3 duration-300 cursor-pointer hover:text-primary-100'>Sales,</p>
                    <p className=' text-content-text font-semibold text-sm mr-4 mb-3 duration-300 cursor-pointer hover:text-primary-100'>Transport,</p>
                    <p className=' text-content-text font-semibold text-sm mr-4 mb-3 duration-300 cursor-pointer hover:text-primary-100'>Medical,</p>
                    <p className=' text-content-text font-semibold text-sm mr-4 mb-3 duration-300 cursor-pointer hover:text-primary-100'>Design,</p>
                    <p className=' text-content-text font-semibold text-sm mr-4 mb-3 duration-300 cursor-pointer hover:text-primary-100'>Data Analyst,</p>
                    <p className=' text-content-text font-semibold text-sm mr-4 mb-3 duration-300 cursor-pointer hover:text-primary-100'>Development,</p>
                    <p className=' text-content-text font-semibold text-sm mr-4 mb-3 duration-300 cursor-pointer hover:text-primary-100'>Non-Profit,</p>
                    <p className=' text-content-text font-semibold text-sm mr-4 mb-3 duration-300 cursor-pointer hover:text-primary-100'>Manager,</p>
                    <p className=' text-content-text font-semibold text-sm mr-4 mb-3 duration-300 cursor-pointer hover:text-primary-100'>Health.</p>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;