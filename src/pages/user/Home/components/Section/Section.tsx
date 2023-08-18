import { ReactNode } from 'react';
import Title from './Title';
import images from '@/assets/images';
type SectionHome = {
    children: ReactNode;
    title: ReactNode;
    subTitle: string;
    bg: string;
    right: boolean;
};

const Section: React.FC<SectionHome> = ({ title, subTitle, children, bg, right }) => {
    return (
        <div className={`py-20 ${bg ? bg : ' '}`}>
            <div className="flex flex-col max-w-7xl mx-auto">
                {right ? (
                    <Title title={title} subTitle={subTitle}>
                        <div className="group">
                            <div className="flex items-center group-hover:cursor-pointer ">
                                <span className="text-base font-medium group-hover:text-primary-100">Explore More</span>
                                <div className="ml-5 relative">
                                    <img
                                        className="-left-2 top-1.5 absolute duration-300 group-hover:-left-1 mb:top-1"
                                        src={images.arrow}
                                        alt={images.arrow}
                                    />
                                    <img src={images.elliose} alt={images.elliose} />
                                </div>
                            </div>
                        </div>
                    </Title>
                ) : (
                    <div className="flex justify-center text-center">
                        <Title title={title} subTitle={subTitle} children={undefined} />
                    </div>
                )}

                {children}
            </div>
        </div>
    );
};

export default Section;
