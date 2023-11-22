import { MdOutlineDashboard, MdWork } from 'react-icons/md';
import { RiLockPasswordLine, RiLogoutCircleRLine } from 'react-icons/ri';
import TitleProfile from './TitleProfile';
import { RootState } from '@/store/store';
import { useSelector } from 'react-redux';
import { isJobSeeker, isCompany } from '@/utils/helper';

const Sidebar = () => {
    const currentUser = useSelector((state: RootState) => state.user.user);
    const jobSeeker = isJobSeeker(currentUser);
    const company = isCompany(currentUser);
    return (
        <div className="bg-white flex flex-col rounded-md border-[1px] border-primary-40 h-fit w-[304px]  text-lg font-family-title  mb:w-full tb:flex-row tb:w-full tb:gap-6 tb:bg-transparent tb:border-none lg:flex-row lg:w-full lg:gap-6 lg:bg-transparent lg:border-none xl:flex-row xl:w-full xl:gap-6 xl:bg-transparent xl:border-none">
            <TitleProfile title="Trang cá nhân" path="/profile" logo={<MdOutlineDashboard />} />
            {jobSeeker && <TitleProfile title="Applied Jobs" path="jobseeker/applied-jobs" logo={<MdWork />} />}
            {company && (
                <TitleProfile title="Công việc đã tạo" path="company/job-created" logo={<MdOutlineDashboard />} />
            )}

            {company && <TitleProfile title="Thùng rác" path="company/job-deleted" logo={<MdOutlineDashboard />} />}
            {company && <TitleProfile title="Thêm công việc" path="company/post-job" logo={<MdOutlineDashboard />} />}

            <TitleProfile title="Đổi mật khẩu" path="/profile/updateMyPassword" logo={<RiLockPasswordLine />} />
        </div>
    );
};

export default Sidebar;
