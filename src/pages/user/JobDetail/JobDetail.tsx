// import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { useGetJobQuery } from '@/services/jobsApiSlice';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Banner from '@/components/Banner/Banner';
import RelatedJob from './components/RelatedJob/RelatedJob';
import MainDescription from './components/MainDescription/MainDescription';
import JobInfo from './components/JobInfo/JobInfo';
import Job from '@/types/Job';
import JobSummary from './components/JobSummary/JobSummary';

function JobDetail() {
    const [job, setJob] = useState<Job>();

    const { id } = useParams();

    const { data, isLoading, isError } = useGetJobQuery(id!);

    useEffect(() => {
        if (!isLoading && !isError && data?.data?.data) {
            setJob(data?.data?.data);
        }
    }, [isLoading, isError, data?.data?.data]);

    return (
        <>
            {isLoading ? (
                'Loading...'
            ) : (
                <div className="selection:bg-primary-100 selection:text-white">
                    <div className=" mb-28 ">
                        <Banner page="Job Detail" />

                        <div className=" w-10/12 mr-auto ml-auto pt-16 mb-28 flex lg:flex-col marker:">
                            {/* job detail */}
                            <div className=" w-2/3 pl-3 pr-3 lg:w-full ">
                                {!isLoading && !isError && job && (
                                    <div>
                                        <JobInfo data={job} />

                                        <MainDescription
                                            title="Job Description"
                                            generalDesc="A UI/UX (User Interface/User Experience) designer is responsible for designing and creating engaging and effective interfaces for software and web applications. This includes designing the layout, visual design, and interactivity of the user interface."
                                            jobDesc={[]}
                                        />
                                    </div>
                                )}
                            </div>

                            {/* more info */}
                            {!isLoading && !isError && job && <JobSummary data={job} />}
                        </div>

                        <div className=" w-10/12 mr-auto ml-auto">
                            <h1 className=" text-content-title text-2xl font-semibold mb-10">Related Jobs:</h1>
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
            )}
        </>
    );
}

export default JobDetail;
