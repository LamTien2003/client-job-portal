const CounterItem: React.FC<{ images: string; title: string; odometer: string }> = ( props ) => {
    return (
        <div className="flex">
            <div className="p-3 rounded  border-2 border-primary-100 transform rotate-45">
                <img className="transform -rotate-45" src={props.images} alt={props.images} />
            </div>
            <div className="pl-10">
                <p className="font-medium text-xl">{props.title}</p>
                <span className="text-primary-100 text-3xl font-semibold">{props.odometer}</span>
            </div>
        </div>
    );
};

export default CounterItem;
