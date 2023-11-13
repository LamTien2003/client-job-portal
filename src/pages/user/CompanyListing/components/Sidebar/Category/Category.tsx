import { useGetCategoriesQuery } from "@/services/categoriesApiSlice";
import { CategoryType } from "@/services/jobsApiSlice";
import Category from "@/types/Category";
import { useEffect, useState } from "react";

function Category() {

    const [categories, setCategories] = useState<Category[]>([])
    const [check, setCheck] = useState<boolean>(false)
    const [isId, setIsId] = useState<string>('')

    const {data, isLoading, isError} = useGetCategoriesQuery()

    const handleCheck = (id: string) => {
        setIsId(id)
        if(isId === id) {
            setCheck(!check)
        }
    }

    useEffect(() => {
        if(data?.data?.data && !isLoading && !isError) {
            setCategories(data?.data?.data)
        }
    }, [data?.data?.data, isLoading, isError])

    return (
        <div className=' bg-white border-content-border border rounded-md pt-5 pb-5 pl-6 pr-3 mb-5'>
            <h3 className=' text-content-title font-semibold text-lg mb-2 lg:text-lg'>Company Category</h3>
            <div className=' max-h-64 overflow-scroll'>
                {categories?.map(cat => {
                    return(
                        <div key={cat.id} className=' mb-2 flex relative' >
                            <div className=" cursor-pointer">
                                <input id={cat.id} name={cat.id} checked={check === true || isId === cat.id} type='radio' className=' mr-1.5' onChange={() => handleCheck(cat.id)} />
                                <label htmlFor={cat.id} className=' text-content-text text-sm font-medium lg:text-sm cursor-pointer'>{cat.categoryName}</label>
                            </div>
                            {/* <p className=' text-content-text text-sm font-medium right-2 absolute lg:text-sm cursor-pointer'>({amount})</p> */}
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default Category;