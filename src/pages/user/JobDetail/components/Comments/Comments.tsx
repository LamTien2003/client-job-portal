import { useGetJobQuery, usePostCommentMutation } from "@/services/jobsApiSlice";
import { RootState } from "@/store/store";
import Job from "@/types/Job";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faHearted } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Comments({data: job}: {data: Job}) {

    const currentUser = useSelector((state: RootState) => state.user.user)

    const {data, isLoading, isError} = useGetJobQuery(job.id)
    const [postComment] = usePostCommentMutation()

    const [currentJob, setCurrentJob] = useState<Job>()
    const [comment, setComment] = useState<string>('')
    const [isFocus, setIsFocus] = useState<boolean>(false)
    const [isLike, setIsLike] = useState<boolean>(false)
    const [isReply, setIsReply] = useState<boolean>(false)
    const [limit, setLimit] = useState<number>(5)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handlePostComment = async () => {
        if(comment !== '') {
            try {
                const response = await postComment({content: comment, id: job.id}).unwrap()
                if(response.status === 200) {
                    toast.success(response.data.msg)
                }
            } catch(error: any) {
                // console.log(error?.status)
                if(error.status === 401) {
                    alert(error.data.msg)
                    navigate('/login')
                } if(error.status === 400) {
                    toast.error(error.data.msg)
                } else {
                    return
                }
            }
            
                
        }
    }

    useEffect(() => {
        if(data?.data?.data && !isLoading && !isError) {
            setCurrentJob(data?.data?.data)
        }
    }, [data?.data?.data, isLoading, isError])

    return (
        <div className=' flex flex-col w-10/12 mx-auto mb-12 gap-[30px]'>
            <h2 className=' text-2xl font-semibold'>{currentJob?.comments.length} bình luận</h2>
            
            {currentJob?.comments?.slice(0, limit).map((cmt, index) => {
                return (
                    <div key={index} className=" flex items-start pr-10  ">
                        <img className=" w-10 h-10 rounded-full mr-3" src={cmt.sender.photo} />
                        <div className=" flex flex-col w-full">
                            <h3 className=" text-sm font-medium">
                                {cmt.sender.firstName + ' ' + cmt.sender.lastName}
                                {/* <span className=" text-sm text-primary-100"> [Người tìm việc]</span>
                                <span className=" text-sm text-blue-600"> [Công ty]</span>
                                <span className=" text-sm text-red-400"> [Admin]</span> */}
                            </h3>
                            <p className=" text-content-text font-medium">
                                {cmt.content}
                            </p>
                            <div className=" flex items-center mt-2">
                                {isLike ? (
                                    <div onClick={() => setIsLike(false)} className=" text-red-400 bg-transparent rounded-full py-0.5 px-1.5 duration-300 cursor-pointer hover:bg-gray-300">
                                        <FontAwesomeIcon icon={faHearted} />
                                    </div>
                                ) : (
                                    <div onClick={() => setIsLike(true)} className=" text-gray-800 bg-transparent rounded-full py-0.5 px-1.5 duration-300 cursor-pointer hover:bg-gray-300">
                                        <FontAwesomeIcon icon={faHeart} />
                                    </div>
                                )}
                                <p className=" text-sm text-content-text">465</p>
                                
                                <div className=" text-sm bg-transparent rounded-2xl py-1 px-2.5 duration-300 cursor-pointer ml-3 hover:bg-gray-300" onClick={() => setIsReply(true)}>Trả lời</div>
                                
                            </div>
                            {/* {isReply && <div className=" flex items-start ">
                                <img className=" w-8 h-8 rounded-full mr-2" src="https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/bg/user-img.png" />
                                <div className=" flex flex-col w-full">
                                    <input 
                                        className=" w-full text-content-text text-sm outline-none" 
                                        value={comment} 
                                        onChange={e => setComment(e.target.value)} 
                                        onFocus={() => setIsFocus(true)} 
                                        placeholder="Viết bình luận..."
                                    />
                                    <div className={" w-full border-b duration-300 " + (isFocus ? 'border-gray-800' : 'border-gray-300 ')}></div>
                                    {isFocus && (
                                        <div className=" flex items-center justify-end mt-2 gap-5">
                                            <button onClick={() => setIsFocus(false)}>Hủy</button>
                                            <button className={" text-center rounded-2xl py-[6px] px-4 duration-300 " + (comment ? 'text-white bg-primary-100' : 'bg-gray-300') }onClick={handlePostComment}>Bình luận</button>
                                        </div>
                                    )}
                                </div>
                            </div>} */}
                        </div>
                    </div>
                )
            })}
            <p className=" text-content-title font-semibold cursor-pointer hover:underline" onClick={() => setLimit(prev => prev + 5)}>Xem thêm bình luận</p>
            <div className=" flex items-start ">
                <img className=" w-12 h-12 rounded-full mr-3" src={currentUser?.photo} />
                <div className=" flex flex-col w-full">
                    <input 
                        className=" w-full text-content-text py-1 outline-none" 
                        value={comment} 
                        onChange={e => setComment(e.target.value)} 
                        onFocus={() => setIsFocus(true)} 
                        placeholder="Viết bình luận..."
                    />
                    <div className={" w-full border-b duration-300 " + (isFocus ? 'border-gray-800' : 'border-gray-300 ')}></div>
                    {isFocus && (
                        <div className=" flex items-center justify-end mt-2 gap-5">
                            <button onClick={() => setIsFocus(false)}>Hủy</button>
                            <button className={" text-center rounded-2xl py-[6px] px-4 duration-300 " + (comment ? 'text-white bg-primary-100' : 'bg-gray-300')} onClick={handlePostComment}>Bình luận</button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Comments;