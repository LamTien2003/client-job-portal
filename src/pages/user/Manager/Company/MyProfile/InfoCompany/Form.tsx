import { Dialog, DialogHeader, DialogBody, DialogFooter } from '@material-tailwind/react';
import * as Yup from 'Yup';
import { useFormik } from 'formik';

import { LuFactory } from 'react-icons/lu';
import { BiLink } from 'react-icons/bi';
import { TbFileDescription } from 'react-icons/tb';

import CustomField from '../../../components/Field';
import BtnBot from '../../../components/BtnBot';
import { RootState } from '@/store/store';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useChangeMeMutation } from '@/services/companiesApiSlice';
import { isCompany } from '@/utils/helper';
import Company from '@/types/Company';
import { DatePicker } from '@mui/x-date-pickers';
import dayjs from 'dayjs';
interface FormInfo {
    handleOpen: () => void;
    open: boolean;
}

interface Values {
    companyName: string;
    description: string;
    establishDate: any;
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
    establishDate: Yup.date()
        .required('Ngày thành lập không được bỏ trống!')
        .test('date-range', 'Không được chọn ngày ở tương lai!', function (value) {
            const { establishDate } = this.parent;
            if (!establishDate) {
                return true;
            }
            const dataNow = new Date();
            const date = new Date(value);

            return date <= dataNow;
        }),
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
                let dateValue;

                if (values.establishDate.$y && values.establishDate.$M && values.establishDate.$D) {
                    dateValue = `${values.establishDate.$y}-${values.establishDate.$M + 1}-${values.establishDate.$D}`;
                } else {
                    dateValue = values.establishDate;
                }

                const data: any = {
                    companyName: values.companyName,
                    description: values.description,
                    establishDate: dateValue,
                    website: values.website,
                };

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
    const establishDateValue: any = dayjs(formik.values.establishDate);
    return (
        <Dialog size="lg" open={open} handler={handleOpen}>
            <DialogHeader className="px-8 bg-primary-200 text-3xl font-family-title">Thông tin công ty</DialogHeader>
            <form onSubmit={formik.handleSubmit}>
                <DialogBody divider className="flex flex-col items-center justify-center gap-4 px-8">
                    <div className="grid grid-cols-2 w-full gap-6">
                        <CustomField
                            title="Tên công ty *"
                            fieldName="companyName"
                            error={formik.errors.companyName}
                            touched={formik.touched.companyName}
                            icon={<LuFactory />}
                            placeholder="Nhập tên công ty của bạn"
                            value={formik.values.companyName}
                            onChange={formik.handleChange}
                        />
                        <CustomField
                            title="Mô tả *"
                            fieldName="description"
                            error={formik.errors.description}
                            touched={formik.touched.description}
                            icon={<TbFileDescription />}
                            placeholder="Nhập mô tả"
                            value={formik.values.description}
                            onChange={formik.handleChange}
                        />

                        <div className="flex flex-col gap-1 w-full">
                            <h5 className="font-bold text-primary-100">Ngày thành lập *</h5>
                            <DatePicker
                                views={['year', 'month', 'day']}
                                value={establishDateValue}
                                onChange={(date: any) => {
                                    formik.setFieldValue('establishDate', date);
                                }}
                            />
                            {formik.errors.establishDate && formik.touched.establishDate ? (
                                <div className="text-red-700 text-sm font-semibold">
                                    {typeof formik.errors.establishDate === 'string'
                                        ? formik.errors.establishDate
                                        : Object.values(formik.errors.establishDate).join(', ')}
                                </div>
                            ) : null}
                        </div>

                        <CustomField
                            title="Website"
                            fieldName="website"
                            error={formik.errors.website}
                            touched={formik.touched.website}
                            icon={<BiLink />}
                            placeholder="Nhập link website"
                            value={formik.values.website}
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
