import { Dialog, DialogHeader, DialogBody, DialogFooter } from '@material-tailwind/react';
import * as Yup from 'Yup';
import { useFormik } from 'formik';
import { AiOutlinePhone, AiOutlineUser } from 'react-icons/ai';
import AvatarSection from './AvatarSection';
import CustomField from './Field';
import { CiLocationOn } from 'react-icons/ci';
import SelectGender from './SelectGender';
import BtnBot from './BtnBot';
import { useChangeMeUserMutation } from '@/services/usersApiSlice';
import { RootState } from '@/store/store';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import SelectCity from './SelectCity';
import SelectDistrict from './SelectDistrict';
interface FormInfo {
    handleOpen: () => void;
    open: boolean;
}

interface Values {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    gender: string;
    locationAddress: string;
    photo: string;
    locationCity: string;
    locationDistrict: string;
}
const initialValues: Values = {
    firstName: '',
    lastName: '',
    phoneNumber: '',
    gender: '',
    locationAddress: '',
    photo: '',
    locationCity: '',
    locationDistrict: '',
};
const validation = Yup.object().shape({
    firstName: Yup.string().max(30, 'Không được quá 30 kí tự!').required('Họ không được bỏ trống!'),
    lastName: Yup.string().max(30, 'Không được quá 30 kí tự!').required('Tên không được bỏ trống!'),
    locationAddress: Yup.string().required('Địa chỉ phố không được bỏ trống!'),
    locationDistrict: Yup.string().required('Quận, Huyện không  được bỏ trống!'),
    locationCity: Yup.string().required('Tỉnh, Thành không được bỏ trống!'),
    gender: Yup.string().required('Giới tính không được bỏ trống!'),
    phoneNumber: Yup.string()
        .matches(/^(0|\+84)[0-9]{9}$/, 'Số điện thoại không hợp lệ')
        .required('Số điện thoại không được bỏ trống!'),
});
const FormInfo = ({ handleOpen, open }: FormInfo) => {
    const currentUser = useSelector((state: RootState) => state.user.user);
    // Đợi backend trả về code của city để initial value ở đây
    const [code, setCode] = useState<number>(1);

    const [changeInfo, { isLoading }] = useChangeMeUserMutation();

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: validation,
        onSubmit: async (values) => {
            try {
                const form = new FormData();
                form.append('firstName', values.firstName);
                form.append('lastName', values.lastName);
                form.append('location[address]', values.locationAddress);
                form.append('location[district]', values.locationDistrict);
                form.append('location[city]', values.locationCity);
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
                locationAddress: currentUser.location.address || '',
                locationDistrict: currentUser.location.district || '',
                locationCity: currentUser.location.city || '',
            });
        }
    }, [currentUser]);

    return (
        <Dialog size="lg" open={open} handler={handleOpen}>
            <DialogHeader className="px-8 bg-primary-200 text-3xl font-family-title">Thông tin cá nhân</DialogHeader>
            <form onSubmit={formik.handleSubmit}>
                <DialogBody divider className="flex flex-col items-center justify-center gap-4 px-8">
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
                        <SelectGender
                            title="Giới tính"
                            fieldName="gender"
                            value={formik.values.gender}
                            onChange={formik.handleChange}
                            error={formik.errors.gender}
                            touched={formik.touched.gender}
                        />

                        <SelectCity
                            title="Tỉnh, Thành Phố"
                            fieldName="locationCity"
                            value={formik.values.locationCity}
                            onChange={formik.handleChange}
                            error={formik.errors.locationCity}
                            touched={formik.touched.locationCity}
                            onSetCode={setCode}
                        />

                        <SelectDistrict
                            title="Quận, Huyện"
                            fieldName="locationDistrict"
                            value={formik.values.locationDistrict}
                            onChange={formik.handleChange}
                            error={formik.errors.locationDistrict}
                            touched={formik.touched.locationDistrict}
                            code={code}
                        />

                        <CustomField
                            title="Địa chỉ"
                            fieldName="locationAddress"
                            error={formik.errors.locationAddress}
                            touched={formik.touched.locationAddress}
                            icon={<CiLocationOn />}
                            placeholder="Nhập số điện thoại của bạn"
                            value={formik.values.locationAddress}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
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
                </DialogBody>
                <DialogFooter className="px-8">
                    <BtnBot isLoading={isLoading} toggleOpen={handleOpen} />
                </DialogFooter>
            </form>
        </Dialog>
    );
};

export default FormInfo;
