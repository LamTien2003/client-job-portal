import { useEffect, useLayoutEffect, useState } from 'react';
import 'rc-slider/assets/index.css';
import Banner from '@/components/Banner/Banner';
import Sidebar from './components/Sidebar/Sidebar';
import { useGetJobsQuery } from '@/services/jobsApiSlice';
import Job from '@/types/Job';
import JobColumn from './components/JobColumn/JobColumn';
import JobGutter from './components/JobGutter/JobGutter';
import { ListColumn, ListGutter } from '@/components/Icons'
import Skeleton from '@/components/Loading/Skeleton';
import { useSearchParams } from 'react-router-dom';

type filterObject = {
    idCat: string | null,
    salary: {min: number, max: number}
}
const JobListing = () => {
    const [jobList, setJobList] = useState<Job[]>([]);
    const [totalJob, setTotalJob] = useState<number>(0)
    const [filter, setFilter] = useState<filterObject>({idCat: null, salary: {min: 500000, max: 10000000}})
    const [listStyle, setListStyle] = useState<'column' | 'gutter'>('column');
    const [page, setPage] = useState<number>(1)
    
    const [searchParams] = useSearchParams()
    const q = searchParams.get('q')
    const type = searchParams.get('type')

    const { data, isLoading, isError } = useGetJobsQuery(
        {page: 1, limit: 5}
    //     q ? type ? {
    //     page: page,
    //     limit: 5,
    //     q: q ? q : '',
    //     type: type
    // } : {
    //     page: page,
    //     limit: 5,
    //     q: q,
    // } : type ? {
    //     page: page,
    //     limit: 5,
    //     type: type
    // } : (filter.idCat === null ? {
    //     page: page,
    //     limit: 5,
    //     ['salary[gte]']: filter.salary.min,
    //     ['salary[lte]']: filter.salary.max,
    // } : {
    //     page: page,
    //     limit: 5,
    //     ['salary[gte]']: filter.salary.min,
    //     ['salary[lte]']: filter.salary.max,
    //     type: filter.idCat
    // })
    );

    const handleFilter = (filterObj: filterObject) => {
        setFilter(filterObj)
        setPage(1)
    }

    useEffect(() => {
        if (!isLoading && !isError && data?.data?.data) {
            setJobList(data?.data?.data);
        }
    }, [data?.data?.data , isError, isLoading]);

    useEffect(() => {
        if (!isLoading && !isError && data?.data?.totalItems) {
            setTotalJob(data?.data?.totalItems)
        }
    }, [data?.data?.totalItems , isError, isLoading]);

    useLayoutEffect(() => {
        scrollTo(0,0)
    }, [])

    const pageNumber = totalJob && (totalJob % 5 === 0) ? (totalJob / 5) : Math.floor(totalJob / 5 + 1)

    return (
        <>
            <Banner page="Job Listing" />
            <div className=" max-w-7xl font-family-text ml-auto mr-auto pt-[50px] flex justify-between xl:mx-7 xl:max-w-7xl lg:max-w-4xl lg:flex-col lg:ml-auto lg:mr-auto tb:flex-col tb:max-w-3xl mb:flex-col mb:max-w-2xl">
                <Sidebar filter={handleFilter} />
                <div className=" w-3/4 ml-3 mr-3 flex flex-col xl:mx-auto lg:mx-auto tb:mx-auto mb:mx-auto lg:pr-0 lg:w-10/12 tb:w-10/12 mb:w-11/12">
                    <div className=" mb-6 pl-3 pr-3 flex justify-between">
                        <p className="text-content-text font-medium pt-2 pb-2">
                            Hiện có <span className=" text-primary-100 font-semibold">{totalJob}</span> công việc
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
                        {isLoading && [...Array(5)].map((item, index) => <div key={index} className=' mb-7'><Skeleton />{item}</div>)}
                        {!isLoading && !isError && jobList && listStyle === 'column' && <JobColumn data={jobList} changePage={setPage} />}
                        {!isLoading && !isError && jobList && listStyle === 'gutter' && <JobGutter data={jobList} changePage={setPage} />}
                        <div className=' flex justify-center'>
                            {pageNumber !== 1 && [...Array(pageNumber)].map((item, index) => (
                                <div key={index} className=' flex justify-center items-center w-10 h-10 text-white text-lg font-semibold bg-primary-100 rounded-full mr-2 ml-2 cursor-pointer' onClick={() =>setPage(index + 1)}>{item}{index + 1}</div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
        
};

export default JobListing;
