import { url } from 'inspector';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { urlToHttpOptions } from 'url';
const JobListing = () => {
    useEffect(() => {
        toast.success('Test thông bao');
    }, []);

    return (
        <div>
            {/* banner */}
            <div className=' pt-24 pb-24 m-auto text-center relative' style={{background: `url('https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/bg/breadcrumb-bg.png')`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}} >
                <h1 className='text-content-title text-2xl font-bold'>Job Listing</h1>
                <span className='h-2 w-2 bg-primary-100 rounded-full m-auto mt-1 mb-3 block relative'>
                    <div className='w-16 h-px right-4 top-1/3 bg-primary-100 translate-y-2/4 absolute'></div>
                    <div className='w-16 h-px left-4 top-1/3 bg-primary-100 translate-y-2/4 absolute'></div>
                </span>
                <div className='font-medium flex justify-center'>
                    <Link to={'/'} className='text-content-title text-center font-medium transition ease-in-out delay-0 duration-350 hover:text-primary-100'>Home </Link>
                    <p className='ml-1.5 mr-1.5'>/</p>
                    <p className='text-primary-100'>Job Listing</p>
                </div>
            </div>

            {/* job listing */}
            <div className='max-w-7xl m-auto pt-32 flex justify-between xl:max-w-6xl lg:max-w-4xl lg:flex-col tablet:max-w-3xl mobile:max-w-2xl'>

                {/* job sidebar */}
                <div className=' w-4/12 pr-6 m-auto lg:pr-0 lg:w-3/4 mobile:w-11/12'>
                    <div className=' w-full bg-content-bg rounded-xl pl-5 pr-5 pt-10 pb-10'>
                        <div className=' bg-white border-content-border border rounded-md pt-10 pb-10 pl-6 pr-3 mb-5'>
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
                <div className=' w-2/3'>
                    <div className='flex justify-between'>
                        <p className='text-content-text font-medium pt-2 pb-2'>Showing results 10 in 200 jobs list</p>
                        <div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default JobListing;
