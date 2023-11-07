import Company from '@/types/Company';

const Company = ({ company }: { company: Company }) => {
    return (
        <div className="flex gap-6 bg-white shadow-lg rounded-lg p-4 items-center w-1/3">
            <img className="w-16 h-16 object-cover rounded-lg" src={company.photo} alt="company" />

            <div className="flex flex-col gap-1 font-family-text">
                <h5 className="font-medium text-[#40189D]">{company.companyName}</h5>
                <p className="text-sm">{company.description}</p>
                <p className="text-sm">{company.email}</p>
            </div>
        </div>
    );
};

export default Company;
