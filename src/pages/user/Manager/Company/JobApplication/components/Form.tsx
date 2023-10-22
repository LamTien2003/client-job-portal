import { Dialog, DialogHeader, DialogBody } from '@material-tailwind/react';
import * as Yup from 'Yup';
import { useFormik } from 'formik';

import BtnBot from '../../../components/BtnBot';

import { BsCalendarWeek } from 'react-icons/bs';
import { useAcceptJobMutation } from '@/services/companiesApiSlice';
interface FormAcceptJob {
    handleOpen: () => void;
    open: boolean;
    id: string;
}

interface Values {
    interviewDate: Date | string;
}
const initialValues: Values = {
    interviewDate: '',
};
const validation = Yup.object().shape({
    interviewDate: Yup.date().min(new Date(), 'Không được chọn ngày hôm nay và ở quá khứ!'),
});
const FormAcceptJob = ({ handleOpen, open, id }: FormAcceptJob) => {
    const [acceptJob, { isLoading }] = useAcceptJobMutation();
    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: validation,
        onSubmit: async (values) => {
            try {
                const body: any = values;
                await acceptJob({ id, body });
                alert('Đã chấp thuận đơn ứng tuyển!');
                formik.resetForm();
                handleOpen();
            } catch (error) {
                console.error('Lỗi khi gửi form:', error);
            }
        },
    });

    return (
        <Dialog size="lg" open={open} handler={handleOpen}>
            <DialogHeader>Thông tin cá nhân</DialogHeader>
            <DialogBody divider>
                <form onSubmit={formik.handleSubmit} className="flex flex-col items-center justify-center gap-4">
                    <div className="flex flex-col gap-1 w-full">
                        <label className="font-bold text-primary-100" htmlFor="interviewDate">
                            Ngày phỏng vấn
                        </label>
                        <div
                            className={`flex items-center text-s-text w-full border-2 bg-input rounded-md ${
                                formik.errors.interviewDate && formik.touched.interviewDate && 'border-red-800'
                            }`}
                        >
                            <div className="text-xl px-3">
                                <BsCalendarWeek />
                            </div>
                            <input
                                name="interviewDate"
                                className="w-full h-11 rounded-md py-2 outline-none bg-input pr-3"
                                type="date"
                                value={formik.values.interviewDate.toString()}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                        </div>
                        {formik.errors.interviewDate && formik.touched.interviewDate ? (
                            <div className="text-red-700 text-sm font-semibold">{formik.errors.interviewDate}</div>
                        ) : null}
                    </div>
                    <div className="w-full flex items-end justify-end">
                        <BtnBot toggleOpen={handleOpen} isLoading={isLoading} />
                    </div>
                </form>
            </DialogBody>
        </Dialog>
    );
};

export default FormAcceptJob;
