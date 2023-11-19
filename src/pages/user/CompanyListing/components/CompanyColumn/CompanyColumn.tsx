import Company from '@/types/Company';
import { Link } from 'react-router-dom';

interface Props {
    data: Company[];
}

function CompanyColumn(props: Props) {
    const { data: companyList } = props;
    return (
        <>
            {companyList.length === 0 && 'Hiện danh mục này chưa có công ty nào'}
            {companyList?.map((company) => {
                const date = new Date(company.establishDate);
                const myEstablishDate = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
                return (
                    <div key={company.id} className=" w-full border border-[#AEF0F2] pl-5 pb-5 mb-6">
                        <div className=" flex flex-col bg-[#E7F4F5] relative">
                            <div className=" flex items-center">
                                <div className=" flex justify-center items-end w-[60px] h-[100px] bg-[#9CEAEC] -top-[10px] left-0 absolute">
                                    <img className=" w-[45px] h-[45px] rounded-full mb-[20px] " src={company.photo} />
                                </div>
                                <div className=" -left-2 -top-[10px] absolute">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="8"
                                        height="10"
                                        viewBox="0 0 8 10"
                                        fill="none"
                                    >
                                        <path d="M8 0L7.99991 10H0L8 0Z" fill="#91D9DB" />
                                    </svg>
                                </div>
                                <div className=" left-[60px] -top-[10px] absolute">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="8"
                                        height="10"
                                        viewBox="0 0 8 10"
                                        fill="none"
                                    >
                                        <path d="M8 10L0 0V10H8Z" fill="#91D9DB" />
                                    </svg>
                                </div>
                            </div>
                            <div className=" flex items-center py-5 gap-[50px] xl:gap-[35px] lg:gap-[55px] tb:gap-[30px] mb:gap-[20px] ">
                                <div className=" flex flex-col justify-start lg:w-[150px]">
                                    <div className=" w-[200px] flex flex-col items-start ml-[70px] mb-8 gap-1.5 xl:w-[180px] lg:w-[140px] tb:w-[170px] tb:mb-[92px] mb:w-[110px] mb:mb-[80px] ">
                                        <h3 className=" text-lg text-content-title font-semibold lg:text-base tb:text-base mb:text-base">
                                            {company.companyName}
                                        </h3>
                                        <p className=" flex items-center text-content-text text-sm gap-2">
                                            <img src="https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/icon/location.svg" />
                                            {company.location.city}
                                        </p>
                                    </div>
                                    <p className=" text-content-text ml-2.5 mr-1.5 lg:text-[15px] tb:text-sm mb:text-sm ">
                                        Số lượng tuyển: <span className=" text-primary-100 font-semibold">1</span>
                                    </p>
                                </div>
                                <div className=" flex flex-col items-center justify-center">
                                    <div className=" flex gap-[100px] mb-8 xl:gap-[35px] lg:gap-[25px] tb:flex-col tb:gap-1 mb:flex-col mb:gap-1.5 ">
                                        <div className=" flex flex-col gap-1.5">
                                            <div className=" flex items-center">
                                                <div className=" w-[10px] h-[10px] bg-primary-100 rounded-full lg:w-[7px] lg:h-[7px]"></div>
                                                <p className=" text-[15px] text-content-text mx-1.5 lg:text-sm tb:text-sm mb:text-xs">
                                                    Quy mô:
                                                </p>
                                                <span className=" text-[15px] text-content-title font-semibold lg:text-sm tb:text-sm mb:text-xs">
                                                    {company.companySize.to} người
                                                </span>
                                            </div>
                                            <div className=" flex items-center">
                                                <div className=" w-[10px] h-[10px] bg-primary-100 rounded-full lg:w-[7px] lg:h-[7px]"></div>
                                                <p className=" text-[15px] text-content-text mx-1.5 lg:text-sm tb:text-sm mb:text-xs">
                                                    Thành lập:
                                                </p>
                                                <span className=" text-[15px] text-content-title font-semibold lg:text-sm tb:text-sm mb:text-xs">
                                                    {myEstablishDate}
                                                </span>
                                            </div>
                                        </div>
                                        <div className=" flex flex-col gap-1.5 pl-[30px] tb:pl-0 mb:pl-0 ">
                                            <div className=" flex items-center">
                                                <div className=" w-[10px] h-[10px] bg-primary-100 rounded-full lg:w-[7px] lg:h-[7px]"></div>
                                                <p className=" text-[15px] text-content-text mx-1.5 lg:text-sm tb:text-sm mb:text-xs">
                                                    Liên lạc:
                                                </p>
                                                <span className=" text-[15px] text-content-title font-semibold underline lg:text-sm tb:text-sm mb:text-xs">
                                                    {company.phoneNumber}
                                                </span>
                                            </div>
                                            <div className=" flex items-center">
                                                <div className=" w-[10px] h-[10px] bg-primary-100 rounded-full lg:w-[7px] lg:h-[7px]"></div>
                                                <p className=" text-[15px] text-content-text mx-1.5 lg:text-sm tb:text-sm mb:text-xs">
                                                    Website:
                                                </p>
                                                <a
                                                    href={company.website}
                                                    className=" text-[15px] text-content-title font-semibold duration-300 cursor-pointer hover:text-primary-100 lg:text-sm tb:text-sm mb:text-xs"
                                                >
                                                    {company.website || 'https://example.com/'}
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className=" group cursor-pointer ">
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
                    </div>
                );
            })}
        </>
    );
}

export default CompanyColumn;
