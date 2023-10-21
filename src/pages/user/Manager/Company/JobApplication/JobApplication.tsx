import { useGetJobApplicationQuery } from '@/services/companiesApiSlice';
import { useEffect, useState } from 'react';
import Item from './components/Item';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const JobApplication = () => {
    const { id } = useParams<string>();

    const [jobApplycation, setJobApplycation] = useState<any[]>([]);
    const { data, isLoading, isError } = useGetJobApplicationQuery(id!);

    useEffect(() => {
        if (!isLoading && !isError && data?.data?.data) {
            setJobApplycation(data?.data?.data);
        }
    }, [data?.data?.data, isLoading, isError]);

    console.log(jobApplycation);

    return (
        <div>
            {jobApplycation.length === 0 && (
                <div>
                    <p>Bạn chưa tạo công việc nào hãy tạo job</p>
                    <Link to="post-job">Tạo công việc ngay!</Link>
                </div>
            )}
            <div className="flex flex-col gap-5">
                {jobApplycation.map((candicate, index) => (
                    <Item key={index} candicate={candicate} />
                ))}
            </div>
        </div>
    );
};

export default JobApplication;
