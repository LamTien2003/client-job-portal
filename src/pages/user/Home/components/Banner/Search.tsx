import images from '@/assets/images';
import { Select, Option } from '@material-tailwind/react';
import { useState } from 'react';
const Search = () => {
    const [labelVisible, setLabelVisible] = useState(true);
    const handleOptionClick = () => {
        setLabelVisible(false);
    };
    return (
        <form className="flex lg:w-full w-[65%] justify-between bg-white mt-20 items-center p-4 gap-5 rounded mb:flex-col">
            <div className="flex lg:w-full w-[50%] p-4 border border-[#e9e9e9] bg-[#eff3f2] rounded">
                <img src={images.logo.jobMini} alt={images.logo.jobMini} />
                <span className="w-[2px] h-5 bg-gray-300 mx-2"></span>
                <input className="w-full outline-none text-black bg-[#eff3f2]" type="text" placeholder="Job Title" />
            </div>
            <div className="lg:w-full w-[30%]  p-[1px] flex items-center justify-center  border border-[#e9e9e9] bg-[#eff3f2] rounded">
                <img className="py-5 pl-5" src={images.logo.category} alt={images.logo.category} />
                <span className="w-[2px] h-5 bg-gray-300 mx-2"></span>
                <div className="w-full">
                    <Select
                        className="border-none outline-none"
                        color="blue"
                        size="md"
                        variant="standard"
                        label={labelVisible ? 'Category' : ''}
                    >
                        <Option onClick={handleOptionClick}>Category 1</Option>
                        <Option onClick={handleOptionClick}>Category 2</Option>
                        <Option onClick={handleOptionClick}>Category 3</Option>
                        <Option onClick={handleOptionClick}>Category 4</Option>
                    </Select>
                </div>
            </div>
            <button
                type="submit"
                className="group relative rounded lg:py-2 py-4 px-7 text-lg font-medium  bg-primary-100 hover:bg-black duration-300"
            >
                <div className="absolute rounded inset-0 w-0 bg-black transition-all duration-300 ease-out group-hover:w-full"></div>

                <div className="relative flex justify-between items-center  ">
                    <img className="mr-2" src={images.logo.search} alt={images.logo.search} /> Search
                </div>
            </button>
        </form>
    );
};

export default Search;
