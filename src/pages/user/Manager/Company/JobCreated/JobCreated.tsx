import { useGetMyJobCreatedQuery } from '@/services/companiesApiSlice';
import { useEffect, useState } from 'react';
import Item from './components/Item';

const JobCreated = () => {
    const [jobCreated, setJobCreated] = useState<any[]>([]);

    const { data, isLoading, isError } = useGetMyJobCreatedQuery();

    useEffect(() => {
        if (!isLoading && !isError && data?.data?.data) {
            setJobCreated(data?.data?.data);
        }
    }, [isLoading, isError, data?.data?.data]);

    return (
        <>
            <table className="border border-primary-100 w-full text-sm text-center">
                <thead className="w-full bg-primary-100  justify-between items-center p-4  text-white font-family-title text-base">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Tiêu đề
                        </th>
                        <th scope="col" className="w-[25%] px-6 py-3">
                            Danh sách ứng tuyển
                        </th>

                        <th scope="col" className=" w-[15%] px-6 py-3">
                            Trạng thái
                        </th>

                        <th scope="col" className="w-[16%] px-6 py-3">
                            Hành động
                        </th>
                    </tr>
                </thead>

                <tbody className="font-family-text">
                    {jobCreated.map((job, index) => (
                        <Item key={index} job={job} />
                    ))}
                </tbody>
            </table>
            {jobCreated.length === 0 && (
                <div className="font-family-text text-center border border-primary-100 p-5 text-xl">
                    <p>Bạn chưa tạo công việc nào hãy tạo job</p>
                </div>
            )}
        </>
    );
};

export default JobCreated;
