import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ItemCol from "./ItemCol/ItemCol";


function TopFooter() {
    return (
        <div className=" flex items-start justify-between mx-auto lg:flex-wrap lg:w-10/12 mb:flex-col mb:items-center ">
            <ItemCol
                title='About Company'
                list={['Contact Us', 'Terms & Condition', 'Privacy & Policy', 'Candidate Listing']}
            />
            <ItemCol
                title="For Candidate's"
                list={['Create Resume', 'Browse Categories', 'Save Jobs List', 'Browse Jobs', 'Candidate Dashboard']}
            />
            <ItemCol
                title="For Employer's"
                list={['Post A Job', 'Browse Candidates', 'Job Packages', 'Jobs Featured', 'Employer Dashboard']}
            />
            <div className=" flex flex-col lg:items-center lg:w-full ">
                <h3 className=" text-xl font-semibold mb-[25px] ">Download App</h3>
                <div className=" border border-gray-800 py-3 px-[14px] mb-[30px] cursor-pointer">
                    <img src="https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/icon/apple-app.svg" />
                </div>
                <div className=" border border-gray-800 py-3 px-[14px] mb-[30px] cursor-pointer">
                    <img src="https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/icon/google-play.svg" />
                </div>
            </div>
        </div>
    );
}

export default TopFooter;