import images from '@/assets/images';
type Process = {
    title: string;
    paragraph: string;
    image: string;
    arrow: string;
};

const ProcessItem: React.FC<Process> = ({ title, paragraph, image, arrow }) => {
    return (
        <div className="relative group">
            {arrow === 'up' && (
                <img
                    className="absolute -top-7 group-hover:-top-5 duration-300 mb:hidden"
                    src={images.process.up}
                    alt={images.process.up}
                />
            )}

            <div className="flex flex-col border-2 border-primary-40  text-center justify-center items-center w-[250px] h-[250px] rounded-full bg-primary-10 group-hover:border-primary-100 duration-300">
                <img src={image} alt={image} />
                <h5 className="text-content-title my-2 text-lg font-semibold group-hover:text-primary-100 duration-300">
                    <a href="#">{title}</a>
                </h5>
                <p className="text-content-text font-normal">{paragraph}</p>
            </div>

            {arrow === 'down' && (
                <img
                    className="absolute -bottom-7 group-hover:-bottom-5 duration-300 mb:hidden"
                    src={images.process.down}
                    alt={images.process.down}
                />
            )}
        </div>
    );
};

export default ProcessItem;
