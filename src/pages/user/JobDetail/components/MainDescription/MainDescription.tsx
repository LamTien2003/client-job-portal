type MainDescription = {
    title: string
    generalDesc: string
    jobDesc: Array<string>
}

const MainDescription: React.FC<MainDescription> = ({title, generalDesc, jobDesc}) => {
    return (
        <div className=" mb-9">
            <p className=" text-content-text text-base font-medium mb-3">
                <span className=" text-content-title text-lg font-semibold mr-2">{title}:</span>
                {generalDesc}
            </p>
        
            {jobDesc && jobDesc.map(item => {
                return (
                    <p key={item} className=" text-content-text text-cb font-medium flex items-center mb-2.5 ml-3 relative before:w-2 before:h-2 before:rounded-full before:bg-primary-100 before:-ml-3 before:pr-2 before:top-2 before:absolute">{item}</p>
                )
            })}
        </div>
    );
}

export default MainDescription;