import { Project } from '@/types/JobSeeker';
import { formatDate } from '@/utils/date';

const ProjectItem = ({ data }: { data: Project[] }) => {
    return (
        <div className="grid grid-cols-2 gap-5 ">
            {data.map((item, index) => {
                const dateFrom = item.date.from ? formatDate(new Date(item.date.from).toISOString()) : '';
                const dateTo = item.date.to ? formatDate(new Date(item.date.to).toISOString()) : 'Đang thực hiện';
                return (
                    <div key={index} className="p-5 shadow-lg  flex flex-col gap-2">
                        <h5 className="text-lg text-primary-100 font-title">{item.name}</h5>
                        <a
                            className=" font-semibold text-sm hover:text-primary-100 duration-300"
                            href={item.url}
                            target="_blank"
                        >
                            Xem chi tiết
                        </a>
                        <p className="text-sm text-content-text ">
                            {dateFrom} - {dateTo}
                        </p>
                    </div>
                );
            })}
        </div>
    );
};

export default ProjectItem;
