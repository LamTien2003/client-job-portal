import { useEffect } from 'react';
import { toast } from 'react-toastify';
import Banner from '@/components/Banner/Banner';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage, faUser } from "@fortawesome/free-regular-svg-icons";
import images from '@/assets/images';
const BlogGrid = () => {

    useEffect(() => {
        toast.success('Test thông bao');
    }, []);
    return (
        <div>
            <Banner page='Tin tức' />


            <div className='max-w-7xl ml-auto mr-auto pt-28 flex justify-between'>
                <div className='w-[100%] grid grid-cols-3 gap-x-4 gap-y-10'>
                    <div className=''>
                        <div >
                            <img className='overflow-hidden rounded-md' src="https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/blog/blog-img-01.png" alt="" />
                        </div>
                        <div className='grid grid-cols-3 text-[16px]'>
                            <div className='w-[67px] h-[67px] pt-2 rounded-md text-center text-white ml-4 -translate-y-8 bg-[#009FAC]  '>
                                <b>02</b>
                                <p>March</p>
                            </div>


                            <div className='ml-[-30px] mt-3 hover:text-[#009FAC] '>
                                <p>
                                    <FontAwesomeIcon icon={faMessage} className='mr-2 text-[#009FAC] ' />
                                    03 Comment
                                </p>

                            </div>

                            <div className='ml-[-20px] mt-3 hover:text-[#009FAC] '>
                                <p>
                                    <FontAwesomeIcon icon={faUser} className='mr-2 text-[#009FAC] ' />
                                    Mr. Jack Frank
                                </p>
                            </div>
                        </div>

                        {/* TITLE */}
                        <div className='text-[1.063rem] font-semibold ml-6 hover:text-[#009FAC]  transition duration-[350ms] ease-in-out'>
                            <p>To Make Your Smartness & Catch Your Bright Dream.</p>
                        </div>


                        <div className="group mt-5">
                            <div className="flex items-center group-hover:cursor-pointer ">
                                <div className="ml-5 relative">
                                    <img
                                        className="-left-2 top-1.5 absolute duration-300 group-hover:-left-1 mb:top-1"
                                        src={images.arrow}
                                        alt={images.arrow}
                                    />
                                    <img src={images.elliose} alt={images.elliose} />
                                </div>
                                <span className=" text-base font-medium group-hover:text-primary-100 ml-2">Explore More</span>

                            </div>
                        </div>
                    </div>




                    <div className=''>
                        <div >
                            <img className='overflow-hidden rounded-md' src="https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/blog/blog-img-02.png" alt="" />
                        </div>
                        <div className='grid grid-cols-3 text-[16px]'>
                            <div className='w-[67px] h-[67px] pt-2 rounded-md text-center text-white ml-4 -translate-y-8 bg-[#009FAC]  '>
                                <b>04</b>
                                <p>March</p>
                            </div>


                            <div className='ml-[-30px] mt-3 hover:text-[#009FAC] '>
                                <p>
                                    <FontAwesomeIcon icon={faMessage} className='mr-2 text-[#009FAC] ' />
                                    11 Comment
                                </p>

                            </div>

                            <div className='ml-[-20px] mt-3 hover:text-[#009FAC] '>
                                <p>
                                    <FontAwesomeIcon icon={faUser} className='mr-2 text-[#009FAC] ' />
                                    Mr. Jack Frank
                                </p>
                            </div>
                        </div>

                        {/* TITLE */}
                        <div className='text-[1.063rem] font-semibold ml-6 hover:text-[#009FAC]  transition duration-[350ms] ease-in-out'>
                            <p>Be Confident Your Dream & Struggle About Your Bright Dream.</p>
                        </div>


                        <div className="group mt-5">
                            <div className="flex items-center group-hover:cursor-pointer ">
                                <div className="ml-5 relative">
                                    <img
                                        className="-left-2 top-1.5 absolute duration-300 group-hover:-left-1 mb:top-1"
                                        src={images.arrow}
                                        alt={images.arrow}
                                    />
                                    <img src={images.elliose} alt={images.elliose} />
                                </div>
                                <span className=" text-base font-medium group-hover:text-primary-100 ml-2">Explore More</span>

                            </div>
                        </div>
                    </div>




                    <div className=''>
                        <div >
                            <img className='overflow-hidden rounded-md' src="https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/blog/blog-img-03.png" alt="" />
                        </div>
                        <div className='grid grid-cols-3 text-[16px]'>
                            <div className='w-[67px] h-[67px] pt-2 rounded-md text-center text-white ml-4 -translate-y-8 bg-[#009FAC]  '>
                                <b>05</b>
                                <p>March</p>
                            </div>


                            <div className='ml-[-30px] mt-3 hover:text-[#009FAC] '>
                                <p>
                                    <FontAwesomeIcon icon={faMessage} className='mr-2 text-[#009FAC] ' />
                                    02 Comment
                                </p>

                            </div>

                            <div className='ml-[-20px] mt-3 hover:text-[#009FAC] '>
                                <p>
                                    <FontAwesomeIcon icon={faUser} className='mr-2 text-[#009FAC] ' />
                                    Mr. Jack Frank
                                </p>
                            </div>
                        </div>

                        {/* TITLE */}
                        <div className='text-[1.063rem] font-semibold ml-6 hover:text-[#009FAC]  transition duration-[350ms] ease-in-out'>
                            <p>How To Be Confident When Your Job Viva In Online, You Get To Know.</p>
                        </div>


                        <div className="group mt-5">
                            <div className="flex items-center group-hover:cursor-pointer ">
                                <div className="ml-5 relative">
                                    <img
                                        className="-left-2 top-1.5 absolute duration-300 group-hover:-left-1 mb:top-1"
                                        src={images.arrow}
                                        alt={images.arrow}
                                    />
                                    <img src={images.elliose} alt={images.elliose} />
                                </div>
                                <span className=" text-base font-medium group-hover:text-primary-100 ml-2">Explore More</span>

                            </div>
                        </div>
                    </div>





                    <div className=''>
                        <div >
                            <img className='overflow-hidden rounded-md' src="https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/blog/blog-img-04.png" alt="" />
                        </div>
                        <div className='grid grid-cols-3 text-[16px]'>
                            <div className='w-[67px] h-[67px] pt-2 rounded-md text-center text-white ml-4 -translate-y-8 bg-[#009FAC]  '>
                                <b>08</b>
                                <p>April</p>
                            </div>


                            <div className='ml-[-30px] mt-3 hover:text-[#009FAC] '>
                                <p>
                                    <FontAwesomeIcon icon={faMessage} className='mr-2 text-[#009FAC] ' />
                                    12 Comment
                                </p>

                            </div>

                            <div className='ml-[-20px] mt-3 hover:text-[#009FAC] '>
                                <p>
                                    <FontAwesomeIcon icon={faUser} className='mr-2 text-[#009FAC] ' />
                                    Mr. Jack Frank
                                </p>
                            </div>
                        </div>

                        {/* TITLE */}
                        <div className='text-[1.063rem] font-semibold ml-6 hover:text-[#009FAC]  transition duration-[350ms] ease-in-out'>
                            <p>To Find Out Your Job Location With Discussion Among Others.</p>
                        </div>


                        <div className="group mt-5">
                            <div className="flex items-center group-hover:cursor-pointer ">
                                <div className="ml-5 relative">
                                    <img
                                        className="-left-2 top-1.5 absolute duration-300 group-hover:-left-1 mb:top-1"
                                        src={images.arrow}
                                        alt={images.arrow}
                                    />
                                    <img src={images.elliose} alt={images.elliose} />
                                </div>
                                <span className=" text-base font-medium group-hover:text-primary-100 ml-2">Explore More</span>

                            </div>
                        </div>
                    </div>



                    <div className=''>
                        <div >
                            <img className='overflow-hidden rounded-md' src="https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/blog/blog-img-05.png" alt="" />
                        </div>
                        <div className='grid grid-cols-3 text-[16px]'>
                            <div className='w-[67px] h-[67px] pt-2 rounded-md text-center text-white ml-4 -translate-y-8 bg-[#009FAC]  '>
                                <b>11</b>
                                <p>August</p>
                            </div>


                            <div className='ml-[-30px] mt-3 hover:text-[#009FAC] '>
                                <p>
                                    <FontAwesomeIcon icon={faMessage} className='mr-2 text-[#009FAC] ' />
                                    22 Comment
                                </p>

                            </div>

                            <div className='ml-[-20px] mt-3 hover:text-[#009FAC] '>
                                <p>
                                    <FontAwesomeIcon icon={faUser} className='mr-2 text-[#009FAC] ' />
                                    Mr. Jack Frank
                                </p>
                            </div>
                        </div>

                        {/* TITLE */}
                        <div className='text-[1.063rem] font-semibold ml-6 hover:text-[#009FAC]  transition duration-[350ms] ease-in-out'>
                            <p>Be Awareness Your Job Interviewing & Be Punctual Your Time.</p>
                        </div>


                        <div className="group mt-5">
                            <div className="flex items-center group-hover:cursor-pointer ">
                                <div className="ml-5 relative">
                                    <img
                                        className="-left-2 top-1.5 absolute duration-300 group-hover:-left-1 mb:top-1"
                                        src={images.arrow}
                                        alt={images.arrow}
                                    />
                                    <img src={images.elliose} alt={images.elliose} />
                                </div>
                                <span className=" text-base font-medium group-hover:text-primary-100 ml-2">Explore More</span>

                            </div>
                        </div>
                    </div>



                    <div className=''>
                        <div >
                            <img className='overflow-hidden rounded-md' src="https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/blog/blog-img-06.png" alt="" />
                        </div>
                        <div className='grid grid-cols-3 text-[16px]'>
                            <div className='w-[67px] h-[67px] pt-2 rounded-md text-center text-white ml-4 -translate-y-8 bg-[#009FAC]  '>
                                <b>12</b>
                                <p>June</p>
                            </div>


                            <div className='ml-[-30px] mt-3 hover:text-[#009FAC] '>
                                <p>
                                    <FontAwesomeIcon icon={faMessage} className='mr-2 text-[#009FAC] ' />
                                    07 Comment
                                </p>

                            </div>

                            <div className='ml-[-20px] mt-3 hover:text-[#009FAC] '>
                                <p>
                                    <FontAwesomeIcon icon={faUser} className='mr-2 text-[#009FAC] ' />
                                    Mr. Jack Frank
                                </p>
                            </div>
                        </div>

                        {/* TITLE */}
                        <div className='text-[1.063rem] font-semibold ml-6 hover:text-[#009FAC]  transition duration-[350ms] ease-in-out'>
                            <p>How To Improve Your Interview Question & Easy Answering Step By Step.</p>
                        </div>


                        <div className="group mt-5">
                            <div className="flex items-center group-hover:cursor-pointer ">
                                <div className="ml-5 relative">
                                    <img
                                        className="-left-2 top-1.5 absolute duration-300 group-hover:-left-1 mb:top-1"
                                        src={images.arrow}
                                        alt={images.arrow}
                                    />
                                    <img src={images.elliose} alt={images.elliose} />
                                </div>
                                <span className=" text-base font-medium group-hover:text-primary-100 ml-2">Explore More</span>

                            </div>
                        </div>
                    </div>



















                </div>



            </div>
            {/* Mục lục trang */}


            <div className='w-[20%]  m-auto mt-14 text-[14px] font-semibold'>
                <ul className='grid grid-cols-5 text-center'>
                    <li>
                        <a href="#">
                        <div className="group">
                                <div className="flex items-center group-hover:cursor-pointer ">
                                    <div className="ml-5 relative">
                                        <img
                                            className="left-3 top-1.5 absolute duration-300 "
                                            src={images.arrowLeft}
                                            alt={images.arrowLeft}
                                        />
                                        <img src={images.elliose} alt={images.elliose} />
                                    </div>

                                </div>
                            </div>
                        </a>
                    </li>
                    <li className='ml-5 pt-[2px] w-7 h-7 text-white hover:text-white  border rounded-full bg-[#009FAC] '><a href="#" >01</a></li>
                    <li className='ml-5 pt-[2px] w-7 h-7  border rounded-full border-[#009FAC]  hover:bg-[#009FAC]  hover:text-white'><a href="#">02</a></li>
                    <li className='ml-5 pt-[2px] w-7 h-7   border rounded-full border-[#009FAC]  hover:bg-[#009FAC]  hover:text-white'><a href="#">03</a></li>
                    <li>
                        <a href="#">
                            <div className="group">
                                <div className="flex items-center group-hover:cursor-pointer ">
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
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default BlogGrid
