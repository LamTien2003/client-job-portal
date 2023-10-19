import { Dialog, DialogHeader, DialogBody } from '@material-tailwind/react';
import * as Yup from 'Yup';
import { useFormik } from 'formik';
import { AiOutlinePhone, AiOutlineUser } from 'react-icons/ai';
import AvatarSection from './AvatarSection';
import CustomField from './Field';
import { CiLocationOn } from 'react-icons/ci';
import SelectInfo from './Select';
import BtnBot from '../../components/BtnBot';
import { useChangeMeUserMutation } from '@/services/usersApiSlice';
import { RootState } from '@/store/store';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
interface FormInfo {
    handleOpen: () => void;
    open: boolean;
}

interface Values {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    gender: string;
    location: string;
    photo: string;
}
const initialValues: Values = {
    firstName: '',
    lastName: '',
    phoneNumber: '',
    gender: '',
    location: '',
    photo: '',
};
const validation = Yup.object().shape({
    firstName: Yup.string().max(30, 'Không được quá 30 kí tự!').required('Họ không được bỏ trống!'),
    lastName: Yup.string().max(30, 'Không được quá 30 kí tự!').required('Tên không được bỏ trống!'),
    location: Yup.string().required('Địa chỉ không được bỏ trống!'),
    gender: Yup.string().required('Giới tính không được bỏ trống!'),
    phoneNumber: Yup.string()
        .matches(/^(0|\+84)[0-9]{9}$/, 'Số điện thoại không hợp lệ')
        .required('Số điện thoại không được bỏ trống!'),
});
const FormInfo = ({ handleOpen, open }: FormInfo) => {
    const currentUser = useSelector((state: RootState) => state.user.user);

    const [changeInfo, { isLoading }] = useChangeMeUserMutation();

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: validation,
        onSubmit: async (values) => {
            try {
                const form = new FormData();
                form.append('firstName', values.firstName);
                form.append('lastName', values.lastName);
                form.append('location', values.location);
                form.append('gender', values.gender);
                form.append('phoneNumber', values.phoneNumber);
                form.append('photo', values.photo);
                await changeInfo(form);
                alert('Cập nhật thông tin thành công!');
                formik.resetForm();
                handleOpen();
            } catch (error) {
                console.error('Lỗi khi gửi form:', error);
            }
        },
    });
    useEffect(() => {
        if (currentUser) {
            formik.setValues({
                ...formik.values,
                firstName: currentUser.firstName || '',
                lastName: currentUser.lastName || '',
                phoneNumber: currentUser.phoneNumber || '',
                gender: currentUser.gender || '',
                location: currentUser.location || '',
            });
        }
    }, [currentUser]);

    return (
        <Dialog size="lg" open={open} handler={handleOpen}>
            <DialogHeader>Thông tin cá nhân</DialogHeader>
            <DialogBody divider>
                <form onSubmit={formik.handleSubmit} className="flex flex-col items-center justify-center gap-4">
                    <AvatarSection formik={formik} />
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
                        <SelectInfo
                            title="Giới tính"
                            fieldName="gender"
                            value={formik.values.gender}
                            onChange={formik.handleChange}
                            error={formik.errors.gender}
                            touched={formik.touched.gender}
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
                        <div className="flex items-end justify-end">
                            <BtnBot toggleOpen={handleOpen} isLoading={isLoading} />
                        </div>
                    </div>
                </form>
            </DialogBody>
        </Dialog>
    );
};

export default FormInfo;
