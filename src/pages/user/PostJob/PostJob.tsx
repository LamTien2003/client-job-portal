import Banner from '@/components/Banner/Banner';
import images from '@/assets/images';
import { Select, Option } from '@material-tailwind/react';

const PostJob = () => {
    return (
        <div>
            <Banner page="Post A Jobs" />
            <div className="max-w-7xl flex flex-col gap-5 bg-white mt-20 py-[50px] px-[70px] rounded-lg my-[120px] mx-auto border-[1px] border-primary-40">
                <h5 className="text-content-title font-semibold text-xl">Job Information:</h5>

                <form action="#">
                    <div className="grid grid-cols-2 gap-6">
                        <div className="flex flex-col gap-2">
                            <h5 className="text-[15px] font-medium text-content-text">Job Title*</h5>
                            <div className="flex items-center  border-2 border-primary-40 pl-3  rounded">
                                <img className="w-4 h-4" src={images.logo.user2} alt={images.logo.user2} />
                                <span className="w-[1px] h-6 bg-gray-300 mx-2"></span>
                                <input
                                    className="text-content-s-text w-full h-[48px] outline-none "
                                    type="text"
                                    placeholder="Job Title"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h5 className="text-[15px] font-medium text-content-text">Job Type*</h5>
                            <div className="flex items-center  border-2 border-primary-40 pl-3  rounded">
                                <img className="w-4 h-4" src={images.logo.category} alt={images.logo.category} />
                                <span className="w-[1px] h-6 bg-gray-300 mx-2"></span>
                                <div className="w-full h-[48px]">
                                    <Select
                                        className="w-full text-content-s-text border-none outline-none items-center"
                                        variant="standard"
                                        color="blue"
                                    >
                                        <Option>Science</Option>
                                        <Option>IT</Option>
                                        <Option>Medical</Option>
                                        <Option>Copywrite</Option>
                                    </Select>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h5 className="text-[15px] font-medium text-content-text">Description*</h5>
                            <div className="flex items-center  border-2 border-primary-40 pl-3  rounded">
                                <img className="w-4 h-4" src={images.logo.jobMini} alt={images.logo.jobMini} />
                                <span className="w-[1px] h-6 bg-gray-300 mx-2"></span>
                                <input
                                    className="text-content-s-text w-full h-[48px] outline-none "
                                    type="text"
                                    placeholder="Description"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h5 className="text-[15px] font-medium text-content-text">Skills Require*</h5>
                            <div className="flex items-center  border-2 border-primary-40 pl-3  rounded">
                                <img className="w-4 h-4" src={images.logo.category} alt={images.logo.category} />
                                <span className="w-[1px] h-6 bg-gray-300 mx-2"></span>
                                <div className="w-full h-[48px]">
                                    <Select
                                        className="w-full text-content-s-text border-none outline-none items-center"
                                        variant="standard"
                                        color="blue"
                                    >
                                        <Option>UI/UX Designer</Option>
                                        <Option>Font End Developer</Option>
                                        <Option>Next Js</Option>
                                        <Option>Laravel Devloper</Option>
                                    </Select>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <h5 className="text-[15px] font-medium text-content-text">Salary*</h5>
                            <div className="flex items-center  border-2 border-primary-40 pl-3  rounded">
                                <img className="w-4 h-4" src={images.logo.salary} alt={images.logo.salary} />
                                <span className="w-[1px] h-6 bg-gray-300 mx-2"></span>
                                <input
                                    className="text-content-s-text w-full h-[48px] outline-none "
                                    type="text"
                                    placeholder="Salary"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h5 className="text-[15px] font-medium text-content-text">Job Require*</h5>
                            <div className="flex items-center  border-2 border-primary-40 pl-3  rounded">
                                <img className="w-4 h-4" src={images.logo.jobMini} alt={images.logo.jobMini} />
                                <span className="w-[1px] h-6 bg-gray-300 mx-2"></span>
                                <div className="w-full h-[48px]">
                                    <Select
                                        className="w-full text-content-s-text border-none outline-none items-center"
                                        variant="standard"
                                        color="blue"
                                    >
                                        <Option>Full Time</Option>
                                        <Option>Pass Time</Option>
                                    </Select>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <h5 className="text-[15px] font-medium text-content-text">Photos Job*</h5>

                            <div className="flex items-center justify-center w-full">
                                <label
                                    htmlFor="dropzone-file"
                                    className="flex flex-col items-center justify-center w-full h-28 border-2 border-primary-20 border-dashed rounded-lg cursor-pointer bg-primary-10 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                                >
                                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                        <svg
                                            className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 20 16"
                                        >
                                            <path
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                                            />
                                        </svg>
                                        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                                            <span className="font-semibold">Click to upload</span> or drag and drop
                                        </p>
                                        <p className="text-xs text-gray-500 dark:text-gray-400">
                                            SVG, PNG, JPG or GIF (MAX. 800x400px)
                                        </p>
                                    </div>
                                    <input id="dropzone-file" type="file" multiple className="hidden" />
                                </label>
                            </div>
                        </div>
                    </div>

                    <button className="mt-8 text-sm font-semibold text-white rounded-md uppercase py-3 px-8 bg-primary-100">
                        Post Now
                    </button>
                </form>
            </div>
        </div>
    );
};

export default PostJob;
