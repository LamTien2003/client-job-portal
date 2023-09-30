type Category = {
    title: string;
    amount: string;
    index: string;
    images: string;
};
const CategoryItem: React.FC<Category> = ({ title, amount, index, images }) => {
    return (
        <div className="border-[2px] border-primary-40 rounded-md p-5 hover:border-primary-100  duration-300 ">
            <div className="flex justify-between">
                <div>
                    <img src={images} alt={images} />
                </div>
                <div className="flex items-center">
                    <span className=" h-[2px] w-14 mr-2 bg-primary-10"></span>
                    <h6 className="font-bold text-lg text-content-text">{index}</h6>
                </div>
            </div>
            <div className="w-full font-semibold text-lg text-center mt-6 mb-3">
                {title}:<span className="ml-2 text-primary-100 font-semibold">{amount}</span>
            </div>
        </div>
    );
};

export default CategoryItem;
