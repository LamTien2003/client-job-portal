import ReviewItem from './ReviewItem';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { Swiper as SwiperType } from 'swiper';

const Review = ({ swiperRef }: { swiperRef: React.MutableRefObject<SwiperType | undefined> }) => {
    return (
        <div>
            <Swiper
                spaceBetween={0}
                slidesPerView={1}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                }}
                onBeforeInit={(swiper) => {
                    swiperRef.current = swiper;
                }}
                breakpoints={{
                    1279: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                }}
                modules={[Navigation, Autoplay]}
                navigation={false}
                className="w-ful"
            >
                <SwiperSlide>
                    <ReviewItem
                        des="On the other hand, we denounce with to the righteous indignation and dislike the men who are so beguiled to demoralized by the charms of pleasure."
                        name="Jacoline Frangly"
                        imgAuthor="https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/bg/testimonial-author1.png"
                        position="React Developer"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <ReviewItem
                        des="On the other hand, we denounce with to the righteous indignation and dislike the men who are so beguiled to demoralized by the charms of pleasure."
                        name="Jordan Miycol"
                        imgAuthor="https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/bg/testimonial-author2.png"
                        position="UX/UI Engineer"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <ReviewItem
                        des="On the other hand, we denounce with to the righteous indignation and dislike the men who are so beguiled to demoralized by the charms of pleasure."
                        name="Jacoline Frangly"
                        imgAuthor="https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/bg/testimonial-author1.png"
                        position="React Developer"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <ReviewItem
                        des="On the other hand, we denounce with to the righteous indignation and dislike the men who are so beguiled to demoralized by the charms of pleasure."
                        name="Jordan Miycol"
                        imgAuthor="https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/bg/testimonial-author2.png"
                        position="UX/UI Engineer"
                    />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Review;
