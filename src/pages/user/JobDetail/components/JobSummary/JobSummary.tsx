import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MoreInfo from '../MoreInfo/MoreInfo';
import Job from '@/types/Job';

type Props = {
    data: Job;
};

function JobSummary(props: Props) {
    const { data: job } = props;

    // if(gender === null || gender === undefined || gender === 3) sex = 'Any'
    // if(gender === 1) sex = 'Man'
    // if(gender === 2) sex = 'Woman'

    return (
        <div className=" w-1/3 pl-3 pr-3 lg:w-full ">
            <div className=" mb-12 flex items-center justify-end">
                <div className=" group flex items-center cursor-pointer relative">
                    <p className=" text-content-text text-lg font-medium duration-300 mr-2.5 group-hover:text-primary-100 xl:text-base lg:text-lg mb:text-sm">
                        Save Job
                    </p>
                    <div className=" w-7 h-7 bg-content-bgsave rounded-full duration-300 group-hover:bg-primary-100">
                        <FontAwesomeIcon
                            className=" w-3 text-primary-100 text-sm top-1.5 right-2 absolute duration-300 group-hover:text-white"
                            icon={faBookmark}
                        />
                    </div>
                </div>
                <button className=" font-medium pt-2 pb-2 pl-7 pr-7 bg-primary-100 text-white rounded ml-8 duration-500 hover:bg-black xl:pl-3 xl:pr-3 xl:text-sm xl:ml-4 lg:pl-7 lg:pr-7 lg:text-base mb:pl-4 mb:pr-4">
                    Apply Position
                </button>
            </div>

            <div className=" w-full h-1.5 rounded-t-md bg-primary-100"></div>

            <div className=" w-full bg-content-bg pt-17.5 pb-17.5 pl-10 pr-10 mb-12 ">
                <h3 className=" text-content-title text-lg font-semibold mr-2 mb-6">Job Summary:</h3>
                <div className=" relative before:w-2 before:h-2 before:rounded-full before:bg-primary-blur before:mr-1.5 before:pr-2 before:top-2 before:absolute">
                    <p className=" text-content-text text-base font-medium mb-2.5 ml-4 ">
                        <span className=" text-content-title font-medium mr-2">Job Posted:</span>ngày bắt đầu
                    </p>
                </div>
                <div className=" relative before:w-2 before:h-2 before:rounded-full before:bg-primary-blur before:mr-1.5 before:pr-2 before:top-2 before:absolute">
                    <p className=" text-content-text text-base font-medium mb-2.5 ml-4 ">
                        <span className=" text-content-title font-medium mr-2">Expiration:</span>ngày kết thúc
                    </p>
                </div>
                <div className=" relative before:w-2 before:h-2 before:rounded-full before:bg-primary-blur before:mr-1.5 before:pr-2 before:top-2 before:absolute">
                    <p className=" text-content-text text-base font-medium mb-2.5 ml-4 ">
                        <span className=" text-content-title font-medium mr-2">Vacancy:</span>số lượng
                    </p>
                </div>
                <div className=" relative before:w-2 before:h-2 before:rounded-full before:bg-primary-blur before:mr-1.5 before:pr-2 before:top-2 before:absolute">
                    <p className=" text-content-text text-base font-medium mb-2.5 ml-4 ">
                        <span className=" text-content-title font-medium mr-2">Experiences:</span>kinh nghiệm
                    </p>
                </div>
                <div className=" relative before:w-2 before:h-2 before:rounded-full before:bg-primary-blur before:mr-1.5 before:pr-2 before:top-2 before:absolute">
                    <p className=" text-content-text text-base font-medium mb-2.5 ml-4 ">
                        <span className=" text-content-title font-medium mr-2">Skills:</span>kĩ năng
                    </p>
                </div>
                <div className=" relative before:w-2 before:h-2 before:rounded-full before:bg-primary-blur before:mr-1.5 before:pr-2 before:top-2 before:absolute">
                    <p className=" text-content-text text-base font-medium mb-2.5 ml-4 ">
                        <span className=" text-content-title font-medium mr-2">Gender:</span>any
                    </p>
                </div>
            </div>
            <MoreInfo />
        </div>
    );
}

export default JobSummary;
