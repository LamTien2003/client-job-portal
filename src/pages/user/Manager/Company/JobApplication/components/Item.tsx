import { useState } from 'react';
import FormAcceptJob from './Form';
import { useCancelJobMutation } from '@/services/companiesApiSlice';
import { toast } from 'react-toastify';
import images from '@/assets/images';
import { Link } from 'react-router-dom';

const Item = ({ candicate }: { candicate: any }) => {
    const [open, setOpen] = useState<boolean>(false);
    const handleOpen = () => setOpen(!open);
    const [cancelJob, { isLoading }] = useCancelJobMutation();

    const cancelJobHandle = async (idCan: string) => {
        try {
            await cancelJob(idCan).unwrap();

            toast.success('Huỷ thành công!');
        } catch (error: any) {
            if (error.status === 400) {
                toast.error(error.data.msg);
            }
        }
    };
    return (
        <>
            <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-lg font-family-text gap-2">
                <div className="flex gap-4 w-[40%] items-center">
                    <img
                        className="bg-primary-100 w-16 h-16  object-fit rounded-lg"
                        src={candicate.candicate.photo}
                        alt="company"
                    />

                    <div className="flex gap-6 ">
                        <div className="flex flex-col gap-2">
                            <div className="flex gap-2">
                                <span className="font-title text-content-title">Họ tên:</span>
                                <p>{candicate.candicate.firstName}</p>
                                <p>{candicate.candicate.lastName}</p>
                            </div>
                            <div className="flex gap-2">
                                <span className="font-title text-content-title">Giới tính:</span>
                                <p>
                                    {candicate.candicate.gender === 'male' && 'Nam'}
                                    {candicate.candicate.gender === 'female' && 'Nữ'}
                                    {candicate.candicate.gender === 'others' && 'Khác'}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex  gap-4 w-[30%] items-center">
                    <img
                        className="w-16 h-16 bg-[#fba555] p-3 rounded-lg object-contain"
                        src={images.logo.userFg}
                        alt={images.logo.userFg}
                    />
                    <div className="flex flex-col gap-2">
                        <Link className="text-primary-100 hover:text-blue-800 duration-300 underline text-lg" to={`#`}>
                            Xem CV Ứng Viên
                        </Link>

                        {candicate.status === 'accepted' && (
                            <div className="py-1 text-center  border-primary-100 border-2 rounded-lg ">Đã duyệt</div>
                        )}

                        {candicate.status === 'pending' && (
                            <div className="py-1 text-center  border-[#7307C9] border-2 rounded-lg ">Chưa duyệt</div>
                        )}
                        {candicate.status === 'canceled' && (
                            <div className="py-1 text-center  border-[#c90707] border-2 rounded-lg ">Từ chối</div>
                        )}
                    </div>
                </div>

                <div className="flex flex-col gap-2 font-medium w-[20%] justify-end">
                    {candicate.status === 'pending' ? (
                        <div className="flex flex-col gap-2">
                            <button
                                onClick={handleOpen}
                                className="bg-blue-400 p-2 rounded-md text-white font-semibold hover:bg-black duration-200"
                                type="button"
                            >
                                Chấp nhận
                            </button>
                            <button
                                onClick={() => cancelJobHandle(candicate.id)}
                                className="bg-red-400 p-2 rounded-md text-white font-semibold hover:bg-black duration-200"
                                type="button"
                            >
                                {isLoading ? 'Đang huỷ' : 'Huỷ'}
                            </button>
                        </div>
                    ) : (
                        <button className="bg-green-400 p-2 rounded-md text-white font-semibold " type="button">
                            Đã thực hiện
                        </button>
                    )}
                </div>
            </div>

            <FormAcceptJob id={candicate.id} handleOpen={handleOpen} open={open} />
        </>
    );
};

export default Item;
