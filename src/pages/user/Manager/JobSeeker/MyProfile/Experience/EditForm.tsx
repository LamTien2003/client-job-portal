import { Dialog, DialogHeader, DialogBody, DialogFooter } from '@material-tailwind/react';
import * as Yup from 'Yup';
import { useFormik } from 'formik';
import Checkbox from '@mui/material/Checkbox';

import { AiOutlineUser } from 'react-icons/ai';
import CustomField from './Field';
import BtnBot from '../../../components/BtnBot';
import { RootState } from '@/store/store';
import { useSelector } from 'react-redux';
import { BiSolidFactory } from 'react-icons/bi';
import { FormControlLabel } from '@mui/material';
import { BsCalendarWeek } from 'react-icons/bs';
import { useState, useEffect } from 'react';
import { isJobSeeker } from '@/utils/helper';
import { Experience } from '@/types/JobSeeker';
import { useJobseekerChangeMeMutation } from '@/services/jobseekerApiSlice';
interface EditForm {
    handleOpen: () => void;
    open: boolean;
    experienceToEdit: any;
}
interface Values {
    position: string;
    company: string;
    dateFrom: Date | string;
    dateTo: Date | string;
    isWorking: boolean;
}

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
const EditForm = ({ handleOpen, open, experienceToEdit }: EditForm) => {
    const currentUser = useSelector((state: RootState) => state.user.user);
    const jobSeeker = isJobSeeker(currentUser);
    const [experiences, setExp] = useState<Experience[]>([]);
    const [changeExp, { isLoading }] = useJobseekerChangeMeMutation();
    useEffect(() => {
        if (jobSeeker) {
            setExp(currentUser.experiences);
        }
    }, [jobSeeker, currentUser]);

    useEffect(() => {
        if (experienceToEdit) {
            let dateToValue;
            let dateFromValue;
            if (experienceToEdit.date.to) {
                const parts = experienceToEdit.date.to.split('T');
                dateToValue = parts[0];
            }

            if (experienceToEdit.date.from) {
                const parts = experienceToEdit.date.from.split('T');
                dateFromValue = parts[0];
            }

            console.log(experienceToEdit.isWorking);

            formik.setValues({
                ...formik.values,
                position: experienceToEdit.position || '',
                company: experienceToEdit.company || '',
                dateFrom: dateFromValue || '',
                dateTo: dateToValue || '',
                isWorking: experienceToEdit.isWorking,
            });
        }
    }, [experienceToEdit]);

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

                const updatedExperiences = experiences.filter((exp) => exp._id !== experienceToEdit._id);

                const data = [...updatedExperiences, exp];

                const expData: any = {
                    experiences: data,
                };

                await changeExp(expData);
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
            <DialogHeader className="px-8 bg-primary-200 text-3xl font-family-title">Cập nhật kinh nghiệm</DialogHeader>
            <form onSubmit={formik.handleSubmit}>
                <DialogBody divider className="flex flex-col items-center justify-center gap-4 px-8">
                    <div className="grid grid-cols-2 w-full gap-6">
                        <CustomField
                            title="Chức vụ"
                            fieldName="position"
                            error={formik.errors.position}
                            touched={formik.touched.position}
                            icon={<AiOutlineUser />}
                            placeholder="Nhập họ của bạn"
                            value={formik.values.position}
                            onChange={formik.handleChange}
                        />

                        <CustomField
                            title="Công ty"
                            fieldName="company"
                            error={formik.errors.company}
                            touched={formik.touched.company}
                            icon={<BiSolidFactory />}
                            placeholder="Nhập họ của bạn"
                            value={formik.values.company}
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

                        <FormControlLabel
                            control={<Checkbox checked={formik.values.isWorking} />}
                            name="isWorking"
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
