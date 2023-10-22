import Category from "@/types/Category";

type Props = {
    data: Category[]
}

function CategoryTable(props: Props) {
    const {data:categories} = props

    return (
        <div className=" pr-10 pl-10 mt-4 border border-[#ECEEF6] bg-white rounded-3xl ">
            <div className=" flex items-center justify-between pt-3 pb-3 mb-2 text-content-text font-medium">
                <p className=" w-1/12 text-start">STT</p>
                <p className=" w-2/12 text-start">Tên Danh mục</p>
                <p className=" w-1/12 text-center">Tổng Job</p>
                <p className=" w-2/12 text-center">Hot</p>
                <p className=" w-2/12 text-center">Hành Động</p>
            </div>
            {categories?.map((category, index) => {
                return (
                    <div key={index} className="flex items-center justify-between pt-3 pb-3 text-content-title font-medium">
                        <p className=" w-1/12 flex items-center justify-start">{index + 1}</p>
                        <div className=" w-2/12 text-start">
                            {category.categoryName}
                        </div>
                        <p className=" w-1/12 text-center">{category.totalJobs}</p>
                        <p className=" w-2/12 text-center">{category.isHotCategory === true ? 'Có' : 'Không'}</p>
                        <div className=" w-2/12 text-center">
                            <button className=" w-18 text-center text-white bg-[#7B7B7B] rounded-xl py-1 mx-1">Sửa</button>
                            <button className=" w-18 text-center text-white bg-[#FC656C] rounded-xl py-1 mx-1">Xóa</button>
                        </div>
                    </div>
                )
            })}
            
        </div>
    );
}

export default CategoryTable;