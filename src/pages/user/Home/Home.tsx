import { useEffect } from 'react';
import { toast } from 'react-toastify';
import Banner from './components/Banner/Banner';
import Section from './components/Section/Section';
import Category from './components/Section/Category/Category';
import Features from './components/Section/Features/Features';
import Process from './components/Section/Process/Process';
const Home = () => {
    useEffect(() => {
        toast.success('Test thông bao');
    }, []);
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

    return (
        <div>
            <Banner />
            <Section
                title={titleCategory}
                subTitle="To choose your trending job dream & to make future bright."
                bg=""
                right={true}
            >
                <Category />
            </Section>
            <Section
                title={titleFeatured}
                subTitle="To choose your trending job dream & to make future bright."
                bg="bg-content-bg"
                right={true}
            >
                <Features />
            </Section>

            <Section
                title={titleProcess}
                subTitle="To choose your trending job dream & to make future bright."
                bg=""
                right={false}
            >
                <Process />
            </Section>
        </div>
    );
};

export default Home;
