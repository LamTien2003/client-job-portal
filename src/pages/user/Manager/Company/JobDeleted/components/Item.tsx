import { useDeleteJobCreatedMutation, useRestoreJobMutation } from '@/services/companiesApiSlice';
import { Link, useNavigate } from 'react-router-dom';

const Item = ({ job }: { job: any }) => {
    const navigate = useNavigate();
    const [deleteJob, { isLoading }] = useDeleteJobCreatedMutation();
    const [restoreJob, { isLoading: loadingRestoreJob }] = useRestoreJobMutation();

    const handleRemoveJob = async (id: string) => {
        await deleteJob(id);
        alert('Xoá Job Thành Công!');
    };

    const handleRestoreJob = async (id: string) => {
        await restoreJob(id);
        alert('Khôi phục Job Thành Công!');
        navigate('/profile/job-created');
    };
    return (
        <div className="border-2 p-3 flex flex-col gap-4">
            <p>{job.title}</p>
            <p>{job.description}</p>
            <p>{job.deadline}</p>
            <p>{job.jobRequire[0]}</p>
            <p>{job.numberRecruitment}</p>
            <Link className="bg-blue-200" to={`/profile/jobApplication/${job.id}`}>
                Xem danh sách ứng tuyển
            </Link>

            <div className="bg-red-200">{job.isAccepted ? 'Đã duyệt' : 'Chưa duyệt'}</div>
            <button onClick={() => handleRestoreJob(job._id)} className="bg-blue-400 p-2 w-1/3" type="button">
                {loadingRestoreJob ? 'Đang khôi phục...' : 'Khôi phục'}
            </button>
            <button onClick={() => handleRemoveJob(job._id)} className="bg-red-400 p-2 w-1/3" type="button">
                {isLoading ? 'Đang xoá...' : 'Xoá vĩnh viễn'}
            </button>
        </div>
    );
};

export default Item;
