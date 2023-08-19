import CompanyItem from './CompanyItem';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
const Company = () => {
    return (
        <div className="bg-primary-20 py-14">
            <div className="max-w-7xl mx-auto flex flex-col justify-between">
                <div className="flex items-center">
                    <h4 className="mr-5 text-lg text-content-title font-medium">Our Trusted Company</h4>
                    <span className="h-[2px] w-32 bg-primary-70"></span>
                </div>
                <div className="flex mt-5">
                    <Swiper
                        modules={[Autoplay]}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: true,
                        }}
                        spaceBetween={25}
                        slidesPerView={6}
                        onSwiper={(swiper) => console.log(swiper)}
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
