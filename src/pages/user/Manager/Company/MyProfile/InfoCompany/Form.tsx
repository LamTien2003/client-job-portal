import { Dialog, DialogHeader, DialogBody } from '@material-tailwind/react';
import * as Yup from 'Yup';
import { useFormik } from 'formik';
import { AiOutlinePhone, AiOutlineUser } from 'react-icons/ai';
import CustomField from './Field';
import BtnBot from '../../../components/BtnBot';
import { RootState } from '@/store/store';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useChangeMeMutation } from '@/services/companiesApiSlice';
import { isCompany } from '@/utils/helper';
import Company from '@/types/Company';
interface FormInfo {
    handleOpen: () => void;
    open: boolean;
}

interface Values {
    companyName: string;
    description: string;
    establishDate: string;
    website: string;
}
const initialValues: Values = {
    companyName: '',
    description: '',
    establishDate: '',
    website: 'Cập nhật sau',
};
const validation = Yup.object().shape({
    companyName: Yup.string().max(100, 'Không được quá 100 kí tự!').required('Họ không được bỏ trống!'),
    description: Yup.string().max(500, 'Không được quá 500 kí tự!').required('Tên không được bỏ trống!'),
});
const FormInfo = ({ handleOpen, open }: FormInfo) => {
    const currentUser = useSelector((state: RootState) => state.user.user);
    const [company, setCompany] = useState<Company>();

    useEffect(() => {
        if (isCompany(currentUser)) {
            setCompany(currentUser);
        }
    }, [currentUser]);
    const [changeInfoCompany, { isLoading }] = useChangeMeMutation();

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: validation,
        onSubmit: async (values) => {
            try {
                const data: any = values;
                await changeInfoCompany(data);
                alert('Cập nhật thông tin thành công!');
                formik.resetForm();
                handleOpen();
            } catch (error) {
                console.error('Lỗi khi gửi form:', error);
            }
        },
    });
    useEffect(() => {
        if (company) {
            let date;
            if (company?.establishDate) {
                const parts = company?.establishDate.toString().split('T');
                date = parts[0];
            }
            formik.setValues({
                ...formik.values,
                companyName: company?.companyName || '',
                description: company?.description || '',
                establishDate: date || '',
                website: company?.website || '',
            });
        }
    }, [company]);

    return (
        <Dialog size="lg" open={open} handler={handleOpen}>
            <DialogHeader>Thông tin cá nhân</DialogHeader>
            <DialogBody divider>
                <form onSubmit={formik.handleSubmit} className="flex flex-col items-center justify-center gap-4">
                    <div className="grid grid-cols-2 w-full gap-6">
                        <CustomField
                            title="Tên công ty"
                            fieldName="companyName"
                            error={formik.errors.companyName}
                            touched={formik.touched.companyName}
                            icon={<AiOutlineUser />}
                            placeholder="Nhập tên công ty của bạn"
                            value={formik.values.companyName}
                            onChange={formik.handleChange}
                        />
                        <CustomField
                            title="Mô tả"
                            fieldName="description"
                            error={formik.errors.description}
                            touched={formik.touched.description}
                            icon={<AiOutlineUser />}
                            placeholder="Nhập mô tả"
                            value={formik.values.description}
                            onChange={formik.handleChange}
                        />

                        <CustomField
                            type="date"
                            title="Ngày thành lập"
                            fieldName="establishDate"
                            error={formik.errors.establishDate}
                            touched={formik.touched.establishDate}
                            icon={<AiOutlinePhone />}
                            placeholder="Nhập ngày thành lập của bạn"
                            value={formik.values.establishDate}
                            onChange={formik.handleChange}
                        />

                        <CustomField
                            title="Website"
                            fieldName="website"
                            error={formik.errors.website}
                            touched={formik.touched.website}
                            icon={<AiOutlineUser />}
                            placeholder="Nhập link website"
                            value={formik.values.website}
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
