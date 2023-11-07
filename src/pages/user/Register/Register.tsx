import { useLayoutEffect, useState } from 'react';
import Title from './components/Title/Title';
import JobseekerForm from './components/JobseekerForm/JobseekerForm';
import CompanyForm from './components/CompanyForm/CompanyForm';

const Register = () => {
    const [tab, setTab] = useState<'jobseeker' | 'company'>('jobseeker');

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    }, [])

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
