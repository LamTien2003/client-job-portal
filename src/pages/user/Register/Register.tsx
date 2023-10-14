import { useState } from 'react';
import Candidate from './components/Candidate/Candidate';
import Company from './components/Company/Company';
const Register = () => {

    const [tab, setTab] = useState<string>('candidate')

    return (
        <div className=" m-auto my-10">
            <div className="container mr-auto ml-auto">
                <div className="border-black text-center ">
                    <h3 className="sn-h3 text-center text-primary-100 m-120 text-3xl font-bold">Register Account</h3>
                    <div className=' flex items-center justify-center'>
                        <div className=' w-32 h-0.5 bg-content-underline'></div>
                        <div className=' w-2 h-2 bg-content-underline rounded-full mr-2 ml-2'></div>
                        <div className=' w-32 h-0.5 bg-content-underline'></div>
                    </div>
                </div>
                <div className="button text-center mt-8 mb-8">
                    <button onClick={() => setTab('candidate')} className="bg-white hover:bg-teal-400 hover:text-white text-black font-bold py-2 px-4 mx-3 w-44 focus:outline-none focus:shadow-outline rounded-full border-teal-100 border" type="button">
                        Candidate
                    </button>
                    <button onClick={() => setTab('company')} className="bg-white hover:bg-teal-400 hover:text-white text-black font-bold py-2 px-4 mx-3 w-44 focus:outline-none focus:shadow-outline rounded-full border-teal-100 border" type="button">
                        Company
                    </button>
                </div>
                <div className="w-6/12 h-2/3 m-auto">

                    {tab === 'candidate' && <Candidate/>}
                    {tab === 'company' && <Company/>}

                    <p className="text-center text-gray-500 text-xs">
                        &copy;2020 Acme Corp. All rights reserved.
                    </p>
                </div>
            </div>
        </div>
    )
};

export default Register;
