import { Dialog, DialogHeader, DialogBody } from '@material-tailwind/react';
import * as Yup from 'Yup';
import { useFormik } from 'formik';
import Checkbox from '@mui/material/Checkbox';

import CustomField from './Field';
import BtnBot from '../../../components/BtnBot';
import { RootState } from '@/store/store';
import { useSelector } from 'react-redux';
import { BiSolidFactory } from 'react-icons/bi';
import { FormControlLabel } from '@mui/material';
import { BsCalendarWeek } from 'react-icons/bs';
import { useState, useEffect } from 'react';
import { isJobSeeker } from '@/utils/helper';
import { Education } from '@/types/JobSeeker';
import { useJobseekerChangeMeMutation } from '@/services/jobseekerApiSlice';
import { FaSchool } from 'react-icons/fa';
interface EditForm {
    handleOpen: () => void;
    open: boolean;
    educateToEdit: any;
}
interface Values {
    school: string;
    major: string;
    dateFrom: Date | string;
    dateTo: Date | string;

    isLearning: boolean;
}
const initialValues: Values = {
    school: '',
    major: '',
    dateFrom: '',
    dateTo: '',
    isLearning: false,
};
const validation = Yup.object().shape({
    school: Yup.string().required('Trường học không được bỏ trống!'),
    major: Yup.string().required('Ngành học không được bỏ trống!'),
    dateFrom: Yup.date()
        .required('Ngày không được bỏ trống!')
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
const EditForm = ({ handleOpen, open, educateToEdit }: EditForm) => {
    const currentUser = useSelector((state: RootState) => state.user.user);
    const jobSeeker = isJobSeeker(currentUser);
    const [education, setExp] = useState<Education[]>([]);
    const [changeEdu, { isLoading }] = useJobseekerChangeMeMutation();
    useEffect(() => {
        if (jobSeeker) {
            setExp(currentUser.educate);
        }
    }, [jobSeeker, currentUser]);

    useEffect(() => {
        if (educateToEdit) {
            let dateToValue;
            let dateFromValue;
            if (educateToEdit.date.to) {
                const parts = educateToEdit.date.to.split('T');
                dateToValue = parts[0];
            }

            if (educateToEdit.date.from) {
                const parts = educateToEdit.date.from.split('T');
                dateFromValue = parts[0];
            }

            formik.setValues({
                ...formik.values,
                major: educateToEdit.major || '',
                school: educateToEdit.school || '',
                dateFrom: dateFromValue || '',
                dateTo: dateToValue || '',
                isLearning: educateToEdit.isLearning,
            });
        }
    }, [educateToEdit]);

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: validation,
        onSubmit: async (values) => {
            try {
                const edu: any = {
                    major: values.major,
                    school: values.school,
                    date: {
                        from: values.dateFrom,
                        to: values.dateTo,
                    },
                    isWorking: values.isLearning,
                };

                if (values.isLearning) {
                    edu.date = {
                        from: values.dateFrom,
                    };
                } else {
                    edu.date = {
                        from: values.dateFrom,
                        to: values.dateTo,
                    };
                }

                const updatedEdu = education.filter((edu) => edu._id !== educateToEdit._id);

                const data = [...updatedEdu, edu];

                const eduData: any = {
                    educate: data,
                };

                await changeEdu(eduData);
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
            <DialogHeader>Cập nhật kinh nghiệm</DialogHeader>
            <DialogBody divider>
                <form onSubmit={formik.handleSubmit} className="flex flex-col items-center justify-center gap-4">
                    <div className="grid grid-cols-2 w-full gap-6">
                        <CustomField
                            title="Trường"
                            fieldName="school"
                            error={formik.errors.school}
                            touched={formik.touched.school}
                            icon={<FaSchool />}
                            placeholder="Nhập trường của bạn"
                            value={formik.values.school}
                            onChange={formik.handleChange}
                        />

                        <CustomField
                            title="Ngành học"
                            fieldName="major"
                            error={formik.errors.major}
                            touched={formik.touched.major}
                            icon={<BiSolidFactory />}
                            placeholder="Nhập ngành học của bạn"
                            value={formik.values.major}
                            onChange={formik.handleChange}
                        />

                        <CustomField
                            type="date"
                            title="Từ"
                            fieldName="dateFrom"
                            error={formik.errors.dateFrom}
                            touched={formik.touched.dateFrom}
                            icon={<BsCalendarWeek />}
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
                            value={formik.values.dateTo}
                            disabled={formik.values.isLearning}
                            onChange={formik.handleChange}
                        />

                        <FormControlLabel
                            control={<Checkbox />}
                            name="isLearning"
                            label="Tôi đang học tập tại đây"
                            value={formik.values.isLearning}
                            onChange={formik.handleChange}
                        />
                        <div className="flex items-end justify-end">
                            <BtnBot toggleOpen={handleOpen} isLoading={isLoading} />
                        </div>
                    </div>
                </form>
            </DialogBody>
        </Dialog>
    );
};

export default EditForm;
