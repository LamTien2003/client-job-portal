import FeaturesItem from './FeaturesItem';

const Features = () => {
    return (
        <div className="grid grid-cols-3 grid-rows-2 gap-5 tb:grid-cols-1 lg:grid-cols-2">
            <FeaturesItem />
            <FeaturesItem />
            <FeaturesItem />
            <FeaturesItem />
            <FeaturesItem />
            <FeaturesItem />
        </div>
    );
};

export default Features;
