import Company from "@/types/Company";
import { faFacebookF, faInstagram, faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {
    data: Company
}

function CompanyInfo(props: Props) {

    const {data: company} = props

    return (
        <>
            <div className=" relative">
                <img className=" w-full mr-auto ml-auto rounded-t-xl" src="https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/bg/blog-dt-img.png" />
                <div className=" w-22.5 h-22.5 bg-content-bg rounded -bottom-11.25 left-1/2 -translate-x-1/2 rotate-45 flex items-center justify-center absolute">
                    <img className=" rounded-full" src="https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/bg/blog-dt-logo.png" />
                </div>
            </div>
            <div className=" w-full pt-7.5 pr-7.5 pl-7.5 pb-12 mr-auto ml-auto flex justify-between lg:flex-col">
                <div className=" flex flex-col lg:mb-2">
                    <h1 className=" text-content-title text-2xl font-semibold mb-2.5">{company.companyName}</h1>
                    <div className=" flex">
                        <div className=" flex">
                            <img src="https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/icon/map-2.svg" />
                            <p className=" text-sm font-medium ml-2">{company.location}</p>
                        </div>
                        <div className=" flex ml-7 ">
                            <img src="https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/icon/category-2.svg" />
                            <p className=" text-sm font-medium ml-2"><span className=" text-content-title font-semibold mr-1.5">Category:</span>Software Agency</p>
                        </div>
                    </div>
                </div>
                <div className=" flex mb:flex-col">
                    <div className=" flex flex-col items-center lg:items-start mb:mb-2">
                        <div className=" mb-2 flex">
                            <img src="https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/icon/web-5.svg" />
                            <p className=" text-content-title font-medium text-cb ml-2">Website Link:</p>
                        </div>
                        <a href={company.website} className=" text-content-link text-sm font-medium">{company.website}</a>
                    </div>
                    <div className=" ml-10 flex flex-col mb:items-start mb:ml-0">
                        <div className=" mb-3 flex">
                            <img src="https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/icon/share-icon.svg" />
                            <p className=" text-content-title font-medium text-cb ml-2">Follow Company:</p>
                        </div>
                        <div className=" flex lg:justify-between">
                            <FontAwesomeIcon className=" mr-3" icon={faFacebookF} />
                            <FontAwesomeIcon className=" mr-3 ml-3" icon={faTwitter} />
                            <FontAwesomeIcon className=" mr-3 ml-3" icon={faLinkedinIn} />
                            <FontAwesomeIcon className=" ml-3" icon={faInstagram} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CompanyInfo;