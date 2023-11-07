import { useState } from "react";
import { useBanUserMutation, useUnbanUserMutation } from "@/services/usersApiSlice";
import { toast } from "react-toastify";
import { isJobSeeker } from "@/utils/helper";
import Jobseeker from "./Tabs/Jobseeker";
import Ban from "./Tabs/Ban";
import CompanyTab from "./Tabs/CompanyTab";
import JobSeeker from "@/types/JobSeeker";
import Company from "@/types/Company";
import images from "@/assets/images";

function Users() {
    const [activeTab, setActiveTab] = useState<'jobseeker' | 'company' | 'ban'>('jobseeker')
    const [user, setUser] = useState<JobSeeker | Company>()

    const [banUser] = useBanUserMutation()
    const [unbanUser] = useUnbanUserMutation()

    const toggleActiveTab = (tab: 'jobseeker' | 'company' | 'ban') => {
        if(activeTab === tab) {
            return 'text-white bg-[#40189D] rounded-3xl py-[8px] px-[20px] cursor-pointer'
        } else {
            return 'text-[#40189D] bg-[#ECE8F5] border border-[#40189D] rounded-3xl py-[8px] px-[20px] cursor-pointer'
        }
    }

    const selectingUser = (user: JobSeeker | Company) => {
        setUser(user)
    }

    const handleBanUser = async (id: string) => {
        const isConfirm = confirm('Bạn có chắc muốn cấm người này ?')
        if(isConfirm) {
            const response = await banUser(id)
            if(response) {
                toast.success('Chặn người dùng thành công');
            }
        } else {
            return
        }
    }
    
    const handleUnbanUser = async (id: string) => {
        const isConfirm = confirm('Bạn có chắc muốn bỏ cấm người này ?')
        if(isConfirm) {
            const response = await unbanUser(id)
            if(response) {
                toast.success('Bỏ cấm người dùng thành công');
            }
        } else {
            return
        }
    }

    return (
        <div className="flex flex-col">
            <div className=" flex justify-between gap-[30px]">
                <div className=" w-full flex flex-col gap-[20px] mb-5">
                    <div className=" flex flex-wrap items-center gap-[12px]">
                        <div className={toggleActiveTab('jobseeker')} onClick={() => setActiveTab('jobseeker')}>Người tìm việc</div>
                        <div className={toggleActiveTab('company')} onClick={() => setActiveTab('company')}>Công ty</div>
                        <div className={toggleActiveTab('ban')} onClick={() => setActiveTab('ban')}>Bị cấm</div>
                    </div>
                    
                    {activeTab === 'jobseeker' && <Jobseeker selectingUser={selectingUser} />}
                    {activeTab === 'company' && <CompanyTab selectingUser={selectingUser} />}
                    {activeTab === 'ban' && <Ban selectingUser={selectingUser}  />}
                </div>
                {isJobSeeker(user) ? (
                    <div className=" w-[350px] ">
                        <div className=" flex flex-col items-center bg-white border-b border-b-[#D9D9D9] rounded-t-[10px] px-[15px] pt-[30px] pb-[10px] gap-[12px]">
                            <div className=" w-[100px] h-[100px] flex items-center justify-center bg-[#5FA76F] rounded-[10px] p-[10px]">
                                <img src={images.admin.userAvt} />
                            </div>
                            <h2 className=" text-content-title text-xl font-semibold">{user?.firstName && user?.lastName ? user.firstName + ' ' + user.lastName : 'Đang cập nhật...'}</h2>
                            <p className=" text-content-text">{user ? user.educate.length !== 0 ? user.educate.map(edu => edu.major) : 'Chưa cập nhật ngành' : 'Đang cập nhật...'}</p>
                            <div className=" w-full flex flex-wrap items-center justify-between my-2 gap-[16px]">
                                <div className=" flex items-center">
                                    <div className=" flex items-center justify-center w-[36px] h-[36px] text-white border border-[#40189D] rounded-full mr-3">
                                        <img className=" w-[18px] h-[18px]" src={images.admin.locationAdmin} />
                                    </div>
                                    <div className=" flex flex-col items-center text-sm">
                                        <h3 className=" text-content-title font-semibold">{user ? user.location : 'Đang cập nhật'}, Việt Nam</h3>
                                        <p className=" text-content-text">Vị trí</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=" flex flex-col bg-white rounded-b-[10px] p-[20px] gap-[10px]">
                            <h2 className=" text-content-title text-lg font-semibold">Chi tiết về {user && user.firstName + ' ' + user.lastName}</h2>
                            <p className=" text-content-text text-sm">
                                {user?.introduce ? user.introduce : ' Đang cập nhật'}
                            </p>
                            
                            <div className=" flex items-center gap-[10px] ">
                                {user.ban === false ? (
                                    <button className=" text-white border bg-red-400 rounded-2xl py-2 px-5" onClick={() => handleBanUser(user && user.id)}>Ban</button>
                                    ) : (
                                    <button className=" text-content-title border-2 border-red-400 rounded-2xl py-1 px-5" onClick={() => handleUnbanUser(user && user.id)}>Unban</button>
                                )}
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className=" w-[350px] ">
                        <div className=" flex flex-col items-center bg-white border-b border-b-[#D9D9D9] rounded-t-[10px] px-[15px] pt-[30px] pb-[10px] gap-[12px]">
                            <div className=" w-[100px] h-[100px] flex items-center justify-center bg-[#5FA76F] rounded-[10px] p-[10px]">
                                <img src={images.admin.userAvt} />
                            </div>
                            <h2 className=" text-content-title text-xl font-semibold">{user ? user.companyName : 'Đang cập nhật...'}</h2>
                            <p className=" text-content-text">{user ? user.location : 'Đang cập nhật...'}</p>
                            <div className=" w-full flex flex-wrap items-center justify-between my-2 gap-[16px]">
                                <div className=" flex items-center">
                                    <div className=" flex items-center justify-center w-[36px] h-[36px] text-white border border-[#40189D] rounded-full mr-3">
                                        <img className=" w-[18px] h-[18px]" src={images.admin.locationAdmin} />
                                    </div>
                                    <div className=" flex flex-col items-center text-sm">
                                        <h3 className=" text-content-title font-semibold">{user ? user.location : 'Đang cập nhật'}, Việt Nam</h3>
                                        <p className=" text-content-text">Vị trí</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=" flex flex-col bg-white rounded-b-[10px] p-[20px] gap-[10px]">
                            <h2 className=" text-content-title text-lg font-semibold">Chi tiết về {user && user.companyName}</h2>
                            <p className=" text-content-text text-sm">
                                {user ? user.description : ' Đang cập nhật'}
                            </p>
                            
                            <div className=" flex items-center gap-[10px] ">
                                {user?.ban === false ? (
                                    <button className=" text-white border bg-red-400 rounded-2xl py-2 px-5" onClick={() => handleBanUser(user && user.id)}>Ban</button>
                                    ) : (
                                    <button className=" text-content-title border-2 border-red-400 rounded-2xl py-1 px-5" onClick={() => handleUnbanUser(user ? user.id : '')}>Unban</button>
                                )}
                            </div>
                        </div>
                    </div>
                )}
                
            </div>
        </div>
    );
}

export default Users;