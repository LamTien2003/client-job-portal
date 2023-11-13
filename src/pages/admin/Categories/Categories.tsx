import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faPen, faRemove, faRepeat } from "@fortawesome/free-solid-svg-icons";
import { useAddCategoryMutation, useChangeCategoryMutation, useDeleteCategoryMutation, useGetCategoriesQuery } from "@/services/categoriesApiSlice";
import Category from "@/types/Category";
import { toast } from "react-toastify";
import Table from "@/components/Table/Table";

function Categories() {

    const {data, isLoading, isError} = useGetCategoriesQuery()
    const [deleteCategory] = useDeleteCategoryMutation()
    const [changeCategory] = useChangeCategoryMutation()
    const [addCategory] = useAddCategoryMutation()

    const [categories, setCategories] = useState<Category[]>([])
    const [category, setCategory] = useState<Category>()
    
    const [title, setTitle] = useState<string>('')
    const [isUpdateForm, setIsUpdateForm] = useState<boolean>(false)
    const [isAddForm, setIsAddForm] = useState<boolean>(false)

    const [categoryName, setCategoryName] = useState<string>('')
    const [isHot, setIsHot] = useState<boolean>()

    const addFormRef = useRef<HTMLFormElement>(null)
    const updateFormRef = useRef<HTMLFormElement>(null)
    
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
            const changeObject = {...category, categoryName, isHotCategory: isHot} as Category
            const isConfirm = confirm('Bạn có chắc muốn cập nhật danh mục này ?')
            if(isConfirm) {
                const response = await changeCategory(changeObject)
                if(response) {
                    setIsUpdateForm(false)
                    toast.success('Cập nhật danh mục thành công');
                }
            } else {
                return
            }
        } else {
            const isConfirm = confirm('Bạn có chắc muốn thêm danh mục này ?')
            if(isConfirm) {
                const response = await addCategory({categoryName: categoryName})
                if(response) {
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
        setIsHot(category.isHotCategory)
        setCategory(category)
        setTitle('Change')
        setIsUpdateForm(true)
    }

    const handleActiveAddForm = () => {
        setCategoryName('')
        setTitle('Add')
        setIsAddForm(true)
    }

    useEffect(() => {
        if(data?.data?.data && !isLoading && !isError) {
            setCategories(data?.data?.data)
        }
    }, [data?.data?.data, !isLoading, !isError])

    useEffect(() => {
        let handlerUpdate = (e:any) => {
            if(!updateFormRef.current?.contains(e.target)) {
                setIsUpdateForm(false)
            }
        }
        document.addEventListener('mousedown', handlerUpdate)
    }, [isUpdateForm])

    useEffect(() => {
        let handlerAdd = (e:any) => {
            if(!addFormRef.current?.contains(e.target)) {
                setIsAddForm(false)
            }
        }
        document.addEventListener('mousedown', handlerAdd)
    }, [isAddForm])

    return (
        <>
            {isUpdateForm && (
                <div className=" w-full h-[100vh] text-content-title bg-[rgba(0,0,0,0.5)] top-0 left-0 fixed">
                    <form ref={updateFormRef} className=" flex flex-col w-[500px] h-auto bg-white rounded-lg p-10 mx-auto mt-40 relative" onSubmit={handleChangeCategory}>
                        <div className=" text-xl top-3 right-4 absolute cursor-pointer" onClick={() => setIsUpdateForm(false)}>
                            <FontAwesomeIcon icon={faRemove} />
                        </div>
                        <h2 className=" text-center text-2xl font-semibold mb-10">{title} Category</h2>
                        <div>
                            <label>Category name:</label>
                            <input className=" w-full border border-gray-400 rounded-lg py-2 pl-3 mb-10 outline-none" value={categoryName} onChange={e => setCategoryName(e.target.value)} />
                        </div>
                        <div>
                            <label>Category hot:</label>
                            <div className="flex justify-between w-full border border-gray-400 rounded-lg py-2 px-3 mb-10 ">
                                <input className=" outline-none" value={isHot ? 'Đang hot' : 'Không hot'} onChange={e => setCategoryName(e.target.value)} />
                                <div className=" rounded-md px-1 duration-300 cursor-pointer hover:bg-gray-300" onClick={() => setIsHot(!isHot)}>
                                    <FontAwesomeIcon icon={faRepeat} />
                                </div>
                            </div>
                                
                        </div>
                        <button className=" w-full text-white bg-[#40189D] rounded-lg py-2" type="submit">Submit</button>
                    </form>
                </div>
            )}
            {isAddForm && (
                <div className=" w-full h-[100vh] text-content-title bg-[rgba(0,0,0,0.5)] top-0 left-0 fixed">
                    <form ref={addFormRef} className=" flex flex-col w-[500px] h-auto bg-white rounded-lg p-10 mx-auto mt-40 relative" onSubmit={handleChangeCategory}>
                        <div className=" text-xl top-3 right-4 absolute cursor-pointer" onClick={() => setIsAddForm(false)}>
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
                            {/* <button className=" text-white bg-[#40189D] rounded-3xl py-[6px] px-[18px]">Tất cả</button>
                            <button className=" text-[#40189D] bg-[#ECE8F5] border border-[#40189D] rounded-3xl py-[6px] px-[18px]">Tất cả</button>
                            <button className=" text-[#40189D] bg-[#ECE8F5] border border-[#40189D] rounded-3xl py-[6px] px-[18px]">Tất cả</button> */}
                        </div>
                        <div className=" flex items-center text-[#40189D] border border-[#40189D] rounded-lg py-[6px] px-[10px] gap-[5px]">
                            <p>Mới nhất</p>
                            <FontAwesomeIcon icon={faCaretDown} />
                        </div>
                    </div>
                    {isLoading ? (
                        <div className="flex items-center justify-center w-full bg-white py-7">Loading</div>
                    ) : (
                        <p>data</p>
                    )}
                </div>
            </div>
        </>
    );
}

export default Categories;