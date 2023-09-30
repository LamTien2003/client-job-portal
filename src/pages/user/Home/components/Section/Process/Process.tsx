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
                title="Account Create"
                paragraph="To create your account be confident & safely."
                image={images.process.accoutCreate}
                arrow="down"
            />

            <ProcessItem
                title="Account Create"
                paragraph="To create your account be confident & safely."
                image={images.process.accoutCreate}
                arrow="up"
            />

            <ProcessItem
                title="Account Create"
                paragraph="To create your account be confident & safely."
                image={images.process.accoutCreate}
                arrow="down"
            />
        </div>
    );
};

export default Process;
