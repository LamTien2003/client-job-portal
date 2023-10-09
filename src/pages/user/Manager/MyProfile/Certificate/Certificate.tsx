import { useState } from 'react';
import CardSub from '../components/CardSub';
import FormCer from './Form';

const Certificate = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggleOpen = (): void => {
        setIsOpen(!isOpen);
    };
    return (
        <CardSub
            title="Chứng chỉ"
            sub="Cung cấp bằng chứng về chuyên môn và kỹ năng cụ thể của bạn"
            toggleOpen={toggleOpen}
            open={isOpen}
        >
            {isOpen && <FormCer toggleOpen={toggleOpen} />}
        </CardSub>
    );
};

export default Certificate;
