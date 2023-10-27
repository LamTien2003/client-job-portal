import { MdOutlineDashboard, MdWork } from 'react-icons/md';
import { RiLogoutCircleRLine } from 'react-icons/ri';
import TitleProfile from './TitleProfile';
import { RootState } from '@/store/store';
import { useSelector } from 'react-redux';
import { isJobSeeker, isCompany } from '@/utils/helper';
const Sidebar = () => {
    const currentUser = useSelector((state: RootState) => state.user.user);
    const jobSeeker = isJobSeeker(currentUser);
    const company = isCompany(currentUser);
    return (
        <div className="bg-white flex flex-col rounded-md border-[1px] border-primary-40 h-fit w-[304px]  text-lg ">
            <TitleProfile
                title="My profile"
                path={`${jobSeeker ? '/jobseeker/profile' : '/company/profile'}`}
                logo={<MdOutlineDashboard />}
            />
            {jobSeeker && <TitleProfile title="Applied Jobs" path="applied-jobs" logo={<MdWork />} />}
            {company && <TitleProfile title="Job Created" path="job-created" logo={<MdOutlineDashboard />} />}

            {company && <TitleProfile title="Thùng rác" path="job-deleted" logo={<MdOutlineDashboard />} />}

            <TitleProfile title="Log Out" path="logout" logo={<RiLogoutCircleRLine />} />
        </div>
    );
};

export default Sidebar;
