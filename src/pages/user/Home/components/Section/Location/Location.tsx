import { Swiper, SwiperSlide } from 'swiper/react';
import LocationItem from './LocationItem';
import { Navigation } from 'swiper/modules';
const Location = () => {
    return (
        <div className="flex">
            <Swiper
                spaceBetween={25}
                slidesPerView={4}
                modules={[Navigation]}
                navigation={true}
                onSwiper={(swiper) => console.log(swiper)}
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
