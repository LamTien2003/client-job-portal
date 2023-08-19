import ReviewItem from './ReviewItem';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
const Review = () => {
    return (
        <div>
            <Swiper
                spaceBetween={40}
                slidesPerView={2}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: true,
                }}
                modules={[Navigation, Autoplay]}
                navigation={true}
                onSwiper={(swiper) => console.log(swiper)}
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
