import { Dialog, DialogHeader, DialogBody, DialogFooter } from '@material-tailwind/react';
import * as Yup from 'Yup';
import { useFormik } from 'formik';
import Checkbox from '@mui/material/Checkbox';

import { AiOutlineUser } from 'react-icons/ai';
import CustomField from './Field';
import BtnBot from '../../../components/BtnBot';
import { RootState } from '@/store/store';
import { useSelector } from 'react-redux';
import { FormControlLabel } from '@mui/material';
import { BsCalendarWeek } from 'react-icons/bs';
import { useState, useEffect } from 'react';
import { isJobSeeker } from '@/utils/helper';
import { Project } from '@/types/JobSeeker';
import { useJobseekerChangeMeMutation } from '@/services/jobseekerApiSlice';
import { PiBracketsCurlyBold } from 'react-icons/pi';
import { FaAudioDescription } from 'react-icons/fa';
interface EditForm {
    handleOpen: () => void;
    open: boolean;
    projectToEdit: any;
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
const EditForm = ({ handleOpen, open, projectToEdit }: EditForm) => {
    const currentUser = useSelector((state: RootState) => state.user.user);
    const jobSeeker = isJobSeeker(currentUser);
    const [projects, setProjects] = useState<Project[]>([]);
    const [changeProjects, { isLoading }] = useJobseekerChangeMeMutation();
    useEffect(() => {
        if (jobSeeker) {
            setProjects(currentUser.projects);
        }
    }, [jobSeeker, currentUser]);

    useEffect(() => {
        if (projectToEdit) {
            let dateToValue;
            let dateFromValue;
            if (projectToEdit.date.to) {
                const parts = projectToEdit.date.to.split('T');
                dateToValue = parts[0];
            }

            if (projectToEdit.date.from) {
                const parts = projectToEdit.date.from.split('T');
                dateFromValue = parts[0];
            }

            formik.setValues({
                ...formik.values,
                name: projectToEdit.name || '',
                description: projectToEdit.description || '',
                url: projectToEdit.url || '',
                dateFrom: dateFromValue || '',
                dateTo: dateToValue || '',
                isWorking: projectToEdit.isWorking,
            });
        }
    }, [projectToEdit]);

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

                const updatedProjects = projects.filter((item) => item._id !== projectToEdit._id);

                const data = [...updatedProjects, project];

                const projectsData: any = {
                    projects: data,
                };

                await changeProjects(projectsData);
                alert('Cập nhật thông tin thành công!');
                formik.resetForm();
                handleOpen();
            } catch (error) {
                console.error('Lỗi khi gửi form:', error);
            }
        },
    });

    return (
        <Dialog size="lg" open={open} handler={handleOpen}>
            <DialogHeader className="px-8 bg-primary-200 text-3xl font-family-title">Cập nhật dự án</DialogHeader>
            <form onSubmit={formik.handleSubmit}>
                <DialogBody className="flex flex-col items-center justify-center gap-4 px-8" divider>
                    <div className="grid grid-cols-2 w-full gap-6">
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

                        <FormControlLabel
                            control={<Checkbox checked={formik.values.isWorking} />}
                            name="isWorking"
                            label="Tôi đang làm dự án này"
                            value={formik.values.isWorking}
                            onChange={(e: any) => {
                                const isWorking = e.target.checked;
                                if (isWorking) {
                                    formik.setFieldValue('dateTo', '');
                                }
                                formik.setFieldValue('isWorking', isWorking);
                            }}
                        />
                    </div>
                </DialogBody>
                <DialogFooter className="px-8">
                    <BtnBot isLoading={isLoading} toggleOpen={handleOpen} />
                </DialogFooter>
            </form>
        </Dialog>
    );
};

export default EditForm;
