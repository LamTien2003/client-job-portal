import images from "@/assets/images";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CategoryTable from "./components/Category/CategoryTable";
import { useEffect, useState } from "react";
import Category from "@/types/Category";
import { useGetCategoriesQuery } from "@/services/categoriesApiSlice";


function ManageCategory() {
    const {data, isLoading, isError} = useGetCategoriesQuery()
    
    const [categories, setCategories] = useState<Category[]>([])

    useEffect(() => {
        if(data?.data?.data && !isLoading && !isError) {
            setCategories(data?.data?.data)
        }
    }, [data?.data?.data, isLoading, isError])

    return (
        <div className="w-9/12 flex flex-col bg-[#f0f3f6] ml-[25%] pr-10 pb-25">
            <div className=" flex items-center justify-start">
                <div className=" w-1/3 flex items-center justify-between bg-white shadow-xl pb-6 px-4 pt-4 p-4 cursor-pointer ">
                    <div>
                        <p className=" text-primary-100 text-lg font-semibold mb-8">5.321</p>
                        <span className=" text-content-title text-lg font-medium">Quản Lí Danh Mục</span>
                    </div>
                    <img className=" w-[70px] h-[70px]" src={images.admin.categorypng} />
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

            <CategoryTable data={categories} />
        </div>
    );
}

export default ManageCategory;