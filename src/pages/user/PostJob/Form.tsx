import * as Yup from 'yup';

import { useFormik } from 'formik';

import CustomField from './Field';
import SelectField from './SelectField';
import images from '@/assets/images';
import FieldImages from './FieldImages';
import { useCreateJobMutation } from '@/services/jobsApiSlice';
import { useState } from 'react';

interface Values {
    title: string;
    description: string;
    skillsRequire: string;
    salary: string;
    jobRequire: string;
    type: string;
    photosJob: FileList | null;
}
const initialValues: Values = {
    title: '',
    description: '',
    skillsRequire: '',
    salary: '',
    jobRequire: '',
    type: '',
    photosJob: null,
};
const validation = Yup.object().shape({
    title: Yup.string().max(100, 'Không được quá 100 kí tự!').required('Tiêu đề không được bỏ trống!'),
    description: Yup.string().max(500, 'Không được quá 500 kí tự!').required('Mô tả không được bỏ trống!'),
    jobRequire: Yup.string().max(100, 'Không được quá 500 kí tự!').required('Job Require không được bỏ trống!'),
    skillsRequire: Yup.string().required('skill không được bỏ trống!'),
    type: Yup.string().required('type không được bỏ trống!'),
    salary: Yup.string().required('Lương không được bỏ trống!'),
});
const FormPostJob = () => {
    const [createJob, { isLoading }] = useCreateJobMutation();
    const [isFormSubmitted, setIsFormSubmitted] = useState<boolean>(false);
    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: validation,
        onSubmit: async (values) => {
            const form = new FormData();
            Object.entries(values).forEach(([key, value]) => {
                if (key === 'photosJob') {
                    for (let i = 0; i < value.length; i++) {
                        form.append('photosJob', value[i]);
                    }
                } else {
                    form.append(key, value);
                }
            });

            try {
                await createJob(form);
                setIsFormSubmitted(true);
                alert('Đăng job thành công');
                formik.resetForm();
            } catch (error) {
                console.error('Lỗi khi gửi form:', error);
            }
        },
    });

    const type = ['Science', 'IT', 'Medical', 'Copywrite'];
    const skills = ['ReactJS', 'NodeJS', 'Java', 'Python', 'Golang'];
    return (
        <form onSubmit={formik.handleSubmit}>
            <div className="grid grid-cols-2 w-full gap-6 tb:grid-cols-1">
                <CustomField
                    title="Tiêu đề"
                    fieldName="title"
                    error={formik.errors.title}
                    touched={formik.touched.title}
                    icon={images.logo.user2}
                    value={formik.values.title}
                    onChange={formik.handleChange}
                    placeholder="Job Title"
                />
                <SelectField
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
                />

                <SelectField
                    title="Job Type"
                    fieldName="type"
                    icon={images.logo.category}
                    options={type}
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
                />
            </div>
            <FieldImages formik={formik} isFormSubmitted={isFormSubmitted} />

            <div className="flex justify-center">
                <button
                    type="submit"
                    className="w-1/2 mt-10 text-sm font-semibold text-white rounded-md uppercase py-3 px-8 bg-primary-100 hover:bg-black duration-300"
                    disabled={isLoading || isFormSubmitted}
                >
                    {isLoading ? 'Posting...' : 'Post Now'}
                </button>
            </div>
        </form>
    );
};

export default FormPostJob;
