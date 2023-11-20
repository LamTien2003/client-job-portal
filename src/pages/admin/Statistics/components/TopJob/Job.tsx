import { StatisticTopJob } from '@/types/Statistic';

const Job = ({ job }: { job: StatisticTopJob }) => {
    return (
        <div className="flex items-center  gap-5">
            <div className="w-10 h-10 flex items-center justify-center bg-primary-100 rounded-full">
                <span className="text-white text-xl font-title">{job.amountApplication}</span>
            </div>

            {job?.job?.map((item: any, index: any) => (
                <div className="flex flex-col" key={index}>
                    <p className="text-lg font-semibold">{item.title}</p>
                    <p className="font-medium">{item.description}</p>
                </div>
            ))}
        </div>
    );
};

export default Job;
