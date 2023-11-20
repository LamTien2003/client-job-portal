import { useEffect, useLayoutEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useGetJobQuery } from '@/services/jobsApiSlice';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Banner from '@/components/Banner/Banner';
import RelatedJob from './components/RelatedJob/RelatedJob';
import JobInfo from './components/JobInfo/JobInfo';
import Job from '@/types/Job';
import JobSummary from './components/JobSummary/JobSummary';
import Loader from '@/components/Loader/Loader';
import Comments from './components/Comments/Comments';

function JobDetail() {
    const [job, setJob] = useState<Job>();

    const { id } = useParams();

    const { data, isLoading, isError } = useGetJobQuery(id!);
    
    useEffect(() => {
        if (!isLoading && !isError && data?.data?.data) {
            setJob(data?.data?.data);
        }
    }, [isLoading, isError, data?.data?.data]);

    useLayoutEffect(() => {
        scrollTo(0,0)
    }, [])

    return (
        <>
            {isLoading && <Loader/>}
            <div className=" font-family-text selection:bg-primary-100 selection:text-white">
                <div className=" mb-28 ">
                    <Banner page="Job Detail" />

                    <div className=" w-10/12 mx-auto pt-16 flex lg:flex-col marker:">
                        {!isLoading && !isError && job && <JobInfo data={job} />}
                        {!isLoading && !isError && job && <JobSummary data={job} />}
                    </div>

                    {!isLoading && !isError && job && <Comments data={job} />}

                    <div className=" w-10/12 mx-auto">
                        <h1 className=" font-family-title text-content-title text-2xl font-semibold mb-10">Related Jobs:</h1>
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
                            {[...Array(4)].map((item, index) => {
                                {
                                    item;
                                }
                                return (
                                    <SwiperSlide key={index}>
                                        <RelatedJob
                                            position="Assistant Laboratorist"
                                            shiftsWork="Full Time, Part Time"
                                            salary="$60-76$"
                                            vacancy="Per Month"
                                            deadline="Per Month"
                                            logo="https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/bg/company-logo/company-02.png"
                                        />
                                    </SwiperSlide>
                                );
                            })}
                        </Swiper>
                    </div>
                </div>
            </div>
        </>
    );
}

export default JobDetail;
