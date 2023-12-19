import images from '@/assets/images';
import Company from '@/types/Company';
import { Link } from 'react-router-dom';

type Props = {
    data: Company;
};

function Job(props: Props) {
    const { data: company } = props;
    return (
        <>
            <h1 className=" font-family-title text-content-title text-2xl font-semibold mb-10">Các công việc hiện tại</h1>
            <div className=' flex'>
                <div className=' w-10/12 flex flex-col xl:w-full lg:w-full tb:w-full mb:w-full'>
                    {company?.jobList.length === 0 && 'Hiện công ty đang không đăng tuyển công việc nào'}
                    {company?.jobList.map((job) => {
                        const date = new Date(job.deadline)
                        const myDeadline = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
                        return (
                            <div
                                className=" w-full border border-[#eee] rounded pt-6 pb-6 pl-[30px] pr-[30px] mb-[30px]"
                                key={job?.id}
                            >
                                <div className=" flex flex-col relative">
                                    <div className=" mb-[30px] flex items-center relative lg:flex-col lg:items-start tb:flex-col tb:items-start mb:flex-col mb:items-start">
                                        <div className=" flex items-center lg:flex-col lg:items-start lg:mb-8">
                                            <img className=" w-[52px] h-[52px] rounded-full mr-2.5 object-cover lg:mb-3" src={company.photo} />
                                            <div className=" flex flex-col">
                                                <Link to={'/job-detail/' + job.id} className=" text-content-title text-lg font-semibold mb-0.5 duration-300 cursor-pointer hover:text-primary-100">
                                                    {job.title}
                                                </Link>
                                                <p className=" text-sm font-medium duration-300 cursor-pointer hover:text-primary-100">
                                                    {company.companyName}
                                                </p>
                                            </div>
                                        </div>
                                        <div className=" w-px h-11 border-l border-primary-blur ml-7 mr-7 lg:hidden"></div>
                                        <div className=" flex gap-[80px] tb:flex-col mb:flex-col">
                                            <div className=" flex flex-col tb:mb-1 mb:mb-1 ">
                                                <div className=" relative pl-3 mb-1 before:w-2 before:h-2 before:rounded-full before:bg-primary-100 before:top-[9.5px] before:left-0 before:absolute">
                                                    <p className=" text-base font-medium">
                                                        Địa điểm:
                                                        <span className=" font-medium text-content-title ml-1.5">{company.location.city}</span>
                                                    </p>
                                                </div>
                                                <div className=" relative pl-3 before:w-2 before:h-2 before:rounded-full before:bg-primary-100 before:top-[9.5px] before:left-0 before:absolute">
                                                    <p className=" text-base font-medium">
                                                        Lương:
                                                        <span className=" font-medium text-content-title ml-1.5">
                                                            {job.salary.toLocaleString('it')}vnđ /
                                                        </span>{' '}
                                                        tháng
                                                    </p>
                                                </div>
                                            </div>
                                            <div className=" ml-12 flex flex-col tb:ml-0 mb:ml-0">
                                                <div className=" relative pl-3 mb-1 before:w-2 before:h-2 before:rounded-full before:bg-primary-100 before:top-[9.5px] before:left-0 before:absolute">
                                                    <p className=" text-base font-medium">
                                                        Hạn ứng tuyển:<span className=" font-medium text-content-title ml-1.5">{myDeadline}</span>
                                                    </p>
                                                </div>
                                                <div className=" relative pl-3 before:w-2 before:h-2 before:rounded-full before:bg-primary-100 before:top-[9.5px] before:left-0 before:absolute">
                                                    <p className=" text-base font-medium">
                                                        Trạng thái:<span className=" font-medium text-content-title ml-1.5">{job.available === true ? 'Đang tuyển dụng' : 'Không còn tuyển dụng'}</span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className=" flex items-center justify-between lg:flex-col lg:items-start">
                                        <div className=" flex lg:mb-4">
                                            <img src="https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/icon/company-4.svg" />
                                            <p className=" text-sm font-medium ml-2">
                                                Người đã ứng tuyển:
                                                <span className=" font-medium text-content-title ml-1.5">{job.countApplication}</span>
                                            </p>
                                        </div>
                                        <div className=" group cursor-pointer mr-[300px] ">
                                            <div className=" border border-primary-100 pr-5 pl-5 pt-1 pb-1 rounded-md group duration-300 hover:bg-primary-100 right-0 mb:static mb:mt-3 mb:ml-2">
                                                <Link
                                                    to={'/job-detail/' + job.id}
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
                <div className='flex flex-col w-2/12 ml-3 gap-[30px] xl:hidden lg:hidden tb:hidden mb:hidden'>
                    <img src={images.qc4} className=' cursor-pointer' />
                    <img src={images.qc5} className=' cursor-pointer' />
                </div>
            </div>
        </>
    );
}

export default Job;
