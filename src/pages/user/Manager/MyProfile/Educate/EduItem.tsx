import { Education } from '@/types/JobSeeker';
import { formatDate } from '@/utils/date';

const EduItem = ({ data }: { data: Education[] }) => {
    return (
        <div className="grid grid-cols-2 gap-5 ">
            {data.map((item, index) => {
                const dateFrom = item.date.from ? formatDate(new Date(item.date.from).toISOString()) : '';
                const dateTo = item.date.to ? formatDate(new Date(item.date.from).toISOString()) : 'Đang học';
                return (
                    <div key={index} className="p-5 shadow-lg  flex flex-col gap-2">
                        <h5 className="text-lg text-primary-100 font-title">{item.major}</h5>
                        <h5 className="font-semibold">{item.school}</h5>
                        <p className="text-sm text-content-text ">
                            {dateFrom} - {dateTo}
                        </p>
                    </div>
                );
            })}
        </div>
    );
};

export default EduItem;
