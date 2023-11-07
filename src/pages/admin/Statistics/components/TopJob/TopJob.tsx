import { useState, useEffect } from 'react';
import JobItem from './Job';
import Job from '@/types/Job';
import { useGetAllJobsQuery } from '@/services/jobsApiSlice';

const TopJob = () => {
    const [jobs, setJobs] = useState<Job[]>([]);

    const { data, isLoading, isError } = useGetAllJobsQuery({ limit: 2 });

    useEffect(() => {
        if (!isLoading && !isError && data?.data?.data) {
            setJobs(data?.data?.data);
        }
    }, [isLoading, isError, data?.data?.data]);

    return (
        <div className="flex flex-col  w-[30%]  gap-6">
            <h5 className="font-family-title text-xl font-medium text-center">Top Công Việc</h5>

            <div className="flex flex-col gap-4">
                {jobs.map((job, index) => (
                    <JobItem key={index} job={job} />
                ))}
            </div>
        </div>
    );
};

export default TopJob;
