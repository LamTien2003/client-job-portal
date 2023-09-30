import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import Company from '@/types/Company';

interface Props {
    data: Company[];
}

function CompanyGutter(props: Props) {
    const { data: companies } = props;

    return (
        <div className=" flex flex-wrap tb:flex-col ">
            {companies?.map((company) => {
                return (
                    <div key={company.id} className=" w-6/12 pr-3 pl-3 mb-6 relative tb:w-full ">
                        <div className=" border border-content-border p-7.5 rounded flex items-start duration-300 hover:border-primary-blur ">
                            <img className=" w-10 h-10 rounded-full mr-3" src={company.photo} />
                            <div className=" w-full relative">
                                <div className=" border-b border-content-border pb-4 flex">
                                    <div className=" flex flex-col ">
                                        <h3 className=" text-content-title text-base font-semibold duration-300 cursor-pointer hover:text-primary-100 mb-1 mb:text-cb">
                                            {company.companyName}
                                        </h3>
                                        <div className=" flex items-center">
                                            <img
                                                className=" mr-2"
                                                src="https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/icon/location.svg"
                                            />
                                            <p className=" text-content-text text-sm font-medium mb:text-xs">
                                                {company.location}
                                            </p>
                                        </div>
                                    </div>
                                    <div className=" group right-0 absolute ">
                                        <div className=" w-7 h-7 bg-content-bgsave rounded-full duration-300 cursor-pointer group-hover:bg-primary-100 relative">
                                            <FontAwesomeIcon
                                                className=" text-primary-100 text-sm top-1.5 right-2 absolute duration-300 group-hover:text-white"
                                                icon={faBookmark}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className=" pt-4 flex relative mb:flex-col">
                                    <p className=" text-content-text text-base font-medium">
                                        Vacancies: <span className=" text-primary-100 font-bold">21</span>
                                    </p>

                                    <div className=" group right-0 absolute mb:static mb:mt-3 mb:ml-2">
                                        <Link
                                            to={'/company-detail/' + company.id}
                                            className=" text-primary-100 flex items-center relative group-hover:cursor-pointer "
                                        >
                                            <img
                                                className="-left-2 top-1.5 absolute duration-300 group-hover:-left-1 mb:top-1"
                                                src="https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/icon/apply-arrow.svg"
                                            />
                                            <img src="https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/icon/apply-ellipse.svg" />
                                            <span className=" text-sm font-medium ml-1 mb:text-xs ">View Details</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default CompanyGutter;
