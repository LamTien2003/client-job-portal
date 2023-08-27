import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";

function MoreInfo() {
    return (
        <div>
            <div className=" flex mb-7.5">
                <img className=" mr-1.5" src="https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/icon/company-2.svg" />
                <Link className=" text-content-text text-cb font-medium duration-300 hover:text-primary-100" to={'/job-listing'}>View All Jobs In This Company</Link>
            </div>

            <div className=" flex items-center mb-12 mb:flex-col mb:items-start">
                <p className=" text-content-title text-cb font-semibold mr-6 mb:mb-2">Job Link Share:</p>
                <div className=" flex">
                    <div className=" group mr-3.5 ">
                        <button className=" w-6.5 h-6.5 border border-primary-100 rounded-full duration-300 group-hover:bg-primary-100 ">
                            <FontAwesomeIcon className=" w-3.5 text-primary-100 duration-300 group-hover:text-white" icon={faLink} />
                        </button>
                    </div>
                    <div className=" group mr-3.5 ">
                        <button className=" w-6.5 h-6.5 border border-primary-100 rounded-full duration-300 group-hover:bg-primary-100 ">
                            <FontAwesomeIcon className=" w-3 text-primary-100 duration-300 group-hover:text-white" icon={faFacebookF} />
                        </button>
                    </div>
                    <div className=" group mr-3.5 ">
                        <button className=" w-6.5 h-6.5 border border-primary-100 rounded-full duration-300 group-hover:bg-primary-100 ">
                            <FontAwesomeIcon className=" w-3.5 text-primary-100 duration-300 group-hover:text-white" icon={faTwitter} />
                        </button>
                    </div>
                    <div className=" group mr-3.5 ">
                        <button className=" w-6.5 h-6.5 border border-primary-100 rounded-full duration-300 group-hover:bg-primary-100 ">
                            <FontAwesomeIcon className=" w-3 text-primary-100 duration-300 group-hover:text-white" icon={faLinkedinIn} />
                        </button>
                    </div>
                    <div className=" group mr-3.5 ">
                        <button className=" w-6.5 h-6.5 border border-primary-100 rounded-full duration-300 group-hover:bg-primary-100 ">
                            <FontAwesomeIcon className=" w-3.5 text-primary-100 duration-300 group-hover:text-white" icon={faInstagram} />
                        </button>
                    </div>
                </div>
            </div>
            
            <div className=" border border-content-border rounded p-7.5 mb-12">
                <div className=" mb-3 flex items-center justify-around">
                    <div className=" w-25 h-px border-t border-content-border xl:w-18 lg:w-4/12 mb:w-1/4"></div>
                    <div className=" flex">
                        <img src="https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/icon/email-2.svg" />
                        <p className=" text-content-title font-medium ml-2 xl:ml-1.5">Email Now</p>
                    </div>
                    <div className=" w-25 h-px border-t border-content-border xl:w-18 lg:w-4/12 mb:w-1/4"></div>
                </div>
                <div className=" text-center">
                    <p className=" text-cb font-normal ">Send your resume at <span className=" text-content-link font-semibold ">info@example.com</span></p>
                </div>
            </div>
            <div>
                <p className=" text-content-title text-cb font-semibold mr-6 mb-7.5">Get Location:</p>
                <div>
                    <iframe 
                        className=" w-full h-52 rounded-md lg:h-72" 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5383.759320360064!2d106.62307466104055!3d10.853877228666475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752bee0b0ef9e5%3A0x5b4da59e47aa97a8!2zQ8O0bmcgVmnDqm4gUGjhuqduIE3hu4FtIFF1YW5nIFRydW5n!5e0!3m2!1svi!2s!4v1691931941360!5m2!1svi!2s">
                    </iframe>
                </div>
            </div>
        </div>
    );
}

export default MoreInfo;