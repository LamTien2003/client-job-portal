
const Category: React.FC<{name: string, amount: number}> = ({ name, amount}) => {
    return (
        <div className=' mb-2 flex relative'>
            <input type='checkbox' className=' mr-1.5' />
            <span className=' text-content-text font-medium lg:text-sm cursor-pointer'>{name}</span>
            <p className=' text-content-text font-medium right-2 absolute lg:text-sm cursor-pointer'>({amount})</p>
        </div>
    );
}

export default Category;