import { useEffect, useState } from 'react';
import Category from './Category/Category';
import SalaryRange from './SalaryRange/SalaryRange';

type filterObject = {
    idCat: string | null,
    salary: {min: number, max: number}
}
type Props = {
    filter: (filter: filterObject) => void
};
function Sidebar(props: Props) {

    const [filterObj, setFilterObj] = useState<filterObject>({idCat: null, salary: {min: 500000, max: 10000000}})
   
    const handleFilterCategory = (id: string) => {
        setFilterObj(prev => {
            return {
                ...prev,
                idCat: id
            }
        })
    }
    
    const handleFilterSalary = ({min, max}: {min: number, max: number}) => {
        setFilterObj(prev => {
            return {
                ...prev,
                salary: {
                    min: min,
                    max: max,
                }
            }
        })
    }

    useEffect(() => {
        props.filter(filterObj)
    }, [filterObj])

    return (
        <div className=" w-1/4 pr-3 mr-auto ml-auto mb-8 xl:w-5/12 lg:pr-0 lg:w-10/12 mb:w-11/12">
            <div className=" w-full bg-content-bg rounded-xl pl-5 pr-5 pt-5 pb-1">
                <div>
                    <Category categoryChange={handleFilterCategory} />

                    <SalaryRange salaryChange={handleFilterSalary} />

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
