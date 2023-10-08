import { ReactNode } from 'react';
import { BsPlusCircle } from 'react-icons/bs';
import { AiOutlineMinusCircle } from 'react-icons/ai';
interface Card {
    title: string;
    sub: string;
    children?: ReactNode;
    toggleOpen?: () => void;
    open?: boolean;
}
const CardSub = ({ title, sub, children, toggleOpen, open }: Card) => {
    return (
        <div className="flex flex-col gap-8 bg-white shadow-md rounded-md p-5 ">
            <div className="flex items-center justify-between ">
                <div className="flex flex-col gap-2">
                    <h6 className="text-xl font-title text-primary-100">{title}</h6>
                    <p className="text-content-text font-medium">{sub}</p>
                </div>

                <button
                    onClick={toggleOpen}
                    className="text-xl font-semibold text-primary-100 hover:text-black duration-200"
                >
                    {!open ? (
                        <BsPlusCircle />
                    ) : (
                        <div className="text-2xl">
                            <AiOutlineMinusCircle />
                        </div>
                    )}
                </button>
            </div>

            {children}
        </div>
    );
};

export default CardSub;
