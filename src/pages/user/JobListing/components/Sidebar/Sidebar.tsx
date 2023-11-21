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

    const [filterObj, setFilterObj] = useState<filterObject>({idCat: null, salary: {min: 1000000, max: 100000000}})
   
    const handleFilterCategory = (id: string | null) => {
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
        <div className=" w-1/4 pr-3 mx-auto mb-8 lg:pr-0 tb:pr-0 mb:pr-0 lg:w-10/12 tb:w-10/12 mb:w-11/12">
            <div className=" w-full bg-[#f8f8f8] rounded-xl pl-5 pr-5 pt-5 pb-1">
                <div>
                    <Category categoryChange={handleFilterCategory} />

                    <SalaryRange salaryChange={handleFilterSalary} />

                </div>
            </div>
        </div>
    );
}

export default Sidebar;
