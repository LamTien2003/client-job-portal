import { useRemoveJobCreatedMutation } from '@/services/companiesApiSlice';
import { formatDate } from '@/utils/date';
import { Link } from 'react-router-dom';

const Item = ({ job }: { job: any }) => {
    const [removeJob, { isLoading }] = useRemoveJobCreatedMutation();

    const handleRemoveJob = async (id: string) => {
        await removeJob(id);
        alert('Xoá Job Thành Công!');
    };

    const deadline = formatDate(job.deadline);
    return (
        <tr className="bg-white border-b border-primary-100   hover:bg-gray-50">
            <th
                scope="row"
                className="border-primary-100 border-[1px] px-2 py-4 font-medium text-content-text whitespace-nowrap "
            >
                <div className="flex flex-col gap-3">
                    <div className="flex justify-between items-center">
                        <p className="text-primary-100 font-title text-lg">{job.title}</p>

                        <p className=" font-medium">Thời hạn: {deadline}</p>
                        <p className=" font-medium">Số lượng: {job.numberRecruitment}</p>
                    </div>

                    <div className=" flex justify-between gap-3 font-title">
                        <p className="bg-primary-200 p-2 rounded-md ">Lương: {job.salary}/tháng</p>
                        <p className="bg-primary-200 p-2 rounded-md">{job.jobRequire[0]}</p>

                        <p className="bg-primary-200 p-2 rounded-md">{job.description}</p>
                    </div>
                </div>
            </th>
            <td className="px-6 py-4 border-primary-100 border-[1px]">
                <Link
                    className="text-primary-100 hover:text-primary-200 duration-300"
                    to={`/profile/jobApplication/${job.id}`}
                >
                    Xen danh sách
                </Link>
            </td>
            <td className="px-6 py-4 border-primary-100 border-[1px]">
                {job.isAccepted ? (
                    <div className="px-3 py-1 text-center text-white font-semibold text-sm rounded-lg bg-primary-100 ">
                        Đã duyệt
                    </div>
                ) : (
                    <div className="py-1 w-full text-center text-white font-semibold text-sm rounded-lg bg-[#7307C9]">
                        Chưa duyệt
                    </div>
                )}
            </td>
            <td className="px-6 py-4 border-primary-100 border-[1px]">
                <button
                    onClick={() => handleRemoveJob(job._id)}
                    className="bg-red-400 p-2 rounded-lg text-white font-semibold hover:bg-black duration-200"
                    type="button"
                >
                    {isLoading ? 'Đang xoá...' : 'Xoá'}
                </button>
            </td>
        </tr>
    );
};

export default Item;
