// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay, Grid } from 'swiper/modules';
// import RecruitersItem from './RecruitersItem';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/grid';
// import 'swiper/css/pagination';
// import { Swiper as SwiperType } from 'swiper';
// import { useGetCompaniesQuery } from '@/services/companiesApiSlice';
// import { useState, useEffect } from 'react';
// import Company from '../Company/Company';

// const Recruiters = ({ swiperRef }: { swiperRef: React.MutableRefObject<SwiperType | undefined> }) => {
//     const [companies, setCompanies] = useState<Company[]>([]);
//     const { data, isLoading, isError } = useGetCompaniesQuery({});

//     useEffect(() => {
//         if (!isLoading && !isError && data?.data?.data) {
//             setCompanies(data?.data?.data);
//         }
//     }, [data?.data?.data, isError, isLoading]);

//     return (
//         <div className="w-full  mb:px-3 tb:px-3 font-family-text">
//             <Swiper
//                 autoplay={{
//                     delay: 2500,
//                     disableOnInteraction: false,
//                     pauseOnMouseEnter: true,
//                 }}
//                 onBeforeInit={(swiper) => {
//                     swiperRef.current = swiper;
//                 }}
//                 spaceBetween={20}
//                 slidesPerView={1}
//                 breakpoints={{
//                     767: {
//                         slidesPerView: 2,
//                         spaceBetween: 20,
//                     },

//                     1279: {
//                         slidesPerView: 3,
//                         spaceBetween: 20,
//                     },
//                 }}
//                 grid={{
//                     rows: 2,
//                     fill: 'row',
//                 }}
//                 modules={[Grid, Autoplay]}
//                 className="w-full"
//             >
//                 {companies.map((company, index) => (
//                     <SwiperSlide key={index}>
//                         <RecruitersItem path={`company-detail/${company.id}`} company={company} />
//                     </SwiperSlide>
//                 ))}
//             </Swiper>
//         </div>
//     );
// };

// export default Recruiters;

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import RecruitersItem from './RecruitersItem';

import { Swiper as SwiperType } from 'swiper';
import { useGetCompaniesQuery } from '@/services/companiesApiSlice';
import { useState, useEffect } from 'react';
import Company from '@/types/Company';
import { useGetCategoriesQuery } from '@/services/categoriesApiSlice';
import Category from '@/types/Category';
import Skeleton from '@/components/Loading/Skeleton';

const Recruiters = ({ swiperRef }: { swiperRef: React.MutableRefObject<SwiperType | undefined> }) => {
    const [companies, setCompanies] = useState<Company[]>([]);
    const [categories, setCategories] = useState<Category[]>([]);

    const { data, isLoading, isError } = useGetCompaniesQuery({});

    const { data: dataCate, isLoading: loadingCate, isError: errorCate } = useGetCategoriesQuery();
    useEffect(() => {
        if (!isLoading && !isError && data?.data?.data) {
            setCompanies(data?.data?.data);
        }

        if (!loadingCate && !errorCate && dataCate?.data?.data) {
            setCategories(dataCate?.data?.data);
        }
    }, [data?.data?.data, isError, isLoading, dataCate?.data?.data, loadingCate, errorCate]);

    return (
        <div className="w-full  mb:px-3 tb:px-3 font-family-text">
            {isLoading && loadingCate && (
                <div className="w-full flex justify-between gap-10 mb:flex-col tb:flex-col ">
                    <Skeleton />
                    <Skeleton />
                    <Skeleton />
                </div>
            )}
            <Swiper
                modules={[Autoplay]}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: true,
                    pauseOnMouseEnter: true,
                }}
                onBeforeInit={(swiper) => {
                    swiperRef.current = swiper;
                }}
                spaceBetween={25}
                slidesPerView={3}
            >
                {categories.map((cate, index) => (
                    <SwiperSlide key={index}>
                        <h5 className="text-primary-title font-family-title text-xl font-title text-center mb-5 uppercase">
                            {cate.categoryName}
                        </h5>
                        <Swiper
                            className="h-[460px]"
                            direction={'vertical'}
                            spaceBetween={20}
                            slidesPerView={2}
                            modules={[Autoplay]}
                            autoplay={{
                                delay: 4000,
                                disableOnInteraction: true,
                                pauseOnMouseEnter: true,
                            }}
                        >
                            {companies.map((company, index) => (
                                <SwiperSlide key={index}>
                                    <RecruitersItem path={`company-detail/${company.id}`} company={company} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Recruiters;
