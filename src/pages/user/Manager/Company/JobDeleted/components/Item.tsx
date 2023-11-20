import { useDeleteJobCreatedMutation, useRestoreJobMutation } from '@/services/companiesApiSlice';
import { Link } from 'react-router-dom';
import { formatDate } from '@/utils/date';
import { toast } from 'react-toastify';
import images from '@/assets/images';
import { formatNumberToVND } from '@/utils/number';

const Item = ({ job }: { job: any }) => {
    const [deleteJob, { isLoading }] = useDeleteJobCreatedMutation();
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

    return (
        <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-lg font-family-text gap-2">
            <div className="flex gap-4 w-[30%] items-center">
                <img
                    className="bg-primary-100 w-16 h-16  object-fit rounded-lg"
                    src={job.postedBy.photo}
                    alt="company"
                />
                <div className="flex flex-col">
                    <h5 className="font-family-title font-title text-primary-100 text-lg">{job.title}</h5>

                    <p className="">Thời hạn: {deadline}</p>
                    <p className="">Số lượng: {job.numberRecruitment}</p>

                    <Link
                        className="text-primary-100 hover:text-blue-800 duration-300 underline"
                        to={`/profile/company/jobApplication/${job.id}`}
                    >
                        Xem danh sách đăng ký
                    </Link>
                </div>
            </div>

            <div className="flex gap-3 w-[30%] items-center ">
                <img
                    className="w-12 h-12 bg-[#2bc155] p-3 rounded-lg object-contain"
                    src={images.logo.money}
                    alt={images.logo.money}
                />
                <div className="flex flex-col gap-1">
                    <h5 className="font-family-title font-semibold">{salary}/Tháng</h5>

                    <p className="font-normal text-sm">{job.description}</p>
                </div>
            </div>

            <div className="flex  gap-3 w-[30%] items-center">
                <img
                    className="w-12 h-12 bg-[#fba555] p-3 rounded-lg object-contain"
                    src={images.logo.userFg}
                    alt={images.logo.userFg}
                />
                <div className="flex flex-col gap-1">
                    <div className="flex flex-wrap gap-2 font-family-title">
                        <span className="font-semibold">Kỹ năng:</span>
                        {job.skillsRequire.map((skill: any, index: any) => (
                            <p key={index}>{skill}</p>
                        ))}
                    </div>
                    <div className="flex gap-2 font-family-title">
                        <span className="font-semibold">Yêu cầu:</span>
                        {job.jobRequire.map((job: any, index: any) => (
                            <p key={index}>{job}</p>
                        ))}
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-2 font-medium w-[12%] justify-end">
                <button
                    onClick={() => handleRestoreJob(job._id)}
                    className="py-2 px-4 text-white bg-primary-100 rounded-lg hover:bg-black duration-300"
                    type="button"
                >
                    {loadingRestoreJob ? 'Đang khôi phục...' : 'Khôi phục'}
                </button>
                <button
                    onClick={() => handleRemoveJob(job._id)}
                    className="py-2 px-4 text-white bg-red-700 rounded-lg hover:bg-black duration-300"
                    type="button"
                >
                    {isLoading ? 'Đang xoá...' : 'Xoá'}
                </button>
            </div>
        </div>
    );
};

export default Item;
