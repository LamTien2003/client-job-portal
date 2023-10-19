import { JobApplicate } from '@/types/JobSeeker';
import React from 'react';
import images from '@/assets/images';
import { formatDate } from '@/utils/date';
const ItemJob = ({ job }: { job: JobApplicate }) => {
    const createDate = formatDate(job?.createdAt);
    return (
        <tr className="bg-white border-b border-primary-100   hover:bg-gray-50 ">
            <th
                scope="row"
                className="border-primary-100 border-[1px] px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
                <div className="flex gap-4">
                    <img className="w-12 h-12 rounded-full" src={job.company.photo} alt="avt-company" />
                    <div className="flex flex-col gap-1">
                        <div className="flex gap-6">
                            <h5 className="text-content-title font-title">{job?.job.description}</h5>
                            <div className="flex gap-1 items-center text-sm">
                                <img src={images.logo.calender2} alt={images.logo.calender2} />
                                <p className="text-content-text">1 days ago</p>
                            </div>
                        </div>
                        <div className="flex gap-3">
                            <div className="flex gap-1 items-center text-sm">
                                <img src={images.logo.location} alt={images.logo.calender2} />
                                <p className="text-content-text">{job.company.location}</p>
                            </div>
                            <span className="w-[1px] bg-blue-gray-200 "></span>
                            <div className="flex gap-1 items-center text-sm text-content-text">
                                <img src={images.logo.salary} alt={images.logo.salary} />
                                Lương:
                                <span className="ml-2 text-content-title font-title">{job?.job.salary}</span>/ Tháng
                            </div>
                        </div>
                    </div>
                </div>
            </th>
            <td className="px-6 py-4 border-primary-100 border-[1px]">{createDate}</td>
            <td className="px-6 py-4 border-primary-100 border-[1px]">{job.company.companyName}</td>
            <td className="px-6 py-4 border-primary-100 border-[1px]">
                {job.status === 'accepted' && (
                    <div className="px-3 py-1 text-center text-white font-semibold text-sm rounded-lg bg-primary-100 ">
                        Đã chấp nhận
                    </div>
                )}

                {job.status === 'pending' && (
                    <div className="px-3 py-1 text-center text-white font-semibold text-sm rounded-lg bg-[#7307C9]">
                        Đang chờ
                    </div>
                )}
            </td>
        </tr>
    );
};

export default ItemJob;
