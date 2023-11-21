import { StatisticTopJob } from '@/types/Statistic';

const Job = ({ job }: { job: StatisticTopJob }) => {
    return (
        <div className="flex items-center   gap-7 ">
            <div className=" w-[10%] ">
                <span className="w-10 h-10 flex items-center justify-center bg-primary-100 rounded-full text-white text-xl font-title">
                    {job.amountApplication}
                </span>
            </div>

            <div className="flex flex-col  ">
                <p className="text-lg font-semibold">{job?.job?.title}</p>
                <p className="font-medium">{job?.job?.description}</p>
            </div>
        </div>
    );
};

export default Job;
