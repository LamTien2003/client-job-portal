
import images from "@/assets/images";
import Loader from "@/components/Admin/Loader/Loader";
import { ListColumn, ListGutter } from "@/components/Icons";
import { useGetJobseekersQuery } from "@/services/jobseekerApiSlice";
import { useBanUserMutation } from "@/services/usersApiSlice";
import Company from "@/types/Company";
import JobSeeker from "@/types/JobSeeker";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

function Jobseeker({selectingUser}: {selectingUser: (user: JobSeeker | Company) => void}) {

    const [limit, setLimit] = useState<number>(6)
    const [jobseekers, setJobseekers] = useState<JobSeeker[]>([])
    const [select, setSelect] = useState<string | undefined>('')

    const {data, isLoading, isError} = useGetJobseekersQuery({page: 1, limit: limit})
    const [banUser, {isLoading: isBanning}] = useBanUserMutation()

    useEffect(() => {
        if(data?.data?.data && !isLoading && !isError) {
            setJobseekers(data?.data?.data)
            setSelect(data?.data?.data[0].id)
        }
    }, [data?.data?.data, !isLoading, !isError])
    
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

    const toggleIsSelect = (user:JobSeeker) => {
        if(user.id === select) {
            selectingUser(user)
            return 'flex flex-col items-center w-[31.4%] bg-white border-2 border-[#40189D] rounded-[10px] shadow-lg px-[20px] pt-[30px] pb-[20px] relative cursor-pointer'
        } else {
            return 'flex flex-col items-center w-[31.4%] bg-white rounded-[10px] px-[20px] pt-[30px] pb-[20px] relative cursor-pointer'
        }
    }

    return (
        <>
            <div className=" flex items-center justify-between">
                <div className=" flex flex-col">
                    <h3 className=" text-lg text-content-title font-semibold">Hiển thị 6 người tìm việc</h3>
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
                {jobseekers?.map((jobseeker, index) => {
                    return (
                        <div key={index} onClick={() => setSelect(jobseeker.id)} className={toggleIsSelect(jobseeker)}>
                            <div className=" w-[80px] h-[80px] flex items-center justify-center rounded-[10px] p-[10px]">
                                <img className=" w-[60px] h-[60px] rounded-full" src={jobseeker.photo} />
                            </div>
                            <h2 className=" text-content-title text-lg font-semibold mt-3">{jobseeker.firstName + ' ' + jobseeker.lastName}</h2>
                            <p className=" text-content-text text-sm mt-3">{jobseeker.educate.length !== 0 ? jobseeker.educate.map(edu => edu.major) : 'Chưa cập nhật ngành'}</p>
                            <div className=" flex items-center justify-center mt-4 gap-[10px] ">
                                <img className=" w-[28px] bg-red-500 rounded-md py-1 px-1 cursor-pointer" src={images.admin.banIconAdmin} onClick={() => handleBanUser(jobseeker.id)} />
                            </div>
                        </div>
                    )
                })}
            </div>
            {/* {isLoading && <Loader />} */}
            <button className=" w-[100px] text-center text-white bg-[#40189D] rounded-md py-[8px] mx-auto mb-[20px]" onClick={() => setLimit(prev => prev + 6)}>Xem thêm</button>
        </>
    );
}

export default Jobseeker;