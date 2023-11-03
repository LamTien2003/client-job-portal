
import images from "@/assets/images";
import { ListColumn, ListGutter } from "@/components/Icons";
import { useGetBannedUsersQuery, useUnbanUserMutation } from "@/services/usersApiSlice";
import Company from "@/types/Company";
import JobSeeker from "@/types/JobSeeker";
import User from "@/types/User";
import { isCompany, isJobSeeker } from "@/utils/helper";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

function Ban({selectingUser}: {selectingUser: (user: Company | JobSeeker) => void}) {
    const {data, isLoading, isError} = useGetBannedUsersQuery({page: 1, limit: 10})
    const [unbanUser, {isLoading: isUnbanning}] = useUnbanUserMutation()

    const [users, setUsers] = useState<User[]>([])
    const [select, setSelect] = useState<string | undefined>('')

    console.log(data)
    
    useEffect(() => {
        if(data?.data?.data && !isLoading && !isError) {
            setUsers(data?.data?.data)
            setSelect(data?.data?.data[0].id)
        }
    }, [data?.data?.data, !isLoading, !isError])
    
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

    const toggleIsSelect = (user:Company | JobSeeker) => {
        if(user.id === select) {
            selectingUser(user)
            return 'flex flex-col items-center w-[31.4%] bg-white border-2 border-[#40189D] rounded-[10px] shadow-lg px-[20px] pt-[50px] pb-[20px] relative cursor-pointer'
        } else {
            return 'flex flex-col items-center w-[31.4%] bg-white rounded-[10px] px-[20px] pt-[50px] pb-[20px] relative cursor-pointer'
        }
    }

    return (
        <>
            <div className=" flex items-center justify-between">
                <div className=" flex flex-col">
                    <h3 className=" text-lg text-content-title font-semibold">Hiển thị theo 6 người tìm việc</h3>
                    <p className=" text-content-text">Dựa theo lựa chọn của bạn</p>
                </div>
                <div className=" flex items-center gap-[10px]">
                    <div className=" flex items-center text-[#40189D] border border-[#40189D] rounded-lg py-[6px] px-[10px] gap-[5px]">
                        <p>Mới nhất</p>
                        <FontAwesomeIcon icon={faCaretDown} />
                    </div>
                    <ListGutter color="#40189D" />
                    <ListColumn color="#40189D" />
                </div>
            </div>
            <div className=" flex flex-wrap gap-[24px]">
                {users?.map((user: any, index) => {
                    return (
                        <div key={index} onClick={() => setSelect(user.id)} className={toggleIsSelect(user)}>
                            <img className=" top-[15px] left-[15px] absolute" src={images.admin.save} />
                            <div className=" w-[80px] h-[80px] flex items-center justify-center bg-[#5FA76F] rounded-[10px] p-[10px]">
                                <img className=" w-[60px] h-[60px] rounded-full" src={user.photo} />
                            </div>
                            <h2 className=" text-content-title text-lg font-semibold mt-3">{isCompany(user) ? user.companyName : (user.firstName + ' ' + user.lastName)}</h2>
                            <p className=" text-content-text text-sm mt-3">{isCompany(user) ? user.location : (user.educate.length !== 0 ? user.educate.map((u:any) => u.major) : 'Chưa cập nhật ngành')}</p>
                            <div className=" flex items-center justify-center mt-4 gap-[10px] ">
                                <img className=" w-[28px] bg-[#40189D] rounded-md py-1 px-1 cursor-pointer" src={images.admin.unbanIconAdmin} onClick={() => handleUnbanUser(user.id)} />
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    );
}

export default Ban;