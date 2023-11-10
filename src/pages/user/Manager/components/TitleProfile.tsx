import { NavLink } from 'react-router-dom';
import { ReactElement } from 'react';
const TitleProfile = ({ title, path, logo }: { title: string; path: string; logo: ReactElement }) => {
    return (
        <NavLink to={path} className={({ isActive }) => (isActive ? 'bg-primary-100 text-white rounded-sm' : '')}>
            <div className="flex   items-center py-[13px] px-[30px]  gap-3 font-semibold hover:bg-primary-40 duration-300 tb:shadow-lg tb:border-primary-100 tb:border-2 lg:border-primary-100 lg:border-2 xl:border-primary-100 xl:border-2">
                {logo}
                <h5>{title}</h5>
            </div>
        </NavLink>
    );
};

export default TitleProfile;
