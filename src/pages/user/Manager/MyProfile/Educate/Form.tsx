import * as Yup from 'yup';

import { useFormik } from 'formik';
import CustomField from './Field';
import { FaSchool } from 'react-icons/fa';
import { BiSolidFactory } from 'react-icons/bi';
import { BsCalendarWeek } from 'react-icons/bs';
import BtnBot from '../../components/BtnBot';
import { useChangeMeMutation } from '@/services/jobseekerApiSlice';
import { isJobSeeker } from '@/utils/helper';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Education } from '@/types/JobSeeker';

interface FormEducation {
    toggleOpen: () => void;
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
const FormEducation = ({ toggleOpen }: FormEducation) => {
    const currentUser = useSelector((state: RootState) => state.user.user);
    const [education, setEducation] = useState<Education[]>([]);
    useEffect(() => {
        if (isJobSeeker(currentUser)) {
            setEducation(currentUser.educate);
        }
    }, [currentUser]);

    console.log(education);

    const [changeEducation, { isLoading }] = useChangeMeMutation();

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: validation,
        onSubmit: async (values) => {
            try {
                const educate: any = {
                    date: {
                        from: values.dateFrom,
                        to: values.dateTo,
                    },
                    major: values.major,
                    school: values.school,
                    isLearning: values.isLearning,
                };

                if (values.isLearning) {
                    educate.date = {
                        from: values.dateFrom,
                    };
                } else {
                    educate.date = {
                        from: values.dateFrom,
                        to: values.dateTo,
                    };
                }

                const data = [...education, educate];

                const eduData: any = {
                    educate: data,
                };

                await changeEducation(eduData);
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

            <div className="grid grid-cols-2 gap-6">
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
            </div>

            <FormControlLabel
                control={<Checkbox />}
                name="isLearning"
                label="Tôi đang học tập tại đây"
                value={formik.values.isLearning}
                onChange={formik.handleChange}
            />

            <BtnBot toggleOpen={toggleOpen} />
        </form>
    );
};

export default FormEducation;
