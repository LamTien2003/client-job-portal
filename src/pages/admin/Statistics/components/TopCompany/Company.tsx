import { StatisticTopCompany } from '@/types/Statistic';

const Company = ({ company }: { company: StatisticTopCompany }) => {
    return (
        <>
            {company?.company?.map((item: any, index: any) => (
                <div key={index} className="flex gap-6 bg-white shadow-lg rounded-lg p-4 items-center w-1/3">
                    <img className="w-16 h-16 object-cover rounded-lg" src={item.photo} alt="company" />

                    <div className="flex flex-col gap-1 font-family-text">
                        <h5 className="font-medium text-[#40189D]">{item.companyName}</h5>
                        <p className="text-sm">{item.description}</p>
                        {/* <div className="flex gap-2">
                            <p className="text-sm">{item.location.city}</p>
                            <p className="text-sm">{item.location.district}</p>
                            <p className="text-sm">{item.location.address}</p>
                        </div> */}
                    </div>
                </div>
            ))}
        </>
    );
};

export default Company;
