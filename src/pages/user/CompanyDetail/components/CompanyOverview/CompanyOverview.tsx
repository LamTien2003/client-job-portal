import Company from '@/types/Company';

type Props = {
    data: Company;
};

function CompanyOverview(props: Props) {
    const { data: company } = props;
    const monthsArray = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ];

    const date = new Date(company.establishDate);
    const myDateString =
        (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()) +
        ' ' +
        monthsArray[date.getMonth() - 1] +
        ', ' +
        date.getFullYear();

    return (
        <div className=" w-1/3 pl-3 lg:w-full">
            <div className=" w-full border border-[#eee] rounded pt-12 pb-12 pl-10 pr-10 mb-12">
                <h3 className=" text-content-title text-lg font-semibold mb-6">Tổng quan thông tin:</h3>
                <div>
                    <div className=" mb-2.5 flex relative before:w-2 before:h-2 before:rounded-full before:bg-primary-blur before:left-0 before:top-[7px] before:absolute">
                        <p className=" text-base pl-3.5 font-medium">
                            <span className=" text-content-title font-semibold mr-1.5">Tên công ty:</span>
                            {company.companyName}
                        </p>
                    </div>
                    <div className=" mb-2.5 flex relative before:w-2 before:h-2 before:rounded-full before:bg-primary-blur before:left-0 before:top-[7px] before:absolute">
                        <p className=" text-base pl-3.5 font-medium"><span className=" text-content-title font-semibold mr-1.5">Trụ sở chính:</span>{company.location.city}</p>
                    </div>
                    <div className=" mb-2.5 flex relative before:w-2 before:h-2 before:rounded-full before:bg-primary-blur before:left-0 before:top-[7px] before:absolute">
                        <p className=" text-base pl-3.5 font-medium">
                            <span className=" text-content-title font-semibold mr-1.5">Ngày thành lập:</span>
                            {myDateString}
                        </p>
                    </div>
                    <div className=" mb-2.5 flex relative before:w-2 before:h-2 before:rounded-full before:bg-primary-blur before:left-0 before:top-[7px] before:absolute">
                        <p className=" text-base pl-3.5 font-medium">
                            <span className=" text-content-title font-semibold mr-1.5">Quy mô:</span>{' '}
                            {company.companySize.from + ' - ' + company.companySize.to} (người)
                        </p>
                    </div>
                    <div className=" mb-2.5 flex relative before:w-2 before:h-2 before:rounded-full before:bg-primary-blur before:left-0 before:top-[7px] before:absolute">
                        <p className=" text-base pl-3.5 font-medium">
                            <span className=" text-content-title font-semibold mr-1.5">Email:</span>
                            {company.email}
                        </p>
                    </div>
                </div>
            </div>
            <button className=" w-full text-white font-medium bg-primary-100 rounded-md pt-3 pb-3 mb-7.5 duration-300 hover:bg-black">
                Đang đăng tuyển {company.jobList.length} công việc
            </button>
            <a
                href={company.website}
                className=" flex justify-center text-primary-100 font-medium border border-[#eee] rounded-md pt-3 pb-3 duration-300 hover:bg-primary-100 hover:text-white lg:mb-12"
            >
                Xem trang web của công ty
            </a>
        </div>
    );
}

export default CompanyOverview;
