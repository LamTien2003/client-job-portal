import { useEffect, useState, useRef } from 'react';
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import Banner from '@/components/Banner/Banner';
import RelatedJob from './components/RelatedJob/RelatedJob';
import MainDescription from './components/MainDescription/MainDescription';
import JobSumary from './components/JobSumary/JobSumary';
import JobInfo from './components/JobInfo/JobInfo';
import MoreInfo from './components/MoreInfo/MoreInfo';

function JobDetail() {
    const [modal, setModal] = useState(false);
    const slideImg = [
        'https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/bg/company-gallery-sm-01.png',
        'https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/bg/company-gallery-sm-02.png',
        'https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/bg/company-gallery-sm-03.png',
        'https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/bg/company-gallery-sm-04.png',
        'https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/bg/company-gallery-sm-05.png',
    ];

    const imgRef = useRef<HTMLDivElement>(null);

    const handleTurnOffModal = () => {
        setModal(false);
    };

    const handleClickOutside = (e: any) => {
        if (!(e.target.children.length === 0)) {
            setModal(false);
        }
    };

    useEffect(() => {
        const handleModal = (event: any) => {
            if (!imgRef.current?.contains(event.target)) {
                console.log('hello');
                setModal(false);
            }
        };

        document.addEventListener('mousedown', handleModal);
    });

    return (
        <div>
            {modal && (
                <div className=" fixed w-full h-full left-0 top-0 z-10 bg-content-bgtrans duration-300">
                    <div
                        className=" w-10 text-white bg-content-bgtrans rounded text-center pt-2 pb-2 cursor-pointer z-10 right-0 absolute"
                        ref={imgRef}
                        onClick={handleTurnOffModal}
                    >
                        X
                    </div>
                    <Swiper modules={[Pagination, Navigation]} slidesPerView={1} spaceBetween={100}>
                        {slideImg.map((img) => {
                            return (
                                <SwiperSlide key={img}>
                                    <div className="w-full h-full" onClick={handleClickOutside}>
                                        <img src={img} className="w-7/12 h-3/4 mr-auto ml-auto" />
                                    </div>
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                </div>
            )}

            <div className="selection:bg-primary-100 selection:text-white">
                <div className=" mb-28 ">
                    <Banner page="Job Detail" />

                    <div className=" w-10/12 mr-auto ml-auto pt-28 mb-28 flex lg:flex-col marker:">
                        {/* job detail */}
                        <div className=" w-2/3 pl-3 pr-3 lg:w-full ">
                            <JobInfo
                                nameJob="Senior UI/UX Engineer"
                                nameCompany="Bistro.Tech Group Ltd"
                                location="Dhaka, Bangladesh"
                                category="Creative Design"
                                jobType="Full-Time"
                                salary="$40K-$78K"
                            />

                            <div>
                                <MainDescription
                                    title="Job Description"
                                    generalDesc="A UI/UX (User Interface/User Experience) designer is responsible for designing and creating engaging and effective interfaces for software and web applications. This includes designing the layout, visual design, and interactivity of the user interface."
                                    jobDesc={[]}
                                />

                                <MainDescription
                                    title="Job Responsibility"
                                    generalDesc="Collaborating with cross-functional teams: UI/UX designers often work closely with other teams, 
                                    including product management, engineering, and marketing, to ensure that the user interface is aligned 
                                    with business and technical requirements. You will need to be able to effectively communicate 
                                    your design ideas and gather feedback from other team members."
                                    jobDesc={[
                                        'Conducting user research and testing to understand user needs and behaviors.',
                                        'Designing wireframes, prototypes, and high-fidelity mockups.',
                                        'Developing and maintaining design systems and style guides.',
                                        'Collaborating with cross-functional teams, including product management, engineering, and marketing.',
                                        'Staying up-to-date with the latest design trends and technologies.',
                                        'Gathering and analyzing user requirements to inform the design of new software or web applications.',
                                    ]}
                                />
                                <MainDescription
                                    title="Educational Requirements"
                                    generalDesc=""
                                    jobDesc={[
                                        'Conducting user research and testing to understand user needs and behaviors.',
                                        'Designing wireframes, prototypes, and high-fidelity mockups.',
                                    ]}
                                />
                                <MainDescription
                                    title="Experiences"
                                    generalDesc=""
                                    jobDesc={[
                                        'Conducting user research and testing to understand user needs and behaviors.',
                                    ]}
                                />
                                <MainDescription
                                    title="Extra Benefits"
                                    generalDesc="Some specific tasks that a UI/UX designer might be responsible for include:"
                                    jobDesc={[
                                        'Conducting user research and testing to understand user needs and behaviors.',
                                    ]}
                                />
                            </div>
                        </div>

                        {/* more info */}
                        <div className=" w-1/3 pl-3 pr-3 lg:w-full ">
                            <div className=" mb-12 flex items-center justify-end">
                                <div className=" group flex items-center cursor-pointer relative">
                                    <p className=" text-content-text text-lg font-medium duration-300 mr-2.5 group-hover:text-primary-100 xl:text-base lg:text-lg mb:text-sm">
                                        Save Job
                                    </p>
                                    <div className=" w-7 h-7 bg-content-bgsave rounded-full duration-300 group-hover:bg-primary-100">
                                        <FontAwesomeIcon
                                            className=" w-3 text-primary-100 text-sm top-1.5 right-2 absolute duration-300 group-hover:text-white"
                                            icon={faBookmark}
                                        />
                                    </div>
                                </div>
                                <button className=" font-medium pt-2 pb-2 pl-7 pr-7 bg-primary-100 text-white rounded ml-8 duration-500 hover:bg-black xl:pl-3 xl:pr-3 xl:text-sm xl:ml-4 lg:pl-7 lg:pr-7 lg:text-base mb:pl-4 mb:pr-4">
                                    Apply Position
                                </button>
                            </div>

                            <div className=" w-full h-1.5 rounded-t-md bg-primary-100"></div>

                            <JobSumary
                                startDate="02 February, 2023."
                                endDate="03 March, 2023."
                                vacancy={1}
                                experience="2-3 Years."
                                education="Bachelor Degree."
                                gender={0}
                            />

                            <MoreInfo />
                        </div>
                    </div>

                    <div className=" w-10/12 mr-auto ml-auto">
                        <div className=" w-full mr-auto ml-auto mb-28">
                            <h2 className=" text-content-title text-xl font-semibold mb-9">Company Gallery View</h2>
                            <Swiper
                                breakpoints={{
                                    0: {
                                        spaceBetween: 10,
                                        slidesPerView: 1,
                                    },
                                    380: {
                                        spaceBetween: 10,
                                        slidesPerView: 2,
                                    },
                                    639: {
                                        spaceBetween: 15,
                                        slidesPerView: 2,
                                    },
                                    767: {
                                        spaceBetween: 20,
                                        slidesPerView: 3,
                                    },
                                    1023: {
                                        spaceBetween: 25,
                                        slidesPerView: 4,
                                    },
                                    1279: {
                                        spaceBetween: 30,
                                        slidesPerView: 5,
                                    },
                                }}
                            >
                                {slideImg.map((img) => {
                                    return (
                                        <SwiperSlide key={img}>
                                            <div className=" group " onClick={() => setModal(true)}>
                                                <img
                                                    className=" w-full rounded-md cursor-pointer relative "
                                                    src={img}
                                                />
                                                <div className=" w-0 h-0 bg-black rounded-full flex items-center justify-center absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 opacity-30 duration-300 cursor-pointer group-hover:w-11 group-hover:h-11 group-hover:opacity-90 ">
                                                    <img src="https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/icon/eye.svg" />
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    );
                                })}
                            </Swiper>
                        </div>
                        <div>
                            <h1 className=" text-content-title text-2xl font-semibold mb-10">Related Jobs:</h1>
                            <Swiper
                                breakpoints={{
                                    0: {
                                        spaceBetween: 10,
                                        slidesPerView: 1,
                                    },
                                    870: {
                                        spaceBetween: 20,
                                        slidesPerView: 2,
                                    },
                                    1400: {
                                        spaceBetween: 30,
                                        slidesPerView: 3,
                                    },
                                }}
                                // modules={[Pagination, Navigation]}
                            >
                                {[...Array(4)].map((item, index) => {
                                    {
                                        item;
                                    }
                                    return (
                                        <SwiperSlide key={index}>
                                            <RelatedJob
                                                position="Assistant Laboratorist"
                                                shiftsWork="Full Time, Part Time"
                                                salary="$60-76$"
                                                vacancy="Per Month"
                                                deadline="Per Month"
                                                logo="https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/bg/company-logo/company-02.png"
                                            />
                                        </SwiperSlide>
                                    );
                                })}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>

            <div className=" w-10/12 mr-auto ml-auto">
                <div className=" w-full mr-auto ml-auto mb-28">
                    <h2 className=" text-content-title text-xl font-semibold mb-9">Company Gallery View</h2>
                    <Swiper
                        breakpoints={{
                            0: {
                                spaceBetween: 10,
                                slidesPerView: 1,
                            },
                            380: {
                                spaceBetween: 10,
                                slidesPerView: 2,
                            },
                            639: {
                                spaceBetween: 15,
                                slidesPerView: 2,
                            },
                            767: {
                                spaceBetween: 20,
                                slidesPerView: 3,
                            },
                            1023: {
                                spaceBetween: 25,
                                slidesPerView: 4,
                            },
                            1279: {
                                spaceBetween: 30,
                                slidesPerView: 5,
                            },
                        }}
                    >
                        <SwiperSlide>
                            <div className=" group ">
                                <img
                                    className=" w-full rounded-md cursor-pointer relative "
                                    src="https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/bg/company-gallery-sm-01.png"
                                />
                                <div className=" w-0 h-0 bg-black rounded-full flex items-center justify-center absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 opacity-30 duration-300 cursor-pointer group-hover:w-11 group-hover:h-11 group-hover:opacity-90 ">
                                    <img src="https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/icon/eye.svg" />
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className=" group ">
                                <img
                                    className=" w-full rounded-md cursor-pointer relative "
                                    src="https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/bg/company-gallery-sm-02.png"
                                />
                                <div className=" w-0 h-0 bg-black rounded-full flex items-center justify-center absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 opacity-30 duration-300 cursor-pointer group-hover:w-11 group-hover:h-11 group-hover:opacity-90 ">
                                    <img src="https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/icon/eye.svg" />
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className=" group ">
                                <img
                                    className=" w-full rounded-md cursor-pointer relative "
                                    src="https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/bg/company-gallery-sm-03.png"
                                />
                                <div className=" w-0 h-0 bg-black rounded-full flex items-center justify-center absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 opacity-30 duration-300 cursor-pointer group-hover:w-11 group-hover:h-11 group-hover:opacity-90 ">
                                    <img src="https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/icon/eye.svg" />
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className=" group ">
                                <img
                                    className=" w-full rounded-md cursor-pointer relative "
                                    src="https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/bg/company-gallery-sm-04.png"
                                />
                                <div className=" w-0 h-0 bg-black rounded-full flex items-center justify-center absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 opacity-30 duration-300 cursor-pointer group-hover:w-11 group-hover:h-11 group-hover:opacity-90 ">
                                    <img src="https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/icon/eye.svg" />
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className=" group ">
                                <img
                                    className=" w-full rounded-md cursor-pointer relative "
                                    src="https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/bg/company-gallery-sm-05.png"
                                />
                                <div className=" w-0 h-0 bg-black rounded-full flex items-center justify-center absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 opacity-30 duration-300 cursor-pointer group-hover:w-11 group-hover:h-11 group-hover:opacity-90 ">
                                    <img src="https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/icon/eye.svg" />
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className=" group ">
                                <img
                                    className=" w-full rounded-md cursor-pointer relative "
                                    src="https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/bg/company-gallery-sm-01.png"
                                />
                                <div className=" w-0 h-0 bg-black rounded-full flex items-center justify-center absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 opacity-30 duration-300 cursor-pointer group-hover:w-11 group-hover:h-11 group-hover:opacity-90 ">
                                    <img src="https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/icon/eye.svg" />
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
                <div>
                    <h1 className=" text-content-title text-2xl font-semibold mb-10">Related Jobs:</h1>
                    <Swiper
                        breakpoints={{
                            0: {
                                spaceBetween: 10,
                                slidesPerView: 1,
                            },
                            870: {
                                spaceBetween: 20,
                                slidesPerView: 2,
                            },
                            1400: {
                                spaceBetween: 30,
                                slidesPerView: 3,
                            },
                        }}
                        // modules={[Pagination, Navigation]}
                    >
                        {[...Array(10)].map((_, index) => (
                            <SwiperSlide key={index}>
                                <div className=" group ">
                                    <div className=" bg-content-bgjob rounded-r pt-9 pb-9 pr-6 pl-6 border-l-4 border-primary-blur group-hover:border-primary-100 ">
                                        <div className=" flex items-start mb-5 relative">
                                            <img
                                                className=" rounded-full mr-5"
                                                src="https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/bg/company-logo/company-02.png"
                                            />
                                            <div className=" w-full flex flex-col border-b border-content-border pb-3">
                                                <h3 className=" text-content-title text-lg font-semibold mb-1">
                                                    Assistant Laboratorist
                                                </h3>
                                                <p className=" text-sm">Full Time, Part Time</p>
                                            </div>
                                            <div className=" right-0 top-3 absolute cursor-pointer">
                                                <div className=" w-7 h-7 rounded-full border border-primary-100 flex justify-center items-center duration-300 hover:bg-primary-100">
                                                    <FontAwesomeIcon
                                                        className=" text-primary-100 text-sm duration-300 hover:text-white"
                                                        icon={faBookmarkRegular}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className=" bg-white pt-7.5 pb-7.5 pr-6 pl-6 flex flex-col">
                                            <div className=" flex items-start mb-2">
                                                <img
                                                    className=" mt-1.25"
                                                    src="https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/icon/arrow2.svg"
                                                />
                                                <p className=" text-content-text text-cb font-medium ml-1.5">
                                                    Salary:{' '}
                                                    <span className=" text-content-title font-semibold ml-1 mr-1.5">
                                                        $60-76$ /
                                                    </span>
                                                    Per month
                                                </p>
                                            </div>
                                            <div className=" flex items-start mb-2">
                                                <img
                                                    className=" mt-1.25"
                                                    src="https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/icon/arrow2.svg"
                                                />
                                                <p className=" text-content-text text-cb font-medium ml-1.5">
                                                    Vacancy: Per month
                                                </p>
                                            </div>
                                            <div className=" flex items-start mb-2">
                                                <img
                                                    className=" mt-1.25"
                                                    src="https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/icon/arrow2.svg"
                                                />
                                                <p className=" text-content-text text-cb font-medium ml-1.5">
                                                    Deadline: Per month
                                                </p>
                                            </div>
                                        </div>
                                        <div className=" group pt-7.5 ml-2.5">
                                            <Link
                                                to="/job-detail"
                                                className=" text-primary-100 flex items-center relative group-hover:cursor-pointer "
                                            >
                                                <img
                                                    className="-left-2 top-1.5 absolute duration-300 group-hover:-left-1 mb:top-1"
                                                    src="https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/icon/apply-arrow.svg"
                                                />
                                                <img src="https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/icon/apply-ellipse.svg" />
                                                <span className=" text-sm font-medium ml-1 mb:text-xs ">
                                                    View Details
                                                </span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
}

export default JobDetail;
