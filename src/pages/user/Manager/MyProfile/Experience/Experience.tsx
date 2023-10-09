import { useState } from 'react';
import CardSub from '../components/CardSub';
import FormExp from './Form';

const Experience = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggleOpen = (): void => {
        setIsOpen(!isOpen);
    };
    return (
        <CardSub
            title="Kinh nghiệm làm việc"
            sub="Thể hiện những thông tin chi tiết về quá trình làm việc"
            toggleOpen={toggleOpen}
            open={isOpen}
        >
            {isOpen && <FormExp toggleOpen={toggleOpen} />}
        </CardSub>
    );
};

export default Experience;
