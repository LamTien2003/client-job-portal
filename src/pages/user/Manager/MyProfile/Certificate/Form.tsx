import * as Yup from 'yup';

import { Formik, Form, FormikHelpers, Field } from 'formik';
import CustomField from './Field';
import { AiOutlineUser } from 'react-icons/ai';
import { BiSolidFactory } from 'react-icons/bi';
import { BsCalendarWeek } from 'react-icons/bs';
import { Checkbox } from '@material-tailwind/react';
import BtnBot from '../../components/BtnBot';

interface FormCer {
    toggleOpen: () => void;
}

interface Values {
    name: string;
    organization: string;
    dateFrom: Date | null;
    dateTo: Date | null;
    isWorking: boolean;
}
const initialValues: Values = {
    name: '',
    organization: '',
    dateFrom: null,
    dateTo: null,
    isWorking: false,
};
const validation = Yup.object().shape({
    name: Yup.string().required('Tên giải thưởng không được bỏ trống!'),
    organization: Yup.string().required('Tổ chức không được bỏ trống!'),
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
const FormCer = ({ toggleOpen }: FormCer) => {
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
                            title="Tên giải thưởng"
                            fieldName="name"
                            error={errors.name}
                            touched={touched.name}
                            icon={<AiOutlineUser />}
                            placeholder="Nhập tên giải thưởng của bạn"
                        />

                        <CustomField
                            title="Tổ chức"
                            fieldName="organization"
                            error={errors.organization}
                            touched={touched.organization}
                            icon={<BiSolidFactory />}
                            placeholder="Nhập tổ chức của bạn"
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

                    <BtnBot toggleOpen={toggleOpen} />
                </Form>
            )}
        </Formik>
    );
};

export default FormCer;
