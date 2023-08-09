import { useEffect } from 'react';
import { toast } from 'react-toastify';
const Home = () => {
    useEffect(() => {
        toast.success('Test thông bao');
    }, []);

    return <div>Hello World</div>;
};

export default Home;
