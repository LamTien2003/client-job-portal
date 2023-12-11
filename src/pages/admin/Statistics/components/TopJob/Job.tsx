import { StatisticTopJob } from '@/types/Statistic';

const Job = ({ job }: { job: StatisticTopJob }) => {
    return (
        <div className="flex items-center gap-4">
            <span className="w-10 h-10 flex items-center justify-center bg-primary-100 rounded-full text-white text-xl font-title">
                {job.amountApplication}
            </span>
            <p className="text-lg font-semibold">{job?.job?.title}</p>
        </div>
    );
};

export default Job;
