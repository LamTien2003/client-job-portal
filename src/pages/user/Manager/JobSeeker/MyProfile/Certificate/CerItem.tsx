import { useJobseekerChangeMeMutation } from '@/services/jobseekerApiSlice';
import { RootState } from '@/store/store';
import { Certification } from '@/types/JobSeeker';
import { formatDate } from '@/utils/date';
import { isJobSeeker } from '@/utils/helper';
import { useState, useEffect } from 'react';
import { BiEdit } from 'react-icons/bi';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { useSelector } from 'react-redux';
import EditForm from './EditForm';

const CerItem = ({ data }: { data: Certification[] }) => {
    const [open, setOpen] = useState<boolean>(false);
    const handleOpen = () => setOpen(!open);
    const currentUser = useSelector((state: RootState) => state.user.user);
    const [certification, setCertification] = useState<Certification[]>([]);
    const [certificateToEdit, setCertificateToEdit] = useState<Certification | null>(null);
    useEffect(() => {
        if (isJobSeeker(currentUser)) {
            setCertification(currentUser.certificate);
        }
    }, [currentUser]);

    const [changeCertification] = useJobseekerChangeMeMutation();

    const deleteItem = (dataId: string) => {
        const itemToDelete = certification.find((item) => item._id === dataId);

        if (itemToDelete) {
            const updatedcertification = certification.filter((item) => item._id !== dataId);
            const certificationData: any = {
                certificate: updatedcertification,
            };

            changeCertification(certificationData);
            alert('Xoá thành công!');
        }
    };
    const handleEdit = (dataId: string) => {
        const certificationToEdit = certification.find((item) => item._id === dataId);
        if (certificationToEdit) {
            setCertificateToEdit(certificationToEdit);
            setOpen(true);
        }
    };
    return (
        <div className="grid grid-cols-2 gap-5 ">
            {data.map((item, index) => {
                const dateFrom = item.date.from ? formatDate(new Date(item.date.from).toISOString()) : '';
                const dateTo = item.date.to ? formatDate(new Date(item.date.to).toISOString()) : 'Đang thực hiện';
                return (
                    <div key={index} className="p-5 shadow-lg  flex justify-between">
                        <div className="flex flex-col gap-2">
                            <h5 className="text-lg text-primary-100 font-title">{item.name}</h5>
                            <h5 className="font-semibold">{item.organization}</h5>
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

            <EditForm handleOpen={handleOpen} open={open} certificateToEdit={certificateToEdit} />
        </div>
    );
};

export default CerItem;
