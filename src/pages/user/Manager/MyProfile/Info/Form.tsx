import { Dialog, DialogHeader, DialogBody, DialogFooter } from '@material-tailwind/react';
import * as Yup from 'yup';

import { Formik, Form, FormikHelpers } from 'formik';

import { AiOutlinePhone, AiOutlineUser } from 'react-icons/ai';
import AvatarSection from './AvatarSection';
import CustomField from './Field';
import { MdOutlineEmail } from 'react-icons/md';
import { CiLocationOn } from 'react-icons/ci';
import SelectInfo from './Select';
interface FormInfo {
    handleOpen: () => void;
    open: boolean;
}

interface Values {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    gender: string;
    location: string;
    photo: string;
}
const initialValues: Values = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    gender: '',
    location: '',
    photo: '',
};
const validation = Yup.object().shape({
    firstName: Yup.string().max(30, 'Không được quá 30 kí tự!').required('Họ không được bỏ trống!'),
    lastName: Yup.string().max(30, 'Không được quá 30 kí tự!').required('Tên không được bỏ trống!'),
    location: Yup.string().required('Địa chỉ không được bỏ trống!'),
    email: Yup.string().email('Email không đúng định dạng!').required('Email không được bỏ trống!'),
    phoneNumber: Yup.string()
        .matches(/^(0|\+84)[0-9]{9}$/, 'Số điện thoại không hợp lệ')
        .required('Số điện thoại không được bỏ trống!'),
});
const FormInfo = ({ handleOpen, open }: FormInfo) => {
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
                <Form>
                    <Dialog size="lg" open={open} handler={handleOpen}>
                        <DialogHeader>Thông tin cá nhân</DialogHeader>
                        <DialogBody divider>
                            <div className="flex flex-col items-center justify-center gap-4">
                                <AvatarSection />
                                <div className="grid grid-cols-2 w-full gap-6">
                                    <CustomField
                                        title="Họ"
                                        fieldName="firstName"
                                        error={errors.firstName}
                                        touched={touched.firstName}
                                        icon={<AiOutlineUser />}
                                        placeholder="Nhập họ của bạn"
                                    />
                                    <CustomField
                                        title="Tên"
                                        fieldName="lastName"
                                        error={errors.lastName}
                                        touched={touched.lastName}
                                        icon={<AiOutlineUser />}
                                        placeholder="Nhập tên của bạn"
                                    />

                                    <CustomField
                                        type="email"
                                        title="Email"
                                        fieldName="email"
                                        error={errors.email}
                                        touched={touched.email}
                                        icon={<MdOutlineEmail />}
                                        placeholder="Nhập email của bạn"
                                    />
                                    <SelectInfo title="Giới tính" fieldName="gender" />

                                    <CustomField
                                        title="Địa chỉ"
                                        fieldName="location"
                                        error={errors.location}
                                        touched={touched.location}
                                        icon={<CiLocationOn />}
                                        placeholder="Nhập số điện thoại của bạn"
                                    />

                                    <CustomField
                                        title="Số điện thoại"
                                        fieldName="phoneNumber"
                                        error={errors.phoneNumber}
                                        touched={touched.phoneNumber}
                                        icon={<AiOutlinePhone />}
                                        placeholder="Nhập số điện thoại của bạn"
                                    />
                                </div>
                            </div>
                        </DialogBody>
                        <DialogFooter>
                            <div className="flex gap-2 justify-end">
                                <button
                                    onClick={handleOpen}
                                    className="hover:bg-blue-gray-100 py-2 px-6 rounded-md font-medium text-content-text"
                                >
                                    Huỷ
                                </button>
                                <button className="bg-primary-100 py-2 px-6 text-white font-semibold rounded-md hover:bg-black duration-300">
                                    Lưu
                                </button>
                            </div>
                        </DialogFooter>
                    </Dialog>
                </Form>
            )}
        </Formik>
    );
};

export default FormInfo;
