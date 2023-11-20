import Banner from './components/Banner/Banner';
import Section from './components/Section/Section';
import Category from './components/Section/Category/Category';
import Features from './components/Section/Features/Features';
import Process from './components/Section/Process/Process';
import Location from './components/Section/Location/Location';
import Company from './components/Section/Company/Company';
import Recruiters from './components/Section/Recruiters/Recruiters';
import Article from './components/Section/Article/Article';
import { Swiper as SwiperType } from 'swiper';
import { useRef } from 'react';
const Home = () => {
    const swiperRefLocation = useRef<SwiperType>();
    const swiperRefRecruiters = useRef<SwiperType>();
    const swiperRefCategories = useRef<SwiperType>();

    const titleCategory = (
        <span>
            Trending Jobs <span className="text-primary-100">Category</span>
        </span>
    );
    const titleFeatured = (
        <span>
            Việc Làm <span className="text-primary-100">Nổi Bật</span> Mới Nhất
        </span>
    );

    const titleProcess = (
        <span>
            JOBES Working <span className="text-primary-100">Process</span>
        </span>
    );

    const titleLocation = (
        <span>
            Get Dream With <span className="text-primary-100">Location</span>
        </span>
    );

    const titleRecruiters = (
        <span>
            Our Top <span className="text-primary-100">Recruiters</span>
        </span>
    );

    const titleArticle = (
        <span>
            Portal Recent <span className="text-primary-100">Article</span>
        </span>
    );

    return (
        <div className="flex flex-col gap-10">
            <Banner />
            <Section
                title={titleCategory}
                path="category"
                subTitle="To choose your trending job dream & to make future bright."
                bg=""
                slick={true}
                right={true}
                swiperRef={swiperRefCategories}
            >
                <Category swiperRef={swiperRefCategories} />
            </Section>
            <Section
                title={titleFeatured}
                subTitle="Bạn có thể tìm kiếm công việc theo tỉnh thành."
                bg="bg-content-bg"
                path="job-listing"
            >
                <Features />
            </Section>

            <Section
                title={titleRecruiters}
                subTitle="To choose your trending job dream & to make future bright."
                bg=""
                right={true}
                path=""
                slick={true}
                swiperRef={swiperRefRecruiters}
            >
                <Recruiters swiperRef={swiperRefRecruiters} />
            </Section>

            <Section
                title={titleProcess}
                subTitle="To choose your trending job dream & to make future bright."
                path=""
                bg=""
            >
                <Process />
            </Section>

            <Section
                path="article"
                title={titleArticle}
                subTitle="To choose your trending job dream & to make future bright."
                bg=""
            >
                <Article />
            </Section>
            <Company />

            <Section
                title={titleLocation}
                subTitle="To choose your trending job dream & to make future bright."
                bg=""
                right={true}
                path=""
                slick={true}
                swiperRef={swiperRefLocation}
            >
                <Location swiperRef={swiperRefLocation} />
            </Section>
        </div>
    );
};

export default Home;
