import { useGetCompaniesQuery } from '@/services/companiesApiSlice';
import ItemCompany from './Company';
import Company from '@/types/Company';
import { useEffect, useState } from 'react';

const TopCompany = () => {
    const [companies, setCompanies] = useState<Company[]>([]);
    const { data, isLoading, isError } = useGetCompaniesQuery({ limit: 3 });

    useEffect(() => {
        if (!isLoading && !isError && data?.data?.data) {
            setCompanies(data?.data?.data);
        }
    }, [isLoading, isError, data?.data?.data]);

    return (
        <div className="flex flex-col gap-5">
            <h5 className="font-family-title text-xl font-medium">Top Công Ty</h5>
            <div className="flex justify-between gap-8">
                {companies.map((company, index) => (
                    <ItemCompany key={index} company={company} />
                ))}
            </div>
        </div>
    );
};

export default TopCompany;
