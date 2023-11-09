import Category from '@/types/Category';

const CategoryItem = ({ category, images }: { category: Category; images: string }) => {
    return (
        <div className="flex justify-between items-center border-[2px] border-primary-blur rounded-md p-3 hover:border-primary-100  duration-300 gap-2 tb:justify-center tb:gap-5 mb:justify-center mb:gap-8">
            <img src={images} alt={images} />
            <div className="font-semibold text-lg font-family-text">
                {category.categoryName}
                <span className="ml-2 text-primary-100 font-semibold">({category.totalJobs})</span>
            </div>
        </div>
    );
};

export default CategoryItem;
