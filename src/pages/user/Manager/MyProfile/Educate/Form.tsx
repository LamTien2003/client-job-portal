import * as Yup from 'yup';

import { Formik, Form, FormikHelpers, Field } from 'formik';
import CustomField from './Field';
import { FaSchool } from 'react-icons/fa';
import { BiSolidFactory } from 'react-icons/bi';
import { BsCalendarWeek } from 'react-icons/bs';
import { Checkbox } from '@material-tailwind/react';
import BtnBot from '../../components/BtnBot';

interface FormEducation {
    toggleOpen: () => void;
}

interface Values {
    school: string;
    major: string;
    dateFrom: Date | null;
    dateTo: Date | null;

    isLearning: boolean;
}
const initialValues: Values = {
    school: '',
    major: '',

    dateFrom: null,
    dateTo: null,
    isLearning: false,
};
const validation = Yup.object().shape({
    school: Yup.string().required('Trường học không được bỏ trống!'),
    major: Yup.string().required('Ngành học không được bỏ trống!'),
    dateFrom: Yup.date()
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
const FormEducation = ({ toggleOpen }: FormEducation) => {
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validation}
            onSubmit={(values: Values, { setSubmitting }: FormikHelpers<Values>) => {
                console.log(values);
            }}
        >
            {({ errors, touched }) => (
                <Form className="flex flex-col gap-4 border-t-[1px] border-gray-600 pt-5">
                    <p className="text-content-text text-sm font-semibold">
                        Gợi ý: Mô tả công việc cụ thể, những kết quả và thành tựu đạt được có số liệu dẫn chứng
                    </p>

                    <div className="grid grid-cols-2 gap-6">
                        <CustomField
                            title="Trường"
                            fieldName="school"
                            error={errors.school}
                            touched={touched.school}
                            icon={<FaSchool />}
                            placeholder="Nhập trường của bạn"
                        />

                        <CustomField
                            title="Ngành học"
                            fieldName="major"
                            error={errors.major}
                            touched={touched.major}
                            icon={<BiSolidFactory />}
                            placeholder="Nhập ngành học của bạn"
                        />

                        <CustomField
                            type="date"
                            title="Từ"
                            fieldName="dateFrom"
                            error={errors.dateFrom}
                            touched={touched.dateFrom}
                            icon={<BsCalendarWeek />}
                        />

                        <CustomField
                            type="date"
                            title="Đến"
                            fieldName="dateTo"
                            error={errors.dateTo}
                            touched={touched.dateTo}
                            icon={<BsCalendarWeek />}
                        />
                    </div>

                    <Field
                        id="Stripe"
                        type="checkbox"
                        name="isLearning"
                        as={Checkbox}
                        label="Tôi đang làm việc tại đây"
                        className="h-5 w-5  rounded-full border-primary-100 bg-primary-200 transition-all hover:scale-105 hover:before:opacity-0"
                        color="blue"
                    />

                    <BtnBot toggleOpen={toggleOpen} />
                </Form>
            )}
        </Formik>
    );
};

export default FormEducation;
