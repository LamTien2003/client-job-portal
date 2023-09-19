import Banner from '@/components/Banner/Banner';
import images from '@/assets/images';
import { Select, Option } from '@material-tailwind/react';

import { useState } from 'react';
const PostJob = () => {
    const [labelVisible, setLabelVisible] = useState(true);
    const handleOptionClick = () => {
        setLabelVisible(false);
    };
    return (
        <div>
            <Banner page="Post A Jobs" />

            <form className="max-w-7xl flex flex-col gap-5 bg-white mt-20 py-[50px] px-[70px]   rounded-lg my-[120px] mx-auto border-[1px] border-primary-40">
                <h5 className="text-content-title font-semibold text-xl">Job Information:</h5>
                <div className="flex items-center gap-10">
                    <div className="flex w-[50%] p-4 border border-primary-40  rounded">
                        <img src={images.logo.jobMini} alt={images.logo.jobMini} />
                        <span className="w-[1px] h-6 bg-gray-300 mx-2"></span>
                        <input className="w-full outline-none text-black" type="text" placeholder="Job Title" />
                    </div>

                    <div className="w-[50%]  flex items-center justify-between  border  border-primary-40  rounded">
                        <img className="py-5 pl-5" src={images.logo.category} alt={images.logo.category} />
                        <span className="w-[1px] h-6 bg-gray-300 mx-2"></span>
                        <div className="w-full">
                            <Select
                                className="border-none outline-none items-center"
                                variant="standard"
                                color="blue"
                                label={labelVisible ? 'UI/UX Designer' : ''}
                            >
                                <Option onClick={handleOptionClick}>UI/UX Designer</Option>
                                <Option onClick={handleOptionClick}>Font End Developer</Option>
                                <Option onClick={handleOptionClick}>Next Js</Option>
                                <Option onClick={handleOptionClick}>Laravel Devloper</Option>
                            </Select>
                        </div>
                    </div>
                </div>

                <div className="flex items-center gap-10">
                    <div className="flex w-[50%] p-4 border border-primary-40  rounded">
                        <img src={images.logo.user2} alt={images.logo.user2} />
                        <span className="w-[1px] h-6 bg-gray-300 mx-2"></span>
                        <input className="w-full outline-none text-black" type="text" placeholder="Job Title" />
                    </div>

                    <div className="w-[50%]  flex items-center justify-between  border  border-primary-40  rounded">
                        <img className="py-5 pl-5" src={images.logo.category} alt={images.logo.category} />
                        <span className="w-[1px] h-6 bg-gray-300 mx-2"></span>
                        <div className="w-full">
                            <Select
                                className="border-none outline-none items-center"
                                variant="standard"
                                color="blue"
                                label={labelVisible ? 'UI/UX Designer' : ''}
                            >
                                <Option onClick={handleOptionClick}>UI/UX Designer</Option>
                                <Option onClick={handleOptionClick}>Font End Developer</Option>
                                <Option onClick={handleOptionClick}>Next Js</Option>
                                <Option onClick={handleOptionClick}>Laravel Devloper</Option>
                            </Select>
                        </div>
                    </div>
                </div>

                <div className="flex items-center gap-10">
                    <div className="flex w-[50%] p-4 border border-primary-40  rounded">
                        <img src={images.logo.jobMini} alt={images.logo.jobMini} />
                        <span className="w-[1px] h-6 bg-gray-300 mx-2"></span>
                        <input className="w-full outline-none text-black" type="text" placeholder="Job Title" />
                    </div>

                    <div className="w-[50%]  flex items-center justify-between  border  border-primary-40  rounded">
                        <img className="py-5 pl-5" src={images.logo.category} alt={images.logo.category} />
                        <span className="w-[1px] h-6 bg-gray-300 mx-2"></span>
                        <div className="w-full">
                            <Select
                                className="border-none outline-none items-center"
                                variant="standard"
                                color="blue"
                                label={labelVisible ? 'UI/UX Designer' : ''}
                            >
                                <Option onClick={handleOptionClick}>UI/UX Designer</Option>
                                <Option onClick={handleOptionClick}>Font End Developer</Option>
                                <Option onClick={handleOptionClick}>Next Js</Option>
                                <Option onClick={handleOptionClick}>Laravel Devloper</Option>
                            </Select>
                        </div>
                    </div>
                </div>

                <div className="flex items-center gap-10">
                    <div className="flex w-[50%] p-4 border border-primary-40  rounded">
                        <img src={images.logo.jobMini} alt={images.logo.jobMini} />
                        <span className="w-[1px] h-6 bg-gray-300 mx-2"></span>
                        <input className="w-full outline-none text-black" type="text" placeholder="Job Title" />
                    </div>

                    <div className="w-[50%]  flex items-center justify-between  border  border-primary-40  rounded">
                        <img className="py-5 pl-5" src={images.logo.category} alt={images.logo.category} />
                        <span className="w-[1px] h-6 bg-gray-300 mx-2"></span>
                        <div className="w-full">
                            <Select
                                className="border-none outline-none items-center"
                                variant="standard"
                                color="blue"
                                label={labelVisible ? 'UI/UX Designer' : ''}
                            >
                                <Option onClick={handleOptionClick}>UI/UX Designer</Option>
                                <Option onClick={handleOptionClick}>Font End Developer</Option>
                                <Option onClick={handleOptionClick}>Next Js</Option>
                                <Option onClick={handleOptionClick}>Laravel Devloper</Option>
                            </Select>
                        </div>
                    </div>
                </div>
                {/* <button
                    type="submit"
                    className="group relative rounded w-10% flex justify-center py-4 px-7 items-center text-lg font-medium  bg-primary-100 hover:bg-black duration-300"
                >
                    <div className="absolute rounded inset-0 w-0 bg-black transition-all duration-300 ease-out group-hover:w-full"></div>

                    <div className="relative flex justify-between items-center  ">
                        <img className="mr-2" src={images.logo.search} alt={images.logo.search} /> Search
                    </div>
                </button> */}
            </form>
        </div>
    );
};

export default PostJob;
