import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Grid } from 'swiper/modules';
import RecruitersItem from './RecruitersItem';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import { Swiper as SwiperType } from 'swiper';

const Recruiters = ({ swiperRef }: { swiperRef: React.MutableRefObject<SwiperType | undefined> }) => {
    return (
        <div className="w-full ">
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
                <SwiperSlide>
                    <RecruitersItem
                        name="Norland Company"
                        imgRecruiters="https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/bg/company-logo/company-06.png"
                        people="45"
                        location="New-York, USA"
                        amount="21"
                        path=""
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <RecruitersItem
                        name="Germanie Company"
                        imgRecruiters="https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/bg/company-logo/company-07.png"
                        people="86"
                        location="Chicago, Australia"
                        amount="32"
                        path=""
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <RecruitersItem
                        name="Norland Company"
                        imgRecruiters="https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/bg/company-logo/company-06.png"
                        people="45"
                        location="New-York, USA"
                        amount="21"
                        path=""
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <RecruitersItem
                        name="Germanie Company"
                        imgRecruiters="https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/bg/company-logo/company-07.png"
                        people="86"
                        location="Chicago, Australia"
                        amount="32"
                        path=""
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <RecruitersItem
                        name="Norland Company"
                        imgRecruiters="https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/bg/company-logo/company-06.png"
                        people="45"
                        location="New-York, USA"
                        amount="21"
                        path=""
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <RecruitersItem
                        name="Germanie Company"
                        imgRecruiters="https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/bg/company-logo/company-07.png"
                        people="86"
                        location="Chicago, Australia"
                        amount="32"
                        path=""
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <RecruitersItem
                        name="Norland Company"
                        imgRecruiters="https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/bg/company-logo/company-06.png"
                        people="45"
                        location="New-York, USA"
                        amount="21"
                        path=""
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <RecruitersItem
                        name="Germanie Company"
                        imgRecruiters="https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/bg/company-logo/company-07.png"
                        people="86"
                        location="Chicago, Australia"
                        amount="32"
                        path=""
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <RecruitersItem
                        name="Norland Company"
                        imgRecruiters="https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/bg/company-logo/company-06.png"
                        people="45"
                        location="New-York, USA"
                        amount="21"
                        path=""
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <RecruitersItem
                        name="Germanie Company"
                        imgRecruiters="https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/bg/company-logo/company-07.png"
                        people="86"
                        location="Chicago, Australia"
                        amount="32"
                        path=""
                    />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Recruiters;
