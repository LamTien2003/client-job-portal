import Job from "@/types/Job";

type Props = {
    data: Job
}

function MainDescription(props: Props) {
    const { data: job } = props
    return (
        <>
            {/* Description */}
            <div className=" mb-9">
                <p className=" text-content-text text-base font-medium mb-3">
                    <span className=" text-content-title text-lg font-semibold mr-2">Job Description:</span>
                    {job.description}
                </p>
            </div>

            {/* Skill require */}
            <div className=" mb-9">
                <p className=" text-content-text text-base font-medium mb-3">
                    <span className=" text-content-title text-lg font-semibold mr-2">Skills Requirements:</span>
                </p>
                <div>
                    {job.skillsRequire?.map(skill => {
                        return (
                            <p
                                key={skill}
                                className=" text-content-text text-cb font-medium flex items-center mb-2.5 ml-3 relative before:w-2 before:h-2 before:rounded-full before:bg-primary-100 before:-ml-3 before:pr-2 before:top-2 before:absolute"
                            >
                                {skill}
                            </p>
                        )
                    })}
                </div>
            </div>

            {/* Description */}
            <div className=" mb-9">
                <p className=" text-content-text text-base font-medium mb-3">
                    <span className=" text-content-title text-lg font-semibold mr-2">Experiences:</span>
                </p>
                <p 
                    className=" text-content-text text-cb font-medium flex items-center mb-2.5 ml-3 relative before:w-2 before:h-2 before:rounded-full before:bg-primary-100 before:-ml-3 before:pr-2 before:top-2 before:absolute">
                    2-3 năm kinh nghiệm
                </p>
            </div>
        </>
    );
}

export default MainDescription;