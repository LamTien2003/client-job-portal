import { useState } from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { CgUserList } from 'react-icons/cg';
import BtnBot from '../../components/BtnBot';
import { useChangeMeMutation } from '@/services/jobseekerApiSlice';
import JobSeeker, { Skill } from '@/types/JobSeeker';
interface Form {
    toggleOpen?: () => void;
}
const Form = ({ toggleOpen }: Form) => {
    const [data, setData] = useState<string[]>([]);
    const [inputValue, setInputValue] = useState<string>('');

    const [changeSkill, { isLoading }] = useChangeMeMutation();
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setInputValue(e.target.value);
    };

    const handleAddSkill = (): void => {
        if (inputValue.trim() !== '') {
            setData([...data, inputValue]);
            setInputValue('');
        }
    };

    const handleRemoveSkill = (index: number): void => {
        const newData = [...data];
        newData.splice(index, 1);
        setData(newData);
    };

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>): void => {
        if (e.key === 'Enter') {
            e.preventDefault();
            handleAddSkill();
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            if (data) {
                const skillData: JobSeeker = {
                    skills: data as Skill[],
                };
                await changeSkill(skillData);
                setData([]);
            }
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <form onSubmit={handleSubmit} className=" flex flex-col gap-8 border-t-[1px] border-gray-600 pt-5">
            <div className="flex justify-between gap-2 h-12">
                <div className="flex items-center w-full h-full border-2 text-content-text">
                    <div className="text-xl p-4">
                        <CgUserList />
                    </div>
                    <input
                        className="w-full h-full outline-none"
                        type="text"
                        placeholder="Nhập các kỹ năng bạn có..."
                        name="skill"
                        value={inputValue}
                        onChange={handleInputChange}
                        onKeyDown={handleKeyPress}
                    />
                </div>
                <button
                    type="button"
                    onClick={handleAddSkill}
                    className="border-primary-100 border-2 py-2 px-4 text-primary-100 font-semibold hover:bg-primary-200  duration-200 "
                >
                    Thêm
                </button>
            </div>

            <div className="flex flex-wrap gap-5">
                {data.map((skill, index) => (
                    <div
                        className="flex items-center gap-2 text-content-text font-semibold px-4 py-1 bg-primary-200 border-2 border-primary-100 rounded-3xl"
                        key={index}
                    >
                        {skill}
                        <button
                            type="button"
                            className=" text-red-800 hover:text-red-500 "
                            onClick={() => handleRemoveSkill(index)}
                        >
                            <AiOutlineCloseCircle />
                        </button>
                    </div>
                ))}
            </div>
            <BtnBot toggleOpen={toggleOpen} />
        </form>
    );
};

export default Form;
