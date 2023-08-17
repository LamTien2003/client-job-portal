import { Select, Option } from '@material-tailwind/react';
import { useState } from 'react';
import images from '@/assets/images';
import CounterItem from './CounterItem';
const Banner: React.FC = () => {
    const [labelVisible, setLabelVisible] = useState(true);
    const handleOptionClick = () => {
        setLabelVisible(false);
    };
    return (
        <div className="relative bg-bannerHome flex py-28">
            <div className="absolute inset-0 bg-[rgba(0,0,0,.75)]"></div>

            <div className="flex-grow flex flex-col justify-center items-center text-white p-8 z-10">
                <div className="text-center">
                    <h2 className="text-7xl font-bold mb-5">
                        Your Career’s <span className="text-primary-100">Opportunity.</span>
                    </h2>
                    <p className="text-xl font-normal">
                        2400 Peoples are daily searching on this portal, 100 users added to the job portal!
                    </p>
                </div>

                <div className="w-[70%] flex justify-between mt-16">
                    <CounterItem images={images.logo.job} title="Live Jobs" odometer="380" />
                    <CounterItem images={images.logo.companies} title="Companies" odometer="803 +" />
                    <CounterItem images={images.logo.candidates} title="Candidates" odometer="500 +" />
                    <CounterItem images={images.logo.newJob} title="New Jobs" odometer="102 +" />
                </div>

                <form className="flex w-[65%] justify-between bg-white mt-20 items-center p-4 gap-5 rounded">
                    <div className="flex w-[50%] p-5 border border-[#e9e9e9] bg-[#eff3f2] rounded">
                        <img src={images.logo.jobMini} alt={images.logo.jobMini} />
                        <span className="w-[1px] h-6 bg-gray-300 mx-2"></span>
                        <input
                            className="w-full outline-none text-black bg-[#eff3f2]"
                            type="text"
                            placeholder="Job Title"
                        />
                    </div>

                    <div className="w-[30%] p-[4px] flex items-center justify-center  border border-[#e9e9e9] bg-[#eff3f2] rounded">
                        <img className="py-5 pl-5" src={images.logo.category} alt={images.logo.category} />
                        <span className="w-[1px] h-6 bg-gray-300 mx-2"></span>
                        <div className="w-full">
                            <Select color="blue" size="md" variant="standard" label={labelVisible ? 'Category' : ''}>
                                <Option onClick={handleOptionClick}>Category 1</Option>
                                <Option onClick={handleOptionClick}>Category 2</Option>
                                <Option onClick={handleOptionClick}>Category 3</Option>
                                <Option onClick={handleOptionClick}>Category 4</Option>
                            </Select>
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="group relative rounded w-10% flex justify-center py-4 px-7 items-center text-lg font-medium  bg-primary-100 hover:bg-black duration-300"
                    >
                        <div className="absolute rounded inset-0 w-0 bg-black transition-all duration-300 ease-out group-hover:w-full"></div>

                        <div className="relative flex justify-between items-center  ">
                            <img className="mr-2" src={images.logo.search} alt={images.logo.search} /> Search
                        </div>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Banner;
