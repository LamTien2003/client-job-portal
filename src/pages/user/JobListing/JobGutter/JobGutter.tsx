import { Link } from "react-router-dom";

function JobGutter({banner='', logo='', position='', companyName='', experience='', location='', salaryHour='', salaryMonth='', deadline='', fullTime=true, partTime=true, remote=false}) {
    return (
        <div className=' w-6/12 pl-3 pr-3 mb-6 tb:w-full '>
            <div className=' border-content-border border rounded p-4 relative'>
                <img className=' rounded tb:w-full' src={banner} />
                <div className=' mt-5 mb-5 flex items-center'>
                    <img className=' w-10 rounded-full mr-3' src={logo} />
                    <div className='flex flex-col'>
                        <h3 className=' text-content-title font-semibold text-lg xl:text-base mb:text-cb'>{position}</h3>
                        <p className=' text-content-text text-sm font-medium flex items-center xl:flex-col xl:items-start tb:flex-row mb:flex-col mb:items-start mb:text-xs '>
                            {companyName}
                            <div className=' h-3.5 w-px bg-content-title mr-2.5 ml-2.5 xl:hidden'></div> 
                            <span className=' text-content-title font-semibold flex ml-5 mb:text-xs mb:ml-0 '>Deadline <p className=' font-medium'>: {deadline}</p> </span>
                        </p>
                    </div>
                </div>
                <div className=' list-none border-t border-content-border pt-5'>
                    <div className=' flex items-center mb-2 before:w-2 before:h-2 before:rounded-full before:bg-slate-300 before:mr-2'>
                        <p className=' text-content-text font-medium text-cb lg:text-sm mb:text-xs '>Salary: <span className=' text-content-title font-semibold ml-1'>{salaryHour || salaryMonth} /</span> Per {salaryHour ? 'Hour' : 'Month'}</p>
                    </div>
                    <div className=' flex items-center mb-2 before:w-2 before:h-2 before:rounded-full before:bg-slate-300 before:mr-2'>
                        <p className=' text-content-text font-medium text-cb lg:text-sm mb:text-xs '>Experience: <span className=' text-content-title font-semibold ml-1'>{experience}</span></p>
                    </div>
                    <div className=' flex items-center mb-2 before:w-2 before:h-2 before:rounded-full before:bg-slate-300 before:mr-2'>
                        <p className=' text-content-text font-medium text-cb lg:text-sm mb:text-xs '>Location: <span className=' text-content-title font-semibold ml-1'>{location}</span></p>
                    </div>
                </div>
                <div className=' mt-5 mb-3 flex relative'>
                    {fullTime && <div className=' text-content-title text-sm font-semibold bg-content-bg-full-time rounded-3xl pt-1.5 pb-1.5 pl-6 pr-6 lg:text-xs '>Full Time</div>}
                    {partTime && <div className=' text-content-title text-sm font-semibold bg-content-bg-part-time rounded-3xl pt-1.5 pb-1.5 pl-6 pr-6 mr-5 ml-5 lg:text-xs '>Part Time</div>}
                    {remote && <div className=' text-content-title text-sm font-semibold bg-content-bg-remote rounded-3xl pt-1.5 pb-1.5 pl-6 pr-6 lg:text-xs '>Remote</div>}

                    <div className=' group bottom-2 right-0 absolute '>
                        <Link to='/job-detail' className=' text-primary-100 flex items-center relative group-hover:cursor-pointer '>
                            <img className='-left-2 top-1.5 absolute duration-300 group-hover:-left-1 ' src='https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/icon/apply-arrow.svg' />
                            <img src='https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/icon/apply-ellipse.svg' />
                            <span className=' text-sm font-medium ml-1 '>Apply Now</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default JobGutter;