import { BellIcon } from "@/components/Icons";
import { RootState } from "@/store/store";
import { useSelector } from "react-redux";

function Header() {
    const currentUser = useSelector((state: RootState) => state.user.user)
    return (
        <div className=" w-full h-[100px] flex fixed top-0 bg-[#f0f3f6] pr-10 pl-10">
            <div className="w-3/12">
                <img className=" w-32 pt-5 pb-5 " src="/src/assets/images/logo.png" alt="" />
            </div>
            <div className="w-6/12 flex items-center text-2xl font-semibold">Xin chào, {currentUser?.lastName} !</div>
            <div className="w-3/12 flex items-center justify-end">
                <div className=" w-8 h-8 flex items-center justify-center bg-[#c8c8c8] rounded-md relative cursor-pointer">
                    <BellIcon />
                    <div className=" w-2 h-2 bg-red-500 rounded-full top-1.5 right-1.5 absolute"></div>
                </div>
            </div>
        </div>
    );
}

export default Header;