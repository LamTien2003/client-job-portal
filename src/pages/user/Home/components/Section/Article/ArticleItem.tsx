import images from '@/assets/images';

type Article = {
    month: string;
    date: string;
    comment: string;
    name: string;
    title: string;
    imgArticle: string;
};
const ArticleItem: React.FC<Article> = ({ month, date, comment, name, title, imgArticle }) => {
    return (
        <div className="flex flex-col font-family-text">
            <div className="relative ">
                <img className="object-cover rounded-md" src={imgArticle} />
                <div className="absolute rounded-xl -bottom-8 left-4 p-2 bg-primary-100 flex flex-col items-center lg:bottom-0 lg:left-0 lg:rounded-none">
                    <span className="font-semibold text-lg text-white">{date}</span>
                    <h5 className="font-normal text-white">{month}</h5>
                </div>
            </div>

            <div className="flex pl-28 py-2 justify-between items-center lg:pl-0 lg:pt-5 lg:text-sm">
                <div className="flex">
                    <img src={images.logo.comment} alt={images.logo.comment} />
                    <h5 className="ml-1 font-medium text-content-text">{comment}</h5>
                </div>

                <div className="flex ">
                    <img src={images.logo.user} alt={images.logo.user} />
                    <h5 className="ml-1 font-medium text-content-text">{name}</h5>
                </div>
            </div>

            <h4 className="my-3 font-semibold text-content-title text-lxl lg:text-lg">{title}</h4>
            <div className="group">
                <div className="flex items-center group-hover:cursor-pointer ">
                    <div className="mr-2 relative">
                        <img
                            className="-left-2 top-1.5 absolute duration-300 group-hover:-left-1 mb:top-1"
                            src={images.arrow}
                            alt={images.arrow}
                        />
                        <img src={images.elliose} alt={images.elliose} />
                    </div>
                    <span className="text-base font-medium group-hover:text-primary-100 ">Explore More</span>
                </div>
            </div>
        </div>
    );
};

export default ArticleItem;
