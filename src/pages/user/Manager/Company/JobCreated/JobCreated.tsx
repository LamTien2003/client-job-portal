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
            {jobCreated.length === 0 && (
                <div className="flex w-fulljustify-center items-center">
                    <p>Bạn chưa tạo công việc nào hãy tạo job</p>
                    <Link to="post-job">Tạo công việc ngay!</Link>
                </div>
            )}
            <tbody className="">
                {jobCreated.map((job, index) => (
                    <Item key={index} job={job} />
                ))}
            </tbody>
        </table>
    );
};

export default JobCreated;
