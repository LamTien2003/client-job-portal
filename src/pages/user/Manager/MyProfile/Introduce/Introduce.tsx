import { useState } from 'react';
import CardSub from '../components/CardSub';
import Form from './Form';

const Introduce = () => {
    const [open, setOpen] = useState<boolean>(false);
    const handleOpen = () => setOpen(!open);
    return (
        <>
            <CardSub
                toggleOpen={handleOpen}
                title="Giới thiệu bản thân"
                sub="Giới thiệu điểm mạnh và số năm kinh nghiệm của bạn"
            ></CardSub>
            <Form handleOpen={handleOpen} open={open} />
        </>
    );
};

export default Introduce;
