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
        <table className="border border-primary-100 w-full text-sm text-center">
            <thead className="w-full bg-primary-100  justify-between items-center p-4  text-white font-family-title text-base">
                <tr>
                    <th scope="col" className="px-6 py-3">
                        Thông tin ứng viên
                    </th>

                    <th scope="col" className="w-[16%] px-6 py-3">
                        Trạng thái
                    </th>

                    <th scope="col" className="w-[16%] px-6 py-3">
                        Hành động
                    </th>
                </tr>
            </thead>
            {jobApplycation.length === 0 && (
                <div>
                    <p>Bạn chưa tạo công việc nào hãy tạo job</p>
                    <Link to="post-job">Tạo công việc ngay!</Link>
                </div>
            )}
            <tbody className="">
                {jobApplycation.map((candicate, index) => (
                    <Item key={index} candicate={candicate} />
                ))}
            </tbody>
        </table>
    );
};

export default JobApplication;
