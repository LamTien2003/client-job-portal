import { useJobseekerChangeMeMutation } from '@/services/jobseekerApiSlice';
import { RootState } from '@/store/store';
import { Skill } from '@/types/JobSeeker';
import { isJobSeeker } from '@/utils/helper';
import { useEffect, useState } from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { useSelector } from 'react-redux';

const SkillItem = ({ data }: { data: Skill[] }) => {
    const currentUser = useSelector((state: RootState) => state.user.user);
    const [skills, setSkills] = useState<Skill[]>([]);
    useEffect(() => {
        if (isJobSeeker(currentUser)) {
            setSkills(currentUser.skills);
        }
    }, [currentUser]);

    const [changeSkill] = useJobseekerChangeMeMutation();

    const deleteItem = (name: string) => {
        const itemToDelete = skills.find((item) => item === name);

        if (itemToDelete) {
            const updatedSkills = skills.filter((item) => item !== name);
            const skillsData: any = {
                skills: updatedSkills,
            };

            changeSkill(skillsData);
            alert('Xoá thành công!');
        }
    };
    return (
        <div className="flex flex-wrap gap-3">
            {data.map((item, index) => (
                <div
                    className="flex items-center gap-3 text-content-text font-semibold px-4 py-1 bg-primary-200 border-2 border-primary-100 rounded-3xl"
                    key={index}
                >
                    {item}
                    <button onClick={() => deleteItem(item)} className=" text-red-800 hover:text-red-500 ">
                        <AiOutlineCloseCircle />
                    </button>
                </div>
            ))}
        </div>
    );
};

export default SkillItem;
