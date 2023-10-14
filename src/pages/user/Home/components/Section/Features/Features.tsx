import { useGetJobsQuery } from '@/services/jobsApiSlice';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Grid } from 'swiper/modules';
import Job from '@/types/Job';
import { useState, useEffect } from 'react';
import FeaturesItem from './FeaturesItem';
import Skeleton from '@/components/Loading/Skeleton';
import { Swiper as SwiperType } from 'swiper';
const Features = ({ swiperRef }: { swiperRef: React.MutableRefObject<SwiperType | undefined> }) => {
    const [jobs, setJobs] = useState<Job[]>([]);

    const { data, isLoading, isError } = useGetJobsQuery({});

    useEffect(() => {
        if (!isLoading && !isError && data?.data?.data) {
            setJobs(data?.data?.data);
        }
    }, [data?.data?.data, isError, isLoading]);

    return (
        <div className="w-full">
            {isLoading && (
                <>
                    <Skeleton />
                    <Skeleton />
                    <Skeleton />
                </>
            )}

            <Swiper
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                }}
                onBeforeInit={(swiper) => {
                    swiperRef.current = swiper;
                }}
                spaceBetween={25}
                slidesPerView={1}
                breakpoints={{
                    767: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },

                    1279: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                }}
                grid={{
                    rows: 2,
                    fill: 'row',
                }}
                modules={[Grid, Autoplay]}
                className="w-full"
            >
                {jobs.map((job, index) => (
                    <SwiperSlide key={index}>
                        <FeaturesItem path={`job/${job.id}`} job={job} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Features;
