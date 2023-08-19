import images from '@/assets/images';
type Location = {
    imgLocation: string;
    location: string;
    amount: string;
};
const LocationItem: React.FC<Location> = ({ imgLocation, location, amount }) => {
    return (
        <div className="flex flex-col items-center group cursor-pointer">
            <div className="relative rounded max-w-xs overflow-hidden bg-cover bg-no-repeat">
                <img className="  group-hover:scale-110 duration-300" src={imgLocation} alt="imgLocation" />
            </div>

            <div className="flex mt-6">
                <img src={images.logo.location} alt={images.logo.location} />
                <h5 className="ml-2 group-hover:text-primary-100 text-xl font-semibold text-content-title duration-300">
                    {location}
                </h5>
            </div>

            <p className="text-lg font-normal text-content-text">
                Job Available: <span className="font-semibold text-content-title">{amount}</span>
            </p>
        </div>
    );
};

export default LocationItem;
