import { useJobseekerChangeMeMutation } from '@/services/jobseekerApiSlice';
import { RootState } from '@/store/store';
import { Education } from '@/types/JobSeeker';
import { formatDateWithMonthAndYear } from '@/utils/date';
import { isJobSeeker } from '@/utils/helper';
import { useState, useEffect } from 'react';
import { BiEdit } from 'react-icons/bi';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { useSelector } from 'react-redux';
import EditForm from './EditForm';
import { toast } from 'react-toastify';
import ConfirmDelete from '@/components/Dialog/ConfirmDelete';
import Loader from '@/components/Loader/Loader';

const EduItem = ({ data }: { data: Education[] }) => {
    const [open, setOpen] = useState<boolean>(false);
    const handleOpen = () => setOpen(!open);
    const currentUser = useSelector((state: RootState) => state.user.user);
    const [education, setEducation] = useState<Education[]>([]);
    const [educateToEdit, setEducateToEdit] = useState<Education | null>(null);
    const [openConfirmDelete, setOpenConfirmDelete] = useState<boolean>(false);
    const [agree, setAgree] = useState<boolean>(false);
    const [id, setId] = useState<string>('');
    useEffect(() => {
        if (isJobSeeker(currentUser)) {
            setEducation(currentUser.educate);
        }
    }, [currentUser]);

    const [changeEdu, { isLoading }] = useJobseekerChangeMeMutation();

    useEffect(() => {
        if (agree) {
            const itemToDelete = education.find((item) => item._id === id);

            if (itemToDelete) {
                const updatedEducation = education.filter((item) => item._id !== id);
                const educationData: any = {
                    educate: updatedEducation,
                };

                changeEdu(educationData)
                    .unwrap()
                    .then(() => {
                        toast.success('Xoá học vấn thành công!');
                    })
                    .catch((error) => {
                        console.error('Error deleting:', error);
                        toast.error('Đã xảy ra lỗi khi xoá.');
                    })
                    .finally(() => setAgree(false));
            }
        }
    }, [agree]);

    const handleEdit = (dataId: string) => {
        const educationToEdit = education.find((exp) => exp._id === dataId);
        if (educationToEdit) {
            setEducateToEdit(educationToEdit);
            setOpen(true);
        }
    };
    return (
        <div
            className="grid grid-cols-2 gap-5 mb:grid-cols-1 tb:grid-cols-1
        "
        >
            {isLoading && <Loader />}
            {data.map((item, index) => {
                const dateFrom = item.date.from
                    ? formatDateWithMonthAndYear(new Date(item.date.from).toISOString())
                    : '';
                const dateTo = item.date.to
                    ? formatDateWithMonthAndYear(new Date(item.date.to).toISOString())
                    : 'Đang làm';

                const date = `${dateFrom} - ${dateTo}`;
                return (
                    <div key={index} className="p-5 shadow-lg  flex justify-between">
                        <div className="flex flex-col gap-2">
                            <h5 className="text-lg text-primary-100 font-title">{item.major}</h5>
                            <h5 className="font-semibold">{item.school}</h5>
                            <p className="text-sm text-content-text ">{date}</p>
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
                                onClick={() => {
                                    setOpenConfirmDelete(true);
                                    setId(item._id);
                                }}
                                className="text-red-600 hover:text-primary-100 duration-300"
                            >
                                <RiDeleteBin6Line />
                            </button>
                        </div>
                    </div>
                );
            })}
            {openConfirmDelete && (
                <ConfirmDelete open={openConfirmDelete} onSetOpen={setOpenConfirmDelete} onSetAgree={setAgree} />
            )}
            <EditForm handleOpen={handleOpen} open={open} educateToEdit={educateToEdit} />
        </div>
    );
};

export default EduItem;
