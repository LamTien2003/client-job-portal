import { useState } from 'react';
import CardSub from '../components/CardSub';
import Form from './Form';

const Skill = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggleOpen = (): void => {
        setIsOpen(!isOpen);
    };

    return (
        <CardSub
            title="Kỹ năng"
            sub="Nêu bật các kỹ năng liên quan đến công việc"
            toggleOpen={toggleOpen}
            open={isOpen}
        >
            {isOpen && <Form toggleOpen={toggleOpen} />}
        </CardSub>
    );
};

export default Skill;
