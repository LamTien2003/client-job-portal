import { BiSearch } from 'react-icons/bi';
import { BsColumnsGap } from 'react-icons/bs';
import { FaList } from 'react-icons/fa';
import { Checkbox, FormControlLabel, Pagination } from '@mui/material';
import JobItem from './components/JobItem';
import { useEffect, useState } from 'react';
import { useGetAllJobsQuery, useGetJobsNotAcceptQuery, useGetJobsQuery } from '@/services/jobsApiSlice';
import Job from '@/types/Job';
import useDebounce from '@/hooks/useDebounce';
function Jobs() {
    const [data, setData] = useState<Job[]>([]);
    const [page, setPage] = useState<number>(1);

    const [total, setTotal] = useState<number>(0);

    const [query, setQuery] = useState({ page: page, limit: 4 });

    const [searchValue, setSearchValue] = useState<string>('');
    const [selectedTab, setSelectedTab] = useState<string>('all');

    const { data: jobsAll, isLoading: jobAllLoading, isError: jobAllError } = useGetAllJobsQuery(query);

    const debouncedSearchValue = useDebounce(searchValue || '', 300);

    const { data: jobsNotAccept, isLoading: jobNotAcceptLoading } = useGetJobsNotAcceptQuery(query);

    const { data: jobsAccept, isLoading: jobAcceptLoading } = useGetJobsQuery(query);

    useEffect(() => {
        if (!jobAllLoading && !jobAllError && jobsAll?.data?.data && selectedTab == 'all') {
            setData(jobsAll?.data?.data);
            if (total === 0) {
                setTotal(jobsAll?.data?.totalItems || 0);
            } else {
                setTotal(jobsAll?.data?.totalItems || 0);
            }
        }

        if (!jobAcceptLoading && jobsAccept?.data?.data && selectedTab == 'accepted') {
            setData(jobsAccept?.data?.data);
            if (total === 0) {
                setTotal(jobsAccept?.data?.totalItems || 0);
            } else {
                setTotal(jobsAccept?.data?.totalItems || 0);
            }
        }

        if (!jobNotAcceptLoading && jobsNotAccept?.data?.data && selectedTab == 'notAccepted') {
            setData(jobsNotAccept?.data?.data);
            if (total === 0) {
                setTotal(jobsNotAccept?.data?.totalItems || 0);
            } else {
                setTotal(jobsNotAccept?.data?.totalItems || 0);
            }
        }
    }, [
        jobsAll?.data?.data,
        jobAllLoading,
        jobAllError,

        jobsAccept?.data?.data,
        jobAcceptLoading,

        jobsNotAccept?.data?.data,
        jobNotAcceptLoading,
    ]);

    useEffect(() => {
        setQuery((prevQuery) => ({
            ...prevQuery,
            q: debouncedSearchValue,
        }));
    }, [debouncedSearchValue]);

    const handleTabClick = (tab: string) => {
        setSelectedTab(tab);
        setPage(1);
        setQuery((prevQuery) => ({
            ...prevQuery,
            page: 1,
        }));

        if (tab === 'all') {
            setData(jobsAll?.data?.data || []);
            setTotal(jobsAll?.data?.totalItems || 0);
        } else if (tab === 'accepted') {
            setData(jobsAccept?.data?.data || []);
            setTotal(jobsAccept?.data?.totalItems || 0);
        } else if (tab === 'notAccepted') {
            setData(jobsNotAccept?.data?.data || []);
            setTotal(jobsNotAccept?.data?.totalItems || 0);
        }
    };
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(event.target.value);
    };

    const handlePageChange = (event: React.ChangeEvent<unknown>, newPage: number) => {
        setPage(newPage);
        setQuery((prevQuery) => ({
            ...prevQuery,
            page: newPage,
        }));
    };

    return (
        <div className="flex flex-col gap-10 pb-10">
            <div className="flex justify-between items-center">
                <div className="flex gap-5 font-family-title text-[#40189D] font-medium">
                    <button
                        className={`py-2 px-4 border-2 border-secondary-100 rounded-3xl ${
                            selectedTab === 'all' ? 'bg-[#40189D] text-white' : ''
                        }`}
                        onClick={() => handleTabClick('all')}
                    >
                        Tất cả
                    </button>
                    <button
                        className={`p-2 px-4 border-2 rounded-3xl border-secondary-100 ${
                            selectedTab === 'accepted' ? 'bg-[#40189D] text-white' : ''
                        }`}
                        onClick={() => handleTabClick('accepted')}
                    >
                        Đã duyệt
                    </button>
                    <button
                        className={`p-2 px-4 border-2 rounded-3xl border-secondary-100 ${
                            selectedTab === 'notAccepted' ? 'bg-[#40189D] text-white' : ''
                        }`}
                        onClick={() => handleTabClick('notAccepted')}
                    >
                        Chưa duyệt
                    </button>
                </div>

                <div className="flex items-center border-2 rounded-full border-[#40189D]">
                    <input
                        value={searchValue}
                        type="text"
                        className="h-12 w-80 rounded-l-3xl outline-none border-none px-5 font-family-text text-content-text bg-transparent"
                        placeholder="Tìm kiếm công việc ..."
                        onChange={handleInputChange}
                    />
                    <div className="flex items-center px-4 text-white font-extrabold rounded-r-3xl text-xl bg-[#40189D] h-12 ">
                        <BiSearch />
                    </div>
                </div>
            </div>

            <div className="flex justify-between items-center">
                <div className="flex flex-col gap-3 font-family-text ">
                    <h5 className="text-content-title font-title text-lg">Hiển thị {total} kết quả việc làm.</h5>
                    <h6 className="text-content-text">Dựa trên sở thích của bạn.</h6>
                </div>

                <div className="flex gap-5">
                    <div className="flex gap-4">
                        <FormControlLabel control={<Checkbox color="secondary" />} name="fulltime" label="Fulltime" />
                        <FormControlLabel control={<Checkbox color="secondary" />} name="partime" label="Partime" />
                        <FormControlLabel control={<Checkbox color="secondary" />} name="remote" label="Remote" />
                    </div>

                    <div className="flex gap-4">
                        <button className="flex items-center justify-center text-[#40189D] w-10 h-10 rounded-full border-[#40189D] border-2 hover:bg-[#40189D] hover:text-white duration-300 ">
                            <FaList />
                        </button>

                        <button className="flex items-center justify-center text-[#40189D] w-10 h-10 rounded-full border-[#40189D] border-2 hover:bg-[#40189D] hover:text-white duration-300 ">
                            <BsColumnsGap />
                        </button>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 gap-6">
                {jobAllLoading || jobNotAcceptLoading || jobAcceptLoading ? (
                    <div className="bg-white text-center p-5">Loading...</div>
                ) : (
                    <>
                        {data.map((job, index) => (
                            <JobItem key={index} job={job} />
                        ))}
                        {data.length === 0 && (
                            <div className="bg-white text-center p-5 font-family-text text-xl">Công việc trống!</div>
                        )}
                        {data.length > 0 && (
                            <Pagination
                                count={Math.ceil(total / query.limit)}
                                page={page}
                                onChange={handlePageChange}
                            />
                        )}
                    </>
                )}
            </div>
        </div>
    );
}

export default Jobs;
