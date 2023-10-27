import { useRemoveJobCreatedMutation } from '@/services/companiesApiSlice';
import { Link } from 'react-router-dom';

const Item = ({ job }: { job: any }) => {
    const [removeJob, { isLoading }] = useRemoveJobCreatedMutation();

    const handleRemoveJob = async (id: string) => {
        await removeJob(id);
        alert('Xoá Job Thành Công!');
    };
    return (
        <div className="border-2 p-3 flex flex-col gap-4">
            <p>{job.title}</p>
            <p>{job.description}</p>
            <p>{job.deadline}</p>
            <p>{job.jobRequire[0]}</p>
            <p>{job.numberRecruitment}</p>
            <Link className="bg-blue-200" to={`/company/jobApplication/${job.id}`}>
                Xem danh sách ứng tuyển
            </Link>

            <div className="bg-red-200">{job.isAccepted ? 'Đã duyệt' : 'Chưa duyệt'}</div>
            <button onClick={() => handleRemoveJob(job._id)} className="bg-red-400 p-2 w-1/3" type="button">
                {isLoading ? 'Đang xoá...' : 'Xoá'}
            </button>
        </div>
    );
};

export default Item;
