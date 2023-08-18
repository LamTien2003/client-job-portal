import { ReactNode } from 'react';
const Title: React.FC<{ title: ReactNode; subTitle: string; children: ReactNode }> = ({
    title,
    subTitle,
    children,
}) => {
    return (
        <div className="flex justify-between items-center mb-[60px]">
            <div className="">
                <h2 className="text-[2.5rem]  font-bold mb-3">{title}</h2>
                <p className="text-lg text-content-text">{subTitle}</p>
            </div>
            {children}
        </div>
    );
};

export default Title;
