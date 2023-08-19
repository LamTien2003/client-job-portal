import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Grid } from 'swiper/modules';
import RecruitersItem from './RecruitersItem';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
const Recruiters = () => {
    return (
        <div className="w-full">
            <Swiper
                slidesPerView={3}
                spaceBetween={20}
                grid={{
                    rows: 2,
                    fill: 'row',
                }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: true,
                }}
                modules={[Grid, Autoplay]}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide>
                    <RecruitersItem
                        name="Norland Company"
                        imgRecruiters="https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/bg/company-logo/company-06.png"
                        people="45"
                        location="New-York, USA"
                        amount="21"
                    />
                </SwiperSlide>

                <SwiperSlide>
                    <RecruitersItem
                        name="Germanie Company"
                        imgRecruiters="https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/bg/company-logo/company-07.png"
                        people="86"
                        location="Chicago, Australia"
                        amount="32"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <RecruitersItem
                        name="Norland Company"
                        imgRecruiters="https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/bg/company-logo/company-06.png"
                        people="45"
                        location="New-York, USA"
                        amount="21"
                    />
                </SwiperSlide>

                <SwiperSlide>
                    <RecruitersItem
                        name="Germanie Company"
                        imgRecruiters="https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/bg/company-logo/company-07.png"
                        people="86"
                        location="Chicago, Australia"
                        amount="32"
                    />
                </SwiperSlide>

                <SwiperSlide>
                    <RecruitersItem
                        name="Norland Company"
                        imgRecruiters="https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/bg/company-logo/company-06.png"
                        people="45"
                        location="New-York, USA"
                        amount="21"
                    />
                </SwiperSlide>

                <SwiperSlide>
                    <RecruitersItem
                        name="Germanie Company"
                        imgRecruiters="https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/bg/company-logo/company-07.png"
                        people="86"
                        location="Chicago, Australia"
                        amount="32"
                    />
                </SwiperSlide>

                <SwiperSlide>
                    <RecruitersItem
                        name="Norland Company"
                        imgRecruiters="https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/bg/company-logo/company-06.png"
                        people="45"
                        location="New-York, USA"
                        amount="21"
                    />
                </SwiperSlide>

                <SwiperSlide>
                    <RecruitersItem
                        name="Germanie Company"
                        imgRecruiters="https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/bg/company-logo/company-07.png"
                        people="86"
                        location="Chicago, Australia"
                        amount="32"
                    />
                </SwiperSlide>

                <SwiperSlide>
                    <RecruitersItem
                        name="Norland Company"
                        imgRecruiters="https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/bg/company-logo/company-06.png"
                        people="45"
                        location="New-York, USA"
                        amount="21"
                    />
                </SwiperSlide>

                <SwiperSlide>
                    <RecruitersItem
                        name="Germanie Company"
                        imgRecruiters="https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/bg/company-logo/company-07.png"
                        people="86"
                        location="Chicago, Australia"
                        amount="32"
                    />
                </SwiperSlide>

                
            </Swiper>
        </div>
    );
};

export default Recruiters;
