import Company from '@/types/Company';
import { faFacebookF, faInstagram, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type Props = {
    data: Company;
};

function CompanyInfo(props: Props) {
    const { data: company } = props;

    return (
        <>
            <div className=" relative">
                <img
                    className=" w-full mr-auto ml-auto rounded-t-xl"
                    src="https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/bg/blog-dt-img.png"
                />
                <div className=" w-[90px] h-[90px] bg-[#f8f8f8] rounded -bottom-[45px] left-1/2 -translate-x-1/2 rotate-45 flex items-center justify-center absolute">
                    <img
                        className=" rounded-full"
                        src="https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/bg/blog-dt-logo.png"
                    />
                </div>
            </div>
            <div className=" w-full pt-[30px] pr-[30px] pl-[30px] pb-12 mr-auto ml-auto flex justify-between lg:flex-col tb:flex-col mb:flex-col">
                <div className=" flex flex-col lg:mb-2 tb:mb-2 mb:mb-2">
                    <h1 className=" text-content-title text-2xl font-semibold mb-2.5">{company.companyName}</h1>
                    <div className=" flex mb:flex-col">
                        <div className=" flex">
                            <img src="https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/icon/map-2.svg" />
                            <p className=" text-sm font-medium ml-2">{company.location.city}</p>
                        </div>
                        <div className=" flex ml-7 mb:ml-0 ">
                            <img src="https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/icon/category-2.svg" />
                            <p className=" text-sm font-medium ml-2">
                                <span className=" text-content-title font-semibold mr-1.5">Category:</span>Software
                                Agency
                            </p>
                        </div>
                    </div>
                </div>
                <div className=" flex mb:flex-col">
                    <div className=" flex flex-col items-center lg:items-start tb:items-start mb:items-start mb:mb-2">
                        <div className=" mb-2 flex">
                            <img src="https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/icon/web-5.svg" />
                            <p className=" text-content-title font-medium text-base ml-2">Website Link:</p>
                        </div>
                        <a href={company.website} className=" text-[#0279cf] text-sm font-medium">
                            {company.website}
                        </a>
                    </div>
                    <div className=" ml-10 flex flex-col lg:ml-[28px] tb:ml-[28px] mb:items-start mb:ml-0">
                        <div className=" mb-3 flex">
                            <img src="https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/icon/share-icon.svg" />
                            <p className=" text-content-title font-medium text-base ml-2">Follow Company:</p>
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
