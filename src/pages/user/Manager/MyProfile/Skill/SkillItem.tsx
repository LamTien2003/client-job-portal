import { Skill } from '@/types/JobSeeker';
import React from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';

const SkillItem = ({ data }: { data: Skill[] }) => {
    return (
        <div className="flex flex-wrap gap-3">
            {data.map((item, index) => (
                <div
                    className="flex items-center gap-3 text-content-text font-semibold px-4 py-1 bg-primary-200 border-2 border-primary-100 rounded-3xl"
                    key={index}
                >
                    {item}
                    <button type="button" className=" text-red-800 hover:text-red-500 ">
                        <AiOutlineCloseCircle />
                    </button>
                </div>
            ))}
        </div>
    );
};

export default SkillItem;
