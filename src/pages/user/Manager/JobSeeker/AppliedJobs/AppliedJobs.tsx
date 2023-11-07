import { useGetMyApplicationQuery } from '@/services/jobseekerApiSlice';
import { useEffect, useState } from 'react';
import ItemJob from './components/ItemJob';

const AplliedJobs = () => {
    const [jobApplication, setJobApplication] = useState<any[]>([]);

    const { data, isLoading, isError } = useGetMyApplicationQuery();

    useEffect(() => {
        if (!isLoading && !isError && data?.data?.data) {
            setJobApplication(data?.data?.data);
        }
    }, [isLoading, isError, data?.data?.data]);

    return (
        <>
            <table className="border border-primary-100 w-full text-sm text-center">
                <thead className="w-full bg-primary-100  justify-between items-center p-4  text-white font-family-title text-base">
                    <tr>
                        <th scope="col" className="px-6 py-3 w-[40%]">
                            Tiêu đề
                        </th>
                        <th scope="col" className="w-[15%] px-6 py-3">
                            Ngày nộp đơn
                        </th>
                        <th scope="col" className="w-[17%] px-6 py-3">
                            Ngày phỏng vấn
                        </th>
                        <th scope="col" className=" w-[15%] px-6 py-3">
                            Công ty
                        </th>
                        <th scope="col" className="w-[16%] px-6 py-3">
                            Trạng thái
                        </th>
                    </tr>
                </thead>
                <tbody className="font-family-text">
                    {jobApplication.map((job, index) => (
                        <ItemJob key={index} job={job} />
                    ))}
                </tbody>
            </table>
            {jobApplication.length === 0 && (
                <div className="font-family-text text-center border border-primary-100 p-5 text-xl">
                    Danh sách ứng tuyển trống.
                </div>
            )}
        </>
    );
};

export default AplliedJobs;
