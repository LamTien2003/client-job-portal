import { ReactNode } from 'react';
const Title: React.FC<{ title: ReactNode; subTitle: string; children: ReactNode }> = ({
    title,
    subTitle,
    children,
}) => {
    return (
        <div className="flex justify-between gap-6 items-center lg:items-start mb-[60px] mb:flex-col">
            <div className="">
                <h2 className="text-[2.5rem]  font-bold mb-3 lg:text-3xl">{title}</h2>
                <p className="text-lg text-content-text lg:text-base">{subTitle}</p>
            </div>
            {children}
        </div>
    );
};

export default Title;
