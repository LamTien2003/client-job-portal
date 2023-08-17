type Category = {
    title: string;
    amount: string;
    index: string;
    images: string;
};
const CategoryItem: React.FC<Category> = ({ title, amount, index, images }) => {
    return (
        <div className="border-[2px] border-primary-40 rounded-md p-5 hover:border-primary-100  duration-300">
            <div className="flex justify-between">
                <div className="icon">
                    <img src={images} alt={images} />
                </div>
                <div className="flex items-center">
                    <span className=" h-[2px] w-14 mr-2 bg-primary-40"></span>
                    <h6 className="font-bold text-lg text-primary-70">{index}</h6>
                </div>
            </div>
            <div className="flex flex-col">
                <h5 className="font-semibold text-xl mt-6 mb-3">
                    <a href="job-listing1.html">{title}</a>
                </h5>
                <p className="font-normal text-content-text text-lg">
                    Job Available: <span className="text-primary-100 font-semibold">{amount}</span>
                </p>
            </div>
        </div>
    );
};

export default CategoryItem;
