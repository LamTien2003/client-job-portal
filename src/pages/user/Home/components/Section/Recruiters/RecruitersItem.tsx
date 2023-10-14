import images from '@/assets/images';
import Company from '@/types/Company';
import { Link } from 'react-router-dom';

const RecruitersItem = ({ company, path }: { company: Company; path: string }) => {
    return (
        <Link
            to={path}
            className="flex flex-col rounded-md border-primary-200 border-[1px] hover:border-primary-100 duration-300"
        >
            <div className="flex justify-evenly items-center py-5 pr-20 bg-[#E5F6F7]">
                <img className="rounded-full w-[60px] h-[60px]" src={company.photo} alt="logo" />
                <div className="flex flex-col gap-1">
                    <h5 className="text-content-title text-lg font-semibold">{company.companyName}</h5>
                    <div className="flex">
                        <img src={images.logo.location} alt={images.logo.location} />
                        <p className="ml-3 text-content-text font-medium">{company.location}</p>
                    </div>
                    <div className="flex">
                        <img src={images.logo.person} alt={images.logo.person} />
                        <p className="ml-3 text-content-text font-medium">{12} People</p>
                    </div>
                </div>
            </div>

            <div className="flex group justify-between p-8">
                <div className=" text-primary-100 flex items-center relative group-hover:cursor-pointer ">
                    <img
                        className="-left-2 top-2 absolute duration-300 group-hover:-left-1"
                        src="https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/icon/apply-arrow.svg"
                    />
                    <img src="https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/icon/apply-ellipse.svg" />
                    <span className=" text-sm font-medium ml-1 mb:text-xs ">Xem chi tiết</span>
                </div>

                <p className="text-lg text-content-text font-normal">
                    Vacancies: <span className="text-primary-100 font-semibold">{12}</span>
                </p>
            </div>
        </Link>
    );
};

export default RecruitersItem;
