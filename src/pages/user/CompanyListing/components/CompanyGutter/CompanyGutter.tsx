import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import Company from '@/types/Company';

interface Props {
    data: Company[];
}

function CompanyGutter(props: Props) {
    const { data: companyList } = props;

    return (
        <div className=" flex flex-wrap tb:flex-col ">
            {companyList.length === 0 && 'Hiện danh mục này chưa có công ty nào'}
            {companyList?.map((company) => {
                const date = new Date(company.establishDate)
                const myEstablistDate = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear() 
                return (
                    <div key={company.id} className=" w-6/12 pl-3 pr-3 mb-6 tb:w-full ">
                            <div className=" border-content-border border rounded relative">
                                <img
                                    className=" w-full bg-no-repeat bg-center overflow-hidden rounded tb:w-full"
                                    src={company.coverPhoto}
                                    // src='https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/bg/job-list-1.png'
                                />
                                <div className=" px-4 mt-5 mb-5 flex items-center justify-between">
                                    <div className=' flex items-center'>
                                        <img
                                            className=" w-10 h-10 rounded-full mr-3"
                                            src={company.photo}
                                        />
                                        <div className="flex flex-col">
                                            <h3 className=" text-content-title font-semibold text-lg xl:text-base mb:text-cb">
                                                {company.companyName}
                                            </h3>
                                            <div className=" text-content-text text-sm font-medium flex items-center xl:flex-col xl:items-start tb:flex-row mb:text-xs ">
                                                <img className=' mr-1.5' src='https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/icon/location.svg' />
                                                {company.location.city}
                                            </div>
                                        </div>
                                    </div>
                                    <div className=" group flex items-center cursor-pointer relative">
                                        <div className=" w-7 h-7 bg-content-bgsave rounded-full duration-300 group-hover:bg-primary-100">
                                            <FontAwesomeIcon
                                                className=" w-3 text-primary-100 text-sm top-1.5 right-2 absolute duration-300 group-hover:text-white"
                                                icon={faBookmark}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className=" list-none border-t border-content-border pt-5 mx-6">
                                    <div className=" flex items-center mb-2 before:w-2 before:h-2 before:rounded-full before:bg-primary-100 before:mr-2">
                                        <p className=" text-content-text font-medium text-cb lg:text-sm mb:text-xs ">
                                            Quy mô: 
                                            <span className=" text-content-title font-semibold ml-1">
                                                {company.companySize.to} người
                                            </span>
                                        </p>
                                    </div>
                                    <div className=" flex items-center mb-2 before:w-2 before:h-2 before:rounded-full before:bg-primary-100 before:mr-2">
                                        <p className=" text-content-text font-medium text-cb lg:text-sm mb:text-xs ">
                                            Thành lập: 
                                            <span className=" text-content-title font-semibold ml-1">
                                                {myEstablistDate}
                                            </span>
                                        </p>
                                    </div>
                                    <div className=" flex items-center mb-2 before:w-2 before:h-2 before:rounded-full before:bg-primary-100 before:mr-2">
                                        <p className=" text-content-text font-medium text-cb lg:text-sm mb:text-xs ">
                                            Liên lạc: 
                                            <span className=" text-content-title font-semibold ml-1">
                                                {company.phoneNumber}
                                            </span>
                                        </p>
                                    </div>
                                    <div className=" flex items-center mb-2 before:w-2 before:h-2 before:rounded-full before:bg-primary-100 before:mr-2">
                                        <p className=" text-content-text font-medium text-cb lg:text-sm mb:text-xs ">
                                            Website: 
                                            <span className=" text-content-title font-semibold ml-1">
                                                {company.website || 'Cập nhật'}
                                            </span>
                                        </p>
                                    </div>
                                </div>
                                <div className=" mx-4 mt-5 mb-4 flex relative">
                                    {/* <div className=' text-content-title text-sm font-semibold bg-content-bg-full-time rounded-3xl pt-1.5 pb-1.5 pl-6 pr-6 lg:text-xs '>Full Time</div> */}
                                    {/* <div className=' text-content-title text-sm font-semibold bg-content-bg-part-time rounded-3xl pt-1.5 pb-1.5 pl-6 pr-6 mr-5 ml-5 lg:text-xs '>Part Time</div> */}
                                    
                                    <p className=" text-content-text text-base font-medium">
                                        Số lượng: <span className=" text-primary-100 font-bold">22</span>
                                    </p>

                                    <div className=" group bottom-0 right-0 absolute cursor-pointer ">
                                        <div className=" border border-primary-100 pr-5 pl-5 pt-1 pb-1 rounded-md group duration-300 hover:bg-primary-100 right-0 mb:static mb:mt-3 mb:ml-2">
                                            <Link
                                                to={'/company-detail/' + company.id}
                                                className=" text-primary-100 flex items-center duration-300 group-hover:text-white group-hover:cursor-pointer "
                                            >
                                                <span className=" text-sm font-medium mb:text-xs ">Xem thêm</span>
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
