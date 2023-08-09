// import { url } from 'inspector';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
// import { urlToHttpOptions } from 'url';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
// import { IconLookup, IconDefinition, findIconDefinition } from '@fortawesome/fontawesome-svg-core';

// const bookmarkLookup: IconLookup = { 
//     prefix: 'fas', iconName: 'bookmark'
// }

// const faBookmark: IconDefinition = findIconDefinition(bookmarkLookup)

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
            <div className='max-w-7xl m-auto pt-28 flex justify-between xl:ml-7 xl:mr-7 xl:max-w-5xl lg:max-w-4xl lg:flex-col tablet:max-w-3xl mobile:max-w-2xl'>

                {/* job sidebar */}
                <div className=' w-4/12 pr-6 m-auto mb-8 xl:w-5/12 lg:pr-0 lg:w-10/12 mobile:w-11/12'>
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
                <div className=' w-2/3 flex flex-col lg:m-auto xl:w-8/12 lg:pr-0 lg:w-10/12 mobile:w-full'>
                    <div className=' mb-6 flex justify-between lg:flex-col'>
                        <p className='text-content-text font-medium pt-2 pb-2'>Showing results 10 in 200 jobs list</p>
                        <div>
                            abc
                        </div>
                    </div>
                    <div className=''>
                        {/* item */}
                        <div className=' mb-7 flex flex-col'>
                            <div className='bg-white border border-content-border rounded pt-7 pb-7 pr-6 pl-6 duration-300 hover:border-primary-blur '>
                                <div className=' mb-8 relative '>
                                    <div className=' flex items-center tablet:flex-col tablet:items-start '>
                                        <div className=' flex tablet:mb-8'>
                                            <img className=' w-13 rounded-full mr-2.5 lg:w-12' src='https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/bg/company-logo/company-01.png' />
                                            <div className=' flex flex-col'>
                                                <h3 className=' text-content-title text-lg font-semibold cursor-pointer duration-300 hover:text-primary-100 lg:text-base '>Senior Receptionist</h3>
                                                <p className=' text-content-text text-sm cursor-pointer duration-300 hover:text-primary-100 lg:text-sm'>Medico.co Ltd</p>
                                            </div>
                                        </div>
                                        <div className=' w-px h-11 border-r border-primary-blur mr-5 ml-5 tablet:hidden '></div>
                                        <div className=' flex flex-col'>
                                            <div className=' flex items-center before:w-2 before:h-2 before:bg-primary-100 before:rounded-full before:mr-1.5 -mt-3'>
                                                <p className=' text-content-text text-cb font-medium lg:text-sm '>Salary: <span className=' text-content-title font-medium'>$20K-$50K / </span> <span className=' text-sm'>Per Month</span></p>
                                            </div>
                                            <div className=' flex items-center before:w-2 before:h-2 before:bg-primary-100 before:rounded-full before:mr-1.5 mt-1'>
                                                <p className=' text-content-text text-cb font-medium lg:text-sm'>Deadline: <span className=' text-content-title font-medium'>05 April, 2023</span></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className=' w-7 h-7 bg-content-bgsave rounded-full top-0 right-0 absolute duration-300 cursor-pointer hover:bg-primary-100'>
                                        <FontAwesomeIcon className=' text-primary-100 text-sm top-1.5 right-2 absolute duration-300 hover:text-white' icon={faBookmark} />
                                    </div>
                                </div>
                                <div className=' flex items-center relative mobile:flex-col mobile:items-start'>
                                    <div className=' flex'>
                                        <div className=' text-content-title text-sm font-semibold bg-content-bg-full-time rounded-3xl pt-1.5 pb-1.5 pl-6 pr-6 lg:text-xs mobile:pb-1 mobile:pt-1 mobile:pl-4 mobile:pr-3 mobile:font-medium'>Full Time</div>
                                        <div className=' text-content-title text-sm font-semibold bg-content-bg-part-time rounded-3xl pt-1.5 pb-1.5 pl-6 pr-6 mr-5 ml-5 lg:text-xs mobile:pb-1 mobile:pt-1 mobile:pl-3 mobile:pr-4 mobile:mr-2 mobile:ml-2 mobile:font-medium'>Part Time</div>
                                        <div className=' text-content-title text-sm font-semibold bg-content-bg-remote rounded-3xl pt-1.5 pb-1.5 pl-6 pr-6 lg:text-xs mobile:pb-1 mobile:pt-1 mobile:pl-4 mobile:pr-3 mobile:font-medium'>Remote</div>
                                    </div>
                                    <div className=' right-0 absolute mobile:static mobile:mt-3 mobile:ml-2'>
                                        <div className=' text-primary-100 flex items-center relative cursor-pointer'>
                                            <img className='-left-2 top-1.5 absolute duration-300 hover:-left-1 mobile:top-1' src='https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/icon/apply-arrow.svg' />
                                            <img src='https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/icon/apply-ellipse.svg' />
                                            
                                            <span className=' text-sm font-medium ml-1 mobile:text-xs'>Apply Now</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=' mb-7 flex flex-col'>
                            <div className='bg-white border border-content-border rounded pt-7 pb-7 pr-6 pl-6 duration-300 hover:border-primary-blur '>
                                <div className=' mb-8 relative '>
                                    <div className=' flex items-center tablet:flex-col tablet:items-start '>
                                        <div className=' flex tablet:mb-8'>
                                            <img className=' w-13 rounded-full mr-2.5 lg:w-12' src='https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/bg/company-logo/company-01.png' />
                                            <div className=' flex flex-col'>
                                                <h3 className=' text-content-title text-lg font-semibold cursor-pointer duration-300 hover:text-primary-100 lg:text-base '>Senior Receptionist</h3>
                                                <p className=' text-content-text text-sm cursor-pointer duration-300 hover:text-primary-100 lg:text-sm'>Medico.co Ltd</p>
                                            </div>
                                        </div>
                                        <div className=' w-px h-11 border-r border-primary-blur mr-5 ml-5 tablet:hidden '></div>
                                        <div className=' flex flex-col'>
                                            <div className=' flex items-center before:w-2 before:h-2 before:bg-primary-100 before:rounded-full before:mr-1.5 -mt-3'>
                                                <p className=' text-content-text text-cb font-medium lg:text-sm '>Salary: <span className=' text-content-title font-medium'>$20K-$50K / </span> <span className=' text-sm'>Per Month</span></p>
                                            </div>
                                            <div className=' flex items-center before:w-2 before:h-2 before:bg-primary-100 before:rounded-full before:mr-1.5 mt-1'>
                                                <p className=' text-content-text text-cb font-medium lg:text-sm'>Deadline: <span className=' text-content-title font-medium'>05 April, 2023</span></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className=' w-7 h-7 bg-content-bgsave rounded-full top-0 right-0 absolute duration-300 hover:bg-primary-100'>
                                        <FontAwesomeIcon className=' text-primary-100 text-sm top-1.5 right-2 absolute duration-300 hover:text-white cursor-pointer' icon={faBookmark} />
                                    </div>
                                </div>
                                <div className=' flex items-center relative mobile:flex-col mobile:items-start'>
                                    <div className=' flex'>
                                        <div className=' text-content-title text-sm font-semibold bg-content-bg-full-time rounded-3xl pt-1.5 pb-1.5 pl-6 pr-6 lg:text-xs mobile:pb-1 mobile:pt-1 mobile:pl-4 mobile:pr-3 mobile:font-medium'>Full Time</div>
                                        <div className=' text-content-title text-sm font-semibold bg-content-bg-part-time rounded-3xl pt-1.5 pb-1.5 pl-6 pr-6 mr-5 ml-5 lg:text-xs mobile:pb-1 mobile:pt-1 mobile:pl-3 mobile:pr-4 mobile:mr-2 mobile:ml-2 mobile:font-medium'>Part Time</div>
                                        <div className=' text-content-title text-sm font-semibold bg-content-bg-remote rounded-3xl pt-1.5 pb-1.5 pl-6 pr-6 lg:text-xs mobile:pb-1 mobile:pt-1 mobile:pl-4 mobile:pr-3 mobile:font-medium'>Remote</div>
                                    </div>
                                    <div className=' right-0 absolute mobile:static mobile:mt-3 mobile:ml-2'>
                                        <div className=' text-primary-100 flex items-center relative cursor-pointer'>
                                            <img className='-left-2 top-1.5 absolute duration-300 hover:-left-1 mobile:top-1' src='https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/icon/apply-arrow.svg' />
                                            <img src='https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/icon/apply-ellipse.svg' />
                                            
                                            <span className=' text-sm font-medium ml-1 mobile:text-xs'>Apply Now</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=' mb-7 flex flex-col'>
                            <div className='bg-white border border-content-border rounded pt-7 pb-7 pr-6 pl-6 duration-300 hover:border-primary-blur '>
                                <div className=' mb-8 relative '>
                                    <div className=' flex items-center tablet:flex-col tablet:items-start '>
                                        <div className=' flex tablet:mb-8'>
                                            <img className=' w-13 rounded-full mr-2.5 lg:w-12' src='https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/bg/company-logo/company-01.png' />
                                            <div className=' flex flex-col'>
                                                <h3 className=' text-content-title text-lg font-semibold cursor-pointer duration-300 hover:text-primary-100 lg:text-base '>Senior Receptionist</h3>
                                                <p className=' text-content-text text-sm cursor-pointer duration-300 hover:text-primary-100 lg:text-sm'>Medico.co Ltd</p>
                                            </div>
                                        </div>
                                        <div className=' w-px h-11 border-r border-primary-blur mr-5 ml-5 tablet:hidden '></div>
                                        <div className=' flex flex-col'>
                                            <div className=' flex items-center before:w-2 before:h-2 before:bg-primary-100 before:rounded-full before:mr-1.5 -mt-3'>
                                                <p className=' text-content-text text-cb font-medium lg:text-sm '>Salary: <span className=' text-content-title font-medium'>$20K-$50K / </span> <span className=' text-sm'>Per Month</span></p>
                                            </div>
                                            <div className=' flex items-center before:w-2 before:h-2 before:bg-primary-100 before:rounded-full before:mr-1.5 mt-1'>
                                                <p className=' text-content-text text-cb font-medium lg:text-sm'>Deadline: <span className=' text-content-title font-medium'>05 April, 2023</span></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className=' w-7 h-7 bg-content-bgsave rounded-full top-0 right-0 absolute duration-300 hover:bg-primary-100'>
                                        <FontAwesomeIcon className=' text-primary-100 text-sm top-1.5 right-2 absolute duration-300 hover:text-white cursor-pointer' icon={faBookmark} />
                                    </div>
                                </div>
                                <div className=' flex items-center relative mobile:flex-col mobile:items-start'>
                                    <div className=' flex'>
                                        <div className=' text-content-title text-sm font-semibold bg-content-bg-full-time rounded-3xl pt-1.5 pb-1.5 pl-6 pr-6 lg:text-xs mobile:pb-1 mobile:pt-1 mobile:pl-4 mobile:pr-3 mobile:font-medium'>Full Time</div>
                                        <div className=' text-content-title text-sm font-semibold bg-content-bg-part-time rounded-3xl pt-1.5 pb-1.5 pl-6 pr-6 mr-5 ml-5 lg:text-xs mobile:pb-1 mobile:pt-1 mobile:pl-3 mobile:pr-4 mobile:mr-2 mobile:ml-2 mobile:font-medium'>Part Time</div>
                                        <div className=' text-content-title text-sm font-semibold bg-content-bg-remote rounded-3xl pt-1.5 pb-1.5 pl-6 pr-6 lg:text-xs mobile:pb-1 mobile:pt-1 mobile:pl-4 mobile:pr-3 mobile:font-medium'>Remote</div>
                                    </div>
                                    <div className=' right-0 absolute mobile:static mobile:mt-3 mobile:ml-2'>
                                        <div className=' text-primary-100 flex items-center relative cursor-pointer'>
                                            <img className='-left-2 top-1.5 absolute duration-300 hover:-left-1 mobile:top-1' src='https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/icon/apply-arrow.svg' />
                                            <img src='https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/icon/apply-ellipse.svg' />
                                            
                                            <span className=' text-sm font-medium ml-1 mobile:text-xs'>Apply Now</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=' mb-7 flex flex-col'>
                            <div className='bg-white border border-content-border rounded pt-7 pb-7 pr-6 pl-6 duration-300 hover:border-primary-blur '>
                                <div className=' mb-8 relative '>
                                    <div className=' flex items-center tablet:flex-col tablet:items-start '>
                                        <div className=' flex tablet:mb-8'>
                                            <img className=' w-13 rounded-full mr-2.5 lg:w-12' src='https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/bg/company-logo/company-01.png' />
                                            <div className=' flex flex-col'>
                                                <h3 className=' text-content-title text-lg font-semibold cursor-pointer duration-300 hover:text-primary-100 lg:text-base '>Senior Receptionist</h3>
                                                <p className=' text-content-text text-sm cursor-pointer duration-300 hover:text-primary-100 lg:text-sm'>Medico.co Ltd</p>
                                            </div>
                                        </div>
                                        <div className=' w-px h-11 border-r border-primary-blur mr-5 ml-5 tablet:hidden '></div>
                                        <div className=' flex flex-col'>
                                            <div className=' flex items-center before:w-2 before:h-2 before:bg-primary-100 before:rounded-full before:mr-1.5 -mt-3'>
                                                <p className=' text-content-text text-cb font-medium lg:text-sm '>Salary: <span className=' text-content-title font-medium'>$20K-$50K / </span> <span className=' text-sm'>Per Month</span></p>
                                            </div>
                                            <div className=' flex items-center before:w-2 before:h-2 before:bg-primary-100 before:rounded-full before:mr-1.5 mt-1'>
                                                <p className=' text-content-text text-cb font-medium lg:text-sm'>Deadline: <span className=' text-content-title font-medium'>05 April, 2023</span></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className=' w-7 h-7 bg-content-bgsave rounded-full top-0 right-0 absolute duration-300 hover:bg-primary-100'>
                                        <FontAwesomeIcon className=' text-primary-100 text-sm top-1.5 right-2 absolute duration-300 hover:text-white cursor-pointer' icon={faBookmark} />
                                    </div>
                                </div>
                                <div className=' flex items-center relative mobile:flex-col mobile:items-start'>
                                    <div className=' flex'>
                                        <div className=' text-content-title text-sm font-semibold bg-content-bg-full-time rounded-3xl pt-1.5 pb-1.5 pl-6 pr-6 lg:text-xs mobile:pb-1 mobile:pt-1 mobile:pl-4 mobile:pr-3 mobile:font-medium'>Full Time</div>
                                        <div className=' text-content-title text-sm font-semibold bg-content-bg-part-time rounded-3xl pt-1.5 pb-1.5 pl-6 pr-6 mr-5 ml-5 lg:text-xs mobile:pb-1 mobile:pt-1 mobile:pl-3 mobile:pr-4 mobile:mr-2 mobile:ml-2 mobile:font-medium'>Part Time</div>
                                        <div className=' text-content-title text-sm font-semibold bg-content-bg-remote rounded-3xl pt-1.5 pb-1.5 pl-6 pr-6 lg:text-xs mobile:pb-1 mobile:pt-1 mobile:pl-4 mobile:pr-3 mobile:font-medium'>Remote</div>
                                    </div>
                                    <div className=' right-0 absolute mobile:static mobile:mt-3 mobile:ml-2'>
                                        <div className=' text-primary-100 flex items-center relative cursor-pointer'>
                                            <img className='-left-2 top-1.5 absolute duration-300 hover:-left-1 mobile:top-1' src='https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/icon/apply-arrow.svg' />
                                            <img src='https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/icon/apply-ellipse.svg' />
                                            
                                            <span className=' text-sm font-medium ml-1 mobile:text-xs'>Apply Now</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default JobListing;
