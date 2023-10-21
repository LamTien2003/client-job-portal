import { useGetMyJobCreatedQuery } from '@/services/companiesApiSlice';
import { useEffect, useState } from 'react';
import Item from './components/Item';
import { Link } from 'react-router-dom';

const JobCreated = () => {
    const [jobCreated, setJobCreated] = useState<any[]>([]);

    const { data, isLoading, isError } = useGetMyJobCreatedQuery();

    useEffect(() => {
        if (!isLoading && !isError && data?.data?.data) {
            setJobCreated(data?.data?.data);
        }
    }, [isLoading, isError, data?.data?.data]);

    console.log(jobCreated);

    return (
        <div>
            {jobCreated.length === 0 && (
                <div>
                    <p>Bạn chưa tạo công việc nào hãy tạo job</p>
                    <Link to="post-job">Tạo công việc ngay!</Link>
                </div>
            )}
            <div className="flex flex-col gap-5">
                {jobCreated.map((job, index) => (
                    <Item key={index} job={job} />
                ))}
            </div>
        </div>
    );
};

export default JobCreated;
