import { useChangeMeMutation } from '@/services/jobseekerApiSlice';
import { RootState } from '@/store/store';
import { Project } from '@/types/JobSeeker';
import { formatDate } from '@/utils/date';
import { isJobSeeker } from '@/utils/helper';
import { useState, useEffect } from 'react';
import { BiEdit } from 'react-icons/bi';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { useSelector } from 'react-redux';
import EditForm from './EditForm';

const ProjectItem = ({ data }: { data: Project[] }) => {
    const [open, setOpen] = useState<boolean>(false);
    const handleOpen = () => setOpen(!open);
    const currentUser = useSelector((state: RootState) => state.user.user);
    const [projects, setProjects] = useState<Project[]>([]);

    const [projectToEdit, setProjectToEdit] = useState<Project | null>(null);
    useEffect(() => {
        if (isJobSeeker(currentUser)) {
            setProjects(currentUser.projects);
        }
    }, [currentUser]);

    const [changeEdu] = useChangeMeMutation();

    const deleteItem = (dataId: string) => {
        const itemToDelete = projects.find((item) => item._id === dataId);

        if (itemToDelete) {
            const updatedProjects = projects.filter((item) => item._id !== dataId);
            const projectsData: any = {
                projects: updatedProjects,
            };

            changeEdu(projectsData);
            alert('Xoá thành công!');
        }
    };
    const handleEdit = (dataId: string) => {
        const projectToEditValue = projects.find((item) => item._id === dataId);
        if (projectToEditValue) {
            setProjectToEdit(projectToEditValue);
            setOpen(true);
        }
    };

    return (
        <div className="grid grid-cols-2 gap-5 ">
            {data.map((item, index) => {
                const dateFrom = item.date.from ? formatDate(new Date(item.date.from).toISOString()) : '';
                const dateTo = item.date.to ? formatDate(new Date(item.date.to).toISOString()) : 'Đang thực hiện';
                return (
                    <div key={index} className="p-5 shadow-lg  flex justify-between">
                        <div className="flex flex-col gap-2">
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
                        <div className="flex gap-4 items-start text-xl font-medium">
                            <button
                                onClick={() => handleEdit(item._id)}
                                type="button"
                                className="text-content-text hover:text-primary-100 duration-300"
                            >
                                <BiEdit />
                            </button>
                            <button
                                type="button"
                                onClick={() => deleteItem(item._id)}
                                className="text-red-600 hover:text-primary-100 duration-300"
                            >
                                <RiDeleteBin6Line />
                            </button>
                        </div>
                    </div>
                );
            })}
            <EditForm handleOpen={handleOpen} open={open} projectToEdit={projectToEdit} />
        </div>
    );
};

export default ProjectItem;
