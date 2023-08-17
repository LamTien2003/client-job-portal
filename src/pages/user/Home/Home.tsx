import { useEffect } from 'react';
import { toast } from 'react-toastify';
import Banner from './components/Banner/Banner';
import Section from './components/Section/Section';
const Home = () => {
    useEffect(() => {
        toast.success('Test thông bao');
    }, []);

    return (
        <div>
            <Banner />
            <Section />
        </div>
    );
};

export default Home;
