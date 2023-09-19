type JobSumary = {
    startDate: string
    endDate: string
    vacancy: number
    experience: string
    education: string
    gender: number
}

let sex:string

const JobSumary: React.FC<JobSumary> = ({startDate, endDate, vacancy, experience, education, gender}) => {

    if(gender === null || gender === undefined || gender === 3) sex = 'Both'
    if(gender === 1) sex = 'Man'
    if(gender === 2) sex = 'Woman'

    return (
        <div className=" w-full bg-content-bg pt-17.5 pb-17.5 pl-10 pr-10 mb-12 ">
            <h3 className=" text-content-title text-lg font-semibold mr-2 mb-6">Job Summary:</h3>
            <div className=" relative before:w-2 before:h-2 before:rounded-full before:bg-primary-blur before:mr-1.5 before:pr-2 before:top-2 before:absolute">
                
                <p className=" text-content-text text-base font-medium mb-2.5 ml-4 "><span className=" text-content-title font-medium mr-2">Job Posted:</span>{startDate || 'Coming soon'}</p>
            </div>
            <div className=" relative before:w-2 before:h-2 before:rounded-full before:bg-primary-blur before:mr-1.5 before:pr-2 before:top-2 before:absolute">
                
                <p className=" text-content-text text-base font-medium mb-2.5 ml-4 "><span className=" text-content-title font-medium mr-2">Expiration:</span>{endDate || 'Coming soon'}</p>
            </div>
            <div className=" relative before:w-2 before:h-2 before:rounded-full before:bg-primary-blur before:mr-1.5 before:pr-2 before:top-2 before:absolute">
                
                <p className=" text-content-text text-base font-medium mb-2.5 ml-4 "><span className=" text-content-title font-medium mr-2">Vacancy:</span>{vacancy || 1} {vacancy === 1 ? 'Person' : 'People'}.</p>
            </div>
            <div className=" relative before:w-2 before:h-2 before:rounded-full before:bg-primary-blur before:mr-1.5 before:pr-2 before:top-2 before:absolute">
                
                <p className=" text-content-text text-base font-medium mb-2.5 ml-4 "><span className=" text-content-title font-medium mr-2">Experiences:</span>{experience || 'no experience'}</p>
            </div>
            <div className=" relative before:w-2 before:h-2 before:rounded-full before:bg-primary-blur before:mr-1.5 before:pr-2 before:top-2 before:absolute">
                
                <p className=" text-content-text text-base font-medium mb-2.5 ml-4 "><span className=" text-content-title font-medium mr-2">Education:</span>{education || 'no education'}</p>
            </div>
            <div className=" relative before:w-2 before:h-2 before:rounded-full before:bg-primary-blur before:mr-1.5 before:pr-2 before:top-2 before:absolute">
                
                <p className=" text-content-text text-base font-medium mb-2.5 ml-4 "><span className=" text-content-title font-medium mr-2">Gender:</span>{sex || 'Both'}.</p>
            </div>
        </div>
    );
}

export default JobSumary;