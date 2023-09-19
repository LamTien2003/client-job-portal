// import { useEffect } from 'react';
// import { toast } from 'react-toastify';
import Banner from './components/Banner/Banner';
import Section from './components/Section/Section';
import Category from './components/Section/Category/Category';
import Features from './components/Section/Features/Features';
import Process from './components/Section/Process/Process';
import Location from './components/Section/Location/Location';
import Review from './components/Section/Review/Review';
import Company from './components/Section/Company/Company';
import Recruiters from './components/Section/Recruiters/Recruiters';
import Article from './components/Section/Article/Article';
const Home = () => {
    // useEffect(() => {
    //     toast.success('Test thông bao');
    // }, []);
    const titleCategory = (
        <span>
            Trending Jobs <span className="text-primary-100">Category</span>
        </span>
    );
    const titleFeatured = (
        <span>
            Latest <span className="text-primary-100">Featured</span> Jobs
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

    const titleReviews = (
        <span>
            Trusted User <span className="text-primary-100">Reviews</span>
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

    console.log(!('email' || !('password')));
    

    return (
        <div>
            <Banner />
            <Section
                title={titleCategory}
                subTitle="To choose your trending job dream & to make future bright."
                bg=""
                right={true}
                slick={false}
            >
                <Category />
            </Section>
            <Section
                title={titleFeatured}
                subTitle="To choose your trending job dream & to make future bright."
                bg="bg-content-bg"
                right={true}
                slick={false}
            >
                <Features />
            </Section>

            <Section
                title={titleProcess}
                subTitle="To choose your trending job dream & to make future bright."
                bg=""
                right={false}
                slick={false}
            >
                <Process />
            </Section>

            <Section
                title={titleLocation}
                subTitle="To choose your trending job dream & to make future bright."
                bg="bg-content-bg"
                right={true}
                slick={true}
            >
                <Location />
            </Section>

            <Section
                title={titleReviews}
                subTitle="To choose your trending job dream & to make future bright."
                bg=""
                right={true}
                slick={true}
            >
                <Review />
            </Section>

            <Company />

            <Section
                title={titleRecruiters}
                subTitle="To choose your trending job dream & to make future bright."
                bg=""
                right={true}
                slick={true}
            >
                <Recruiters />
            </Section>

            <Section
                title={titleArticle}
                subTitle="To choose your trending job dream & to make future bright."
                bg=""
                right={false}
                slick={false}
            >
                <Article/>
            </Section>
        </div>
    );
};

export default Home;
