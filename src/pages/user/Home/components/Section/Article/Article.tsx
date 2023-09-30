import { Swiper, SwiperSlide } from 'swiper/react';

import ArticleItem from './ArticleItem';
import { Navigation, Autoplay } from 'swiper/modules';

const Article = () => {
    return (
        <Swiper
            spaceBetween={0}
            slidesPerView={1}
            modules={[Navigation, Autoplay]}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
            }}
            breakpoints={{
                767: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                1023: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                1279: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
            }}
            className="w-full"
        >
            <SwiperSlide>
                <ArticleItem
                    month="March"
                    date="02"
                    comment="03 Comments"
                    name="Mr. Jack Frank"
                    title="To Make Your Smartness & Catch Your Bright Dream."
                    imgArticle="https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/blog/blog-img-01.png"
                />
            </SwiperSlide>

            <SwiperSlide>
                <ArticleItem
                    month="March"
                    date="04"
                    comment="11 Comments"
                    name="Mr. Jack Frank"
                    title="Be Confident Your Dream & Struggle About Your Bright Dream"
                    imgArticle="https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/blog/blog-img-02.png"
                />
            </SwiperSlide>

            <SwiperSlide>
                <ArticleItem
                    month="March"
                    date="05"
                    comment="02 Comments"
                    name="Mr. Jack Frank"
                    title="To Make Your Smartness & Catch Your Bright Dream."
                    imgArticle="https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/blog/blog-img-03.png"
                />
            </SwiperSlide>
        </Swiper>
    );
};

export default Article;
