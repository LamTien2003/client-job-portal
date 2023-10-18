import { CategoryType } from '@/services/jobsApiSlice';
import { useState } from 'react';

type Props = {
    data: CategoryType[];
    handleFilter: (id: string) => void;
};
function Category(props: Props) {
    const { data: category } = props;

    const [check, setCheck] = useState<boolean>(false);
    const [isId, setIsId] = useState<string>('');

    const handleCheck = (id: string) => {
        setIsId(id);
        if (isId && isId === id) {
            setCheck(!check);
        }
        props.handleFilter(id);
    };

    return (
        <div className=" bg-white border-content-border border rounded-md pt-5 pb-5 pl-6 pr-3 mb-5">
            <h3 className=" text-content-title font-semibold text-lg mb-2 lg:text-lg">Job Category</h3>
            <div className=" max-h-64 overflow-scroll">
                {category?.map((cat) => {
                    return (
                        <div key={cat.categoryName} className=" mb-2 flex relative">
                            <div className=" cursor-pointer">
                                <input
                                    id={cat.categoryName}
                                    name={cat.categoryName}
                                    checked={check === true || isId === cat.id}
                                    type="radio"
                                    className=" mr-1.5"
                                    onChange={() => handleCheck(cat.id)}
                                />
                                <label
                                    htmlFor={cat.categoryName}
                                    className=" text-content-text text-sm font-medium lg:text-sm cursor-pointer"
                                >
                                    {cat.categoryName}
                                </label>
                            </div>
                            {/* <p className=' text-content-text text-sm font-medium right-2 absolute lg:text-sm cursor-pointer'>({amount})</p> */}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Category;
