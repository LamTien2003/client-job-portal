import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
const Error = () => {
    useEffect(() => {
        toast.success('Test thông bao');
    }, []);

    return (
        <div className="container mt-40 m-auto justify-center text-center">
            <img className="justify-center m-auto mb-7" src="https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/bg/404.svg" alt="" />
            <h1 className="title font-bold text-4xl mb-5">Opps... Page Not Found</h1>
            <p className="description text-xl mb-7">Something went wrong, web page that is displayed to the user when <br />
                the server cannot find the requested page.</p>
            <div className="flex items-center justify-center">
                <Link to={'/'} className="bg-teal-500 hover:bg-teal-900 text-white font-bold py-2 px-4 my-6 rounded focus:outline-none focus:shadow-outline" type="button">
                    Back Homepage
                </Link>
            </div>
        </div>
    )

};

export default Error;
