import { ReactNode } from 'react';
interface Item {
    title: string;
    total?: number;
    icon: ReactNode;
}
const Item = ({ title, total, icon }: Item) => {
    return (
        <div className="flex items-center gap-8 border-[3px] border-primary-100 font-family-title p-5 rounded-lg">
            <div className="text-primary-100 text-4xl border-primary-100 border-2 p-2 rounded-lg">{icon}</div>
            <div className="flex flex-col gap-2 text-end text-primary-100">
                <h6 className="text-content-text text-xl font-normal">{title}</h6>
                <span className="text-4xl font-title">{total}</span>
            </div>
        </div>
    );
};

export default Item;
