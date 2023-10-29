import { useState } from 'react';
import FormAcceptJob from './Form';
import { useCancelJobMutation } from '@/services/companiesApiSlice';

const Item = ({ candicate }: { candicate: any }) => {
    const [open, setOpen] = useState<boolean>(false);
    const handleOpen = () => setOpen(!open);
    const [cancelJob, { isLoading }] = useCancelJobMutation();

    const cancelJobHandle = async (idCan: string) => {
        await cancelJob(idCan);
        alert('Cancel Job Success!');
    };
    return (
        <>
            <tr className="bg-white border-b border-primary-100   hover:bg-gray-50">
                <th
                    scope="row"
                    className="border-primary-100 border-[1px] px-2 py-4 font-medium text-content-text whitespace-nowrap "
                >
                    <div className="flex gap-5 items-center">
                        <img
                            className="w-12 h-12 object-cover rounded-full"
                            src={candicate.candicate.photo}
                            alt="avt-candicate"
                        />
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

                        <div className="flex gap-2">
                            <span className="font-title text-content-title">Mô tả:</span>
                            <p>{candicate.candicate.introduce}</p>
                        </div>
                    </div>
                </th>

                <td className="gap-3 px-6 py-4 border-primary-100 border-[1px]">
                    {candicate.status === 'accepted' && (
                        <div className="px-3 py-1 text-center text-white font-semibold text-sm rounded-lg bg-primary-100 ">
                            Đã duyệt
                        </div>
                    )}

                    {candicate.status === 'pending' && (
                        <div className="py-1 w-full text-center text-white font-semibold text-sm rounded-lg bg-[#7307C9]">
                            Chưa duyệt
                        </div>
                    )}
                    {candicate.status === 'canceled' && (
                        <div className="py-1 w-full text-center text-white font-semibold text-sm rounded-lg bg-red-200">
                            Từ chối
                        </div>
                    )}
                </td>

                <td className="px-6 py-4 border-primary-100 border-[1px]">
                    <div className="flex flex-col gap-3 ">
                        <button
                            onClick={handleOpen}
                            className="bg-blue-400 p-2 rounded-md text-white font-semibold hover:bg-black duration-200"
                            type="button"
                        >
                            Accept Job
                        </button>
                        {candicate.status === 'pending' && (
                            <button
                                onClick={() => cancelJobHandle(candicate.id)}
                                className="bg-red-400 p-2 rounded-md text-white font-semibold hover:bg-black duration-200"
                                type="button"
                            >
                                {isLoading ? 'Đang huỷ' : 'Huỷ Ứng Viên'}
                            </button>
                        )}
                    </div>
                </td>
            </tr>
            <FormAcceptJob id={candicate.id} handleOpen={handleOpen} open={open} />
        </>
    );
};

export default Item;
