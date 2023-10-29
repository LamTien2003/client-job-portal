import * as Yup from 'Yup';

import { useFormik } from 'formik';
import CustomField from './Field';
import { AiOutlineUser } from 'react-icons/ai';
import { BiSolidFactory } from 'react-icons/bi';
import { BsCalendarWeek } from 'react-icons/bs';
import BtnBot from '../../../components/BtnBot';
import { useJobseekerChangeMeMutation } from '@/services/jobseekerApiSlice';
import { Experience } from '@/types/JobSeeker';
import { useEffect, useState } from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { isJobSeeker } from '@/utils/helper';
import { DatePicker } from '@mui/x-date-pickers';
interface FormExp {
    toggleOpen: () => void;
}

interface Values {
    position: string;
    company: string;
    dateFrom: Date | string;
    dateTo: Date | string;
    isWorking: boolean;
}
const FormExp = ({ toggleOpen }: FormExp) => {
    const currentUser = useSelector((state: RootState) => state.user.user);
    const [experiences, setExp] = useState<Experience[]>([]);
    const initialValues: Values = {
        position: '',
        company: '',
        dateFrom: '',
        dateTo: '',
        isWorking: false,
    };
    const validation = Yup.object().shape({
        position: Yup.string().required('Chức vụ không được bỏ trống!'),
        company: Yup.string().required('Công ty không được bỏ trống!'),
        dateFrom: Yup.date()
            .required('Từ ngày không được bỏ trống!')
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
    useEffect(() => {
        if (isJobSeeker(currentUser)) {
            setExp(currentUser.experiences);
        }
    }, [currentUser]);

    const [changeExp, { isLoading }] = useJobseekerChangeMeMutation();
    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: validation,
        onSubmit: async (values) => {
            try {
                const exp: any = {
                    position: values.position,
                    company: values.company,
                    date: {
                        from: values.dateFrom,
                        to: values.dateTo,
                    },
                    isWorking: values.isWorking,
                };

                if (values.isWorking) {
                    exp.date = {
                        from: values.dateFrom,
                    };
                } else {
                    exp.date = {
                        from: values.dateFrom,
                        to: values.dateTo,
                    };
                }
                const data = [...experiences, exp];

                const expData: any = {
                    experiences: data,
                };

                // await changeExp(expData);
                // alert('Cập nhật thông tin thành công!');
                // formik.resetForm();
                // toggleOpen();
            } catch (error) {
                console.error('Lỗi khi gửi form:', error);
            }
        },
    });

    return (
        <form onSubmit={formik.handleSubmit} className="flex flex-col gap-4 border-t-2  pt-5">
            <p className="text-content-text text-sm font-medium italic">
                Gợi ý: Mô tả công việc cụ thể, những kết quả và thành tựu đạt được có số liệu dẫn chứng
            </p>

            <div className="flex flex-col gap-6 border-b-2 pb-5">
                <CustomField
                    title="Chức vụ *"
                    fieldName="position"
                    error={formik.errors.position}
                    touched={formik.touched.position}
                    icon={<AiOutlineUser />}
                    placeholder="Nhập chức vụ"
                    value={formik.values.position}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />

                <CustomField
                    title="Công ty *"
                    fieldName="company"
                    error={formik.errors.company}
                    touched={formik.touched.company}
                    icon={<BiSolidFactory />}
                    placeholder="Nhập công ty"
                    value={formik.values.company}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />

                <FormControlLabel
                    control={<Checkbox />}
                    name="isWorking"
                    checked={formik.values.isWorking}
                    label="Tôi đang làm việc tại đây"
                    value={formik.values.isWorking}
                    onChange={(e: any) => {
                        const isWorking = e.target.checked;
                        if (isWorking) {
                            formik.setFieldValue('dateTo', '');
                        }
                        formik.setFieldValue('isWorking', isWorking);
                    }}
                />
                <div className="flex gap-8 justify-between">
                    <div className="flex gap-6 justify-between">
                        <DatePicker
                            className="w-full"
                            label={'Tháng'}
                            views={['month']}
                            value={formik.values.dateFrom}
                            onChange={(date) => {
                                formik.setFieldValue('dateFrom', date);
                            }}
                        />

                        <DatePicker
                            className="w-full"
                            label={'Năm'}
                            views={['year']}
                            value={formik.values.dateFrom}
                            onChange={(date) => {
                                formik.setFieldValue('dateFrom', date);
                            }}
                        />
                    </div>

                    <div className="flex gap-6 justify-between">
                        <DatePicker
                            className="w-full"
                            label={'Tháng'}
                            views={['month']}
                            value={formik.values.dateTo}
                            onChange={(date) => {
                                formik.setFieldValue('dateTo', date);
                            }}
                        />

                        <DatePicker
                            className="w-full"
                            label={'Năm'}
                            views={['year']}
                            value={formik.values.dateTo}
                            onChange={(date) => {
                                formik.setFieldValue('dateTo', date);
                            }}
                        />
                    </div>
                </div>

                {/* <div className="flex gap-8 justify-between">
                    <CustomField
                        type="date"
                        title="Ngày bắt đầu *"
                        fieldName="dateFrom"
                        error={formik.errors.dateFrom}
                        touched={formik.touched.dateFrom}
                        icon={<BsCalendarWeek />}
                        placeholder="Nhập họ của bạn"
                        value={formik.values.dateFrom}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />

                    <CustomField
                        type="date"
                        title="Ngày kết thúc *"
                        fieldName="dateTo"
                        error={formik.errors.dateTo}
                        touched={formik.touched.dateTo}
                        icon={<BsCalendarWeek />}
                        placeholder="Nhập họ của bạn"
                        value={formik.values.dateTo}
                        onChange={formik.handleChange}
                        disabled={formik.values.isWorking}
                        onBlur={formik.handleBlur}
                    />
                </div> */}
            </div>

            <BtnBot toggleOpen={toggleOpen} isLoading={isLoading} />
        </form>
    );
};

export default FormExp;
