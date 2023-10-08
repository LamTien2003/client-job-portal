import Banner from '@/components/Banner/Banner';

import FormPostJob from './Form';

const PostJob = () => {
    return (
        <div>
            <Banner page="Post A Jobs" />
            <div className="max-w-7xl flex flex-col gap-5 bg-white mt-20 py-[50px] px-[70px] rounded-lg my-[120px] mx-auto border-[1px] border-primary-40 lg:mx-3 mb:px-5">
                <h5 className="text-content-title font-semibold text-xl">Job Information:</h5>

                <FormPostJob />
            </div>
        </div>
    );
};

export default PostJob;
