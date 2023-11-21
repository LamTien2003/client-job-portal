import Company from '@/types/Company';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

type Props = {
    data: Company;
};

function Job(props: Props) {
    const { data: company } = props;
    return (
        <>
            <h1 className=" text-content-title text-xl font-bold mb-6">Lastest Job</h1>
            {company?.jobList.map((job) => {
                return (
                    <div
                        className=" w-full border border-[#eee] rounded pt-6 pb-6 pl-[30px] pr-[30px] mb-7.5"
                        key={job?.id}
                    >
                        <div className=" flex flex-col relative">
                            <div className=" mb-[30px] flex items-center relative lg:flex-col lg:items-start">
                                <div className=" flex items-center lg:flex-col lg:items-start lg:mb-8">
                                    <img className=" w-[52px] h-[52px] rounded-full mr-2.5 lg:mb-3" src={company.photo} />
                                    <div className=" flex flex-col">
                                        <h2 className=" text-content-title text-lg font-semibold mb-0.5 duration-300 cursor-pointer hover:text-primary-100">
                                            {job.title}
                                        </h2>
                                        <p className=" text-sm font-medium duration-300 cursor-pointer hover:text-primary-100">
                                            {company.companyName}
                                        </p>
                                    </div>
                                </div>
                                <div className=" w-px h-11 border-l border-primary-blur ml-7 mr-7 lg:hidden"></div>
                                <div className=" flex tb:flex-col">
                                    <div className=" flex flex-col tb:mb-1 ">
                                        <div className=" relative pl-3 mb-1 before:w-2 before:h-2 before:rounded-full before:bg-primary-100 before:top-[7px] before:left-0 before:absolute">
                                            <p className=" text-base font-medium">
                                                Location:
                                                <span className=" font-semibold ml-1.5">{company.location.city}</span>
                                            </p>
                                        </div>
                                        <div className=" relative pl-3 before:w-2 before:h-2 before:rounded-full before:bg-primary-100 before:top-[7px] before:left-0 before:absolute">
                                            <p className=" text-base font-medium">
                                                Salary:
                                                <span className=" font-semibold ml-1.5">
                                                    {job.salary.toLocaleString('it')}vnđ /
                                                </span>{' '}
                                                tháng
                                            </p>
                                        </div>
                                    </div>
                                    <div className=" ml-12 flex flex-col tb:ml-0">
                                        <div className=" relative pl-3 mb-1 before:w-2 before:h-2 before:rounded-full before:bg-primary-100 before:top-[7px] before:left-0 before:absolute">
                                            <p className=" text-base font-medium">
                                                Experience:<span className=" font-semibold ml-1.5">experience</span>
                                            </p>
                                        </div>
                                        <div className=" relative pl-3 before:w-2 before:h-2 before:rounded-full before:bg-primary-100 before:top-[7px] before:left-0 before:absolute">
                                            <p className=" text-base font-medium">
                                                Published:<span className=" font-semibold ml-1.5">published</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className=" group right-0 top-0 absolute ">
                                    <div className=" w-7 h-7 bg-[#eff3f2] rounded-full duration-300 cursor-pointer group-hover:bg-primary-100 relative">
                                        <FontAwesomeIcon
                                            className=" text-primary-100 text-sm top-1.5 right-2 absolute duration-300 group-hover:text-white"
                                            icon={faBookmark}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className=" flex items-center justify-between lg:flex-col lg:items-start">
                                <div className=" flex lg:mb-4">
                                    <img src="https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/icon/company-4.svg" />
                                    <p className=" text-sm font-medium ml-2">
                                        Job Applied:
                                        <span className=" font-semibold ml-1.5">{job.countApplication}</span>
                                    </p>
                                </div>
                                <div className=" group lg:absolute lg:right-0 lg:bottom-2 mb:static ">
                                    <Link
                                        to="/job-detail"
                                        className=" text-primary-100 flex items-center relative group-hover:cursor-pointer "
                                    >
                                        <img
                                            className="-left-2 top-1.5 absolute duration-300 group-hover:-left-1 "
                                            src="https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/icon/apply-arrow.svg"
                                        />
                                        <img src="https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/icon/apply-ellipse.svg" />
                                        <span className=" text-sm font-medium ml-1 ">Apply Now</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </>
    );
}

export default Job;
