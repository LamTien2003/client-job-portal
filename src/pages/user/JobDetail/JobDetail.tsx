<<<<<<< HEAD
import { useEffect, useState, useRef } from "react";
// import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";

import Banner from "@/components/Banner/Banner";
import RelatedJob from "./components/RelatedJob/RelatedJob";
import MainDescription from "./components/MainDescription/MainDescription";
import JobSumary from "./components/JobSumary/JobSumary";
import JobInfo from "./components/JobInfo/JobInfo";
import MoreInfo from "./components/MoreInfo/MoreInfo";

function JobDetail() {
    const [modal, setModal] = useState(false)
    const slideImg = [
        'https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/bg/company-gallery-sm-01.png',
        'https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/bg/company-gallery-sm-02.png',
        'https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/bg/company-gallery-sm-03.png',
        'https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/bg/company-gallery-sm-04.png',
        'https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/bg/company-gallery-sm-05.png',
    ]

    const imgRef = useRef<HTMLDivElement>(null)
    
    const handleTurnOffModal = () => {
        setModal(false)
    }

    const handleClickOutside = (e:any) => {
        if(!(e.target.children.length === 0)) {
        setModal(false)
        }
    }
    
    useEffect(() => {
        const handleModal = (event:any) => {
            if(!imgRef.current?.contains(event.target)) {
                console.log('hello');
                setModal(false)
            }
        }

        document.addEventListener("mousedown", handleModal)
    })

    return (
        <div>
            {modal && (
                <div className=" fixed w-full h-full left-0 top-0 z-10 bg-content-bgtrans duration-300" >
                    <div className=" w-10 text-white bg-content-bgtrans rounded text-center pt-2 pb-2 cursor-pointer z-10 right-0 absolute" ref={imgRef} onClick={handleTurnOffModal}>X</div>
                    <Swiper
                        modules={[Pagination, Navigation]}
                        slidesPerView={1}
                        spaceBetween={100}
                    >
                        {slideImg.map(img => {
                            return (
                                <SwiperSlide key={img}>
                                    <div className="w-full h-full" onClick={handleClickOutside}>
                                        <img src={img} className="w-7/12 h-3/4 mr-auto ml-auto" />
                                    </div>
                                </SwiperSlide>
                            )
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
                                        'Gathering and analyzing user requirements to inform the design of new software or web applications.'
                                    ]}
                                />
                                <MainDescription 
                                    title="Educational Requirements"
                                    generalDesc=""
                                    jobDesc={[
                                        'Conducting user research and testing to understand user needs and behaviors.',
                                        'Designing wireframes, prototypes, and high-fidelity mockups.'
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
                                    jobDesc={['Conducting user research and testing to understand user needs and behaviors.',]}
                                />
                            </div>
                        </div>
                        
                        {/* more info */}
                        <div className=" w-1/3 pl-3 pr-3 lg:w-full ">
                            <div className=" mb-12 flex items-center justify-end">
                                <div className=" group flex items-center cursor-pointer relative">
                                    <p className=" text-content-text text-lg font-medium duration-300 mr-2.5 group-hover:text-primary-100 xl:text-base lg:text-lg mb:text-sm">Save Job</p>
                                    <div className=' w-7 h-7 bg-content-bgsave rounded-full duration-300 group-hover:bg-primary-100'>
                                        <FontAwesomeIcon className=' w-3 text-primary-100 text-sm top-1.5 right-2 absolute duration-300 group-hover:text-white' icon={faBookmark}/>
                                    </div>
                                </div>
                                <button className=" font-medium pt-2 pb-2 pl-7 pr-7 bg-primary-100 text-white rounded ml-8 duration-500 hover:bg-black xl:pl-3 xl:pr-3 xl:text-sm xl:ml-4 lg:pl-7 lg:pr-7 lg:text-base mb:pl-4 mb:pr-4">
                                    Apply Position
=======
// import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import { faBookmark as faBookmarkRegular } from '@fortawesome/free-regular-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';

import Banner from '@/components/Banner/Banner';

function JobDetail() {
    // const [windowSize, setWindowSize] = useState(getWindowSize())
    // const [slidePerViewCompany, setslidePerCompany] = useState(5)
    // const [slidePerViewJob, setslidePerViewJob] = useState(3)

    // function getWindowSize() {
    //     const { innerWidth } = window
    //     return { innerWidth }
    // }

    // useEffect(() => {

    //     function handleWindowResize() {
    //         setWindowSize(getWindowSize())
    //     }

    //     window.addEventListener('resize', handleWindowResize)

    //     return () => {
    //         window.removeEventListener('resize', handleWindowResize)
    //     }
    // }, [])

    return (
        <div className=" mb-28">
            <Banner page="Job Detail" />

            <div className=" w-10/12 mr-auto ml-auto pt-28 mb-28 flex lg:flex-col marker:">
                {/* job detail */}
                <div className=" w-2/3 pl-3 pr-3 lg:w-full ">
                    <div className=" border-b border-content-border pb-12 mb-8 flex justify-between mb:flex-col">
                        <div className=" flex mb:mb-7">
                            <div className=" flex items-center ">
                                <img
                                    className=" w-10 rounded-full mr-2.5 "
                                    src="https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/bg/company-logo/company-01.png"
                                />
                                <div className=" flex flex-col">
                                    <h3 className=" text-content-title text-base font-semibold cursor-pointer duration-300 hover:text-primary-100 ">
                                        Senior UI/UX Engineer
                                    </h3>
                                    <p className=" text-content-text text-sm font-medium duration-300 lg:text-sm">
                                        Bistro.Tech Group Ltd
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className=" flex justify-end xl:ml-5 lg:flex-col mb:ml-0">
                            <div className=" mr-6 xl:mr-3 lg:mb-2">
                                <div className=" mb-2 flex items-center relative">
                                    <img
                                        className=" mr-1.5 top-1.25 absolute"
                                        src="https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/icon/map-2.svg"
                                    />
                                    <p className=" text-content-text text-cb font-normal ml-4">
                                        <span className=" text-content-title font-medium mr-1.5">Location:</span>Dhaka,
                                        Bangladesh
                                    </p>
                                </div>
                                <div className=" flex items-center relative">
                                    <img
                                        className=" mr-1.5 top-1.25 absolute"
                                        src="https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/icon/category-2.svg"
                                    />
                                    <p className=" text-content-text text-cb font-normal ml-5">
                                        <span className=" text-content-title font-medium mr-1.5">Category:</span>
                                        Creative Design
                                    </p>
                                </div>
                            </div>
                            <div>
                                <div className=" mb-2 flex items-center relative">
                                    <img
                                        className=" mr-1.5 top-1.25 absolute"
                                        src="https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/icon/company-2.svg"
                                    />
                                    <p className=" text-content-text text-cb font-normal ml-5">
                                        <span className=" text-content-title font-medium mr-1.5">Job Type:</span>
                                        Full-Time
                                    </p>
                                </div>
                                <div className=" flex items-center relative">
                                    <img
                                        className=" mr-1.5 top-1.25 absolute"
                                        src="https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/icon/salary-2.svg"
                                    />
                                    <p className=" text-content-text text-cb font-normal ml-5">
                                        <span className=" text-content-title font-medium mr-1.5">Salary:</span>
                                        $40K-$78K/Per Month
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p className=" text-content-text text-base font-medium mb-8">
                            <span className=" text-content-title text-lg font-semibold mr-2">Job Description:</span>A
                            UI/UX (User Interface/User Experience) designer is responsible for designing and creating
                            engaging and effective interfaces for software and web applications. This includes designing
                            the layout, visual design, and interactivity of the user interface.
                        </p>
                        <div className=" mb-9">
                            <p className=" text-content-text text-base font-medium mb-3">
                                <span className=" text-content-title text-lg font-semibold mr-2">
                                    Job Responsibility:
                                </span>
                                Collaborating with cross-functional teams: UI/UX designers often work closely with other
                                teams, including product management, engineering, and marketing, to ensure that the user
                                interface is aligned with business and technical requirements. You will need to be able
                                to effectively communicate your design ideas and gather feedback from other team
                                members.
                            </p>

                            <p className=" text-content-text text-cb font-medium flex items-center mb-2.5 ml-3 relative before:w-2 before:h-2 before:rounded-full before:bg-primary-100 before:-ml-3 before:pr-2 before:top-2 before:absolute">
                                Conducting user research and testing to understand user needs and behaviors.
                            </p>
                            <p className=" text-content-text text-cb font-medium flex items-center mb-2.5 ml-3 relative before:w-2 before:h-2 before:rounded-full before:bg-primary-100 before:-ml-3 before:pr-2 before:top-2 before:absolute">
                                Designing wireframes, prototypes, and high-fidelity mockups.
                            </p>
                            <p className=" text-content-text text-cb font-medium flex items-center mb-2.5 ml-3 relative before:w-2 before:h-2 before:rounded-full before:bg-primary-100 before:-ml-3 before:pr-2 before:top-2 before:absolute">
                                Developing and maintaining design systems and style guides.
                            </p>
                            <p className=" text-content-text text-cb font-medium flex items-center mb-2.5 ml-3 relative before:w-2 before:h-2 before:rounded-full before:bg-primary-100 before:-ml-3 before:pr-2 before:top-2 before:absolute">
                                Collaborating with cross-functional teams, including product management, engineering,
                                and marketing.
                            </p>
                            <p className=" text-content-text text-cb font-medium flex items-center mb-2.5 ml-3 relative before:w-2 before:h-2 before:rounded-full before:bg-primary-100 before:-ml-3 before:pr-2 before:top-2 before:absolute">
                                Staying up-to-date with the latest design trends and technologies.
                            </p>
                            <p className=" text-content-text text-cb font-medium flex items-center mb-2.5 ml-3 relative before:w-2 before:h-2 before:rounded-full before:bg-primary-100 before:-ml-3 before:pr-2 before:top-2 before:absolute">
                                Gathering and analyzing user requirements to inform the design of new software or web
                                applications.
                            </p>
                        </div>
                        <div className=" mb-9">
                            <h3 className=" text-content-title text-lg font-semibold pb-3">
                                Educational Requirements:
                            </h3>
                            <p className=" text-content-text text-cb font-medium flex items-center mb-2.5 ml-3 relative before:w-2 before:h-2 before:rounded-full before:bg-primary-100 before:-ml-3 before:pr-2 before:top-2 before:absolute">
                                Conducting user research and testing to understand user needs and behaviors.
                            </p>
                            <p className=" text-content-text text-cb font-medium flex items-center mb-2.5 ml-3 relative before:w-2 before:h-2 before:rounded-full before:bg-primary-100 before:-ml-3 before:pr-2 before:top-2 before:absolute">
                                Designing wireframes, prototypes, and high-fidelity mockups.
                            </p>
                        </div>
                        <div className=" mb-9">
                            <h3 className=" text-content-title text-lg font-semibold pb-3">Experiences:</h3>
                            <p className=" text-content-text text-cb font-medium flex items-center mb-2.5 ml-3 relative before:w-2 before:h-2 before:rounded-full before:bg-primary-100 before:-ml-3 before:pr-2 before:top-2 before:absolute">
                                Conducting user research and testing to understand user needs and behaviors.
                            </p>
                        </div>
                        <div className=" mb-9">
                            <p className=" text-content-text text-base font-medium mb-3">
                                <span className=" text-content-title text-lg font-semibold mr-2">Main Duties:</span>
                                Some specific tasks that a UI/UX designer might be responsible for include:
                            </p>
                            <p className=" text-content-text text-cb font-medium flex items-center mb-2.5 ml-3 relative before:w-2 before:h-2 before:rounded-full before:bg-primary-100 before:-ml-3 before:pr-2 before:top-2 before:absolute">
                                Conducting user research and testing to understand user needs and behaviors.
                            </p>
                        </div>
                        <div className=" mb-9 lg:mb-20">
                            <p className=" text-content-text text-base font-medium mb-3">
                                <span className=" text-content-title text-lg font-semibold mr-2">Extra Benefits:</span>
                                Some specific tasks that a UI/UX designer might be responsible for include:
                            </p>
                            <p className=" text-content-text text-cb font-medium flex items-center mb-2.5 ml-3 relative before:w-2 before:h-2 before:rounded-full before:bg-primary-100 before:-ml-3 before:pr-2 before:top-2 before:absolute">
                                Conducting user research and testing to understand user needs and behaviors.
                            </p>
                        </div>
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
                    <div className=" w-full bg-content-bg pt-17.5 pb-17.5 pl-10 pr-10 mb-12 ">
                        <h3 className=" text-content-title text-lg font-semibold mr-2 mb-6">Job Summary:</h3>
                        <div className=" relative before:w-2 before:h-2 before:rounded-full before:bg-primary-blur before:mr-1.5 before:pr-2 before:top-2 before:absolute">
                            <p className=" text-content-text text-base font-medium mb-2.5 ml-4 ">
                                <span className=" text-content-title font-medium mr-2">Job Posted:</span>02 February,
                                2023dsa dsad dsa dsad s.
                            </p>
                        </div>
                        <div className=" relative before:w-2 before:h-2 before:rounded-full before:bg-primary-blur before:mr-1.5 before:pr-2 before:top-2 before:absolute">
                            <p className=" text-content-text text-base font-medium mb-2.5 ml-4 ">
                                <span className=" text-content-title font-medium mr-2">Expiration:</span>02 February,
                                2023dsa dsad dsa dsad s.
                            </p>
                        </div>
                        <div className=" relative before:w-2 before:h-2 before:rounded-full before:bg-primary-blur before:mr-1.5 before:pr-2 before:top-2 before:absolute">
                            <p className=" text-content-text text-base font-medium mb-2.5 ml-4 ">
                                <span className=" text-content-title font-medium mr-2">Vacancy:</span>02 February,
                                2023dsa dsad dsa dsad s.
                            </p>
                        </div>
                        <div className=" relative before:w-2 before:h-2 before:rounded-full before:bg-primary-blur before:mr-1.5 before:pr-2 before:top-2 before:absolute">
                            <p className=" text-content-text text-base font-medium mb-2.5 ml-4 ">
                                <span className=" text-content-title font-medium mr-2">Experiences:</span>02 February,
                                2023dsa dsad dsa dsad s.
                            </p>
                        </div>
                        <div className=" relative before:w-2 before:h-2 before:rounded-full before:bg-primary-blur before:mr-1.5 before:pr-2 before:top-2 before:absolute">
                            <p className=" text-content-text text-base font-medium mb-2.5 ml-4 ">
                                <span className=" text-content-title font-medium mr-2">Education:</span>02 February,
                                2023dsa dsad dsa dsad s.
                            </p>
                        </div>
                        <div className=" relative before:w-2 before:h-2 before:rounded-full before:bg-primary-blur before:mr-1.5 before:pr-2 before:top-2 before:absolute">
                            <p className=" text-content-text text-base font-medium mb-2.5 ml-4 ">
                                <span className=" text-content-title font-medium mr-2">Gender:</span>02 February,
                                2023dsa dsad dsa dsad s.
                            </p>
                        </div>
                    </div>
                    <div className=" flex mb-7.5">
                        <img
                            className=" mr-1.5"
                            src="https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/icon/company-2.svg"
                        />
                        <Link
                            className=" text-content-text text-cb font-medium duration-300 hover:text-primary-100"
                            to={'/job-listing'}
                        >
                            View All Jobs In This Company
                        </Link>
                    </div>
                    <div className=" flex items-center mb-12 mb:flex-col mb:items-start">
                        <p className=" text-content-title text-cb font-semibold mr-6 mb:mb-2">Job Link Share:</p>
                        <div className=" flex">
                            <div className=" group mr-3.5 ">
                                <button className=" w-6.5 h-6.5 border border-primary-100 rounded-full duration-300 group-hover:bg-primary-100 ">
                                    <FontAwesomeIcon
                                        className=" w-3.5 text-primary-100 duration-300 group-hover:text-white"
                                        icon={faLink}
                                    />
                                </button>
                            </div>
                            <div className=" group mr-3.5 ">
                                <button className=" w-6.5 h-6.5 border border-primary-100 rounded-full duration-300 group-hover:bg-primary-100 ">
                                    <FontAwesomeIcon
                                        className=" w-3 text-primary-100 duration-300 group-hover:text-white"
                                        icon={faFacebookF}
                                    />
                                </button>
                            </div>
                            <div className=" group mr-3.5 ">
                                <button className=" w-6.5 h-6.5 border border-primary-100 rounded-full duration-300 group-hover:bg-primary-100 ">
                                    <FontAwesomeIcon
                                        className=" w-3.5 text-primary-100 duration-300 group-hover:text-white"
                                        icon={faTwitter}
                                    />
                                </button>
                            </div>
                            <div className=" group mr-3.5 ">
                                <button className=" w-6.5 h-6.5 border border-primary-100 rounded-full duration-300 group-hover:bg-primary-100 ">
                                    <FontAwesomeIcon
                                        className=" w-3 text-primary-100 duration-300 group-hover:text-white"
                                        icon={faLinkedinIn}
                                    />
                                </button>
                            </div>
                            <div className=" group mr-3.5 ">
                                <button className=" w-6.5 h-6.5 border border-primary-100 rounded-full duration-300 group-hover:bg-primary-100 ">
                                    <FontAwesomeIcon
                                        className=" w-3.5 text-primary-100 duration-300 group-hover:text-white"
                                        icon={faInstagram}
                                    />
>>>>>>> 756801df643c9350cd54e051b013d9c26c0640f3
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
                                        slidesPerView: 1
                                    },
                                    380: {
                                        spaceBetween: 10,
                                        slidesPerView: 2
                                    },
                                    639: {
                                        spaceBetween: 15,
                                        slidesPerView: 2
                                    },
                                    767: {
                                        spaceBetween: 20,
                                        slidesPerView: 3
                                    },
                                    1023: {
                                        spaceBetween: 25,
                                        slidesPerView: 4
                                    },
                                    1279: {
                                        spaceBetween: 30,
                                        slidesPerView: 5
                                    },
                                }}

                            >
                                {slideImg.map(img => {
                                    return (
                                        <SwiperSlide key={img}>
                                            <div className=" group " onClick={() => setModal(true)}>
                                                <img className=" w-full rounded-md cursor-pointer relative " src={img} />
                                                <div className=" w-0 h-0 bg-black rounded-full flex items-center justify-center absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 opacity-30 duration-300 cursor-pointer group-hover:w-11 group-hover:h-11 group-hover:opacity-90 ">
                                                    <img src="https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/icon/eye.svg" />
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    )
                                })}
                            </Swiper>
                        </div>
<<<<<<< HEAD
                        <div>
                            <h1 className=" text-content-title text-2xl font-semibold mb-10">Related Jobs:</h1>
                            <Swiper
                                breakpoints={{
                                    0: {
                                        spaceBetween: 10,
                                        slidesPerView: 1
                                    },
                                    870: {
                                        spaceBetween: 20,
                                        slidesPerView: 2
                                    },
                                    1400: {
                                        spaceBetween: 30,
                                        slidesPerView: 3
                                    },
                                }}
                                // modules={[Pagination, Navigation]}

                            >
                                {[...Array(4)].map((item, index) => {
                                    {item}
                                    return (
                                    <SwiperSlide key={index}>
                                        <RelatedJob position="Assistant Laboratorist" shiftsWork="Full Time, Part Time" salary="$60-76$" vacancy="Per Month" deadline="Per Month" logo="https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/bg/company-logo/company-02.png" />
                                    </SwiperSlide>
                                    )
                                })}
                            </Swiper>
=======
                        <div className=" text-center">
                            <p className=" text-cb font-normal ">
                                Send your resume at{' '}
                                <span className=" text-content-link font-semibold ">info@example.com</span>
                            </p>
                        </div>
                    </div>
                    <div>
                        <p className=" text-content-title text-cb font-semibold mr-6 mb-7.5">Get Location:</p>
                        <div>
                            <iframe
                                className=" w-full h-52 rounded-md lg:h-72"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5383.759320360064!2d106.62307466104055!3d10.853877228666475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752bee0b0ef9e5%3A0x5b4da59e47aa97a8!2zQ8O0bmcgVmnDqm4gUGjhuqduIE3hu4FtIFF1YW5nIFRydW5n!5e0!3m2!1svi!2s!4v1691931941360!5m2!1svi!2s"
                            ></iframe>
>>>>>>> 756801df643c9350cd54e051b013d9c26c0640f3
                        </div>
                    </div>
                </div>
            </div>
<<<<<<< HEAD
=======

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
>>>>>>> 756801df643c9350cd54e051b013d9c26c0640f3
        </div>
    );
}

export default JobDetail;
