import { Link, NavLink } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark as faBookmarkRegular } from '@fortawesome/free-regular-svg-icons';
import Job from '@/types/Job';
import { formatDate } from '@/utils/date';
import { formatNumberToVND } from '@/utils/number';

const FeaturesItem = ({ job, path }: { job: Job; path: string }) => {
    const date: string = formatDate(job.deadline);
    const salary: string = formatNumberToVND(job.salary);
    return (
        <NavLink to={path} className="group">
            <div className="bg-white h-[380px] rounded-r pt-9 pb-9 pr-6 pl-6 border-l-4 border-primary-blur group-hover:border-primary-100 font-family-text">
                <div className=" flex items-start mb-5 relative">
                    <img className="w-13 h-13 object-cover rounded-full mr-5" src={job.postedBy.photo} />
                    <div className="w-full flex flex-col border-b border-content-border pb-3">
                        <h3 className=" text-content-title text-lg font-semibold mb-1">{job.title}</h3>
                        <p className="text-sm">{job.description}</p>
                    </div>
                    <div className=" right-0 top-0 absolute cursor-pointer lg:hidden">
                        <div className=" w-7 h-7 rounded-full border border-primary-100 flex justify-center items-center duration-300 hover:bg-primary-100">
                            <FontAwesomeIcon
                                className=" text-primary-100 text-sm duration-300 hover:text-white"
                                icon={faBookmarkRegular}
                            />
                        </div>
                    </div>
                </div>
                <div className="  bg-content-bgjob pt-7.5 pb-7.5 pr-6 pl-6 flex flex-col">
                    <div className=" flex items-start mb-2">
                        <img
                            className=" mt-1.25"
                            src="https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/icon/arrow2.svg"
                        />
                        <p className=" text-content-text text-cb font-medium ml-1.5">
                            Lương: <span className=" text-content-title font-semibold ml-1 mr-1.5">{salary} /</span>
                            Tháng
                        </p>
                    </div>
                    <div className=" flex items-start mb-2">
                        <img
                            className=" mt-1.25"
                            src="https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/icon/arrow2.svg"
                        />
                        <p className=" text-content-text text-cb font-medium ml-1.5">Vacancy: Per month</p>
                    </div>
                    <div className=" flex items-start mb-2">
                        <img
                            className=" mt-1.25"
                            src="https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/icon/arrow2.svg"
                        />
                        <p className=" text-content-text text-cb font-medium ml-1.5">Thời hạn: {date}</p>
                    </div>
                </div>
                <div className=" group pt-7.5 ml-2.5">
                    <Link
                        to="/job-detail"
                        className=" text-primary-100 flex items-center relative group-hover:cursor-pointer "
                    >
                        <img
                            className="-left-2 top-1.5 absolute duration-300 group-hover:-left-1 mb:top-1"
                            src="https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/icon/apply-arrow.svg"
                        />
                        <img src="https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/icon/apply-ellipse.svg" />
                        <span className=" text-sm font-medium ml-1 mb:text-xs ">Đăng ký ngay</span>
                    </Link>
                </div>
            </div>
        </NavLink>
    );
};

export default FeaturesItem;
