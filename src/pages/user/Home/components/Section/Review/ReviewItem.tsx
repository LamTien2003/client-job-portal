import images from '@/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

type Review = {
    imgAuthor: string;
    name: string;
    position: string;
    des: string;
};
const ReviewItem: React.FC<Review> = ({ imgAuthor, name, position, des }) => {
    return (
        <div className="flex justify-center items-center gap-8 mb:flex-col">
            <div className="relative w-[40%] lg:w-[25%] mb:w-[50%]">
                <img className="rounded-md w-full h-fit object-cover" src={imgAuthor} alt="testimonial" />
                <img
                    className="absolute top-20 -right-6 p-3 rounded-full bg-white border-gray-100 border-2"
                    src={images.logo.quat}
                    alt={images.logo.quat}
                />
            </div>
            <div className="w-[60%] lg:w-full">
                <div className="flex justify-between items-center">
                    <div>
                        <h5 className="text-content-title font-bold text-xl ">{name}</h5>
                        <span className="text-content-text font-normal ">{position}</span>
                    </div>

                    <div className="flex text-sm items-end text-yellow-800 font-normal">
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                    </div>
                </div>

                <p className="mt-5 text-content-text text-xl font-normal ">{des}</p>
            </div>
        </div>
    );
};

export default ReviewItem;
