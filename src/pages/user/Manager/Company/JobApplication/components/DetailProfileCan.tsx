import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import { useGetDetailJobseekerQuery } from '@/services/jobseekerApiSlice';
import { useState, useEffect } from 'react';
import JobSeeker from '@/types/JobSeeker';
import Loader from '@/components/Loader/Loader';

type Anchor = 'top' | 'left' | 'bottom' | 'right';

const DetailProfileCan = ({ id }: { id: string }) => {
    const [state, setState] = useState({
        right: false,
    });
    const [info, setInfo] = useState<JobSeeker>();
    const { data, isLoading, isError } = useGetDetailJobseekerQuery(id);
    useEffect(() => {
        if (!isLoading && !isError && data?.data?.data) {
            setInfo(data?.data?.data);
        }
    }, [data?.data?.data, isError, isLoading]);

    const toggleDrawer = (anchor: Anchor, open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
        if (
            event.type === 'keydown' &&
            ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')
        ) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor: Anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 600 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
            className="p-3 flex flex-col gap-3 font-family-text"
        >
            <div className="text-primary-100 font-title text-xl font-family-title text-center">Thông tin ứng viên</div>

            <div className="flex gap-4">
                <img className="w-28 h-28 object-cover rounded-sm" src={info?.photo} alt="avatar" />
                <div className="flex flex-col w-full gap-1 text-content-text">
                    <div className="flex gap-4">
                        <div className="flex gap-1">
                            <h6 className="text-content-title font-semibold">Họ tên: </h6>
                            {info?.firstName} {info?.lastName}
                        </div>

                        <div className="flex gap-1">
                            <h6 className="text-content-title font-semibold">Giới tính: </h6>
                            {info?.gender === 'male' && 'Nam'}
                            {info?.gender === 'female' && 'Nữ'}
                            {info?.gender === 'others' && 'Khác'}
                        </div>
                    </div>
                    <div className="flex gap-1">
                        <h6 className="text-content-title font-semibold">SĐT: </h6>
                        {info?.phoneNumber}
                    </div>
                    <div className="flex gap-1">
                        <h6 className="text-content-title font-semibold">Email: </h6>
                        {info?.email}
                    </div>
                    <div className="flex gap-1">
                        <span className="text-content-title font-semibold w-[75px] ">Địa chỉ: </span>
                        <h6 className="w-full">
                            {info?.location.address} {info?.location.district} {info?.location.city}
                        </h6>
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-1">
                <h6 className="text-primary-100 font-title text-lg font-family-title">Học vấn</h6>
                <div className="flex flex-col gap-4">
                    {info?.educate.length === 0 ? (
                        <p>Cập nhật sau!</p>
                    ) : (
                        info?.educate.map((edu, index) => (
                            <div key={index} className="flex gap-2">
                                {index + 1}.
                                <div className="flex flex-col gap-1">
                                    <div className="flex gap-1">
                                        <h6 className="text-content-title font-semibold">Trường: </h6>
                                        {edu.school}
                                    </div>
                                    <div className="flex gap-1">
                                        <h6 className="text-content-title font-semibold">Ngành học: </h6>
                                        {edu.major}
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
            <div className="flex flex-col gap-1">
                <h6 className="text-primary-100 font-title text-lg font-family-title">Kĩ năng</h6>
                <div className="flex flex-wrap gap-4">
                    {info?.skills.length === 0 ? (
                        <p>Cập nhật sau!</p>
                    ) : (
                        info?.skills.map((skill, index) => <div key={index}>{skill}</div>)
                    )}
                </div>
            </div>
            <div className="flex flex-col gap-1">
                <h6 className="text-primary-100 font-title text-lg font-family-title">Kinh nghiệm</h6>
                <div className="flex flex-col gap-4">
                    {info?.experiences.length === 0 ? (
                        <p>Cập nhật sau!</p>
                    ) : (
                        info?.experiences.map((exp, index) => (
                            <div key={index} className="flex gap-2">
                                {index + 1}.
                                <div className="flex flex-col gap-1">
                                    <div className="flex gap-1">
                                        <h6 className="text-content-title font-semibold">Công ty: </h6>
                                        {exp.company}
                                    </div>
                                    <div className="flex gap-1">
                                        <h6 className="text-content-title font-semibold">Chức vụ: </h6>
                                        {exp.position}
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>

            <div className="flex flex-col gap-1">
                <h6 className="text-primary-100 font-title text-lg font-family-title">Dự án</h6>
                <div className="flex flex-col gap-4">
                    {info?.projects.length === 0 ? (
                        <p>Cập nhật sau!</p>
                    ) : (
                        info?.projects.map((project, index) => (
                            <div key={index} className="flex gap-2">
                                {index + 1}.
                                <div className="flex flex-col gap-1">
                                    <div className="flex gap-1">
                                        <h6 className="text-content-title font-semibold">Tên: </h6>
                                        {project.name}
                                    </div>
                                    <div className="flex gap-1">
                                        <h6 className="text-content-title font-semibold">Mô tả: </h6>
                                        {project.description}
                                    </div>
                                    <div className="flex gap-1 items-center">
                                        <h6 className="text-content-title font-semibold">URL: </h6>
                                        <a
                                            className="text-sm text-primary-100 underline"
                                            href={project.url}
                                            target="_blank"
                                        >
                                            Xem chi tiết dự án
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>

            <div className="flex flex-col gap-1">
                <h6 className="text-primary-100 font-title text-lg font-family-title">Thành tích</h6>
                <div className="flex flex-col gap-4">
                    {info?.certificate.length === 0 ? (
                        <p>Cập nhật sau!</p>
                    ) : (
                        info?.certificate.map((cer, index) => (
                            <div key={index} className="flex gap-2">
                                {index + 1}.
                                <div className="flex flex-col gap-1">
                                    <div className="flex gap-1">
                                        <h6 className="text-content-title font-semibold">Tên thành tích: </h6>
                                        {cer.name}
                                    </div>
                                    <div className="flex gap-1">
                                        <h6 className="text-content-title font-semibold">Tổ chức: </h6>
                                        {cer.organization}
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </Box>
    );

    const anchor = 'right';

    return (
        <div>
            {isLoading && <Loader />}
            <button
                className="p-2 text-primary-100 font-semibold border-2 border-primary-100 rounded-md hover:text-blue-800  hover:border-blue-800  duration-300"
                onClick={toggleDrawer(anchor, true)}
            >
                Xem thông tin
            </button>
            <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
                {list(anchor)}
            </Drawer>
        </div>
    );
};
export default DetailProfileCan;
