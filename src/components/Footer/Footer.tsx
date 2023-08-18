import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightDots } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <footer className="bg-footer-bg text-white min-h-[539px]  px-20">
            {/* FOOTER trên */}
            <div className="grid grid-cols-4 pt-[93px] max-w-7xl m-auto mt-12 ">
                <div>
                    <p className="title-ft">About Company</p>
                    <ul className="text-ft">
                        <li className="flex items-center group">
                            <span>Contact Us</span>
                            <FontAwesomeIcon
                                className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                icon={faArrowUpRightDots}
                            />
                        </li>

                        <li className="flex items-center group">
                            <span>Terms & Condition</span>
                            <FontAwesomeIcon
                                className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                icon={faArrowUpRightDots}
                            />
                        </li>

                        <li className="flex items-center group">
                            <span>Privacy & Policy</span>
                            <FontAwesomeIcon
                                className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                icon={faArrowUpRightDots}
                            />
                        </li>

                        <li className="flex items-center group">
                            <span>Candidate Listing</span>
                            <FontAwesomeIcon
                                className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                icon={faArrowUpRightDots}
                            />
                        </li>
                    </ul>
                </div>
                <div>
                    <p className="title-ft">For Candidate's</p>
                    <ul className="text-ft">
                        <li className="flex items-center group">
                            <span>Create Resume</span>
                            <FontAwesomeIcon
                                className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                icon={faArrowUpRightDots}
                            />
                        </li>

                        <li className="flex items-center group">
                            <span>Browse Categories</span>
                            <FontAwesomeIcon
                                className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                icon={faArrowUpRightDots}
                            />
                        </li>

                        <li className="flex items-center group">
                            <span>Save Jobs List</span>
                            <FontAwesomeIcon
                                className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                icon={faArrowUpRightDots}
                            />
                        </li>

                        <li className="flex items-center group">
                            <span>Browse Job</span>
                            <FontAwesomeIcon
                                className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                icon={faArrowUpRightDots}
                            />
                        </li>

                        <li className="flex items-center group">
                            <span>Candidate Dashboard</span>
                            <FontAwesomeIcon
                                className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                icon={faArrowUpRightDots}
                            />
                        </li>
                    </ul>
                </div>
                <div>
                    <p className="title-ft">For Employer's</p>
                    <ul className="text-ft">
                        <li className="flex items-center group">
                            <span>Post A Job</span>
                            <FontAwesomeIcon
                                className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                icon={faArrowUpRightDots}
                            />
                        </li>

                        <li className="flex items-center group">
                            <span>Browse Candidates</span>
                            <FontAwesomeIcon
                                className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                icon={faArrowUpRightDots}
                            />
                        </li>

                        <li className="flex items-center group">
                            <span>Job Packages</span>
                            <FontAwesomeIcon
                                className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                icon={faArrowUpRightDots}
                            />
                        </li>

                        <li className="flex items-center group">
                            <span>Jobs Featured</span>
                            <FontAwesomeIcon
                                className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                icon={faArrowUpRightDots}
                            />
                        </li>

                        <li className="flex items-center group">
                            <span>Employer Dashboard</span>
                            <FontAwesomeIcon
                                className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                icon={faArrowUpRightDots}
                            />
                        </li>
                    </ul>
                </div>
                <div className="">
                    <p className="title-ft ">Download App</p>
                    <div className="w-[189px] h-[75px] rounded-md mt-[20px] border-solid border  border-footer-color-boder">
                        <img
                            className="m-auto mt-[12px]"
                            src="https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/icon/apple-app.svg"
                            alt=""
                        />
                    </div>
                    <div className="w-[189px] h-[75px] rounded-md mt-[20px] border-solid border border-footer-color-boder">
                        <img
                            className="m-auto mt-[12px]"
                            src="https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/icon/google-play.svg"
                            alt=""
                        />
                    </div>
                </div>
            </div>

            {/* FOOTER dưới */}
            <div className=" mt-[70px] h-[100px] ">
                <div className="grid grid-cols-3 pt-0">
                    <div className="flex items-center space-x-4">
                        <img
                            className="w-[30px]"
                            src="https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/icon/footer-support-icon.svg"
                            alt=""
                        />
                        <p className="title-ft border-l-2 border-footer-color-hover pl-[10px]">Support Line:</p>
                        <a
                            href="#"
                            className="text-footer-color-hover text-[1.25rem] ml-[20px] underline decoration-solid hover:text-footer-text"
                        >
                            +099-035 7398 3465
                        </a>
                    </div>

                    <div className="col-start-3 items-center space-x-3 ">
                        <a href="#" className="text-ft hover:text-footer-color-hover">
                            Privacy Policy
                        </a>
                        <a href="#" className="text-ft hover:text-footer-color-hover">
                            Terms of Services
                        </a>
                        <a href="#" className="text-ft hover:text-footer-color-hover">
                            Our Sitemap
                        </a>
                    </div>
                </div>
            </div>
            <div className="w-full -translate-y-10">
                <img
                    className="m-auto mt-[-40px]"
                    src="https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/footer-logo.svg"
                    alt=""
                />
                <div className="flex items-center justify-between px-4 my-2 border-t-2 border-footer-color-boder -translate-y-20">
                    <div className="text-center text-[14px] p-4">
                        <p className="tracking-wider">
                            ©Copyright 2023 <span className="text-footer-color-hover">JOBES</span> | Design By{' '}
                            <span className="text-footer-color-hover">Egenslab</span>
                        </p>
                    </div>

                    <div className=" text-center text-[14px] py-2">
                        <p className="w-full tracking-wider float-right font-medium">Follow JOBES: </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
