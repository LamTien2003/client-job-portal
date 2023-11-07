import { useGetJobApplicationQuery } from '@/services/companiesApiSlice';
import { useEffect, useState } from 'react';
import Item from './components/Item';
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

    return (
        <>
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

                <tbody className="font-family-text">
                    {jobApplycation.map((candicate, index) => (
                        <Item key={index} candicate={candicate} />
                    ))}
                </tbody>
            </table>
            {jobApplycation.length === 0 && (
                <div className="font-family-text text-center border border-primary-100 p-5 text-xl">
                    Chưa có ứng viên đăng ký
                </div>
            )}
        </>
    );
};

export default JobApplication;
