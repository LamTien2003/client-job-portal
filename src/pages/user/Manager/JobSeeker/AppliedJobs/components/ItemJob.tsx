import { JobApplicate } from '@/types/JobSeeker';
import images from '@/assets/images';
import { formatDate } from '@/utils/date';
import { useRemoveJobApplyMutation } from '@/services/jobseekerApiSlice';
import { toast } from 'react-toastify';
import { formatNumberToVND } from '@/utils/number';
const ItemJob = ({ job }: { job: JobApplicate }) => {
    const createDate = formatDate(job?.createdAt);

    console.log(job);

    const currentDate: Date = new Date();

    const jobCreateDate: Date = new Date(job?.job?.createdAt);

    const isToday = jobCreateDate.toDateString() === currentDate.toDateString();

    const [removeJob, { isLoading }] = useRemoveJobApplyMutation();

    let displayDate = '';

    if (isToday) {
        displayDate = 'Hôm nay';
    } else {
        const timeDiff: number = currentDate.getTime() - jobCreateDate.getTime();

        const daysAgo: number = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        displayDate = `${daysAgo} ngày trước`;
    }

    const removeJobHandle = async (idJob: string) => {
        try {
            await removeJob(idJob).unwrap();

            toast.success('Xoá thành công!');
        } catch (error: any) {
            if (error.status === 400) {
                toast.error(error.data.msg);
            }
        }
    };
    let interviewDate;
    if (job.interviewDate) {
        interviewDate = formatDate(job.interviewDate);
    }

    const salary = formatNumberToVND(job?.job?.salary);
    return (
        <>
            <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-lg font-family-text gap-8">
                <div className="flex gap-4 w-[30%] items-center">
                    <img className="w-16 h-16 object-fit rounded-lg" src={job.company.photo} alt="company" />
                    <div className="flex flex-col gap-1 w-full">
                        <h5 className="font-family-title font-title text-lg text-primary-100">{job?.job.title}</h5>

                        <div className="flex gap-1 items-center text-sm">
                            <p className="text-content-text font-medium">{job?.company?.companyName}</p>
                        </div>
                    </div>
                </div>

                <div className="flex  gap-3 w-[35%] items-center">
                    <img
                        className="w-12 h-12 bg-[#2bc155] p-3 rounded-lg object-contain"
                        src={images.logo.money}
                        alt={images.logo.money}
                    />
                    <div className="flex flex-col gap-2">
                        <h5 className="font-family-title font-semibold ">{salary} / Tháng</h5>

                        <div className="flex gap-1 items-center text-sm">
                            <img src={images.logo.location} alt={images.logo.calender2} />
                            <p className="text-content-text font-medium">{job?.company?.location.city}</p>
                        </div>
                    </div>
                </div>

                <div className="flex gap-3 w-[28%] items-center">
                    <img
                        className="w-12 h-12 bg-[#fba555] p-3 rounded-lg object-contain"
                        src={images.logo.userFg}
                        alt={images.logo.userFg}
                    />
                    <div className="flex flex-col gap-1">
                        <div className="flex gap-1 items-center text-sm">
                            <img src={images.logo.calender2} alt={images.logo.calender2} />
                            <p className="text-content-text font-medium">{displayDate}</p>
                        </div>

                        <div className="flex gap-1 items-center text-sm">
                            <span className="font-semibold">Phỏng vấn: </span>
                            <p className="text-content-text font-medium">{interviewDate ? interviewDate : 'Chưa có'}</p>
                        </div>
                    </div>
                </div>

                <div className="flex gap-2 font-medium w-[15%] justify-end">
                    {job.status === 'pending' && (
                        <div className="flex flex-col gap-2">
                            <div className="py-1 px-3  border-primary-100 border-2 rounded-lg">Đang chờ</div>

                            <button
                                onClick={() => removeJobHandle(job._id)}
                                className="py-1 px-3 text-white bg-red-700 rounded-lg hover:bg-black duration-300"
                            >
                                {isLoading ? 'Đang xoá' : 'Xoá'}
                            </button>
                        </div>
                    )}

                    {job.status === 'accepted' && (
                        <div className="py-1 px-3 text-center text-white  rounded-lg bg-primary-100 ">Đã duyệt</div>
                    )}
                </div>
            </div>
        </>
    );
};

export default ItemJob;
