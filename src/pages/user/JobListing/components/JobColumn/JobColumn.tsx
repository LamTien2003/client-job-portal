import { Link } from 'react-router-dom';
import Job from '@/types/Job';
import images from '@/assets/images';

interface Props {
    data: Job[];
    changePage: (page:number) => void
}
function JobColumn(props: Props) {
    return (
        <div className=" mb-7 flex">
            <div className=' w-9/12 mr-3 lg:w-full tb:w-full mb:w-full'>
                {props.data.length === 0 && 'Hiện danh mục này chưa có công việc nào.'}
                {props.data?.map((job) => {
                    const date = new Date(job.deadline)
                    const mydeadline = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear() 
                    if(job.isAccepted === true) {
                        return (
                            <div key={job._id} className=' flex items-centerr border border-[#AEF0F2] rounded p-[30px] mb-6 '>
                                <img
                                    className=" w-13 h-13 rounded-full mr-4 lg:w-12"
                                    src={job.postedBy.photo ? job.postedBy.photo : ''}
                                />
                                <div className=" flex flex-col w-[220px]">
                                    <Link to={`/job-detail/${job._id}`} className=" font-family-title text-content-title text-lg font-semibold cursor-pointer pb-1 duration-300 hover:text-primary-100 lg:text-base ">
                                        {job.title}
                                    </Link>
                                    <div className=' flex items-center'>
                                        <p className=" text-content-text text-sm cursor-pointer pt-1 mr-3 duration-300 hover:text-primary-100 lg:text-sm">
                                            {job.postedBy.location.city}
                                        </p>
                                        <div className=' w-[10px] h-[10px] rounded-full bg-[#F3E8C1] mr-1'></div>
                                        <p className=' text-content-title text-sm font-medium'>Full time</p>
                                    </div>
                                </div>
                                <div className=' w-px h-[50px] bg-[#AEF0F2] mx-[30px] '></div>
                                <div className=' flex flex-col'>
                                    <p className=' text-content-text'>Mức lương: <span className=' text-content-title font-medium'>{job.salary.toLocaleString('it')} vnđ</span> / tháng</p>
                                    <p className=' text-content-text'>Hạn chót: <span className=' text-content-title font-medium'>{mydeadline}</span></p>
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
