import images from '@/assets/images';
type Location = {
    imgLocation: string;
    location: string;
    amount: string;
};
const LocationItem: React.FC<Location> = ({ imgLocation, location, amount }) => {
    return (
        <div className="flex flex-col items-center group cursor-pointer font-family-text">
            <div className="relative rounded max-w-xs overflow-hidden bg-cover bg-no-repeat">
                <img
                    className="h-44 w-72 object-cover group-hover:scale-110 duration-300"
                    src={imgLocation}
                    alt="imgLocation"
                />
            </div>

            <div className="flex mt-6 items-center">
                <img className="w-5 h-5" src={images.logo.location} alt={images.logo.location} />
                <h5 className="ml-2 group-hover:text-primary-100 text-xl font-semibold text-content-title duration-300">
                    {location} <span className="text-primary-100">({amount})</span>
                </h5>
            </div>
        </div>
    );
};

export default LocationItem;
