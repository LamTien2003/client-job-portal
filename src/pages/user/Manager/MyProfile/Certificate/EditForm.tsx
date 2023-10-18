import { Dialog, DialogHeader, DialogBody } from '@material-tailwind/react';
import * as Yup from 'Yup';
import { useFormik } from 'formik';

import { AiOutlineUser } from 'react-icons/ai';
import CustomField from './Field';
import BtnBot from '../../components/BtnBot';
import { RootState } from '@/store/store';
import { useSelector } from 'react-redux';
import { BiSolidFactory } from 'react-icons/bi';
import { BsCalendarWeek } from 'react-icons/bs';
import { useState, useEffect } from 'react';
import { isJobSeeker } from '@/utils/helper';
import { Certification } from '@/types/JobSeeker';
import { useChangeMeMutation } from '@/services/jobseekerApiSlice';
interface EditForm {
    handleOpen: () => void;
    open: boolean;
    certificateToEdit: any;
}
interface Values {
    name: string;
    organization: string;
    dateFrom: Date | string;
    dateTo: Date | string;
}
const initialValues: Values = {
    name: '',
    organization: '',
    dateFrom: '',
    dateTo: '',
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
const EditForm = ({ handleOpen, open, certificateToEdit }: EditForm) => {
    const currentUser = useSelector((state: RootState) => state.user.user);
    const jobSeeker = isJobSeeker(currentUser);
    const [certification, setCertification] = useState<Certification[]>([]);
    const [changeCer, { isLoading }] = useChangeMeMutation();
    useEffect(() => {
        if (jobSeeker) {
            setCertification(currentUser.certificate);
        }
    }, [jobSeeker, currentUser]);

    useEffect(() => {
        if (certificateToEdit) {
            let dateToValue;
            let dateFromValue;
            if (certificateToEdit.date.to) {
                const parts = certificateToEdit.date.to.split('T');
                dateToValue = parts[0];
            }

            if (certificateToEdit.date.from) {
                const parts = certificateToEdit.date.from.split('T');
                dateFromValue = parts[0];
            }
            formik.setValues({
                ...formik.values,
                name: certificateToEdit.name || '',
                organization: certificateToEdit.organization || '',
                dateFrom: dateFromValue || '',
                dateTo: dateToValue || '',
            });
        }
    }, [certificateToEdit]);

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: validation,
        onSubmit: async (values) => {
            try {
                const certificate: any = {
                    name: values.name,
                    organization: values.organization,
                    date: {
                        from: values.dateFrom,
                        to: values.dateTo,
                    },
                };

                const updatedcertificate = certification.filter((item) => item._id !== certificateToEdit._id);

                const data = [...updatedcertificate, certificate];

                const certificationData: any = {
                    certificate: data,
                };

                await changeCer(certificationData);
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
                            title="Tên giải thưởng"
                            fieldName="name"
                            error={formik.errors.name}
                            touched={formik.touched.name}
                            icon={<AiOutlineUser />}
                            placeholder="Nhập tên giải thưởng của bạn"
                            value={formik.values.name}
                            onChange={formik.handleChange}
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
                            onChange={formik.handleChange}
                        />
                    </div>
                    <div className=" w-full flex items-end justify-end">
                        <BtnBot toggleOpen={handleOpen} isLoading={isLoading} />
                    </div>
                </form>
            </DialogBody>
        </Dialog>
    );
};

export default EditForm;
