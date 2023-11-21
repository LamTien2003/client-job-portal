import { useState } from "react";
import JobseekerTab from "./Tabs/JobseekerTab";
import CompanyTab from "./Tabs/CompanyTab";
import BanTab from "./Tabs/BanTab";
import images from "@/assets/images";
import Loader from "@/components/Loader/Loader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserSlash } from "@fortawesome/free-solid-svg-icons";

function User() {

    const [tab, setTab] = useState<string>('jobseeker')
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const styleForTab = (arg: string) => {
        if(arg === tab) {
            return ' flex items-center justify-between w-[250px] bg-white text-primary-100 border-t-8 border-t-primary-100 rounded-[10px] shadow-xl p-5 cursor-pointer'
        } else {
            return ' flex items-center justify-between w-[250px] bg-white text-primary-100 border-t-8 border-t-transparent rounded-[10px] shadow-xl p-5 cursor-pointer'
        }
    }

    return (
        <>
            {isLoading && <Loader />}

            {/* tab */}
            <div className=" flex items-center justify-start font-family-text mb-[30px] gap-[30px]">
                <div className={styleForTab('jobseeker')} onClick={() => setTab('jobseeker')}>
                    <div className={" border border-primary-100 rounded p-2.5 "}>
                        <img src={images.admin.jobseekerAdmin} />
                    </div>
                    <div className=" flex flex-col items-end justify-end gap-[15px] ">
                        <p className=" text-lg">Người Tìm Việc</p>
                        <h1 className=" text-4xl font-semibold font-family-title">86</h1>
                    </div>
                </div>
                <div className={styleForTab('company')} onClick={() => setTab('company')}>
                    <div className={" border border-primary-100 rounded p-2.5 "}>
                        <img src={images.admin.companyAdmin} />
                    </div>
                    <div className=" flex flex-col items-end justify-end gap-[15px] ">
                        <p className=" text-lg">Doanh Nghiệp</p>
                        <h1 className=" text-4xl font-semibold font-family-title">86</h1>
                    </div>
                </div>
                <div className={styleForTab('banned')} onClick={() => setTab('banned')}>
                    <div className={" border border-primary-100 rounded p-2.5 "}>
                        <div className=" w-9 h-9">
                            <FontAwesomeIcon className=" w-full h-full" icon={faUserSlash} />
                        </div>
                    </div>
                    <div className=" flex flex-col items-end justify-end gap-[15px] ">
                        <p className=" text-lg">Người Bị Cấm</p>
                        <h1 className=" text-4xl font-semibold font-family-title">86</h1>
                    </div>
                </div>
            </div>

            {/* table */}
            {tab === 'jobseeker' && <JobseekerTab setIsLoading={setIsLoading} />}
            {tab === 'company' && <CompanyTab setIsLoading={setIsLoading} />}
            {tab === 'banned' && <BanTab setIsLoading={setIsLoading} />}
        </>
    );
}

export default User;