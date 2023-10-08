import { MdOutlineDashboard } from 'react-icons/md';
import { RiLogoutCircleRLine } from 'react-icons/ri';
import TitleProfile from './TitleProfile';
const Sidebar = () => {
    return (
        <div className="bg-white flex flex-col rounded-md border-[1px] border-primary-40 h-fit w-[304px]  text-lg ">
            <TitleProfile title="Dashboarch" path="dashboarch" logo={<MdOutlineDashboard />} />
            <TitleProfile title="My profile" path="my-profile" logo={<MdOutlineDashboard />} />
            <TitleProfile title="Views Resume" path="resume" logo={<MdOutlineDashboard />} />
            <TitleProfile title="Setting" path="setting" logo={<MdOutlineDashboard />} />
            <TitleProfile title="Log Out" path="logout" logo={<RiLogoutCircleRLine />} />
        </div>
    );
};

export default Sidebar;
