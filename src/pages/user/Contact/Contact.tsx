import Banner from '@/components/Banner/Banner';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneVolume, faLocationDot } from '@fortawesome/free-solid-svg-icons';
const Contact = () => {
    return (
        <div>
            <Banner page="Liên hệ" />
            <div className="max-w-7xl ml-auto mr-auto pt-28 flex justify-between">
                <div className="w-[100%] grid grid-cols-3 gap-10 text-[1.125rem] font-normal">
                    <div>
                        <p className="text-center font-semibold">Main Office</p>
                        <div className="rounded-md border-solid border-2 border-gray-200 mt-5 pl-5 pt-2 leading-10">
                            <p className=" font-semibold">Dhaka, Bangladesh</p>
                            <p className="hover:text-[#009FAC] ">
                                <FontAwesomeIcon icon={faPhoneVolume} className="mr-2 text-[#009FAC] " />
                                +880-187 346 8987
                            </p>

                            <p className="hover:text-[#009FAC] ">
                                <FontAwesomeIcon icon={faLocationDot} className="mr-2 text-[#009FAC] " />
                                Mirpur DOSH, Avenue-01, Road-02, House-147/148
                            </p>
                        </div>
                    </div>

                    <div>
                        <p className="text-center text-[1.25rem] font-semibold">Office-01</p>
                        <div className="rounded-md border-solid border-2 border-gray-200 mt-5 pl-5 pt-2 leading-10">
                            <p className=" font-semibold">New York, USA</p>
                            <p className="hover:text-[#009FAC] ">
                                <FontAwesomeIcon icon={faPhoneVolume} className="mr-2 text-[#009FAC] " />
                                +981-187 346 8987
                            </p>

                            <p className="hover:text-[#009FAC] ">
                                <FontAwesomeIcon icon={faLocationDot} className="mr-2 text-[#009FAC] " />
                                New York, Avenue-01, Block-B, House-140/142
                            </p>
                        </div>
                    </div>

                    <div>
                        <p className="text-center text-[1.25rem] font-semibold">Office-02</p>
                        <div className="rounded-md border-solid border-2 border-gray-200 mt-5 pl-5 pt-2 leading-10">
                            <p className=" font-semibold">London City, UK</p>
                            <p className="hover:text-[#009FAC] ">
                                <FontAwesomeIcon icon={faPhoneVolume} className="mr-2 text-[#009FAC] " />
                                +998-737 346 898
                            </p>

                            <p className="hover:text-[#009FAC] ">
                                <FontAwesomeIcon icon={faLocationDot} className="mr-2 text-[#009FAC] " />
                                West London, Avenue-05, Block No-C, House-08/10
                            </p>
                        </div>
                    </div>
                </div>

                {/* Gan GOOGLE MAP */}
            </div>

            <div className="mt-10">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.4435924064937!2d106.62525347481908!3d10.853826357761717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752bee0b0ef9e5%3A0x5b4da59e47aa97a8!2zQ8O0bmcgVmnDqm4gUGjhuqduIE3hu4FtIFF1YW5nIFRydW5n!5e0!3m2!1svi!2s!4v1692362389005!5m2!1svi!2s"
                    width="600"
                    height="450"
                    loading="lazy"
                    className="w-full"
                ></iframe>
            </div>
        </div>
    );
};

export default Contact;
