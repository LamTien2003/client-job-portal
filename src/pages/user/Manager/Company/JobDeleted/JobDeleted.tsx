import { useGetJobDeletedQuery } from '@/services/companiesApiSlice';
import { useEffect, useState } from 'react';
import Item from './components/Item';

const JobDeleted = () => {
    const [jobDeleted, setJobDeleted] = useState<any[]>([]);
    const { data, isLoading, isError } = useGetJobDeletedQuery();

    useEffect(() => {
        if (!isLoading && !isError && data?.data?.data) {
            setJobDeleted(data?.data?.data);
        }
    }, [isLoading, isError, data?.data?.data]);

    console.log(jobDeleted);

    return (
        <div>
            {jobDeleted.length === 0 && (
                <div>
                    <p>Thùng rác rỗng!</p>
                </div>
            )}
            <div className="flex flex-col gap-5">
                {jobDeleted.map((job, index) => (
                    <Item key={index} job={job} />
                ))}
            </div>
        </div>
    );
};

export default JobDeleted;
