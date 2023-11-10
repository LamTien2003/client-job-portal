import * as Yup from 'Yup';

import { useFormik } from 'formik';

import CustomField from './Field';
import SelectSkills from './SelectSkills';
import images from '@/assets/images';
import FieldImages from './FieldImages';
import { useCreateJobMutation, useGetCategoriesQuery } from '@/services/jobsApiSlice';
import { useEffect, useState } from 'react';
import SelectType from './SelectType';
import { useGetSkillsQuery } from '@/services/utilsApiSlice';
import { formatDateValue } from '@/utils/date';
import { toast } from 'react-toastify';
import { DatePicker } from '@mui/x-date-pickers';

interface Values {
    title: string;
    description: string;
    skillsRequire: string;
    salary: string;
    jobRequire: string;
    type: string;
    photosJob: FileList | null;
    deadline: any;
}
const initialValues: Values = {
    title: '',
    description: '',
    skillsRequire: '',
    salary: '',
    jobRequire: '',
    type: '',
    photosJob: null,
    deadline: '',
};
const validation = Yup.object().shape({
    title: Yup.string().max(100, 'Không được quá 100 kí tự!').required('Tiêu đề không được bỏ trống!'),
    description: Yup.string().max(500, 'Không được quá 500 kí tự!').required('Mô tả không được bỏ trống!'),
    jobRequire: Yup.string().max(100, 'Không được quá 500 kí tự!').required('Yêu cầu không được bỏ trống!'),
    skillsRequire: Yup.string().required('Kỹ năng không được bỏ trống!'),
    type: Yup.string().required('type không được bỏ trống!'),
    salary: Yup.number()
        .typeError('Lương phải là số')
        .min(0, 'Lương phải lớn hơn hoặc bằng 0')
        .required('Lương không được bỏ trống!'),
    deadline: Yup.date()
        .min(new Date(), 'Không được chọn ngày hôm nay và ở quá khứ!')
        .required('Thời hạn không được bỏ trống!'),
});
const FormPostJob = () => {
    const [createJob, { isLoading }] = useCreateJobMutation();
    const [isFormSubmitted, setIsFormSubmitted] = useState<boolean>(false);
    const [category, setCategory] = useState<any[]>([]);
    const [skills, setSkills] = useState<string[]>([]);

    const { data: categories, isLoading: loadingCate, isError: errorCate } = useGetCategoriesQuery();

    const { data: skillsData, isLoading: loadingSkills, isError: errorSkills } = useGetSkillsQuery();

    useEffect(() => {
        if (!loadingCate && !errorCate && categories?.data?.data) {
            setCategory(categories?.data?.data);
        }
        if (!loadingSkills && !errorSkills && skillsData?.data?.data) {
            setSkills(skillsData?.data?.data);
        }
    }, [loadingCate, errorCate, categories?.data?.data, loadingSkills, errorSkills, skillsData?.data?.data]);

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: validation,
        onSubmit: async (values) => {
            if (!values.deadline) {
                const today = new Date();
                today.setDate(today.getDate() + 20);
                const deadlineDate = formatDateValue(today);
                values.deadline = deadlineDate;
            } else {
                values.deadline = `${values.deadline.$y}-${values.deadline.$M + 1}-${values.deadline.$D}`;
            }
            const form = new FormData();
            Object.entries(values).forEach(([key, value]) => {
                if (key === 'photosJob') {
                    if (value) {
                        for (let i = 0; i < value.length; i++) {
                            form.append('photosJob', value[i]);
                        }
                    }
                } else {
                    form.append(key, value);
                }
            });

            try {
                setIsFormSubmitted(true);
                const res = await createJob(form).unwrap();
                if (res.status === 200) {
                    toast.success(res.data.msg);
                }
                setIsFormSubmitted(false);
                formik.resetForm();
            } catch (error: any) {
                if (error.status === 400) {
                    toast.error(error.data.msg);
                }
            }
        },
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <div className="grid grid-cols-2 w-full gap-6 mb:grid-cols-1  tb:grid-cols-1 ">
                <CustomField
                    title="Tiêu đề"
                    fieldName="title"
                    error={formik.errors.title}
                    touched={formik.touched.title}
                    icon={images.logo.user2}
                    value={formik.values.title}
                    placeholder="Job Title"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                <SelectSkills
                    title="Skills Require"
                    fieldName="skillsRequire"
                    icon={images.logo.category}
                    options={skills}
                    error={formik.errors.skillsRequire}
                    touched={formik.touched.skillsRequire}
                    value={formik.values.skillsRequire}
                    onChange={formik.handleChange}
                />
                <CustomField
                    title="Mô tả"
                    fieldName="description"
                    error={formik.errors.description}
                    touched={formik.touched.description}
                    icon={images.logo.jobMini}
                    placeholder="Nhập tên của bạn"
                    value={formik.values.description}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />

                <SelectType
                    title="Danh mục"
                    fieldName="type"
                    icon={images.logo.category}
                    options={category}
                    error={formik.errors.type}
                    touched={formik.touched.type}
                    value={formik.values.type}
                    onChange={formik.handleChange}
                />

                <CustomField
                    title="Job Require"
                    fieldName="jobRequire"
                    error={formik.errors.jobRequire}
                    touched={formik.touched.jobRequire}
                    icon={images.logo.jobMini}
                    placeholder="Job Require"
                    value={formik.values.jobRequire}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                <CustomField
                    title="Lương"
                    fieldName="salary"
                    error={formik.errors.salary}
                    touched={formik.touched.salary}
                    icon={images.logo.salary}
                    placeholder="Salary"
                    value={formik.values.salary}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />

                <div className="flex flex-col gap-2 w-full">
                    <div className="font-medium text-content-text ">
                        Thời hạn
                        <span className="ml-2 font-title text-primary-100">*</span>
                    </div>
                    <DatePicker
                        views={['year', 'month', 'day']}
                        value={formik.values.deadline}
                        onChange={(date: any) => {
                            formik.setFieldValue('deadline', date);
                        }}
                    />
                    {formik.errors.deadline && formik.touched.deadline ? (
                        <div className="text-red-700 text-sm font-semibold">
                            {typeof formik.errors.deadline === 'string'
                                ? formik.errors.deadline
                                : Object.values(formik.errors.deadline).join(', ')}
                        </div>
                    ) : null}
                </div>
            </div>

            <FieldImages formik={formik} isFormSubmitted={isFormSubmitted} />

            <div className="flex justify-center">
                <button
                    type="submit"
                    className="w-1/2 mt-10 text-sm font-semibold text-white rounded-md uppercase py-3 px-8 bg-primary-100 hover:bg-black duration-300"
                    disabled={isLoading || isFormSubmitted}
                >
                    {isLoading ? 'Đang đăng ...' : 'Đăng công việc'}
                </button>
            </div>
        </form>
    );
};

export default FormPostJob;
