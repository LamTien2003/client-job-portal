type Info = {
    nameCompany: string
    category: string
    location: string
    memberSince: string
    sizeCompany: number
    jobCompleted: number
    lastJobPosted: string
}

const Info: React.FC<Info> = ({nameCompany, category, location, memberSince, sizeCompany, jobCompleted, lastJobPosted}) => {
    return (
        <div>
            <div className=" mb-2.5 flex relative before:w-2 before:h-2 before:rounded-full before:bg-primary-blur before:left-0 before:top-1.75 before:absolute">
                <p className=" text-cb pl-3.5 font-medium"><span className=" text-content-title font-semibold mr-1.5">Company Name:</span>{nameCompany}</p>
            </div>
            <div className=" mb-2.5 flex relative before:w-2 before:h-2 before:rounded-full before:bg-primary-blur before:left-0 before:top-1.75 before:absolute">
                <p className=" text-cb pl-3.5 font-medium"><span className=" text-content-title font-semibold mr-1.5">Category:</span>{category}</p>
            </div>
            <div className=" mb-2.5 flex relative before:w-2 before:h-2 before:rounded-full before:bg-primary-blur before:left-0 before:top-1.75 before:absolute">
                <p className=" text-cb pl-3.5 font-medium"><span className=" text-content-title font-semibold mr-1.5">Location:</span>{location}</p>
            </div>
            <div className=" mb-2.5 flex relative before:w-2 before:h-2 before:rounded-full before:bg-primary-blur before:left-0 before:top-1.75 before:absolute">
                <p className=" text-cb pl-3.5 font-medium"><span className=" text-content-title font-semibold mr-1.5">Member Since:</span>{memberSince}</p>
            </div>
            <div className=" mb-2.5 flex relative before:w-2 before:h-2 before:rounded-full before:bg-primary-blur before:left-0 before:top-1.75 before:absolute">
                <p className=" text-cb pl-3.5 font-medium"><span className=" text-content-title font-semibold mr-1.5">Company size:</span>{sizeCompany}</p>
            </div>
            <div className=" mb-2.5 flex relative before:w-2 before:h-2 before:rounded-full before:bg-primary-blur before:left-0 before:top-1.75 before:absolute">
                <p className=" text-cb pl-3.5 font-medium"><span className=" text-content-title font-semibold mr-1.5">Completed Job:</span>{jobCompleted}</p>
            </div>
            <div className=" mb-2.5 flex relative before:w-2 before:h-2 before:rounded-full before:bg-primary-blur before:left-0 before:top-1.75 before:absolute">
                <p className=" text-cb pl-3.5 font-medium"><span className=" text-content-title font-semibold mr-1.5">Last Job Posted:</span>{lastJobPosted}</p>
            </div>
        </div>
    );
}

export default Info;