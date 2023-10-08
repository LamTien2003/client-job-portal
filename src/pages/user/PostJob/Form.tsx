import * as Yup from 'yup';

import { Formik, Form, FormikHelpers } from 'formik';

import CustomField from './Field';
import SelectField from './SelectField';
import images from '@/assets/images';
import FieldImages from './FieldImages';

interface Values {
    title: string;
    description: string;
    skillsRequire: string;
    salary: string;
    jobRequire: string;
    jobType: string;
}
const initialValues: Values = {
    title: '',
    description: '',
    skillsRequire: '',
    salary: '',
    jobRequire: '',
    jobType: '',
};
const validation = Yup.object().shape({
    title: Yup.string().max(100, 'Không được quá 100 kí tự!').required('Tiêu đề không được bỏ trống!'),
    description: Yup.string().max(500, 'Không được quá 500 kí tự!').required('Mô tả không được bỏ trống!'),
    jobRequire: Yup.string().max(100, 'Không được quá 500 kí tự!').required('Job Require không được bỏ trống!'),
    skillsRequire: Yup.string().required('skill không được bỏ trống!'),
    jobType: Yup.string().required('jobType không được bỏ trống!'),
    salary: Yup.string().required('Lương không được bỏ trống!'),
});
const FormPostJob = () => {
    const jobType = ['Science', 'IT', 'Medical', 'Copywrite'];
    const skills = ['ReactJS', 'NodeJS', 'Java', 'Python', 'Golang'];
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
                    <div className="grid grid-cols-2 w-full gap-6">
                        <CustomField
                            title="Tiêu đề"
                            fieldName="title"
                            error={errors.title}
                            touched={touched.title}
                            icon={images.logo.user2}
                            placeholder="Job Title"
                        />
                        <SelectField
                            title="Skills Require"
                            fieldName="skillsRequire"
                            icon={images.logo.category}
                            options={skills}
                            error={errors.skillsRequire}
                            touched={touched.skillsRequire}
                        />
                        <CustomField
                            title="Mô tả"
                            fieldName="description"
                            error={errors.description}
                            touched={touched.description}
                            icon={images.logo.jobMini}
                            placeholder="Nhập tên của bạn"
                        />

                        <SelectField
                            title="Job Type"
                            fieldName="jobType"
                            icon={images.logo.category}
                            options={jobType}
                            error={errors.jobType}
                            touched={touched.jobType}
                        />

                        <CustomField
                            title="Job Require"
                            fieldName="jobRequire"
                            error={errors.jobRequire}
                            touched={touched.jobRequire}
                            icon={images.logo.jobMini}
                            placeholder="Job Require"
                        />
                        <CustomField
                            title="Lương"
                            fieldName="salary"
                            error={errors.salary}
                            touched={touched.salary}
                            icon={images.logo.salary}
                            placeholder="Salary"
                        />
                    </div>
                    <FieldImages />

                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="w-1/2 mt-10 text-sm font-semibold text-white rounded-md uppercase py-3 px-8 bg-primary-100 hover:bg-black duration-300"
                        >
                            Post Now
                        </button>
                    </div>
                </Form>
            )}
        </Formik>
    );
};

export default FormPostJob;
