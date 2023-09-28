import TitleProfile from './Title';
import { MdOutlineDashboard } from 'react-icons/md';
import { RiLogoutCircleRLine } from 'react-icons/ri';
const Sidebar = () => {
    return (
        <div className="bg-white flex flex-col rounded-md border-[1px] border-primary-40 h-fit w-96 text-content-s-text text-lg ">
            <TitleProfile title="Dashboarch" path="/dashboarch" logo={<MdOutlineDashboard />} />
            <TitleProfile title="My profile" path="my-profile" logo={<MdOutlineDashboard />} />
            
           
            <TitleProfile title="Views Resume" path="my-profile" logo={<MdOutlineDashboard />} />
            <TitleProfile title="Setting" path="my-profile" logo={<MdOutlineDashboard />} />
            <TitleProfile title="Log Out" path="my-profile" logo={<RiLogoutCircleRLine />} />
        </div>
    );
};

export default Sidebar;
