import { Dialog, DialogHeader, DialogBody } from '@material-tailwind/react';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { AiOutlinePhone, AiOutlineUser } from 'react-icons/ai';
import AvatarSection from './AvatarSection';
import CustomField from './Field';
import { MdOutlineEmail } from 'react-icons/md';
import { CiLocationOn } from 'react-icons/ci';
import SelectInfo from './Select';
import BtnBot from '../../components/BtnBot';
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
    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: validation,
        onSubmit: async (values) => {
            try {
                console.log(values);
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
                    <AvatarSection />
                    <div className="grid grid-cols-2 w-full gap-6">
                        <CustomField
                            title="Họ"
                            fieldName="firstName"
                            error={formik.errors.firstName}
                            touched={formik.touched.firstName}
                            icon={<AiOutlineUser />}
                            placeholder="Nhập họ của bạn"
                            value={formik.values.firstName}
                            onChange={formik.handleChange}
                        />
                        <CustomField
                            title="Tên"
                            fieldName="lastName"
                            error={formik.errors.lastName}
                            touched={formik.touched.lastName}
                            icon={<AiOutlineUser />}
                            placeholder="Nhập tên của bạn"
                            value={formik.values.lastName}
                            onChange={formik.handleChange}
                        />

                        <CustomField
                            type="email"
                            title="Email"
                            fieldName="email"
                            error={formik.errors.email}
                            touched={formik.touched.email}
                            icon={<MdOutlineEmail />}
                            placeholder="Nhập email của bạn"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                        />
                        <SelectInfo
                            title="Giới tính"
                            fieldName="gender"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                        />

                        <CustomField
                            title="Địa chỉ"
                            fieldName="location"
                            error={formik.errors.location}
                            touched={formik.touched.location}
                            icon={<CiLocationOn />}
                            placeholder="Nhập số điện thoại của bạn"
                            value={formik.values.location}
                            onChange={formik.handleChange}
                        />

                        <CustomField
                            title="Số điện thoại"
                            fieldName="phoneNumber"
                            error={formik.errors.phoneNumber}
                            touched={formik.touched.phoneNumber}
                            icon={<AiOutlinePhone />}
                            placeholder="Nhập số điện thoại của bạn"
                            value={formik.values.phoneNumber}
                            onChange={formik.handleChange}
                        />
                    </div>
                    <BtnBot toggleOpen={handleOpen} />
                </form>
            </DialogBody>
        </Dialog>
    );
};

export default FormInfo;
