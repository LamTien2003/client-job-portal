import Company from '@/types/Company';
import { Link } from 'react-router-dom';

interface Props {
    data: Company[];
}

function CompanyColumn(props: Props) {
    const { data: companies } = props;

    return (
        <div className=" flex flex-wrap tb:flex-col tb:w-9/12 tb:mr-auto tb:ml-auto mb:w-full">
            {companies?.map((company) => {
                return (
                    <div key={company.id} className=" w-6/12 pr-3 pl-3 mb-6 relative tb:w-full ">
                        <div className=" border border-primary-blur rounded pl-4 duration-300 hover:border-primary-100">
                            <div className=" bg-primary-40 pt-5 pb-5 mb-5 relative">
                                <img
                                    className=" rounded-full left-2.25 top-6 absolute z-10 w-10 h-10"
                                    src={company.photo}
                                />
                                <h3 className=" text-content-title text-base font-semibold duration-300 mb-1 ml-17.5 cursor-pointer hover:text-primary-100">
                                    {company.companyName}
                                </h3>
                                <div className=" ml-17.5 flex">
                                    <img
                                        className=" mr-2"
                                        src="https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/icon/location.svg"
                                    />
                                    <p className=" text-content-text text-sm font-medium">{company.location}</p>
                                </div>
                                <div className=" w-15 h-22 bg-primary-70 top-0 absolute z-0"></div>
                            </div>
                            <div className=" mr-4 mb-6 flex relative">
                                <p className=" text-content-text text-base font-medium">
                                    Vacancies: <span className=" text-primary-100 font-bold">22</span>
                                </p>
                                <div className=" group right-0 absolute ">
                                    <Link
                                        to={'/company-detail/' + company.id}
                                        className=" text-primary-100 flex items-center relative group-hover:cursor-pointer "
                                    >
                                        <img
                                            className="-left-2 top-1.5 absolute duration-300 group-hover:-left-1 mb:top-1"
                                            src="https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/icon/apply-arrow.svg"
                                        />
                                        <img src="https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/icon/apply-ellipse.svg" />
                                        <span className=" text-sm font-medium ml-1 mb:text-xs">View Details</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default CompanyColumn;
