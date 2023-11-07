import { Swiper, SwiperSlide } from 'swiper/react';
import LocationItem from './LocationItem';
import { Navigation, Autoplay } from 'swiper/modules';
import { Swiper as SwiperType } from 'swiper';
import images from '@/assets/images';

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
                    <LocationItem imgLocation={images.logo.benthanh} location="Hồ Chí Minh" amount="1234" />
                </SwiperSlide>
                <SwiperSlide>
                    <LocationItem imgLocation={images.logo.hoguom} location="Hà Nội" amount="20" />
                </SwiperSlide>
                <SwiperSlide>
                    <LocationItem imgLocation={images.logo.hue} location="Huế" amount="20" />
                </SwiperSlide>
                <SwiperSlide>
                    <LocationItem imgLocation={images.logo.nhatrang} location="Nha Trang" amount="20" />
                </SwiperSlide>

                <SwiperSlide>
                    <LocationItem imgLocation={images.logo.hoabinh} location="Hoà Bình" amount="123" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Location;
