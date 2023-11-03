import images from '@/assets/images';
import ProcessItem from './ProcessItem';
const Process = () => {
    return (
        <div className="flex justify-center items-center gap-16 lg:flex-wrap mb:flex-col ">
            <ProcessItem
                title="Account Create"
                paragraph="To create your account be confident & safely."
                image={images.process.accoutCreate}
                arrow="up"
            />

            <ProcessItem
                title="Create Resume"
                paragraph="To create your account be confident & safely."
                image={images.process.resume}
                arrow="down"
            />

            <ProcessItem
                title="Find Jobs"
                paragraph="To create your account be confident & safely."
                image={images.process.findJob}
                arrow="up"
            />

            <ProcessItem
                title="Apply Jobs"
                paragraph="To create your account be confident & safely."
                image={images.process.jobApply}
                arrow="down"
            />
        </div>
    );
};

export default Process;
