import images from '@/assets/images';
import { useApproveJobMutation, useDeleteJobMutation } from '@/services/jobsApiSlice';
import Job from '@/types/Job';
import { toast } from 'react-toastify';

const JobItem = ({ job }: { job: Job }) => {
    const [deleteJob, { isLoading: delJobLoading }] = useDeleteJobMutation();
    const [approveJob, { isLoading: approveJobLoading }] = useApproveJobMutation();

    const deleteJobHandler = async () => {
        try {
            await deleteJob(job._id);
            toast.success('Xoá thành công!');
        } catch (error: any) {
            if (error.status === 400) {
                toast.error(error.data.msg);
            }
        }
    };

    const approveJobHandler = async () => {
        try {
            const res = await approveJob(job._id).unwrap();
            if (res.status === 200) {
                toast.success(res.data.msg);
            }
        } catch (error: any) {
            if (error.status === 400) {
                toast.error(error.data.msg);
            }
        }
    };
    return (
        <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-lg font-family-text gap-8">
            <div className="flex gap-4 w-[35%] ">
                <img className="w-14 h-14   object-fit rounded-lg" src={job.postedBy.photo} alt="company" />
                <div className="flex flex-col gap-1">
                    <h5 className="font-family-title font-title text-lg">{job.title}</h5>
                    <p className="font-family-text font-normal text-sm">{job.description}</p>
                </div>
            </div>

            <div className="flex  gap-3 w-[20%] ">
                <div className="flex items-center p-3 bg-[#2bc155] rounded-lg">
                    <img className="w-7 h-7 object-contain" src={images.logo.money} alt={images.logo.money} />
                </div>
                <div className="flex flex-col gap-1">
                    <h5 className="font-family-title font-semibold ">{job.salary}</h5>
                    <p className="font-family-text font-normal text-sm">Monthly Salary</p>
                </div>
            </div>

            <div className="flex  gap-3 w-[20%] ">
                <div className="flex items-center p-3 bg-[#fba555] rounded-lg">
                    <img
                        className="w-7 h-7 object-contain"
                        src={images.logo.locationAdmin}
                        alt={images.logo.locationAdmin}
                    />
                </div>
                <div className="flex flex-col gap-1">
                    <h5 className="font-family-title font-semibold ">{job.postedBy.location.city}</h5>
                    <p className="font-family-text font-normal text-sm">Location</p>
                </div>
            </div>

            <div className="flex gap-2 font-medium w-[15%] justify-end">
                {!job.isAccepted && (
                    <button
                        onClick={approveJobHandler}
                        className="py-2 px-4  border-[#c00a4d] border-2 rounded-lg hover:border-black duration-300"
                    >
                        {approveJobLoading ? 'Đang duyệt...' : 'Duyệt'}
                    </button>
                )}

                <button
                    onClick={deleteJobHandler}
                    className="py-2 px-4 text-white bg-[#c00a4d] rounded-lg hover:bg-black duration-300"
                >
                    {delJobLoading ? 'Đang xoá...' : 'Xoá'}
                </button>
            </div>
        </div>
    );
};

export default JobItem;
