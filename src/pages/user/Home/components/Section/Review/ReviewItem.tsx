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
        <div className="flex justify-center items-center">
            <div className="relative">
                <img
                    className="rounded-md object-cover"
                    src={imgAuthor}
                    alt="testimonial"
                    style={{ width: '900px', height: '220px' }}
                />
                <img
                    className="absolute top-20 -right-6 p-3 rounded-full bg-white border-gray-100 border-2"
                    src={images.logo.quat}
                    alt={images.logo.quat}
                />
            </div>
            <div className="ml-10">
                <div className="flex justify-between">
                    <div>
                        <h5 className="text-content-title font-bold text-xl">{name}</h5>
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

                <p className="mt-5 text-content-text text-xl font-normal">{des}</p>
            </div>
        </div>
    );
};

export default ReviewItem;
