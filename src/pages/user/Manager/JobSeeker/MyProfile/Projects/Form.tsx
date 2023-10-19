import * as Yup from 'Yup';
import { useFormik } from 'formik';
import CustomField from './Field';
import { AiOutlineUser } from 'react-icons/ai';
import { PiBracketsCurlyBold } from 'react-icons/pi';
import { BsCalendarWeek } from 'react-icons/bs';
import { FaAudioDescription } from 'react-icons/fa';

import BtnBot from '../../../components/BtnBot';
import { RootState } from '@/store/store';
import { Project } from '@/types/JobSeeker';
import { useChangeMeMutation } from '@/services/jobseekerApiSlice';
import { isJobSeeker } from '@/utils/helper';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Checkbox, FormControlLabel } from '@mui/material';

interface FormProject {
    toggleOpen: () => void;
}

interface Values {
    name: string;
    url: string;
    description: string;
    dateFrom: Date | string;
    dateTo: Date | string;
    isWorking: boolean;
}
const initialValues: Values = {
    name: '',
    url: '',
    description: '',
    dateFrom: '',
    dateTo: '',
    isWorking: false,
};
const validation = Yup.object().shape({
    name: Yup.string().required('Tên không được bỏ trống!'),
    description: Yup.string().required('Mô tả không được bỏ trống!'),
    url: Yup.string().required('URL không được bỏ trống!'),
    dateFrom: Yup.date()
        .required('Ngày bắt đầu không được bỏ trống!')
        .test('date-range', 'Không được chọn ngày ở tương lai!', function (value) {
            const { dateTo } = this.parent;
            if (!dateTo) {
                return true;
            }
            const dataNow = new Date();
            const date = new Date(value);

            return date <= dataNow;
        })
        .test('date-range', 'Ngày phải nhỏ hơn ngày kết thúc', function (value) {
            const { dateTo } = this.parent;
            if (!dateTo) {
                return true;
            }
            const date = new Date(value);

            return date <= new Date(dateTo);
        }),
    dateTo: Yup.date().test('date-range', 'Không được chọn ngày ở tương lai!', function (value) {
        const { dateTo } = this.parent;
        let date;
        if (!dateTo) {
            return true;
        }
        const dataNow = new Date();
        if (value) {
            date = new Date(value);
        }
        if (date) {
            return date <= dataNow;
        }
        return;
    }),
});
const FormProject = ({ toggleOpen }: FormProject) => {
    const currentUser = useSelector((state: RootState) => state.user.user);
    const [projects, setProjects] = useState<Project[]>([]);
    useEffect(() => {
        if (isJobSeeker(currentUser)) {
            setProjects(currentUser.projects);
        }
    }, [currentUser]);

    const [changeProjects, { isLoading }] = useChangeMeMutation();

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: validation,
        onSubmit: async (values) => {
            try {
                const project: any = {
                    name: values.name,
                    description: values.description,
                    url: values.url,
                    isWorking: values.isWorking,
                };

                if (values.isWorking) {
                    project.date = {
                        from: values.dateFrom,
                    };
                } else {
                    project.date = {
                        from: values.dateFrom,
                        to: values.dateTo,
                    };
                }

                const data = [...projects, project];

                const projectData: any = {
                    projects: data,
                };

                await changeProjects(projectData);
                alert('Cập nhật thông tin thành công!');
                formik.resetForm();
            } catch (error) {
                console.error('Lỗi khi gửi form:', error);
            }
        },
    });
    return (
        <form onSubmit={formik.handleSubmit} className="flex flex-col gap-4 border-t-[1px] border-gray-600 pt-5">
            <p className="text-content-text text-sm font-semibold">
                Gợi ý: Mô tả công việc cụ thể, những kết quả và thành tựu đạt được có số liệu dẫn chứng
            </p>

            <div className="flex flex-col gap-6">
                <CustomField
                    title="Tên dự án"
                    fieldName="name"
                    error={formik.errors.name}
                    touched={formik.touched.name}
                    icon={<AiOutlineUser />}
                    placeholder="Nhập họ của bạn"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                />

                <div className="flex gap-6">
                    <CustomField
                        type="date"
                        title="Từ"
                        fieldName="dateFrom"
                        error={formik.errors.dateFrom}
                        touched={formik.touched.dateFrom}
                        icon={<BsCalendarWeek />}
                        placeholder="Nhập họ của bạn"
                        value={formik.values.dateFrom}
                        onChange={formik.handleChange}
                    />

                    <CustomField
                        type="date"
                        title="Đến"
                        fieldName="dateTo"
                        error={formik.errors.dateTo}
                        touched={formik.touched.dateTo}
                        icon={<BsCalendarWeek />}
                        placeholder="Nhập họ của bạn"
                        value={formik.values.dateTo}
                        onChange={formik.handleChange}
                        disabled={formik.values.isWorking}
                    />
                </div>
                <CustomField
                    title="Mô tả chi tiết"
                    fieldName="description"
                    error={formik.errors.description}
                    touched={formik.touched.description}
                    icon={<FaAudioDescription />}
                    placeholder="Nhập chi tiết dự án của bạn"
                    value={formik.values.description}
                    onChange={formik.handleChange}
                />
                <CustomField
                    title="Đường dẫn website"
                    fieldName="url"
                    error={formik.errors.url}
                    touched={formik.touched.url}
                    icon={<PiBracketsCurlyBold />}
                    placeholder="Nhập url website của bạn"
                    value={formik.values.url}
                    onChange={formik.handleChange}
                />

                <FormControlLabel
                    control={<Checkbox />}
                    name="isWorking"
                    label="Tôi đang làm dự án này"
                    value={formik.values.isWorking}
                    onChange={formik.handleChange}
                />
            </div>

            <BtnBot toggleOpen={toggleOpen} isLoading={isLoading} />
        </form>
    );
};

export default FormProject;
