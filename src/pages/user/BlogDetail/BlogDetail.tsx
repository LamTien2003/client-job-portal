
import Banner from '@/components/Banner/Banner';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage, faUser, faCalendar } from "@fortawesome/free-regular-svg-icons";
import { faFacebookF, faXTwitter, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';

import { faAngleLeft, faAngleRight, faReply } from "@fortawesome/free-solid-svg-icons";
const BlogDetail = () => {
  return (
    <div className="max-w-7xl m-auto">
      <Banner page='Blog' />
      <div className='w-[100%] grid grid-cols-3 gap-4 mt-24'>


        {/* Chiếm 2 cột trái */}
        <div className='col-span-2 '>

          <div>
            <div className='rounded-md overflow-hidden'>
              <img src="https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/blog/blog-dt-img.png" alt="" />
            </div>
            <div className='grid grid-cols-6 text-[16px]'>
              <div className='w-[67px] h-[67px] pt-2 rounded-md text-center text-[#009FAC]  bg-[#f8f8f8] ml-4 -translate-y-8 border-solid border-[1px] border-[#009FAC]  '>
                <b>02</b>
                <p>March</p>
              </div>


              <div className='ml-[-30px] text-content-text mt-3 hover:text-[#009FAC] '>
                <p>
                  <FontAwesomeIcon icon={faMessage} className='mr-2 text-[#009FAC] ' />
                  03 Comment
                </p>

              </div>

              <div className='ml-[-20px] text-content-text mt-3 hover:text-[#009FAC] '>
                <p>
                  <FontAwesomeIcon icon={faUser} className='mr-2 text-[#009FAC] ' />
                  Mr. Jack Frank
                </p>
              </div>
            </div>
          </div>


          <div>
            <p className='text-[2.25rem] font-semibold'>How To Improve Your Interview Question & Easy Answering Step By Step.</p>
          </div>

          <hr className="my-5 border-t-2 border-[rgba(0,167,172,.1607843137)]" />

          <p className='text-content-text leading-8 mb-[35px]'>
            <span className='text-[2.25rem]'>A</span>
            n interview blog is a type of blog that focuses on conducting and publishing interviews with experts, thought leaders, or individuals with unique experiences or perspectives. Interview blogs can cover a wide range of topics and industries, and are often used to share insights, advice, and personal stories with a wider audience. It's important to have a consistent and engaging style to post, and also consider the audience you are writing for, in terms of language and technical terms used.
          </p>

          <h4 className='text-[1.5rem] font-medium mb-[20px]'>How To Improve Your Job Interview</h4>


          <ul className='mb-5'>
            <li>
              <div>
                <img src="https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/icon/check-icon.svg" alt="" />
              </div>
              <p className='font-normal text-[1.063rem] text-content-text ml-8 -translate-y-5'>
                <span className='text-[1.125rem] font-medium'>Prepare for the interview: </span>
                Research the company and the position you are applying for, as well as the person you will be interviewing with. Prepare a list of questions you would like to interview.
              </p>
            </li>


            <li>
              <div>
                <img src="https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/icon/check-icon.svg" alt="" />
              </div>
              <p className='font-normal text-[1.063rem] text-content-text ml-8 -translate-y-5'>
                <span className='text-[1.125rem] font-medium'>Dress professionally: </span>
                Make sure you are dressed appropriately for the interview. Business attire is usually the best option              </p>
            </li>


            <li>
              <div>
                <img src="https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/icon/check-icon.svg" alt="" />
              </div>
              <p className='font-normal text-[1.063rem] text-content-text ml-8 -translate-y-5'>
                <span className='text-[1.125rem] font-medium'>
                  Arrive on time: </span>
                It is important to arrive at the interview on time. If you are running late, be sure to call and let the interviewer know.              </p>
            </li>

            <li>
              <div>
                <img src="https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/icon/check-icon.svg" alt="" />
              </div>
              <p className='font-normal text-[1.063rem] text-content-text ml-8 -translate-y-5'>
                <span className='text-[1.125rem] font-medium'>Greet the interviewer: </span>
                Shake hands with the interviewer and introduce yourself. Make sure to use their name and to maintain eye contact.              </p>
            </li>
          </ul>




          <div className='w-[100%] grid grid-cols-2 gap-4 mb-8'>
            <div className='rounded-md overflow-hidden'>
              <img src="https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/blog/blog-dt-img2.png" alt="" />
            </div>
            <div className='rounded-md overflow-hidden'>
              <img src="https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/blog/blog-dt-img3.png" alt="" />
            </div>
          </div>






          <div className='w-full grid grid-cols-2 mb-8 '>
            <div className='w-[70%] grid grid-cols-8 gap-4'>
              <h6 className='col-span-1 text-[1.125rem] font-medium '>
                Tag:
              </h6>
              <div className="col-span-7 ">
                <ul className="flex text-[1rem] font-medium text-content-text space-x-3 pl-4">
                  <li>
                    <a href="#">Job</a>
                  </li>
                  <li>
                    <a href="#">Career</a>
                  </li>
                  <li className="whitespace-nowrap">
                    <a href="#">UI/UX Design</a>
                  </li>
                  <li className="whitespace-nowrap">
                    <a href="#">Job Research</a>
                  </li>
                </ul>
              </div>


            </div>

            <div>
              <div className="float-right w-[90%]  grid grid-cols-8 pl-[50px] space-x-1 translate-x-12">
                <div className="col-span-3 font-medium ">Follow JOBES:</div>
                <div className="icon pl-[9px]"><FontAwesomeIcon icon={faFacebookF} /></div>
                <div className="icon pl-[6px]"><FontAwesomeIcon icon={faXTwitter} /></div>

                <div className="icon pl-[7px]"><FontAwesomeIcon icon={faLinkedinIn} /></div>


                <div className="icon pl-[6px]"><FontAwesomeIcon icon={faInstagram} /></div>


              </div>
            </div>
          </div>



          {/* 2 nut chuyen */}
          <div className=' w-full h-[118px] border-t-[1px] border-b-[1px] border-[#eee] mb-20'>
            <div className='w-14 h-14 rounded-full  translate-y-8 border-[1px] border-[#009FAC] '>
              <FontAwesomeIcon icon={faAngleLeft} className='text-2xl pl-5 pt-4 text-[#009FAC] ' />
            </div>

            <div className='float-right w-14 h-14 rounded-full -translate-y-6  border-[1px] border-[#009FAC] '>
              <FontAwesomeIcon icon={faAngleRight} className='text-2xl pl-5 pt-4 text-[#009FAC] ' />
            </div>
          </div>



          <div className='w-full mb-20'>
            <div className='mb-5'>
              <h5 className='text-content-title text-[1.125rem] font-semibold'>
                02 Comments:
              </h5>
            </div>

            <ul className='leading-8 text-content-text'>
              <li className='mb-5'>
                <div className='w-full grid grid-cols-7 gap-4'>
                  <div  >
                    <img className='rounded-md' src="https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/blog/comment-author1.png" alt="" />
                  </div>

                  <div className='col-span-6'>
                    <div>
                      <div className='w-[70%]  grid grid-cols-3'>
                        <h6 className='text-content-title font-semibold text-[1rem]'>Loiuse Brown,</h6>
                        <span className='ml-[-30px]'>
                          <FontAwesomeIcon icon={faCalendar} className='mr-2 text-[#009FAC] ' />
                          03 August, 2023
                        </span>
                      </div>

                      <div className='float-right -translate-y-8 text-[#009FAC]  hover:text-black'>
                        <FontAwesomeIcon icon={faReply} className='mr-2 ' />
                        <a href="">Reply</a>
                      </div>
                    </div>

                    <p>“Authentic reviews help companies to build a relationship with customers by providing a transparent representation of their product or service”.</p>
                  </div>
                </div>
              </li>

              <li className='mb-5'>
                <div className='w-full grid grid-cols-7 gap-4'>
                  <div  >
                    <img className='rounded-md' src="https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/blog/comment-author2.png" alt="" />
                  </div>

                  <div className='col-span-6'>
                    <div>
                      <div className='w-[70%]  grid grid-cols-3'>
                        <h6 className='text-content-title font-semibold text-[1rem]'>Macoline Farray,</h6>
                        <span className='ml-[-30px]'>
                          <FontAwesomeIcon icon={faCalendar} className='mr-2 text-[#009FAC] ' />
                          11 July, 2023
                        </span>
                      </div>

                      <div className='float-right -translate-y-8 text-[#009FAC]  hover:text-black'>
                        <FontAwesomeIcon icon={faReply} className='mr-2 ' />
                        <a href="">Reply</a>
                      </div>
                    </div>

                    <p>“Authentic reviews help companies to build a relationship with customers by providing a transparent representation of their product or service”.

                      Leave A Reply</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>


          <div >
            <form className='w-full bg-[#f8f8f8] rounded-md pl-10 pb-10  leading-10'>

              <div>
                <h5 className='font-semibold text-content-title text-[1.25rem] pt-5'>Leave A Reply</h5>
              </div>

              <div className='grid grid-cols-2 '>
                <div>
                  <label>Your Name*</label> <br />
                  <div className='border-r-2 border-[#009FAC]  w-5 translate-x-3 translate-y-[30px]'>
                    <img src="https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/icon/user-2.svg" alt="" />
                  </div>

                  <input type="text" placeholder='Mr. Jackson Mile' className='' />
                </div>


                <div>
                  <label>Email*</label> <br />
                  <div className='border-r-2 border-[#009FAC]  w-5 translate-x-3 translate-y-[30px]'>
                    <img src="https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/icon/email-2.svg" alt="" />
                  </div>
                  <input type="email" placeholder='info@example.com' />
                </div>






              </div>


              <label >Message</label><br />
              <textarea className='pl-5 text-[.875rem] font-normal h-[100px] w-[95%] rounded-md border-[0.5px] border-[#009FAC]  focus:outline-none hover:border-2' placeholder='Message...'>

              </textarea>

              <button type='button' className='text-[17px] text-white font-medium w-[172px] h-[45px] bg-[#009FAC]  rounded-md mt-5 hover:bg-black '>
                Send Message
              </button>


            </form>
          </div>


        </div>





        {/* 1 cột bên phải */}
        <div className='bg-gray-400 '>
          <div></div>

          <div className='h-[400px] bg-[#f8f8f8] rounded-lg '>
            <div className='ml-6 mr-6 leading-7'>
              <h5 className='font-semibold text-content-title text-[1.25rem] pt-5'>Hey! Do You Looking For Any Jobs?</h5>
              <p className='font-normal text-[1rem] text-content-text mt-3'>Job agencies may also offer additional services such as resume building.</p>
            </div>

            <div>
            <button type='button' className='ml-6 text-[1.063rem] text-white font-medium w-[118px] h-[41px] bg-[#009FAC]  rounded-md mt-5 hover:bg-black transition duration-500 ease-all'>
                Find Jod
              </button>
            </div>

            <div className='pl-24 mb-[50px] bg-pink-300'>
              <img src="https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/blog/find-job.png" alt="" />
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default BlogDetail
