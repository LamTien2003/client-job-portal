import Company from "@/types/Company";

type Props = {
    data: Company
}

function AboutCompany(props: Props) {

    const {data: company} = props
    return (
        <div className=" w-2/3 pr-3 lg:w-full">
            <div className=" mb-10">
                <h3 className=" text-content-title text-lg font-semibold mb-2">About Company</h3>
                <p className=" text-base font-medium">
                    {company?.description}
                </p>
            </div>
            <div>
                <h3 className="text-content-title text-lg font-semibold mb-4">Working Area</h3>
                <div className=" tb:flex-col">
                    <div className=" pt-5 mb-12 flex justify-start tb:flex-col">
                        <div className=" w-5/12 mr-32 flex items-start tb:w-2/3 tb:mb-12 ">
                            <img src="https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/icon/creative-design.svg" />
                            <div className=" pl-5 flex flex-col relative">
                                <h4 className=" text-content-title text-base font-semibold mb-2">Creative Design</h4>
                                <p>Creative design is a process that involves creating</p>
                                <span className=" text-primary-100 font-semibold text-base top-0 right-0 absolute">01</span>
                            </div>
                        </div>
                        <div className=" w-5/12 flex items-start tb:w-2/3">
                            <img src="https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/icon/react-next.svg" />
                            <div className=" pl-5 flex flex-col relative">
                                <h4 className=" text-content-title text-base font-semibold mb-2">Creative Design</h4>
                                <p>Creative design is a process that involves creating</p>
                                <span className=" text-primary-100 font-semibold text-base top-0 right-0 absolute">02</span>
                            </div>
                        </div>
                    </div>
                    <div className=" flex justify-start tb:flex-col">
                        <div className=" w-5/12 mr-32 flex items-start tb:w-2/3 tb:mb-12 ">
                            <img src="	https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/icon/html-tem.svg" />
                            <div className=" pl-5 flex flex-col relative">
                                <h4 className=" text-content-title text-base font-semibold mb-2">Creative Design</h4>
                                <p>Creative design is a process that involves creating</p>
                                <span className=" text-primary-100 font-semibold text-base top-0 right-0 absolute">03</span>
                            </div>
                        </div>
                        <div className=" w-5/12 flex items-start tb:w-2/3">
                            <img src="https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/icon/wordpress.svg" />
                            <div className=" pl-5 flex flex-col relative">
                                <h4 className=" text-content-title text-base font-semibold mb-2">Creative Design</h4>
                                <p>Creative design is a process that involves creating</p>
                                <span className=" text-primary-100 font-semibold text-base top-0 right-0 absolute">04</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutCompany;