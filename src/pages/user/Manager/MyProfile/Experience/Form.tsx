import * as Yup from 'yup';

import { Formik, Form, FormikHelpers, Field } from 'formik';
import CustomField from './Field';
import { AiOutlineUser } from 'react-icons/ai';
import { BiSolidFactory } from 'react-icons/bi';
import { BsCalendarWeek } from 'react-icons/bs';
import { Checkbox } from '@material-tailwind/react';

interface FormExp {
    toggleOpen: () => void;
}

interface Values {
    position: string;
    company: string;
    dateFrom: Date;
    dateTo: Date;
    isWorking: boolean;
}
const initialValues: Values = {
    position: '',
    company: '',
    dateFrom: new Date(),
    dateTo: new Date(),
    isWorking: false,
};
const validation = Yup.object().shape({
    position: Yup.string().required('Chức vụ không được bỏ trống!'),
    company: Yup.string().required('Công ty không được bỏ trống!'),
    dateFrom: Yup.date()
        .required('Từ ngày không được bỏ trống!')
        .test('date-range', 'Không được chọn ngày ở tương lai!', function (value) {
            const { dateTo } = this.parent; // Access the 'dateTo' field from the form values
            if (!dateTo) {
                return true; // Allow empty 'dateTo' field to avoid conflicts
            }
            const dataNow = new Date();
            const date = new Date(value);

            return date <= dataNow;
        })
        .test('date-range', 'Ngày phải nhỏ hơn ngày kết thúc', function (value) {
            const { dateTo } = this.parent; // Access the 'dateTo' field from the form values
            if (!dateTo) {
                return true; // Allow empty 'dateTo' field to avoid conflicts
            }
            const date = new Date(value);

            return date <= new Date(dateTo);
        }),
    dateTo: Yup.date()
        .required('Ngày không được bỏ trống!')
        .test('date-range', 'Không được chọn ngày ở tương lai!', function (value) {
            const { dateTo } = this.parent; // Access the 'dateTo' field from the form values
            if (!dateTo) {
                return true; // Allow empty 'dateTo' field to avoid conflicts
            }
            const dataNow = new Date();
            const date = new Date(value);

            return date <= dataNow;
        })
        .test('date-range', 'Ngày phải lớn hơn ngày bắt đầu', function (value) {
            const { dateFrom } = this.parent; // Access the 'dateFrom' field from the form values
            if (!dateFrom) {
                return true; // Allow empty 'dateFrom' field to avoid conflicts
            }
            return new Date(value) >= new Date(dateFrom);
        }),
});
const FormExp = ({ toggleOpen }: FormExp) => {
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validation}
            onSubmit={(values: Values, { setSubmitting }: FormikHelpers<Values>) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 500);
            }}
        >
            {({ errors, touched }) => (
                <Form className="flex flex-col gap-4 border-t-[1px] border-gray-600 pt-5">
                    <p className="text-content-text text-sm font-semibold">
                        Gợi ý: Mô tả công việc cụ thể, những kết quả và thành tựu đạt được có số liệu dẫn chứng
                    </p>

                    <div className="grid grid-cols-2 gap-6">
                        <CustomField
                            title="Chức vụ"
                            fieldName="position"
                            error={errors.position}
                            touched={touched.position}
                            icon={<AiOutlineUser />}
                            placeholder="Nhập họ của bạn"
                        />

                        <CustomField
                            title="Công ty"
                            fieldName="company"
                            error={errors.company}
                            touched={touched.company}
                            icon={<BiSolidFactory />}
                            placeholder="Nhập họ của bạn"
                        />

                        <CustomField
                            type="date"
                            title="Từ"
                            fieldName="dateFrom"
                            error={errors.dateFrom}
                            touched={touched.dateFrom}
                            icon={<BsCalendarWeek />}
                            placeholder="Nhập họ của bạn"
                        />

                        <CustomField
                            type="date"
                            title="Đến"
                            fieldName="dateTo"
                            error={errors.dateTo}
                            touched={touched.dateTo}
                            icon={<BsCalendarWeek />}
                            placeholder="Nhập họ của bạn"
                        />
                    </div>

                    <Field
                        id="Stripe"
                        type="checkbox"
                        name="isWorking"
                        as={Checkbox}
                        label="Tôi đang làm việc tại đây"
                        className="h-5 w-5  rounded-full border-primary-100 bg-primary-200 transition-all hover:scale-105 hover:before:opacity-0"
                        color="blue"
                    />
                </Form>
            )}
        </Formik>
    );
};

export default FormExp;
