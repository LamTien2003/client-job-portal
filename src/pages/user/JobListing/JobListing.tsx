// import { url } from 'inspector';
import { useEffect, useState } from 'react';
// import { toast } from 'react-toastify';
// import { urlToHttpOptions } from 'url';
// import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import ClipLoader from "react-spinners/ClipLoader";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader"

import Banner from '@/components/Banner/Banner';

import Sidebar from './components/Sidebar/Sidebar';
import { useGetJobsQuery } from '@/services/jobsApiSlice';
import Job from '@/types/Job';
import JobColumn from './components/JobColumn/JobColumn';
import JobGutter from './components/JobGutter/JobGutter';
import { ListColumn, ListGutter } from '@/components/Icons';
import Loader from '@/components/Loader/Loader';

const JobListing = () => {
    const [jobs, setJobs] = useState<Job[]>([]);
    const [jobList, setJobList] = useState<Job[]>([]);
    const [listStyle, setListStyle] = useState<'column' | 'gutter'>('column');
    const [page, setPage] = useState<number>(1)

    const { data, isLoading, isError } = useGetJobsQuery({
        page: page,
        limit: 5
    });

    useEffect(() => {
        if (!isLoading && !isError && data?.data?.data) {
            setJobs(data?.data?.data);
            setJobList(data?.data?.data);
        }
    }, [data?.data?.data, isError, isLoading, page]);

    return (
        <>
            {isLoading && <Loader isLoading={isLoading} />}
            <div>
                <Banner page="Job Listing" />
                <div className=" max-w-7xl ml-auto mr-auto pt-16 flex justify-between xl:ml-7 xl:mr-7 xl:max-w-7xl lg:max-w-4xl lg:flex-col lg:ml-auto lg:mr-auto tb:max-w-3xl mb:max-w-2xl">
                    <Sidebar filter={setJobList} />
                    <div className=" w-3/4 ml-3 mr-3 flex flex-col xl:ml-auto xl:mr-auto lg:pr-0 lg:w-10/12 tb:w-11/12">
                        <div className=" mb-6 pl-3 pr-3 flex justify-between lg:flex-col">
                            <p className="text-content-text font-medium pt-2 pb-2">
                                Hiện có <span className=" text-primary-100 font-semibold">{jobList.length}</span> công việc
                            </p>
                            <div>
                                <button className=" mr-5 ml-7" onClick={() => setListStyle('gutter')}>
                                    <ListGutter color={listStyle} />
                                </button>
                                <button onClick={() => setListStyle('column')}>
                                    <ListColumn color={listStyle} />
                                </button>
                            </div>
                        </div>
                        <div className=' mb-10'>
                            {isLoading && 'isLoading...'}
                            {!isLoading && !isError && jobList && listStyle === 'column' && <JobColumn data={jobList} changePage={setPage} />}
                            {!isLoading && !isError && jobList && listStyle === 'gutter' && <JobGutter data={jobList} changePage={setPage} />}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
        
};

export default JobListing;
