import Category from '@/types/Category';

const CategoryItem = ({ category, index, images }: { category: Category; index: number; images: string }) => {
    return (
        <div className="border-[2px] border-primary-40 rounded-md p-5 hover:border-primary-100  duration-300 ">
            <div className="flex justify-between">
                <div>
                    <img src={images} alt={images} />
                </div>
                <div className="flex items-center">
                    <span className=" h-[2px] w-14 mr-2 bg-primary-200"></span>
                    <h6 className="font-bold text-lg text-content-text">{index + 1}</h6>
                </div>
            </div>
            <div className="w-full font-semibold text-lg text-center mt-6 mb-3">
                {category.categoryName}:
                <span className="ml-2 text-primary-100 font-semibold">{category.totalJobs}</span>
            </div>
        </div>
    );
};

export default CategoryItem;
