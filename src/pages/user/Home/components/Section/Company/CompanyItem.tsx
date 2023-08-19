const CompanyItem: React.FC<{ logo: string }> = ({ logo }) => {
    return (
        <div className="flex items-center w-[196px] h-auto ">
            <img className="object-cover" src={logo} alt={logo} />
        </div>
    );
};

export default CompanyItem;
