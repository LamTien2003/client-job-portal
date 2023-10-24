import images from "@/assets/images";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Jobseeker from "./components/Jobseeker/Jobseeker";
import Company from "./components/Company/Company";
import Admin from "./components/Admin/Admin";



function ManageUser() {
    const [jobseeker, setJobseeker] = useState<boolean>(true)
    const [company, setCompany] = useState<boolean>(false)
    const [admin, setAdmin] = useState<boolean>(false)

    const handleActive = (arg:string) => {
        if(arg === 'jobseeker') {
            setJobseeker(true)
            setCompany(false)
            setAdmin(false)
        }
        if(arg === 'company') {
            setJobseeker(false)
            setCompany(true)
            setAdmin(false)
        }
        if(arg === 'admin') {
            setJobseeker(false)
            setCompany(false)
            setAdmin(true)
        }
    }
    
    return (
        <div className="w-9/12 flex flex-col ml-[25%] pr-10 pb-10">
            <div className=" flex items-center justify-between">
                <div className={" w-1/3 flex items-center justify-between bg-white p-4 cursor-pointer " + (jobseeker === true ? 'shadow-xl pb-6 px-4 pt-4' : 'shadow-sm')} onClick={() => handleActive('jobseeker')}>
                    <div>
                        <p className=" text-primary-100 text-lg font-semibold mb-8">5.321</p>
                        <span className=" text-content-title text-lg font-medium">Người Tìm Việc</span>
                    </div>
                    <img className=" w-[70px] h-[70px]" src={images.admin.jobseeker} />
                </div>
                <div className={" w-1/3 flex items-center justify-between bg-white p-4 mx-10 cursor-pointer " + (company === true ? 'shadow-xl pb-6 px-4 pt-4' : 'shadow-sm')} onClick={() => handleActive('company')}>
                    <div>
                        <p className=" text-primary-100 text-lg font-semibold mb-8">261</p>
                        <span className=" text-content-title text-lg font-medium">Doanh Nghiệp</span>
                    </div>
                    <img className=" w-[70px] h-[70px]" src={images.admin.company} />
                </div>
                <div className={" w-1/3 flex items-center justify-between bg-white p-4 cursor-pointer " + (admin === true ? 'shadow-xl pb-6 px-4 pt-4' : 'shadow-sm')} onClick={() => handleActive('admin')}>
                    <div>
                        <p className=" text-primary-100 text-lg font-semibold mb-8">50</p>
                        <span className=" text-content-title text-lg font-medium">Quản Trị Viên</span>
                    </div>
                    <img className=" w-[70px] h-[70px]" src={images.admin.admin} />
                </div>
            </div>

            <div className=" flex justify-end mt-4">
                <div className=" w-[314px] flex items-center bg-white rounded-3xl border border-[#EFEEEB]">
                    <div className=" pr-3 pl-4 pt-1.5 pb-1.5 text-lg border-r border-[#BCBCBC] cursor-pointer">
                        <FontAwesomeIcon  icon={faMagnifyingGlass}/>
                    </div>
                    <input className=" outline-none pt-1.5 pb-1.5 pl-2 pr-3 " placeholder="Tìm kiếm" />
                    <p className=" pt-2 pb-2 pl-3 pr-2.5 bg-primary-100 text-white rounded-r-3xl cursor-pointer">Tìm</p>
                </div>
            </div>

            {jobseeker && <Jobseeker />}
            {company && <Company />}
            {admin && <Admin />}
        </div>
    );
}

export default ManageUser;