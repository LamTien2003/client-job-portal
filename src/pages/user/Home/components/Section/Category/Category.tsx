import { useGetCategoriesQuery } from '@/services/categoriesApiSlice';
import CategoryItem from './CategoryItem';
import images from '@/assets/images';
import Category from '@/types/Category';
import { useEffect, useState } from 'react';

const Category = () => {
    const { data, isLoading, isError } = useGetCategoriesQuery();
    const [categories, setCategories] = useState<Category[]>([]);

    useEffect(() => {
        if (!isLoading && !isError && data?.data?.data) {
            setCategories(data?.data?.data);
        }
    }, [data?.data?.data, isError, isLoading]);

    return (
        <div className="w-full grid grid-cols-5 grid-row-2 gap-3 mb:grid-cols-1 tb:grid-cols-2 lg:grid-cols-3 ">
            {isLoading && <p>...isLoading</p>}
            {categories.map((cate, index) => (
                <CategoryItem key={index} index={index} category={cate} images={images.categories.finance} />
            ))}
        </div>
    );
};

export default Category;
