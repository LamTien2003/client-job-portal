import images from '@/assets/images';
import CounterItem from './CounterItem';
import Search from './Search';
const Banner: React.FC = () => {
    return (
        <div className="relative bg-bannerHome bg-cover flex py-28  lg:bg-center  lg:py-10">
            <div className="absolute inset-0 bg-[rgba(0,0,0,.75)]"></div>

            <div className="flex-grow flex flex-col justify-center items-center text-white p-8 z-10">
                <div className="text-center">
                    <h2 className="text-7xl font-bold mb-5 mb:text-4xl">
                        Your Career’s <span className="text-primary-100">Opportunity.</span>
                    </h2>
                    <p className="text-xl font-normal mb:text-lg">
                        2400 Peoples are daily searching on this portal, 100 users added to the job portal!
                    </p>
                </div>

                <div className="w-[70%] grid place-items-center grid-cols-4 mt-16 gap-10 lg:gap-14  mb:grid-cols-1 tb:grid-cols-2 lg:w-full">
                    <CounterItem images={images.logo.job} title="Live Jobs" odometer="380" />
                    <CounterItem images={images.logo.companies} title="Companies" odometer="803 +" />
                    <CounterItem images={images.logo.candidates} title="Candidates" odometer="500 +" />
                    <CounterItem images={images.logo.newJob} title="New Jobs" odometer="102 +" />
                </div>

                <Search />
            </div>
        </div>
    );
};

export default Banner;
