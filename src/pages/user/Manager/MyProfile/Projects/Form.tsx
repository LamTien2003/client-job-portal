import * as Yup from 'yup';

import { Formik, Form, FormikHelpers, Field } from 'formik';
import CustomField from './Field';
import { AiOutlineUser } from 'react-icons/ai';
import { PiBracketsCurlyBold } from 'react-icons/pi';
import { BsCalendarWeek } from 'react-icons/bs';
import { FaAudioDescription } from 'react-icons/fa';

import { Checkbox } from '@material-tailwind/react';
import BtnBot from '../../components/BtnBot';

interface FormProject {
    toggleOpen: () => void;
}

interface Values {
    name: string;
    url: string;
    description: string;
    dateFrom: Date | null;
    dateTo: Date | null;
    isWorking: boolean;
}
const initialValues: Values = {
    name: '',
    url: '',
    description: '',
    dateFrom: null,
    dateTo: null,
    isWorking: false,
};
const validation = Yup.object().shape({
    name: Yup.string().required('Tên không được bỏ trống!'),
    description: Yup.string().required('Mô tả không được bỏ trống!'),
    url: Yup.string().required('URL không được bỏ trống!'),
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
const FormProject = ({ toggleOpen }: FormProject) => {
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validation}
            onSubmit={(values: Values, { setSubmitting }: FormikHelpers<Values>) => {
                setSubmitting(false);
                console.log('Projects DATA: ', values);
            }}
        >
            {({ errors, touched }) => (
                <Form className="flex flex-col gap-4 border-t-[1px] border-gray-600 pt-5">
                    <p className="text-content-text text-sm font-semibold">
                        Gợi ý: Mô tả công việc cụ thể, những kết quả và thành tựu đạt được có số liệu dẫn chứng
                    </p>

                    <div className="flex flex-col gap-6">
                        <CustomField
                            title="Tên dự án"
                            fieldName="name"
                            error={errors.name}
                            touched={touched.name}
                            icon={<AiOutlineUser />}
                            placeholder="Nhập họ của bạn"
                        />

                        <div className="flex gap-6">
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
                        <CustomField
                            title="Mô tả chi tiết"
                            fieldName="description"
                            error={errors.description}
                            touched={touched.description}
                            icon={<FaAudioDescription />}
                            placeholder="Nhập chi tiết dự án của bạn"
                        />
                        <CustomField
                            title="Đường dẫn website"
                            fieldName="url"
                            error={errors.url}
                            touched={touched.url}
                            icon={<PiBracketsCurlyBold />}
                            placeholder="Nhập url website của bạn"
                        />

                        <Field
                            id="Stripe"
                            type="checkbox"
                            name="isWorking"
                            as={Checkbox}
                            label="Tôi vẫn đang làm dự án này"
                            className="h-5 w-5  rounded-full border-primary-100 bg-primary-200 transition-all hover:scale-105 hover:before:opacity-0"
                            color="blue"
                        />
                    </div>

                    <BtnBot toggleOpen={toggleOpen} />
                </Form>
            )}
        </Formik>
    );
};

export default FormProject;
