import { useState } from 'react';
import FormAcceptJob from './Form';
import { useCancelJobMutation } from '@/services/companiesApiSlice';

const Item = ({ candicate }: { candicate: any }) => {
    const [open, setOpen] = useState<boolean>(false);
    const handleOpen = () => setOpen(!open);
    const [cancelJob, { isLoading }] = useCancelJobMutation();

    const cancelJobHandle = async (id: string) => {
        await cancelJob(id);
        alert('Cancel Job Success!');
    };
    return (
        <div className="border-2 p-3 flex flex-col gap-4">
            <img className="w-10 h-10 object-cover" src={candicate.candicate.photo} alt="avt-candicate" />
            <p>{candicate.candicate.firstName}</p>
            <p>{candicate.candicate.lastName}</p>
            <p>{candicate.candicate.gender}</p>
            <p>{candicate.candicate.introduce}</p>

            <div className="bg-blue-200">{candicate.status}</div>
            <button onClick={handleOpen} className="bg-blue-400 p-2 w-1/3" type="button">
                Accept Job
            </button>
            {candicate.status === 'pending' && (
                <button onClick={() => cancelJobHandle(candicate.id)} className="bg-red-400 p-2 w-1/3" type="button">
                    {isLoading ? 'Đang huỷ' : 'Huỷ Ứng Viên'}
                </button>
            )}
            <FormAcceptJob id={candicate.id} handleOpen={handleOpen} open={open} />
        </div>
    );
};

export default Item;
