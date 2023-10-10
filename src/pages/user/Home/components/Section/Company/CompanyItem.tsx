const CompanyItem: React.FC<{ logo: string }> = ({ logo }) => {
    return <img className="w-[196px] h-22 object-cover" src={logo} alt={logo} />;
};

export default CompanyItem;
