import { Experience } from '@/types/JobSeeker';
import { formatDate } from '@/utils/date';

const ExpItem = ({ data }: { data: Experience[] }) => {
    return (
        <div className="grid grid-cols-2 gap-8">
            {data.map((exp, index) => {
                const dateFrom = exp.date.from ? formatDate(new Date(exp.date.from).toISOString()) : '';
                const dateTo = exp.date.to ? formatDate(new Date(exp.date.to).toISOString()) : 'Đang làm';
                return (
                    <div key={index} className="p-5 shadow-lg  flex flex-col gap-2">
                        <h5 className="text-lg text-primary-100 font-title">{exp.position}</h5>
                        <h5 className="font-semibold">{exp.company}</h5>
                        <p className="text-sm text-content-text ">
                            {dateFrom} - {dateTo}
                        </p>
                    </div>
                );
            })}
        </div>
    );
};

export default ExpItem;
