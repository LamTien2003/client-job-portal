import images from "@/assets/images";
import { faBuilding } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function Company() {
    return (
        <div className=" pr-10 pl-10 mt-4 border border-[#ECEEF6] bg-white rounded-3xl ">
            <div className=" flex items-center justify-between pt-3 pb-3 mb-2 text-content-text font-medium">
                <p className=" w-4/12 text-start">Tên Người Dùng</p>
                <p className=" w-2/12 text-center">Bài Đăng</p>
                <p className=" w-2/12 text-center">Apply</p>
                <p className=" w-2/12 text-center">Đánh giá</p>
                <p className=" w-2/12 text-center">Hành Động</p>
            </div>
            {[...Array(10)].map((item, index) => {
                return (
                    <div key={index} className="flex items-center justify-between pt-3 pb-3 text-content-title font-medium">
                        <div className=" w-4/12 flex items-center text-start">
                            <FontAwesomeIcon className=" text-xl mr-4" icon={faBuilding} />
                            FPT Software
                        </div>
                        <p className=" w-2/12 text-center">20</p>
                        <p className=" w-2/12 text-center">06</p>
                        <p className=" w-2/12 flex items-center justify-center">4.5<img className=" ml-1" src={images.yellowStar} /></p>
                        <div className=" w-2/12 text-center">
                            <button className=" w-18 text-center text-white bg-[#FC656C] rounded-xl py-1 mx-1">Xóa</button>
                        </div>
                    </div>
                )
            })}
            
        </div>
    );
}

export default Company;