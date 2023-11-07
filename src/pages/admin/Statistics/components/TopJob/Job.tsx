import Job from '@/types/Job';
import { MdWork } from 'react-icons/md';

const Job = ({ job }: { job: Job }) => {
    return (
        <div className="flex flex-col bg-white rounded-lg shadow-lg p-4 font-family-text gap-6">
            <div className="flex justify-between items-center ">
                <div className="flex flex-col gap-2 font-title">
                    <h5 className="font-family-title text-xl">{job.title}</h5>
                    <div className="text-[#40189D]">{job.salary} / Tháng</div>
                </div>
                <div className="p-2 text-[#40189D] text-2xl border-2 border-[#40189D] rounded-xl">
                    <MdWork />
                </div>
            </div>
            <p className="text-content-text">{job.description}</p>

            <div className="flex justify-between items-center">
                <span className="text-[#40189D] font-medium border-2 p-3 bg-[#eeeeee] rounded-xl uppercase">
                    Remote
                </span>
                <h5 className="font-medium text-lg">Hồ Chí Minh</h5>
            </div>

            <div className="flex justify-center items-center gap-3">
                <button className="border-2 w-16 h-11  text-[#9C9C9C] rounded-2xl font-semibold">Ẩn</button>
                <button className="border-2  w-16 h-11 border-[#FC656C] text-[#FC656C] rounded-2xl font-semibold">
                    Xoá
                </button>
            </div>
        </div>
    );
};

export default Job;
