
import { useState } from 'react';

import Slider from 'rc-slider'
import Category from "../Category/Category";


function Sidebar() {

    const [salaryRange, setSalaryRange] = useState({
        minValue: 1,
        maxValue: 1500,
    })

    console.log(salaryRange.maxValue);
    
    

    // useEffect(() => {
    //     toast.success('Test thông bao');
    // }, []);

    const handleRange = value => {
        setSalaryRange(prev => {
            return {
                minValue: value[0],
                maxValue: value[1]
            }
        })
    }

    return (
        <div>
            <div className=' bg-white border-content-border border rounded-md pt-10 pb-10 pl-6 pr-3 mb-5'>
                <h3 className=' text-content-title font-semibold text-xl mb-2 lg:text-lg'>Job Category</h3>
                <div className=' max-h-64 overflow-scroll'>
                    <Category name='Health Care' amount={80} />
                    <Category name='Accounts & Finance' amount={80} />
                    <Category name='Transportation' amount={80} />
                    <Category name='Medical & Finance' amount={80} />
                    <Category name='Development' amount={80} />
                    <Category name='Engineering' amount={80} />
                    <Category name='Receptionist' amount={80} />
                    <Category name='Non-Profile Org' amount={80} />
                    <Category name='Non-Profile Org' amount={80} />
                    <Category name='Non-Profile Org' amount={80} />
                </div>
            </div>
            <div className=' bg-white border-content-border border rounded-md pt-10 pb-10 pl-6 pr-3 mb-5'>
                <h3 className=' text-content-title font-semibold text-xl mb-2 lg:text-lg'>Type of Employments</h3>
                <div className=' max-h-64 overflow-scroll'>
                    <Category name='Health Care' amount={80} />
                    <Category name='Accounts & Finance' amount={80} />
                    <Category name='Transportation' amount={80} />
                    <Category name='Medical & Finance' amount={80} />
                    <Category name='Development' amount={80} />
                    <Category name='Engineering' amount={80} />
                    <Category name='Receptionist' amount={80} />
                    <Category name='Non-Profile Org' amount={80} />
                    <Category name='Non-Profile Org' amount={80} />
                    <Category name='Non-Profile Org' amount={80} />
                </div>
            </div>
            <div className=' bg-white border-content-border border rounded-md pt-10 pb-10 pl-6 pr-3 mb-5'>
                <h3 className=' text-content-title font-semibold text-xl mb-2 lg:text-lg'>Salary Range</h3>
                <p>{salaryRange.minValue}K - {salaryRange.maxValue}K</p>
                <Slider 
                    range 
                    min={1} 
                    max={1500}
                    onChange={handleRange}
                />
                <div className=' max-h-64 overflow-scroll'>
                    <Category name='Health Care' amount={80} />
                    <Category name='Accounts & Finance' amount={80} />
                    <Category name='Transportation' amount={80} />
                    <Category name='Medical & Finance' amount={80} />
                    <Category name='Development' amount={80} />
                </div>
            </div>
            <div className=' bg-white border-content-border border rounded-md pt-10 pb-10 pl-6 pr-3 mb-5'>
                <h3 className=' text-content-title font-semibold text-xl mb-2 lg:text-lg'>Date of Post</h3>
                <div className=' flex flex-wrap'>
                    <p className=' text-content-text font-semibold text-cb mr-4 mb-3 duration-300 cursor-pointer hover:text-primary-100'>Technology,</p>
                    <p className=' text-content-text font-semibold text-cb mr-4 mb-3 duration-300 cursor-pointer hover:text-primary-100'>Marketing,</p>
                    <p className=' text-content-text font-semibold text-cb mr-4 mb-3 duration-300 cursor-pointer hover:text-primary-100'>Sales,</p>
                    <p className=' text-content-text font-semibold text-cb mr-4 mb-3 duration-300 cursor-pointer hover:text-primary-100'>Transport,</p>
                    <p className=' text-content-text font-semibold text-cb mr-4 mb-3 duration-300 cursor-pointer hover:text-primary-100'>Medical,</p>
                    <p className=' text-content-text font-semibold text-cb mr-4 mb-3 duration-300 cursor-pointer hover:text-primary-100'>Design,</p>
                    <p className=' text-content-text font-semibold text-cb mr-4 mb-3 duration-300 cursor-pointer hover:text-primary-100'>Data Analyst,</p>
                    <p className=' text-content-text font-semibold text-cb mr-4 mb-3 duration-300 cursor-pointer hover:text-primary-100'>Development,</p>
                    <p className=' text-content-text font-semibold text-cb mr-4 mb-3 duration-300 cursor-pointer hover:text-primary-100'>Non-Profit,</p>
                    <p className=' text-content-text font-semibold text-cb mr-4 mb-3 duration-300 cursor-pointer hover:text-primary-100'>Manager,</p>
                    <p className=' text-content-text font-semibold text-cb mr-4 mb-3 duration-300 cursor-pointer hover:text-primary-100'>Health.</p>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;