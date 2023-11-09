// import Banner from '@/components/Banner/Banner';

import FormPostJob from './Form';

const PostJob = () => {
    return (
        <div>
            {/* <Banner page="Post A Jobs" /> */}
            <div className="max-w-7xl flex flex-col gap-5 bg-white py-[50px] px-[70px] rounded-lg  mx-auto border-[1px] border-primary-40 lg:mx-3 mb:px-5 font-family-text">
                <h5 className="text-content-title font-semibold text-xl font-family-title">Thông tin công việc:</h5>

                <FormPostJob />
            </div>
        </div>
    );
};

export default PostJob;
