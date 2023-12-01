import { useDeleteJobCreatedMutation, useRestoreJobMutation } from '@/services/companiesApiSlice';
import { Link } from 'react-router-dom';
import { formatDate } from '@/utils/date';
import { toast } from 'react-toastify';
import images from '@/assets/images';
import { formatNumberToVND } from '@/utils/number';
import Loader from '@/components/Loader/Loader';

const Item = ({ job }: { job: any }) => {
    const [deleteJob, { isLoading: loadingDeleteJob }] = useDeleteJobCreatedMutation();
    const [restoreJob, { isLoading: loadingRestoreJob }] = useRestoreJobMutation();

    const handleRemoveJob = async (id: string) => {
        try {
            const res = await deleteJob(id).unwrap();
            if (res.status === 204) {
                toast.success('Xoá thành công');
            }
        } catch (error: any) {
            if (error.status === 400) {
                toast.error(error.data.msg);
            }
        }
    };

    const handleRestoreJob = async (id: string) => {
        try {
            const res = await restoreJob(id).unwrap();

            if (res.status === 200) {
                toast.success('Khôi phục thành công');
            }
        } catch (error: any) {
            if (error.status === 400) {
                toast.error(error.data.msg);
            }
        }
    };
    const deadline = formatDate(job.deadline);
    const salary = formatNumberToVND(job.salary);
    const isLoading = loadingDeleteJob || loadingRestoreJob;
    return (
        <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-lg font-family-text gap-2">
            {isLoading && <Loader />}
            <div className="flex gap-4 w-[35%] items-center">
                <img
                    className=" w-14 h-14  object-fit rounded-lg"
                    src={job.photosJob[0] ? job.photosJob[0] : images.logo.job}
                    alt="company"
                />
                <div className="flex flex-col">
                    <h5 className="font-family-title font-title text-primary-100 text-lg">{job.title}</h5>
                    {job.isAccepted ? (
                        <div className="text-sm text-primary-100 font-semibold">Đã duyệt</div>
                    ) : (
                        <div className="text-sm text-[#7307C9] font-semibold">Chưa duyệt</div>
                    )}
                </div>
            </div>

            <div className="flex gap-3 w-[30%] items-center ">
                <img
                    className="w-12 h-12 bg-[#2bc155] p-3 rounded-lg object-contain"
                    src={images.logo.money}
                    alt={images.logo.money}
                />
                <div className="flex flex-col gap-1">
                    <h5 className="font-family-title">{salary}/Tháng</h5>
                    <Link
                        className="text-primary-100 hover:text-blue-800 duration-300 underline text-sm"
                        to={`/profile/company/jobApplication/${job.id}`}
                    >
                        Xem danh sách
                    </Link>
                </div>
            </div>

            <div className="flex  gap-3 w-[30%] items-center">
                <img
                    className="w-12 h-12 bg-[#fba555] p-3 rounded-lg object-contain"
                    src={images.logo.userFg}
                    alt={images.logo.userFg}
                />
                <div className="flex flex-col gap-1">
                    <p className="">Số lượng: {job.numberRecruitment}</p>
                    <p className="">Thời hạn: {deadline}</p>
                </div>
            </div>

            <div className="flex flex-col gap-2 font-medium w-[12%] justify-end text-sm">
                <button
                    onClick={() => handleRestoreJob(job._id)}
                    className="py-2 px-4 text-white bg-primary-100 rounded-lg hover:bg-black duration-300"
                    type="button"
                >
                    Khôi phục
                </button>
                <button
                    onClick={() => handleRemoveJob(job._id)}
                    className="py-2 px-4 text-white bg-red-700 rounded-lg hover:bg-black duration-300"
                    type="button"
                >
                    Xoá
                </button>
            </div>
        </div>
    );
};

export default Item;
