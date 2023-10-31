import { MdEmail } from 'react-icons/md';
import Card from '../../../components/Card';
import FormInfo from './Form';
import { useState } from 'react';
import { RootState } from '@/store/store';

import { useSelector } from 'react-redux';

const Info = () => {
    const currentUser = useSelector((state: RootState) => state.user.user);

    const [open, setOpen] = useState<boolean>(false);
    const handleOpen = () => setOpen(!open);

    return (
        <>
            <Card handleOpen={handleOpen}>
                <div className="flex items-center gap-4">
                    <img className="w-20  h-20 object-cover rounded-full" src={currentUser?.photo} alt="avt" />
                    <div className="flex flex-col gap-2">
                        <h6 className="font-family-title text-2xl font-title text-primary-100 ">
                            {currentUser?.firstName} {currentUser?.lastName}
                        </h6>
                        <div className="flex items-center gap-2 text-content-title font-medium">
                            <MdEmail />
                            <p className="font-family-text">{currentUser?.email}</p>
                        </div>
                    </div>
                </div>
            </Card>
            <FormInfo handleOpen={handleOpen} open={open} />
        </>
    );
};

export default Info;
