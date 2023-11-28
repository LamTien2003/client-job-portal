import { StatisticTopCompany } from '@/types/Statistic';

const Company = ({ company }: { company: StatisticTopCompany }) => {
    return (
        <>
            <div className="flex justify-between gap-6 bg-white shadow-lg rounded-lg p-4 items-center w-[31%]  font-family-text">
                <img className="w-16 h-16 object-cover rounded-lg" src={company?.company?.photo} alt="company" />

                <div className="flex flex-col gap-1">
                    <h5 className="font-medium text-primary-100 text-lg">{company?.company?.companyName}</h5>
                    <p className="text-sm">{company?.company?.description}</p>
                </div>

                <div className="flex gap-2 items-center">
                    <h6 className="font-medium">Số lượng: </h6>
                    <span className="w-10 h-10 flex items-center justify-center bg-primary-100 rounded-full text-white text-xl font-title">
                        {company.amountJobPosted}
                    </span>
                </div>
            </div>
        </>
    );
};

export default Company;
