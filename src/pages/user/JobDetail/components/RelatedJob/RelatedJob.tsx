
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark as faBookmarkRegular } from '@fortawesome/free-regular-svg-icons';

type Props = {
    logo: string;
    position: string;
    shiftsWork: string;
    salary: string;
    vacancy: string;
    deadline: string;
}
function RelatedJob(props: Props) {
    const {logo, position, shiftsWork, salary, vacancy, deadline} = props
    return (
        <div className=" ">
            <div className=" bg-content-bgjob rounded-r pt-6 pb-6 pr-6 pl-6 border-l-4 border-primary-100 ">
                <div className=" flex items-start mb-5 relative">
                    <img className=" rounded-full mr-5" src={logo} />
                    <div className=" w-full flex flex-col border-b border-content-border pb-3">
                        <h3 className=" text-content-title text-lg font-semibold mb-1">{position}</h3>
                        <p className=" text-sm">{shiftsWork}</p>
                    </div>
                    <div className=" group right-0 top-3 absolute cursor-pointer">
                        <div className=" w-7 h-7 rounded-full border border-primary-100 flex justify-center items-center duration-300 group-hover:bg-primary-100">
                            <FontAwesomeIcon className=" text-primary-100 text-sm duration-300 group-hover:text-white" icon={faBookmarkRegular} />
                        </div>
                    </div>
                </div>
                <div className=" bg-white pt-5 pb-5 pr-5 pl-5 flex flex-col">
                    <div className=" flex items-start mb-2">
                        <img className=" mt-1.25" src="https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/icon/arrow2.svg" />
                        <p className=" text-content-text text-cb font-medium ml-1.5">Salary: <span className=" text-content-title font-semibold ml-1 mr-1.5">{salary} /</span>Per month</p>
                    </div>
                    <div className=" flex items-start mb-2">
                        <img className=" mt-1.25" src="https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/icon/arrow2.svg" />
                        <p className=" text-content-text text-cb font-medium ml-1.5">Vacancy: {vacancy}</p>
                    </div>
                    <div className=" flex items-start">
                        <img className=" mt-1.25" src="https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/icon/arrow2.svg" />
                        <p className=" text-content-text text-cb font-medium ml-1.5">Deadline: {deadline}</p>
                    </div>
                </div>
                <div className=" mt-6 flex items-center relative mb:flex-col mb:items-start">
                    <div className=" border border-primary-100 pr-5 pl-5 pt-1 pb-1 rounded-md group duration-300 hover:bg-primary-100 right-0 mb:static mb:mt-3 mb:ml-2">
                        <Link
                            to={'/job-detail/'}
                            className=" text-primary-100 flex items-center duration-300 group-hover:text-white group-hover:cursor-pointer "
                        >
                            <span className=" text-sm font-medium mb:text-xs ">Apply Now</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RelatedJob;