import { useChangeMeMutation } from '@/services/jobseekerApiSlice';
import { RootState } from '@/store/store';
import { Education } from '@/types/JobSeeker';
import { formatDate } from '@/utils/date';
import { isJobSeeker } from '@/utils/helper';
import { useState, useEffect } from 'react';
import { BiEdit } from 'react-icons/bi';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { useSelector } from 'react-redux';
import EditForm from './EditForm';

const EduItem = ({ data }: { data: Education[] }) => {
    const [open, setOpen] = useState<boolean>(false);
    const handleOpen = () => setOpen(!open);
    const currentUser = useSelector((state: RootState) => state.user.user);
    const [education, setEducation] = useState<Education[]>([]);
    const [educateToEdit, setEducateToEdit] = useState<Education | null>(null);
    useEffect(() => {
        if (isJobSeeker(currentUser)) {
            setEducation(currentUser.educate);
        }
    }, [currentUser]);

    const [changeEdu] = useChangeMeMutation();

    const deleteItem = (dataId: string) => {
        const itemToDelete = education.find((item) => item._id === dataId);

        if (itemToDelete) {
            const updatedEducation = education.filter((item) => item._id !== dataId);
            const educationData: any = {
                educate: updatedEducation,
            };

            changeEdu(educationData);
            alert('Xoá thành công!');
        }
    };

    const handleEdit = (dataId: string) => {
        const educationToEdit = education.find((exp) => exp._id === dataId);
        if (educationToEdit) {
            setEducateToEdit(educationToEdit);
            setOpen(true);
        }
    };
    return (
        <div className="grid grid-cols-2 gap-5 ">
            {data.map((item, index) => {
                const dateFrom = item.date.from ? formatDate(new Date(item.date.from).toISOString()) : '';
                const dateTo = item.date.to ? formatDate(new Date(item.date.from).toISOString()) : 'Đang học';
                return (
                    <div key={index} className="p-5 shadow-lg  flex justify-between">
                        <div className="flex flex-col gap-2">
                            <h5 className="text-lg text-primary-100 font-title">{item.major}</h5>
                            <h5 className="font-semibold">{item.school}</h5>
                            <p className="text-sm text-content-text ">
                                {dateFrom} - {dateTo}
                            </p>
                        </div>
                        <div className="flex gap-4 items-start text-xl font-medium">
                            <button
                                type="button"
                                onClick={() => handleEdit(item._id)}
                                className="text-content-text hover:text-primary-100 duration-300"
                            >
                                <BiEdit />
                            </button>
                            <button
                                type="button"
                                onClick={() => deleteItem(item._id)}
                                className="text-red-600 hover:text-primary-100 duration-300"
                            >
                                <RiDeleteBin6Line />
                            </button>
                        </div>
                    </div>
                );
            })}
            <EditForm handleOpen={handleOpen} open={open} educateToEdit={educateToEdit} />
        </div>
    );
};

export default EduItem;
