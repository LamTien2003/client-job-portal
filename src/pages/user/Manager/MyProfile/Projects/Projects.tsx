import { useState } from 'react';
import CardSub from '../components/CardSub';
import FormProject from './Form';

const Projects = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggleOpen = (): void => {
        setIsOpen(!isOpen);
    };
    return (
        <CardSub
            title="Dự án cá nhân"
            sub="Liệt kê một số dự án có liên quan để cho thấy bạn đã áp dụng khả năng của mình như thế nào"
            toggleOpen={toggleOpen}
            open={isOpen}
        >
            {' '}
            {isOpen && <FormProject toggleOpen={toggleOpen} />}
        </CardSub>
    );
};

export default Projects;
