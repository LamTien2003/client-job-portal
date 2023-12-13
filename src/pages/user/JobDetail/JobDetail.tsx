import { useEffect, useLayoutEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useGetJobQuery, useGetJobsQuery } from '@/services/jobsApiSlice';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Banner from '@/components/Banner/Banner';
import JobInfo from './components/JobInfo/JobInfo';
import Job from '@/types/Job';
import JobSummary from './components/JobSummary/JobSummary';
import Loader from '@/components/Loader/Loader';
import Comments from './components/Comments/Comments';
import { Swiper, SwiperSlide } from 'swiper/react';
import RelatedJob from './components/RelatedJob/RelatedJob';

function JobDetail() {
    const [job, setJob] = useState<Job>();
    const [jobByCategory, setJobByCategory] = useState<Job[]>([]);

    const { id } = useParams();

    const { data, isLoading, isError } = useGetJobQuery(id!);
    const {
        data: jobRelate,
        isLoading: isLoadingJobRelate,
        isError: isErrorJobRelate,
    } = useGetJobsQuery({ type: job?.type.id });

    useEffect(() => {
        if (!isLoading && !isError && data?.data?.data) {
            setJob(data?.data?.data);
        }
    }, [isLoading, isError, data?.data?.data]);

    useEffect(() => {
        if (!isLoadingJobRelate && !isErrorJobRelate && jobRelate?.data?.data) {
            setJobByCategory(jobRelate?.data?.data);
        }
    }, [isLoadingJobRelate, isErrorJobRelate, jobRelate?.data?.data]);

    useLayoutEffect(() => {
        scrollTo(0, 0);
    });

    return (
        <>
            {isLoading && <Loader />}
            <div className=" font-family-text selection:bg-primary-100 selection:text-white">
                <div className=" mb-28 ">
                    <Banner page="Chi tiết công việc" />

                    <div className=" w-10/12 mx-auto pt-16 flex lg:flex-col tb:flex-col mb:flex-col ">
                        {!isLoading && !isError && job && <JobInfo data={job} />}
                        {!isLoading && !isError && job && <JobSummary data={job} />}
                    </div>

                    {!isLoading && !isError && job && <Comments data={job} />}

                    <div className=" w-10/12 mx-auto">
                        <h1 className=" font-family-title text-content-title text-2xl font-semibold mb-10">
                            Công việc liên quan:
                        </h1>
                        {jobByCategory.length === 1 ? (
                            <div>Không có công việc nào liên quan hiện tại</div>
                        ) : (
                            <Swiper
                                breakpoints={{
                                    0: {
                                        spaceBetween: 10,
                                        slidesPerView: 1,
                                    },
                                    870: {
                                        spaceBetween: 20,
                                        slidesPerView: 2,
                                    },
                                    1400: {
                                        spaceBetween: 30,
                                        slidesPerView: 3,
                                    },
                                }}
                                // modules={[Pagination, Navigation]}
                            >
                                {jobByCategory.map((data, index) => {
                                    if (data._id === job?._id) return;
                                    return (
                                        <SwiperSlide key={data._id}>
                                            <RelatedJob data={data} />
                                        </SwiperSlide>
                                    );
                                })}
                            </Swiper>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

export default JobDetail;
