import { JobApplicate } from '@/types/JobSeeker';
import images from '@/assets/images';
import { formatDate } from '@/utils/date';
import { useRemoveJobApplyMutation } from '@/services/jobseekerApiSlice';
import { toast } from 'react-toastify';
const ItemJob = ({ job }: { job: JobApplicate }) => {
    const createDate = formatDate(job?.createdAt);

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
            const res = await removeJob(idJob).unwrap();
            if (res.status === 200) {
                toast.success(res.data.msg);
            }
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

    return (
        <tr className="bg-white border-b border-primary-100   hover:bg-gray-50">
            <th
                scope="row"
                className="border-primary-100 border-[1px] px-2 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
                <div className="flex gap-4">
                    <img className="w-12 h-12 rounded-full" src={job.company.photo} alt="avt-company" />
                    <div className="flex flex-col gap-2">
                        <div className="flex justify-between">
                            <h5 className="text-content-title font-title">{job?.job.title}</h5>
                            <div className="flex gap-1 items-center text-sm">
                                <img src={images.logo.calender2} alt={images.logo.calender2} />
                                <p className="text-content-text">{displayDate}</p>
                            </div>
                        </div>
                        <div className="flex gap-3">
                            <div className="flex gap-1 items-center text-sm">
                                <img src={images.logo.location} alt={images.logo.calender2} />
                                <p className="text-content-text">{job.company.location}</p>
                            </div>
                            <span className="w-[1px] bg-blue-gray-200 "></span>
                            <div className="flex gap-1 items-center text-sm text-content-text">
                                <img src={images.logo.salary} alt={images.logo.salary} />
                                Lương:
                                <span className="ml-2 text-content-title font-title">{job?.job.salary}</span>/ Tháng
                            </div>
                        </div>
                    </div>
                </div>
            </th>
            <td className="px-6 py-4 border-primary-100 border-[1px]">{createDate}</td>
            <td className="px-6 py-4 border-primary-100 border-[1px]">{interviewDate ? interviewDate : 'Chưa có'}</td>
            <td className="px-6 py-4 border-primary-100 border-[1px]">{job.company.companyName}</td>
            <td className="px-6 py-4 border-primary-100 border-[1px]">
                {job.status === 'accepted' && (
                    <div className="px-3 py-1 text-center text-white font-semibold text-sm rounded-lg bg-primary-100 ">
                        Thành công
                    </div>
                )}

                {job.status === 'pending' && (
                    <div className="flex flex-col gap-2 items-center">
                        <button
                            onClick={() => removeJobHandle(job._id)}
                            className="bg-red-300 py-1 w-full rounded-lg text-white font-semibold hover:bg-black duration-300"
                        >
                            {isLoading ? 'Đang xoá' : 'Xoá'}
                        </button>
                        <div className="py-1 w-full text-center text-white font-semibold text-sm rounded-lg bg-[#7307C9]">
                            Đang chờ
                        </div>
                    </div>
                )}
            </td>
        </tr>
    );
};

export default ItemJob;
