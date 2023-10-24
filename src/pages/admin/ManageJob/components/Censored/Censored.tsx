import Job from "@/types/Job";

type Props = {
    data: Job[]
}

function Censored(props: Props) {
    const {data:jobs} = props

    return (
        <div className=" pr-10 pl-10 mt-4 border border-[#ECEEF6] bg-white rounded-3xl ">
            <div className=" flex items-center justify-between pt-3 pb-3 mb-2 text-content-text font-medium">
                <p className=" w-3/12 text-start">Tên Công Việc</p>
                <p className=" w-2/12 text-center">Doanh Nghiệp</p>
                <p className=" w-2/12 text-center">Ngày Bắt Đầu</p>
                <p className=" w-2/12 text-center">Applied</p>
                <p className=" w-2/12 text-center">Hành Động</p>
            </div>
            {jobs?.map((job, index) => {
                const createdAt = new Date(job.createdAt)
                const date = createdAt.getDate() + '/' + (createdAt.getMonth() + 1) + '/' + createdAt.getFullYear()
                if(job.isAccepted === true) {
                    return (
                        <div key={index} className="flex items-center justify-between pt-3 pb-3 text-content-title font-medium">
                            <div className=" w-3/12 flex items-center text-start">
                                {index + 1 + '. ' + job.title}
                            </div>
                            <p className=" w-2/12 text-center">{job.postedBy.companyName}</p>
                            <p className=" w-2/12 text-center">{date}</p>
                            <p className=" w-2/12 text-center">{job.countApplication}</p>
                            <div className=" w-2/12 text-center">
                                <button className=" w-18 text-center text-white bg-[#7B7B7B] rounded-xl py-1 mx-1">Ẩn</button>
                                <button className=" w-18 text-center text-white bg-[#FC656C] rounded-xl py-1 mx-1">Xóa</button>
                            </div>
                        </div>
                    )
                }
                
            })}
            
        </div>
    );
}

export default Censored;