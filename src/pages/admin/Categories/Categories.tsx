import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faPen, faRemove } from "@fortawesome/free-solid-svg-icons";
import { useAddCategoryMutation, useChangeCategoryMutation, useDeleteCategoryMutation, useGetCategoriesQuery } from "@/services/categoriesApiSlice";
import Category from "@/types/Category";
import { toast } from "react-toastify";


function Categories() {

    const {data, isLoading, isError} = useGetCategoriesQuery()
    const [deleteCategory, {isLoading: isDeleting}] = useDeleteCategoryMutation()
    const [changeCategory, {isLoading: isChanging}] = useChangeCategoryMutation()
    const [addCategory, {isLoading: isAdding}] = useAddCategoryMutation()

    const [title, setTitle] = useState<string>('')
    const [categories, setCategories] = useState<Category[]>([])
    const [category, setCategory] = useState<Category>()
    const [categoryName, setCategoryName] = useState<string>('')
    const [isUpdateForm, setIsUpdateForm] = useState<boolean>(false)

    useEffect(() => {
        if(data?.data?.data && !isLoading && !isError) {
            setCategories(data?.data?.data)
        }
    }, [data?.data?.data, !isLoading, !isError])
    
    const handleDeleteCategory = async (id: string) => {
        const isConfirm = confirm('Bạn có chắc muốn xóa danh mục này ?')
        if(isConfirm) {
            const response = await deleteCategory(id)
            if(response) {
                toast.success('Xóa danh mục thành công');
            }
        } else {
            return
        }
    }
    
    const handleChangeCategory = async (e:any) => {
        e.preventDefault()
        if(title === 'Change') {
            const newCategory = {...category, categoryName} as Category
            const isConfirm = confirm('Bạn có chắc muốn cập nhật danh mục này ?')
            if(isConfirm) {
                const response = await changeCategory(newCategory)
                if(response) {
                    setIsUpdateForm(false)
                    toast.success('Cập nhật danh mục thành công');
                }
            } else {
                return
            }
        } else {
            console.log(categoryName)
            const isConfirm = confirm('Bạn có chắc muốn thêm danh mục này ?')
            if(isConfirm) {
                const response = await addCategory({categoryName: categoryName})
                if(response) {
                    console.log(response)
                    setIsUpdateForm(false)
                    toast.success('Thêm danh mục thành công');
                }
            } else {
                return
            }
        }
    }

    const handleActiveUpdateForm = (category: Category) => {
        setCategoryName(category.categoryName)
        setCategory(category)
        setTitle('Change')
        setIsUpdateForm(true)
    }

    const handleActiveAddForm = () => {
        setCategoryName('')
        setTitle('Add')
        setIsUpdateForm(true)
    }

    return (
        <>
            {isUpdateForm && (
                <div className=" w-full h-[100vh] text-content-title bg-[rgba(0,0,0,0.5)] top-0 left-0 fixed">
                    <form className=" flex flex-col w-[500px] h-auto bg-white rounded-lg p-10 mx-auto mt-40 relative" onSubmit={handleChangeCategory}>
                        <div className=" text-xl top-3 right-4 absolute cursor-pointer" onClick={() => setIsUpdateForm(false)}>
                            <FontAwesomeIcon icon={faRemove} />
                        </div>
                        <h2 className=" text-center text-2xl font-semibold mb-10">{title} Category</h2>
                        <label>Category name:</label>
                        <input className=" w-full border border-gray-400 rounded-lg py-2 pl-3 mb-10 outline-none" value={categoryName} onChange={e => setCategoryName(e.target.value)} />
                        <button className=" w-full text-white bg-[#40189D] rounded-lg py-2" type="submit">Submit</button>
                    </form>
                </div>
            )}
            <div className=" flex flex-col">
                <div className=" flex flex-col">
                    <button className=" w-[240px] text-center text-white text-xl font-semibold bg-[#40189D] rounded-2xl py-3 px-4 mb-10" onClick={handleActiveAddForm}>Thêm danh mục</button>
                    <div className=" flex items-center justify-between mb-[20px]">
                        <div className=" flex flex-col">
                            <h3 className=" text-content-title font-semibold">Hiển thị 5 danh mục</h3>
                            <p className=" text-content-text">Theo sở thích của bạn</p>
                        </div>
                        <div className=" flex gap-[10px]">
                            <button className=" text-white bg-[#40189D] rounded-3xl py-[6px] px-[18px]">Tất cả</button>
                            <button className=" text-[#40189D] bg-[#ECE8F5] border border-[#40189D] rounded-3xl py-[6px] px-[18px]">Tất cả</button>
                            <button className=" text-[#40189D] bg-[#ECE8F5] border border-[#40189D] rounded-3xl py-[6px] px-[18px]">Tất cả</button>
                        </div>
                        <div className=" flex items-center text-[#40189D] border border-[#40189D] rounded-lg py-[6px] px-[10px] gap-[5px]">
                            <p>Mới nhất</p>
                            <FontAwesomeIcon icon={faCaretDown} />
                        </div>
                    </div>
                    <div className=" flex flex-col text-content-title mb-52 ">
                        <div className=" flex item-center text-center font-semibold bg-white rounded-t-lg py-[14px]">
                            <p className=" w-1/12">STT</p>
                            <p className=" w-3/12">Tên danh mục</p>
                            <p className=" w-3/12">Danh mục hot</p>
                            <p className=" w-3/12">Tổng việc làm</p>
                            <p className=" w-2/12">Hành động</p>
                        </div>
                        {categories?.map((category, index) => {
                            return (
                                <div key={index} className="flex item-center text-center justify-center bg-white py-[14px] mt-px">
                                    <p className=" w-1/12">{index + 1}</p>
                                    <p className=" w-3/12">{category.categoryName}</p>
                                    <p className=" w-3/12">{category.isHotCategory ? 'Đang hot' : 'Không hot'}</p>
                                    <p className=" w-3/12">{category.totalJobs}</p>
                                    <div className=" w-2/12 flex items-center justify-center gap-[10px] ">
                                        <div className=" text-white bg-blue-400 rounded-md py-[4px] px-[10px] cursor-pointer" onClick={() => handleActiveUpdateForm(category)}>
                                            <FontAwesomeIcon icon={faPen} />
                                        </div>
                                        <div className=" text-white bg-red-400 rounded-md py-[4px] px-[10px] cursor-pointer">
                                            <FontAwesomeIcon icon={faRemove} onClick={() => handleDeleteCategory(category.id)} />
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Categories;