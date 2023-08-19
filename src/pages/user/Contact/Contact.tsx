import Banner from '@/components/Banner/Banner';


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneVolume, faLocationDot } from "@fortawesome/free-solid-svg-icons";
const Contact = () => {
  return (
    <div className='max-w-7xl m-auto'>
      <Banner page='Contact' />
      <div className=' w-[100%] ml-auto mr-auto pt-28 flex justify-between'>
        <div className='w-[100%] grid grid-cols-3 gap-10 text-[1.125rem] font-normal'>
          <div >
            <p className='text-center font-semibold'>Main Office</p>
            <div className='rounded-md border-solid border-2 border-gray-200 mt-5 pl-5 pt-2 leading-10'>
              <p className=' font-semibold'>Dhaka, Bangladesh</p>
              <p className='hover:text-footer-color-hover'>
                <FontAwesomeIcon icon={faPhoneVolume} className='mr-2 text-footer-color-hover' />
                +880-187 346 8987
              </p>

              <p className='hover:text-footer-color-hover'><FontAwesomeIcon icon={faLocationDot} className='mr-2 text-footer-color-hover' />
                Mirpur DOSH, Avenue-01, Road-02, House-147/148
              </p>
            </div>
          </div>


          <div  >
            <p className='text-center text-[1.25rem] font-semibold'>Office-01</p>
            <div className='rounded-md border-solid border-2 border-gray-200 mt-5 pl-5 pt-2 leading-10'>
              <p className=' font-semibold'>New York, USA</p>
              <p className='hover:text-footer-color-hover'>
                <FontAwesomeIcon icon={faPhoneVolume} className='mr-2 text-footer-color-hover' />
                +981-187 346 8987
              </p>

              <p className='hover:text-footer-color-hover'><FontAwesomeIcon icon={faLocationDot} className='mr-2 text-footer-color-hover' />
                New York, Avenue-01, Block-B, House-140/142
              </p>
            </div>
          </div>



          <div >
            <p className='text-center text-[1.25rem] font-semibold'>Office-02</p>
            <div className='rounded-md border-solid border-2 border-gray-200 mt-5 pl-5 pt-2 leading-10'>
              <p className=' font-semibold'>London City, UK</p>
              <p className='hover:text-footer-color-hover'>
                <FontAwesomeIcon icon={faPhoneVolume} className='mr-2 text-footer-color-hover' />
                +998-737 346 898
              </p>

              <p className='hover:text-footer-color-hover'><FontAwesomeIcon icon={faLocationDot} className='mr-2 text-footer-color-hover' />
                West London, Avenue-05, Block No-C, House-08/10
              </p>
            </div>
          </div>

        </div>







      </div>
      {/* Gan GOOGLE MAP */}
      <div className='m-auto mt-10  '>
        <iframe className='w-[100%] h-[360px] rounded-lg' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.4435924064937!2d106.62525347481908!3d10.853826357761717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752bee0b0ef9e5%3A0x5b4da59e47aa97a8!2zQ8O0bmcgVmnDqm4gUGjhuqduIE3hu4FtIFF1YW5nIFRydW5n!5e0!3m2!1svi!2s!4v1692362389005!5m2!1svi!2s" loading="lazy" ></iframe>

      </div>


      <div className='grid grid-cols-2 mt-28 gap-4'>
        <div >
          <p className='text-[1.5rem] font-semibold '>Need Any Help? Contact Us</p>
          <p className='font-normal text-[1.125rem] text-content-text mt-4'>
            Alternatively you can also check for the Company email, phone number and address in the official website.
          </p>
          <div className="flex items-center space-x-4 mt-8">
            <img className="w-[30px]" src="https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/icon/footer-support-icon.svg" alt="" />
            <p className="title-ft border-l-2 border-footer-color-hover pl-[10px]" >Support Line:</p>
            <a href="#" className="text-footer-color-hover text-[1.25rem] ml-[20px] underline decoration-solid hover:text-black">+099-035 7398 3465</a>
          </div>

          <p className='text-content-text text-[1rem] mt-4'><span className='text-red-600 font-semibold mr-2'>N:B</span>
            Our Customer Service Available from 9 am to 6 pm (Saturday to Thursday)</p>

        </div>



        <div>
          <form className='w-[100%]  leading-10'>
            <div className='grid grid-cols-2 '>
              <div>
                <label>Your Name*</label> <br />
                <div className='border-r-2 border-footer-color-hover w-5 translate-x-3 translate-y-[30px]'>
                <img src="https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/icon/user-2.svg" alt=""  />
                </div>
               
                <input type="text" placeholder='Mr. Jackson Mile' className='' />
              </div>


              <div>
                <label>Email*</label> <br />
                <div className='border-r-2 border-footer-color-hover w-5 translate-x-3 translate-y-[30px]'>
                <img src="https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/icon/email-2.svg" alt=""  />
                </div>
                <input type="email" placeholder='info@example.com' />
              </div>


              <div>
                <label>Phone*</label> <br />
                <div className='border-r-2 border-footer-color-hover w-5 translate-x-3 translate-y-[30px]'>
                <img src="https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/icon/phone-2.svg" alt=""  />
                </div>
                <input type="text" placeholder='+880-17 *** *** **' />
              </div>


              <div>
                <label>Company Name(Optional)</label> <br />
                <div className='border-r-2 border-footer-color-hover w-5 translate-x-3 translate-y-[30px]'>
                <img src="https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/icon/company-2.svg" alt=""  />
                </div>
                <input type="text" placeholder='Company name' />
              </div>
            </div>


            <label >Message</label><br />
            <textarea className='pl-5 text-[.875rem] font-normal h-[100px] w-[95%] rounded-md border-[0.5px] border-footer-color-hover focus:outline-none hover:border-2' placeholder='Message...'>

            </textarea>

<button type='button' className='text-[17px] text-white font-medium w-[172px] h-[45px] bg-footer-color-hover rounded-md mt-5 hover:bg-black '>
    Send Message
</button>


          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
