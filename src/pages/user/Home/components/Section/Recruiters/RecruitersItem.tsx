import images from '@/assets/images';
import Company from '@/types/Company';
import { Link } from 'react-router-dom';
import { IoIosArrowRoundForward } from 'react-icons/io';
const RecruitersItem = ({ company, path }: { company: Company; path: string }) => {
    return (
        <Link
            to={path}
            className="flex flex-col rounded-md border-primary-200 border-[1px] hover:border-primary-100 duration-300"
        >
            <div className="flex justify-evenly items-center py-4 pr-20 bg-[#E5F6F7]">
                <img className="rounded-full w-[60px] h-[60px]" src={company.photo} alt="logo" />
                <div className="flex flex-col gap-1">
                    <h5 className="text-content-title text-lg font-semibold">{company.companyName}</h5>
                    <div className="flex">
                        <img src={images.logo.location} alt={images.logo.location} />
                        <p className="ml-3 text-content-text font-medium">{company?.location?.city}</p>
                    </div>
                    <div className="flex">
                        <img src={images.logo.person} alt={images.logo.person} />
                        <p className="ml-3 text-content-text font-medium">{12} People</p>
                    </div>
                </div>
            </div>

            <div className="flex group justify-between p-5">
                <div className=" text-primary-100 flex items-center relative group-hover:cursor-pointer border-2 border-primary-100 rounded-md px-2 py-1">
                    <span className=" text-sm font-medium ml-1 mb:text-xs ">Ứng tuyển</span>
                    <IoIosArrowRoundForward className="text-xl" />
                </div>

                <p className="text-lg text-content-text font-normal">
                    Quy mô:{' '}
                    <span className="text-primary-100 font-semibold">
                        {company?.companySize?.from} - {company?.companySize?.to}
                    </span>
                </p>
            </div>
        </Link>
    );
};

export default RecruitersItem;
