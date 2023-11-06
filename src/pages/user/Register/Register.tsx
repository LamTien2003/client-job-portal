import { useLayoutEffect, useState } from 'react';
import Title from './components/Title/Title';
import JobseekerForm from './components/JobseekerForm/JobseekerForm';
import CompanyForm from './components/CompanyForm/CompanyForm';

export const locationArray = ['Hồ Chí Minh', 'Hà Nội', 'Đà Nẵng', 'Khác'];
export const PHONEREGEX =
    /^(0|84)(2(0[3-9]|1[0-6|8|9]|2[0-2|5-9]|3[2-9]|4[0-9]|5[1|2|4-9]|6[0-3|9]|7[0-7]|8[0-9]|9[0-4|6|7|9])|3[2-9]|5[5|6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])([0-9]{7})$/;
export const EMAILREGEX = /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/gm;
export const PWDREGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,30}$/;

const Register = () => {
    const [tab, setTab] = useState<'jobseeker' | 'company'>('jobseeker');

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    })

    return (
        <div className=" max-w-[960px] h-auto bg-primary-100 rounded my-10 mx-auto p-9">
            <Title />
            <div className="flex items-center justify-center">
                <button
                    onClick={() => setTab('jobseeker')}
                    className={
                        tab === 'jobseeker'
                            ? ' w-32 text-primary-100 font-semibold bg-white rounded-xl p-4 mx-2'
                            : 'text-white rounded-xl p-4 mx-2'
                    }
                >
                    Job Seeker
                </button>
                <button
                    onClick={() => setTab('company')}
                    className={
                        tab === 'company'
                            ? 'w-32 text-primary-100 font-semibold bg-white rounded-xl p-4 mx-2'
                            : 'text-white rounded-xl p-4 mx-2'
                    }
                >
                    Company
                </button>
            </div>

            {tab === 'jobseeker' && <JobseekerForm />}
            {tab === 'company' && <CompanyForm />}
        </div>
    );
};

export default Register;
