import { ReactNode } from 'react';
import Title from './Title';
import images from '@/assets/images';
import { Swiper as SwiperType } from 'swiper';
import { Link } from 'react-router-dom';

type SectionHome = {
    children: ReactNode;
    title: ReactNode;
    subTitle: string;
    bg: string;
    right?: boolean;
    path: string;
    slick?: boolean;
    swiperRef?: React.MutableRefObject<SwiperType | undefined>;
};

const Section: React.FC<SectionHome> = ({ title, subTitle, children, bg, right, slick, swiperRef, path }) => {
    const handleNext = () => {
        swiperRef?.current?.slideNext();
    };

    const handlePrev = () => {
        swiperRef?.current?.slidePrev();
    };
    return (
        <div className={`py-20 ${bg ? bg : ' '}`}>
            <div className="flex flex-col max-w-7xl mx-auto  lg:px-5 tb:px-3">
                {right ? (
                    <Title title={title} subTitle={subTitle}>
                        {slick ? (
                            <div className="flex items-center hover:cursor-pointer ">
                                <button className="relative" onClick={handlePrev}>
                                    <img
                                        className="-right-2 top-1.5 absolute duration-300 hover:-right-1 mb:top-1"
                                        src={images.arrowLeft}
                                        alt={images.arrowLeft}
                                    />
                                    <img src={images.elliose} alt={images.elliose} />
                                </button>

                                <button className="ml-7 relative" onClick={handleNext}>
                                    <img
                                        className="-left-2 top-1.5 absolute duration-300 hover:-left-1 mb:top-1"
                                        src={images.arrow}
                                        alt={images.arrow}
                                    />
                                    <img src={images.elliose} alt={images.elliose} />
                                </button>
                            </div>
                        ) : (
                            <Link to={path} className="group">
                                <div className="flex items-center group-hover:cursor-pointer ">
                                    <span className="text-base font-medium group-hover:text-primary-100">
                                        Explore More
                                    </span>
                                    <div className="ml-5 relative">
                                        <img
                                            className="-left-2 top-1.5 absolute duration-300 group-hover:-left-1 mb:top-1"
                                            src={images.arrow}
                                            alt={images.arrow}
                                        />
                                        <img src={images.elliose} alt={images.elliose} />
                                    </div>
                                </div>
                            </Link>
                        )}
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
