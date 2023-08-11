// import { url } from 'inspector';
import { useState } from 'react';
// import { toast } from 'react-toastify';
// import { urlToHttpOptions } from 'url';

import ListGutter from '@/components/Icons/ListGutter';
import ListColumn from '@/components/Icons/ListColumnt';
import Banner from '@/components/Banner/Banner';
import Job from './Job/Job';
import JobGutter from './JobGutter/JobGutter';


const JobListing = () => {
    const [listStyle, setListStyle] = useState('column')

    // useEffect(() => {
    //     toast.success('Test thông bao');
    // }, []);

    return (
        <div>
            {/* banner */}
            <Banner page='Job Listing' />

            {/* job listing */}
            <div className=' max-w-7xl ml-auto mr-auto pt-28 flex justify-between xl:ml-7 xl:mr-7 xl:max-w-7xl lg:max-w-4xl lg:flex-col lg:ml-auto lg:mr-auto tb:max-w-3xl mb:max-w-2xl'>

                {/* job sidebar */}
                <div className=' w-4/12 pr-3 mr-auto ml-auto mb-8 xl:w-5/12 lg:pr-0 lg:w-10/12 mb:w-11/12'>
                    <div className=' w-full bg-content-bg rounded-xl pl-5 pr-5 pt-10 pb-10'>
                        <div className=' bg-white border-content-border border rounded-md pt-10 pb-10 pl-6 pr-3 mb-5'>
                            <h3 className=' text-content-title font-semibold text-xl mb-2 lg:text-lg'>Job Category</h3>
                            <div>
                            <div className=' mb-2 flex relative'>
                                <input type='checkbox' className=' mr-1.5' />
                                <span className=' text-content-text font-medium lg:text-sm cursor-pointer'>Health Care</span>
                                <p className=' text-content-text font-medium right-2 absolute lg:text-sm cursor-pointer'>(80)</p>
                            </div>
                            <div className=' mb-2 flex relative'>
                                <input type='checkbox' className=' mr-1.5' />
                                <span className=' text-content-text font-medium lg:text-sm cursor-pointer'>Accounts & Finance</span>
                                <p className=' text-content-text font-medium right-2 absolute lg:text-sm cursor-pointer'>(80)</p>
                            </div>
                            <div className=' mb-2 flex relative'>
                                <input type='checkbox' className=' mr-1.5' />
                                <span className=' text-content-text font-medium lg:text-sm cursor-pointer'>Transportation</span>
                                <p className=' text-content-text font-medium right-2 absolute lg:text-sm cursor-pointer'>(80)</p>
                            </div>
                            <div className=' mb-2 flex relative'>
                                <input type='checkbox' className=' mr-1.5' />
                                <span className=' text-content-text font-medium lg:text-sm cursor-pointer'>Medical & Finance</span>
                                <p className=' text-content-text font-medium right-2 absolute lg:text-sm cursor-pointer'>(80)</p>
                            </div>
                            <div className=' mb-2 flex relative'>
                                <input type='checkbox' className=' mr-1.5' />
                                <span className=' text-content-text font-medium lg:text-sm cursor-pointer'>Development</span>
                                <p className=' text-content-text font-medium right-2 absolute lg:text-sm cursor-pointer'>(80)</p>
                            </div>
                            <div className=' mb-2 flex relative'>
                                <input type='checkbox' className=' mr-1.5' />
                                <span className=' text-content-text font-medium lg:text-sm cursor-pointer'>Engineering</span>
                                <p className=' text-content-text font-medium right-2 absolute lg:text-sm cursor-pointer'>(80)</p>
                            </div>
                            <div className=' mb-2 flex relative'>
                                <input type='checkbox' className=' mr-1.5' />
                                <span className=' text-content-text font-medium lg:text-sm cursor-pointer'>Receptionist</span>
                                <p className=' text-content-text font-medium right-2 absolute lg:text-sm cursor-pointer'>(80)</p>
                            </div>
                            <div className=' mb-2 flex relative'>
                                <input type='checkbox' className=' mr-1.5' />
                                <span className=' text-content-text font-medium lg:text-sm cursor-pointer'>Non-Profile Org.</span>
                                <p className=' text-content-text font-medium right-2 absolute lg:text-sm cursor-pointer'>(80)</p>
                            </div>
                            </div>
                        </div>
                        <div className=' bg-white border-content-border border rounded-md pt-10 pb-10 pl-6 pr-3'>
                            <h3 className=' text-content-title font-semibold text-xl mb-2 lg:text-lg'>Job Category</h3>
                            <div>
                            <div className=' mb-2 flex relative'>
                                <input type='checkbox' className=' mr-1.5' />
                                <span className=' text-content-text font-medium lg:text-sm'>Health Care</span>
                                <p className=' text-content-text font-medium right-2 absolute lg:text-sm'>(80)</p>
                            </div>
                            <div className=' mb-2 flex relative'>
                                <input type='checkbox' className=' mr-1.5' />
                                <span className=' text-content-text font-medium lg:text-sm'>Accounts & Finance</span>
                                <p className=' text-content-text font-medium right-2 absolute lg:text-sm'>(80)</p>
                            </div>
                            <div className=' mb-2 flex relative'>
                                <input type='checkbox' className=' mr-1.5' />
                                <span className=' text-content-text font-medium lg:text-sm'>Transportation</span>
                                <p className=' text-content-text font-medium right-2 absolute lg:text-sm'>(80)</p>
                            </div>
                            <div className=' mb-2 flex relative'>
                                <input type='checkbox' className=' mr-1.5' />
                                <span className=' text-content-text font-medium lg:text-sm'>Medical & Finance</span>
                                <p className=' text-content-text font-medium right-2 absolute lg:text-sm'>(80)</p>
                            </div>
                            <div className=' mb-2 flex relative'>
                                <input type='checkbox' className=' mr-1.5' />
                                <span className=' text-content-text font-medium lg:text-sm'>Development</span>
                                <p className=' text-content-text font-medium right-2 absolute lg:text-sm'>(80)</p>
                            </div>
                            <div className=' mb-2 flex relative'>
                                <input type='checkbox' className=' mr-1.5' />
                                <span className=' text-content-text font-medium lg:text-sm'>Engineering</span>
                                <p className=' text-content-text font-medium right-2 absolute lg:text-sm'>(80)</p>
                            </div>
                            <div className=' mb-2 flex relative'>
                                <input type='checkbox' className=' mr-1.5' />
                                <span className=' text-content-text font-medium lg:text-sm'>Receptionist</span>
                                <p className=' text-content-text font-medium right-2 absolute lg:text-sm'>(80)</p>
                            </div>
                            <div className=' mb-2 flex relative'>
                                <input type='checkbox' className=' mr-1.5' />
                                <span className=' text-content-text font-medium lg:text-sm'>Non-Profile Org.</span>
                                <p className=' text-content-text font-medium right-2 absolute lg:text-sm'>(80)</p>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* list */}
                <div className=' w-2/3 ml-3 mr-3 flex flex-col xl:ml-auto xl:mr-auto lg:pr-0 lg:w-10/12 tb:w-11/12'>
                    <div className=' mb-6 pl-3 pr-3 flex justify-between lg:flex-col'>
                        <p className='text-content-text font-medium pt-2 pb-2'>Showing results 10 in 200 jobs list</p>
                        <div>
                            <button className=' mr-5 ml-7' onClick={() => setListStyle('gutter')}>
                                <ListGutter color={listStyle} />
                            </button>
                            <button onClick={() => setListStyle('column')}>
                                <ListColumn color={listStyle} />
                            </button>
                        </div>
                    </div>
                    <div>
                        {/* item */}
                        {listStyle === 'column' && (
                            <div>
                                <Job position='Senior Receptionist' location='Medico.co Ltd' salary='$20K-$50K' deadline='05 April, 2023' logo='https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/bg/company-logo/company-01.png' />
                                <Job position='Senior PHP Developer' location='Marko Land Conpany' salary='$50K-$70K' deadline='05 April, 2023' remote={false} logo='https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/bg/company-logo/company-02.png' />
                            </div>
                            
                        )}
                        {listStyle === 'gutter' && (
                            <div className=' flex flex-wrap tb:flex-col '>
                                <JobGutter position='Senior Receptionist' companyName='Bistro Tech Ltd' experience='3-3.5 Years' location='Dhaka, Bangladesh' salaryHour='$60-$90' deadline='5 April, 2023' partTime={false} banner='https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/bg/job-list-1.png' logo='https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/bg/company-logo/company-01.png' />
                                <JobGutter position='Assistant Manager' companyName='Hangman Gold' experience='2-2.5 Years'  location='Sylhet, Bangladesh' salaryMonth='$20K-$50K' deadline='3 April, 2023' partTime={false} banner='https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/bg/job-list-2.png' logo='https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/bg/company-logo/company-02.png' />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
};

export default JobListing;
