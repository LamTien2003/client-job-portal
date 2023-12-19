import { Link } from 'react-router-dom';
import Job from '@/types/Job';
import images from '@/assets/images';

interface Props {
    data: Job[];
}
function JobColumn(props: Props) {
    console.log(props.data)
    return (
        <div className=" mb-7 flex">
            <div className=' w-9/12 mr-3 lg:w-full tb:w-full mb:w-full'>
                {props.data.length === 0 && 'Hiện đang không có công việc nào.'}
                {props.data?.map((job) => {
                    const date = new Date(job.deadline)
                    const mydeadline = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear() 
                    if(job.isAccepted === true) {
                        return (
                            <div key={job._id} className=' flex items-center border border-[#AEF0F2] rounded p-[20px] mb-6 tb:flex-col tb:items-start mb:flex-col mb:items-start '>
                                <img
                                    className=" w-[52px] h-[52px] rounded-full mr-4 lg:w-12"
                                    src={job.postedBy.photo}
                                />
                                <div className=" flex flex-col w-[240px] tb:mt-2 mb:mt-2">
                                    <Link to={`/job-detail/${job._id}`} className=" font-family-title text-content-title text-lg font-semibold cursor-pointer pb-1 duration-300 hover:text-primary-100 lg:text-base tb:text-2xl mb:text-xl ">
                                        {job.title}
                                    </Link>
                                    <div className=' flex items-center'>
                                        <p className=" text-content-text text-sm cursor-pointer mr-3 duration-300 hover:text-primary-100 lg:text-sm tb:text-base mb:text-base">
                                            {job.postedBy.location.city}
                                        </p>
                                        <div className=' w-[8px] h-[8px] rounded-full bg-[#F3E8C1] mr-1'></div>
                                        <p className=' text-content-title text-xs font-medium tb:text-base mb:text-base'>Full time</p>
                                    </div>
                                </div>
                                <div className=' w-px h-[50px] bg-[#AEF0F2] mx-[30px] tb:hidden mb:hidden '></div>
                                <div className=' flex flex-col tb:mt-2 tb:text-lg mb:mt-2'>
                                    <p className=' text-content-text'>Mức lương: <span className=' text-content-title font-medium'>{job.salary.toLocaleString('it')} vnđ</span> / tháng</p>
                                    <p className=' text-content-text'>Thời hạn: <span className=' text-content-title font-medium'>{mydeadline}</span></p>
                                </div>
                            </div>
                        );
                    }
                    
                })}
            </div>
            <div className='flex flex-col w-3/12 ml-3 gap-[30px] lg:hidden tb:hidden mb:hidden'>
                <img src={images.qc1} className=' cursor-pointer' />
                <img src={images.qc2} className=' cursor-pointer' />
                <img src={images.qc3} className=' cursor-pointer' />
            </div>
        </div>
    );
}

export default JobColumn;
