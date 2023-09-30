import { Swiper, SwiperSlide } from 'swiper/react';
import LocationItem from './LocationItem';
import { Navigation, Autoplay } from 'swiper/modules';
import { Swiper as SwiperType } from 'swiper';

const Location = ({ swiperRef }: { swiperRef: React.MutableRefObject<SwiperType | undefined> }) => {
    return (
        <div className="flex">
            <Swiper
                spaceBetween={10}
                slidesPerView={1}
                modules={[Navigation, Autoplay]}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                }}
                onBeforeInit={(swiper) => {
                    swiperRef.current = swiper;
                }}
                breakpoints={{
                    767: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    1023: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    1279: {
                        slidesPerView: 4,
                        spaceBetween: 20,
                    },
                }}
                className="w-full"
            >
                <SwiperSlide>
                    <LocationItem
                        imgLocation="https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/bg/sylhet.png"
                        location="Sylhet Bangladesh"
                        amount="1234"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <LocationItem
                        imgLocation="https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/bg/dhaka1.png"
                        location="Dhaka Bangladesh"
                        amount="2943"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <LocationItem
                        imgLocation="https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/bg/newyork1.png"
                        location="NewYork, USA"
                        amount="2186"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <LocationItem
                        imgLocation="https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/bg/chicago.png"
                        location="Chicago, Australia"
                        amount="5678"
                    />
                </SwiperSlide>

                <SwiperSlide>
                    <LocationItem
                        imgLocation="https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/bg/sylhet.png"
                        location="Sylhet Bangladesh"
                        amount="1234"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <LocationItem
                        imgLocation="https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/bg/dhaka1.png"
                        location="Dhaka Bangladesh"
                        amount="2943"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <LocationItem
                        imgLocation="https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/bg/newyork1.png"
                        location="NewYork, USA"
                        amount="2186"
                    />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Location;
