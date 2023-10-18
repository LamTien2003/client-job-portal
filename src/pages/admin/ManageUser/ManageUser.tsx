import images from "@/assets/images";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



function ManageUser() {
    
    return (
        <div className="w-9/12 flex flex-col ml-[25%] pr-10 pb-10">
            <div className=" flex items-center justify-around p-4 bg-primary-100 rounded-2xl">
                <div className=" flex items-center justify-center pr-8 pl-8 pt-4 pb-4 text-lg bg-white rounded-2xl tracking-widest">Người Tìm Việc</div>
                <div className=" flex items-center justify-center pr-8 pl-8 pt-4 pb-4 text-lg bg-white rounded-2xl tracking-widest">Doanh Nghiệp</div>
                <div className=" flex items-center justify-center pr-8 pl-8 pt-4 pb-4 text-lg bg-white rounded-2xl tracking-widest">Quản Trị Viên</div>
            </div>
            <div className=" flex justify-end mt-4">
                <div className=" w-[314px] flex items-center bg-white rounded-3xl border border-[#EFEEEB]">
                    <div className=" pr-3 pl-4 pt-1.5 pb-1.5 text-lg border-r border-[#BCBCBC] cursor-pointer">
                        <FontAwesomeIcon  icon={faMagnifyingGlass}/>
                    </div>
                    <input className=" outline-none pt-1.5 pb-1.5 pl-2 pr-3 " placeholder="Tìm kiếm" />
                    <p className=" pt-2 pb-2 pl-3 pr-2.5 bg-primary-100 text-white rounded-r-3xl cursor-pointer">Tìm</p>
                </div>
            </div>
            <div className=" pr-10 pl-10 mt-4 border border-[#ECEEF6] bg-white rounded-3xl ">
                <div className=" flex items-center justify-between pt-3 pb-3 mb-2 text-content-text font-medium">
                    <p className=" w-4/12 text-start">Tên Người Dùng</p>
                    <p className=" w-2/12 text-center">Bài Đăng</p>
                    <p className=" w-2/12 text-center">Apply</p>
                    <p className=" w-2/12 text-center">Đánh giá</p>
                    <p className=" w-2/12 text-end">Hành Động</p>
                </div>
                {[...Array(10)].map(item => {
                    return (
                        <div className="flex items-center justify-between pt-3 pb-3 text-content-title font-medium">
                            <div className=" w-4/12 flex items-center text-start">
                                <FontAwesomeIcon className=" text-xl mr-4" icon={faUser} />
                                Nguyễn Dương Minh Duy
                            </div>
                            <p className=" w-2/12 text-center">20</p>
                            <p className=" w-2/12 text-center">06</p>
                            <p className=" w-2/12 flex items-center justify-center">4.5<img className=" ml-1" src={images.yellowStar} /></p>
                            <p className=" w-2/12 text-end">20</p>
                        </div>
                    )
                })}
                
            </div>
        </div>
    );
}

export default ManageUser;