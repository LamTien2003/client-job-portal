import images from '@/assets/images';
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

    console.log(jobApplication);

    return (
        <>
            <table className="border border-primary-100 w-full text-sm text-left ">
                <thead className="w-full  bg-primary-100  justify-between items-center p-4  text-white uppercase">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Title
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Apply Date
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Company
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Status
                        </th>
                    </tr>
                </thead>
                <tbody className="">
                    {jobApplication.map((job) => (
                        <ItemJob job={job} />
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default AplliedJobs;
