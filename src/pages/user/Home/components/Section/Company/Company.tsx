import CompanyItem from './CompanyItem';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper';

import { Autoplay } from 'swiper/modules';
import { useRef } from 'react';
const Company = () => {
    const swiperRef = useRef<SwiperType>();

    return (
        <div className="bg-primary-20">
            <div className="max-w-7xl mx-auto  py-14 flex flex-col justify-between lg:px-3">
                <div className="flex gap-3 items-center">
                    <h4 className="text-lg text-content-title font-medium">Our Trusted Company</h4>
                    <span className="h-[2px] w-32 bg-primary-70"></span>
                </div>
                <div className="flex mt-5">
                    <Swiper
                        modules={[Autoplay]}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        }}
                        onBeforeInit={(swiper) => {
                            swiperRef.current = swiper;
                        }}
                        spaceBetween={30}
                        slidesPerView={2}
                        breakpoints={{
                            683: {
                                slidesPerView: 3,
                                spaceBetween: 20,
                            },
                            767: {
                                slidesPerView: 4,
                                spaceBetween: 20,
                            },
                            1023: {
                                slidesPerView: 5,
                                spaceBetween: 20,
                            },
                            1279: {
                                slidesPerView: 6,
                                spaceBetween: 30,
                            },
                        }}
                        className="w-full"
                    >
                        <SwiperSlide>
                            <CompanyItem logo="https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/bg/company-logo/trusted-company-06.png" />
                        </SwiperSlide>

                        <SwiperSlide>
                            <CompanyItem logo="https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/bg/company-logo/trusted-company-02.png" />
                        </SwiperSlide>

                        <SwiperSlide>
                            <CompanyItem logo="https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/bg/company-logo/trusted-company-03.png" />
                        </SwiperSlide>

                        <SwiperSlide>
                            <CompanyItem logo="https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/bg/company-logo/trusted-company-04.png" />
                        </SwiperSlide>

                        <SwiperSlide>
                            <CompanyItem logo="https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/bg/company-logo/trusted-company-05.png" />
                        </SwiperSlide>

                        <SwiperSlide>
                            <CompanyItem logo="https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/bg/company-logo/trusted-company-06.png" />
                        </SwiperSlide>

                        <SwiperSlide>
                            <CompanyItem logo="https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/bg/company-logo/trusted-company-01.png" />
                        </SwiperSlide>

                        <SwiperSlide>
                            <CompanyItem logo="https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/bg/company-logo/trusted-company-02.png" />
                        </SwiperSlide>

                        <SwiperSlide>
                            <CompanyItem logo="https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/bg/company-logo/trusted-company-03.png" />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default Company;
