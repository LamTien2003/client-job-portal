import * as Yup from 'Yup';

import { useFormik } from 'formik';
import CustomField from './Field';
import { AiOutlineUser } from 'react-icons/ai';
import { BiSolidFactory } from 'react-icons/bi';
import { BsCalendarWeek } from 'react-icons/bs';
import BtnBot from '../../../components/BtnBot';
import { RootState } from '@/store/store';
import { Certification } from '@/types/JobSeeker';
import { useJobseekerChangeMeMutation } from '@/services/jobseekerApiSlice';
import { isJobSeeker } from '@/utils/helper';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

interface FormCer {
    toggleOpen: () => void;
}

interface Values {
    name: string;
    organization: string;
    dateFrom: Date | string;
    dateTo: Date | string;
    isWorking: boolean;
}
const initialValues: Values = {
    name: '',
    organization: '',
    dateFrom: '',
    dateTo: '',
    isWorking: false,
};
const validation = Yup.object().shape({
    name: Yup.string().required('Tên giải thưởng không được bỏ trống!'),
    organization: Yup.string().required('Tổ chức không được bỏ trống!'),
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
    dateTo: Yup.date()
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
        .test('date-range', 'Ngày phải lớn hơn ngày bắt đầu', function (value) {
            const { dateFrom } = this.parent;
            if (!dateFrom) {
                return true;
            }
            return new Date(value) >= new Date(dateFrom);
        }),
});
const FormCer = ({ toggleOpen }: FormCer) => {
    const currentUser = useSelector((state: RootState) => state.user.user);
    const [certification, setCertification] = useState<Certification[]>([]);
    useEffect(() => {
        if (isJobSeeker(currentUser)) {
            setCertification(currentUser.certificate);
        }
    }, [currentUser]);

    const [changeCertification, { isLoading }] = useJobseekerChangeMeMutation();

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: validation,
        onSubmit: async (values) => {
            try {
                const certificate: any = {
                    date: {
                        from: values.dateFrom,
                        to: values.dateTo,
                    },
                    name: values.name,
                    organization: values.organization,
                };

                const data = [...certification, certificate];

                const certificationData: any = {
                    certificate: data,
                };

                await changeCertification(certificationData);
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
                    title="Tên giải thưởng"
                    fieldName="name"
                    error={formik.errors.name}
                    touched={formik.touched.name}
                    icon={<AiOutlineUser />}
                    placeholder="Nhập tên giải thưởng của bạn"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />

                <CustomField
                    title="Tổ chức"
                    fieldName="organization"
                    error={formik.errors.organization}
                    touched={formik.touched.organization}
                    icon={<BiSolidFactory />}
                    placeholder="Nhập tổ chức của bạn"
                    value={formik.values.organization}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
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
                    onBlur={formik.handleBlur}
                />

                <CustomField
                    type="date"
                    title="Đến"
                    fieldName="dateTo"
                    error={formik.errors.dateTo}
                    touched={formik.touched.dateTo}
                    icon={<BsCalendarWeek />}
                    value={formik.values.dateTo}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
            </div>

            <BtnBot toggleOpen={toggleOpen} isLoading={isLoading} />
        </form>
    );
};

export default FormCer;
