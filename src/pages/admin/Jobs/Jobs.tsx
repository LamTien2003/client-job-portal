import { BiSearch } from 'react-icons/bi';
import { BsColumnsGap } from 'react-icons/bs';
import { FaList } from 'react-icons/fa';
import { Checkbox, FormControlLabel } from '@mui/material';
import JobItem from './components/JobItem';
import { useState } from 'react';
function Jobs() {
    const [data, setData] = useState([]);

    return (
        <div className="flex flex-col gap-10">
            <div className="flex justify-between items-center">
                <div className="flex gap-5 font-family-title text-[#40189D] font-medium">
                    <button className="py-2 px-4 border-2 border-secondary-100 rounded-3xl">Tất cả</button>
                    <button className="p-2 px-4 border-2 rounded-3xl border-secondary-100">Đã duyệt (2000)</button>
                    <button className="p-2 px-4 border-2 rounded-3xl border-secondary-100">Chưa duyệt (2000)</button>
                </div>

                <div className="flex items-center border-2 rounded-full border-[#40189D]">
                    <input
                        type="text"
                        className="h-12 w-80 rounded-l-3xl outline-none border-none px-5 font-family-text text-content-text bg-transparent"
                        placeholder="Tìm kiếm công việc ..."
                    />
                    <button className="flex items-center px-4 text-white font-extrabold rounded-r-3xl text-xl bg-[#40189D] h-12 hover:bg-black duration-300">
                        <BiSearch />
                    </button>
                </div>
            </div>

            <div className="flex justify-between items-center">
                <div className="flex flex-col gap-3 font-family-text ">
                    <h5 className="text-content-title font-title text-lg">Hiển thị 246 kết quả việc làm.</h5>
                    <h6 className="text-content-text">Dựa trên sở thích của bạn.</h6>
                </div>

                <div className="flex gap-5">
                    <div className="flex gap-4">
                        <FormControlLabel control={<Checkbox color="secondary" />} name="fulltime" label="Fulltime" />
                        <FormControlLabel
                            control={<Checkbox color="secondary" />}
                            name="partime"
                            label="Partime"
                        />{' '}
                        <FormControlLabel control={<Checkbox color="secondary" />} name="remote" label="Remote" />
                    </div>

                    <div className="flex gap-4">
                        <button className="flex items-center justify-center text-[#40189D] w-10 h-10 rounded-full border-[#40189D] border-2 hover:bg-[#40189D] hover:text-white duration-300 ">
                            <FaList />
                        </button>

                        <button className="flex items-center justify-center text-[#40189D] w-10 h-10 rounded-full border-[#40189D] border-2 hover:bg-[#40189D] hover:text-white duration-300 ">
                            <BsColumnsGap />
                        </button>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 gap-6">
                <JobItem />
                <JobItem />
                <JobItem />
                <JobItem />
            </div>
        </div>
    );
}

export default Jobs;
