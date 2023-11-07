import { useGetJobsQuery } from '@/services/jobsApiSlice';

import Job from '@/types/Job';
import { useState, useEffect } from 'react';
import FeaturesItem from './FeaturesItem';
import Skeleton from '@/components/Loading/Skeleton';
import { BsArrowRight } from 'react-icons/bs';
const Features = () => {
    const [jobs, setJobs] = useState<Job[]>([]);
    const [query, setQuery] = useState({ limit: 3 });
    const [isLoadingMore, setIsLoadingMore] = useState(false);
    const { data, isLoading, isError } = useGetJobsQuery(query);

    useEffect(() => {
        if (!isLoading && !isError && data?.data?.data) {
            setJobs(data?.data?.data);
        }
        if (isLoadingMore) {
            setIsLoadingMore(false);
        }
    }, [data?.data?.data, isError, isLoading, isLoadingMore]);

    const seeMoreDataHandler = () => {
        if (isLoading) return;
        setIsLoadingMore(true);
        const dataLength = jobs.length;
        setQuery({ limit: dataLength + 3 });
    };
    return (
        <div className="w-full">
            {isLoading && (
                <>
                    <Skeleton />
                    <Skeleton />
                    <Skeleton />
                </>
            )}

            <div className="grid grid-cols-3 gap-6">
                {jobs.map((job, index) => (
                    <FeaturesItem key={index} path={`job-detail/${job.id}`} job={job} />
                ))}
            </div>

            <div className="flex items-center justify-center mt-10">
                <button
                    onClick={() => seeMoreDataHandler()}
                    className="flex items-center rounded-lg gap-2 px-5 py-2 text-white font-semibold bg-primary-100 hover:bg-black duration-300"
                >
                    {isLoadingMore ? 'Đang tải...' : 'Xem thêm'}
                    <div className="text-xl text-white">
                        <BsArrowRight />
                    </div>
                </button>
            </div>
        </div>
    );
};

export default Features;
