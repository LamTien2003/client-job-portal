import { ReactNode } from 'react';
interface Item {
    title: string;
    total?: number;
    icon: ReactNode;
}
const Item = ({ title, total, icon }: Item) => {
    return (
        <div className="flex items-center gap-8 border-2 border-black font-family-title p-6 rounded-lg">
            <div className="text-black text-4xl border-black border-2 p-2 rounded-lg">{icon}</div>
            <div className="flex flex-col gap-2 text-end text-black">
                <h6 className="text-xl font-normal">{title}</h6>
                <span className="text-4xl font-title">{total}</span>
            </div>
        </div>
    );
};

export default Item;
