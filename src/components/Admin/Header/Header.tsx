import images from "@/assets/images";
import { ManageAdmin } from "@/components/Icons";
import { RootState } from "@/store/store";
import { useState } from "react";
import { useSelector } from "react-redux";
type HeaderProps = {
    activeSidebar: (sidebar: boolean) => void
}
function Header(props: HeaderProps) {
    const currentUser = useSelector((state: RootState) => state.user.user)

    const [sidebar, setSidebar] = useState<boolean>(true)

    const toggleActiveSidebar = () => {
        setSidebar(!sidebar)
        props.activeSidebar(sidebar)
    }

    return (
        <div className=" w-[100%] flex items-center justify-between mb-[30px] py-5">
            <div className=" flex items-center gap-[30px]">
                <div className="flex cursor-pointer" onClick={() => toggleActiveSidebar()}>
                    <ManageAdmin />
                </div>
                <h1 className=" text-content-title text-2xl font-semibold">Quản lí công việc</h1>
            </div>
            <div className=" flex items-center gap-[30px]">

                <div className=" flex items-center bg-[#E3E3E3] rounded-[20px] py-3 px-5">
                    <input className=" outline-none bg-transparent pr-3" placeholder="TÌm kiếm" />
                    <img src={images.find} />
                </div>

                <div className=" flex items-center justify-center h-9 w-9 bg-white rounded-full relative">
                    <img src={images.admin.messageAdmin} />
                    <div className=" flex items-center justify-center w-[18px] h-[18px] text-white text-[10px] bg-[#40189D] rounded-full -top-1 -right-1 absolute">18</div>
                </div>

                <div className=" flex items-center justify-center h-9 w-9 bg-white rounded-full relative">
                    <img src={images.admin.notificationAdmin} />
                    <div className=" flex items-center justify-center w-[18px] h-[18px] text-white text-[10px] bg-[#40189D] rounded-full -top-1 -right-1 absolute">18</div>
                </div>

                <img className=" w-10 h-10 rounded-full" src={currentUser?.photo} />

                <div className=" flex flex-col">
                    <h3 className=" font-semibold">{currentUser?.lastName + ' ' +  currentUser?.firstName}</h3>
                    <p>{currentUser?.role}</p>
                </div>

            </div>
        </div>
    );
}

export default Header;