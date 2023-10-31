import { useJobseekerChangeMeMutation } from '@/services/jobseekerApiSlice';
import { RootState } from '@/store/store';
import { Experience } from '@/types/JobSeeker';
import { formatDate, formatDateWithMonthAndYear } from '@/utils/date';
import { isJobSeeker } from '@/utils/helper';
import { useState, useEffect } from 'react';
import { BiEdit } from 'react-icons/bi';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { useSelector } from 'react-redux';
import EditForm from './EditForm';

const ExpItem = ({ data }: { data: Experience[] }) => {
    const [open, setOpen] = useState<boolean>(false);
    const handleOpen = () => setOpen(!open);
    const currentUser = useSelector((state: RootState) => state.user.user);
    const [experiences, setExp] = useState<Experience[]>([]);
    const [experienceToEdit, setExperienceToEdit] = useState<Experience | null>(null);
    useEffect(() => {
        if (isJobSeeker(currentUser)) {
            setExp(currentUser.experiences);
        }
    }, [currentUser]);

    const [changeExp] = useJobseekerChangeMeMutation();

    const deleteExp = (dataId: string) => {
        const experienceToDelete = experiences.find((exp) => exp._id === dataId);

        if (experienceToDelete) {
            const updatedExperiences = experiences.filter((exp) => exp._id !== dataId);
            const expData: any = {
                experiences: updatedExperiences,
            };

            changeExp(expData);
            alert('Xoá thành công!');
        }
    };

    const handleEdit = (dataId: string) => {
        const experienceToEdit = experiences.find((exp) => exp._id === dataId);
        if (experienceToEdit) {
            setExperienceToEdit(experienceToEdit);
            setOpen(true);
        }
    };

    return (
        <div className="grid grid-cols-2 gap-8">
            {data.map((exp, index) => {
                const dateFrom = exp.date.from ? formatDateWithMonthAndYear(new Date(exp.date.from).toISOString()) : '';
                const dateTo = exp.date.to
                    ? formatDateWithMonthAndYear(new Date(exp.date.to).toISOString())
                    : 'Đang làm';

                const date = `${dateFrom} - ${dateTo}`;

                return (
                    <div key={index} className="p-5 shadow-lg  flex justify-between">
                        <div className="flex flex-col gap-2">
                            <h5 className="text-lg text-primary-100 font-title">{exp.position}</h5>
                            <h5 className="font-semibold">{exp.company}</h5>
                            <p className="text-sm text-content-text ">{date}</p>
                        </div>
                        <div className="flex gap-4 items-start text-xl font-medium">
                            <button
                                onClick={() => handleEdit(exp._id)}
                                type="button"
                                className="text-content-text hover:text-primary-100 duration-300"
                            >
                                <BiEdit />
                            </button>
                            <button
                                type="button"
                                onClick={() => deleteExp(exp._id)}
                                className="text-red-600 hover:text-primary-100 duration-300"
                            >
                                <RiDeleteBin6Line />
                            </button>
                        </div>
                    </div>
                );
            })}

            <EditForm handleOpen={handleOpen} open={open} experienceToEdit={experienceToEdit} />
        </div>
    );
};

export default ExpItem;
