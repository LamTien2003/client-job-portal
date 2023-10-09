import { useState } from 'react';
import CardSub from '../components/CardSub';
import FormEducation from './Form';

const Educate = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggleOpen = (): void => {
        setIsOpen(!isOpen);
    };
    return (
        <CardSub title="Học vấn" sub="Chia sẻ trình độ học vấn của bạn" toggleOpen={toggleOpen} open={isOpen}>
            {isOpen && <FormEducation toggleOpen={toggleOpen} />}
        </CardSub>
    );
};

export default Educate;
