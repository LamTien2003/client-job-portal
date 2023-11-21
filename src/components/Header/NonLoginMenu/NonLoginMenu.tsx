
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import SideMenu from "../SideMenu/SideMenu";

function NonLoginMenu() {
    const [sideMenu, setSideMenu] = useState<boolean>(false)
    const [dropDownSignup, setDropDownSignup] = useState<boolean>(false)

    const signupRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        let handlerClickOutside = (e:any) => {
            if(!signupRef.current?.contains(e.target)) {
                setDropDownSignup(false)
            }
        }
        document.addEventListener('mousedown', handlerClickOutside)
    }, [dropDownSignup])

    return (
        <div className=" w-[330px] flex items-center justify-between xl:w-[220px] tb:w-[70px] mb:w-[60px] ">
            
            <Link to={'/login'} className=" group flex items-center justify-center border border-[#dfe9e5] rounded-[5px] py-[9px] px-[40px] duration-500 cursor-pointer hover:bg-primary-100 hover:text-white xl:text-sm xl:px-[20px] lg:px-[30px] tb:hidden mb:hidden">
                <p>Đăng nhập</p>
            </Link>
            <div ref={signupRef} className=" relative">
                <div onClick={() => setDropDownSignup(!dropDownSignup)} className=" group flex items-center justify-center font-family-title text-white bg-primary-100 rounded-[5px] py-[9px] px-[40px] duration-500 cursor-pointer hover:bg-black hover:text-white xl:text-sm xl:px-[20px] lg:px-[30px] tb:hidden mb:hidden">
                    <p>Đăng ký</p>
                </div>
                {dropDownSignup && (
                    <div className=" w-[200px] bg-white shadow-md rounded-md p-2 right-0 top-[67px] absolute">
                        <Link to={'/register/jobseeker'} onClick={() => setDropDownSignup(false)} className=" flex items-center w-full bg-gray-200 rounded-md px-3 py-2 mb-2 duration-200 cursor-pointer hover:bg-gray-300">
                            <svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg" fill="#00A7AC">
                                <path d="M18 9C18 4.02595 13.9747 0 9 0C4.02599 0 0 4.02525 0 9C0 13.8465 3.87552 17.9204 8.85554 17.9982C8.94013 18.002 9.12386 17.9985 9.12741 17.9985C9.12888 17.9985 9.13514 17.9984 9.13679 17.9983C14.0497 17.9256 18 13.922 18 9ZM9 0.527344C13.6826 0.527344 17.4727 4.31677 17.4727 9C17.4727 10.9522 16.8164 12.8032 15.6091 14.3022C15.5881 13.3575 14.9755 12.5368 14.0707 12.2503L12.3649 11.7102C12.2684 11.6276 12.2938 11.6632 10.7234 10.8851V10.1543C11.4081 9.66815 11.8822 8.90072 11.9694 8.01584C12.2945 7.96071 12.5428 7.67707 12.5428 7.33655C12.5428 6.83149 12.5428 5.1711 12.5428 4.65304C12.5428 4.06216 12.0621 3.58147 11.4713 3.58147H11.4441C11.439 3.58147 11.4349 3.57736 11.4349 3.5723C11.4349 2.98143 10.9542 2.50073 10.3633 2.50073H7.57923C6.40856 2.50073 5.45618 3.45312 5.45618 4.62379C5.45618 4.7694 5.57423 4.88746 5.71985 4.88746C5.86547 4.88746 5.98352 4.7694 5.98352 4.62379C5.98352 3.74389 6.69934 3.02808 7.57923 3.02808H10.3633C10.6634 3.02808 10.9075 3.2722 10.9075 3.5723C10.9075 3.86814 11.1482 4.10882 11.4441 4.10882H11.4713C11.7714 4.10882 12.0155 4.35294 12.0155 4.65304V6.15357H11.7209C11.5563 6.15357 11.4224 6.01966 11.4224 5.8551V5.54745C11.4224 4.96266 10.8515 4.5501 10.2963 4.73361C9.46037 5.00991 8.53956 5.00998 7.70252 4.73347C7.14723 4.5501 6.57654 4.96266 6.57654 5.54734V5.8551C6.57654 6.0197 6.44263 6.15361 6.27806 6.15361H5.98349V5.84237C5.98349 5.69675 5.86543 5.5787 5.71982 5.5787C5.5742 5.5787 5.45614 5.69675 5.45614 5.84237V7.33658C5.45614 7.67714 5.70449 7.96075 6.02961 8.01591C6.11677 8.90082 6.59092 9.66821 7.27555 10.1544V10.8854C5.70839 11.662 5.7291 11.6293 5.63428 11.7105L3.92931 12.2503C3.02456 12.5368 2.41196 13.3575 2.39098 14.3023C1.18361 12.8032 0.527344 10.9522 0.527344 9C0.527344 4.3174 4.31677 0.527344 9 0.527344ZM5.97706 13.7489L6.18198 13.5444C6.39587 13.3309 6.44646 13.0069 6.30791 12.7383L5.98282 12.108L7.04827 11.5846C6.93489 12.0588 6.93858 12.58 6.99318 13.0684C6.99321 13.0688 6.99328 13.0692 6.99332 13.0695C7.12969 14.2874 7.62683 15.6689 8.12366 16.7889C7.30547 15.9655 6.21204 14.7544 5.93666 13.9148C5.9175 13.8565 5.933 13.7929 5.97706 13.7489ZM5.98345 6.68092H6.27803C6.73341 6.68092 7.10385 6.31044 7.10385 5.85506V5.5473C7.10385 5.32332 7.32203 5.16322 7.53813 5.23452C8.48081 5.5459 9.51912 5.54586 10.4618 5.23431C10.6754 5.16375 10.8951 5.32238 10.8951 5.54745V5.8551C10.8951 6.31048 11.2655 6.68092 11.7209 6.68092H12.0155V7.33655C12.0155 7.4257 11.943 7.4982 11.8538 7.4982C11.6417 7.4982 11.465 7.6647 11.4516 7.87729C11.3702 9.16734 10.2932 10.1779 8.99947 10.1779C7.70583 10.1779 6.62871 9.16734 6.54736 7.87729C6.53396 7.66473 6.35727 7.4982 6.14514 7.4982C6.05598 7.4982 5.98349 7.4257 5.98349 7.33655V6.68092H5.98345ZM8.99975 17.4124C8.82865 17.0692 8.5976 16.5802 8.36648 16.0129L8.79947 14.31H9.2005L9.6332 16.0124C9.40166 16.5809 9.17033 17.0703 8.99975 17.4124ZM8.65315 12.7027C8.50391 12.8274 8.19777 13.0831 7.95843 13.283C7.90847 13.3247 7.83693 13.3245 7.7875 13.2839L7.50881 12.9393C7.46272 12.4771 7.46729 11.9661 7.61164 11.5286L8.65315 12.7027ZM7.8724 13.8421C7.93962 13.8421 8.0068 13.8312 8.07173 13.8106L8.30679 14.1077L8.04125 15.1521C7.88917 14.7136 7.75206 14.2564 7.65127 13.8032C7.72267 13.8286 7.79737 13.8421 7.8724 13.8421ZM9.27341 13.7827H8.72205L8.5075 13.5115L9.02869 13.0761L9.50013 13.4792L9.27341 13.7827ZM10.0509 13.2563L9.40187 12.7014L10.3909 11.5383C10.5318 11.9728 10.5359 12.4761 10.4916 12.9287L10.2221 13.2589C10.1721 13.2992 10.1005 13.2988 10.0509 13.2563ZM8.99947 10.7052C9.42377 10.7052 9.82874 10.6153 10.1961 10.4538V10.9533L9.02644 12.3288L7.80286 10.9495V10.4537C8.17017 10.6153 8.57514 10.7052 8.99947 10.7052ZM9.95846 15.1513L9.69209 14.1033L9.93157 13.7828C9.99872 13.805 10.0684 13.8166 10.1381 13.8166C10.211 13.8166 10.2835 13.8038 10.3531 13.7798C10.2525 14.2379 10.1146 14.701 9.95846 15.1513ZM2.91727 14.8972V14.3523C2.91727 13.6176 3.38794 12.9748 4.08843 12.7531L5.49415 12.308C5.50821 12.3409 5.49376 12.3092 5.83924 12.9801C5.87211 13.0438 5.86013 13.1206 5.80943 13.1712L5.6045 13.3757C5.41877 13.5611 5.35402 13.8307 5.43558 14.0792C5.77213 15.1051 7.09611 16.5258 8.0048 17.4148C6.07549 17.1904 4.29476 16.3169 2.91727 14.8972ZM9.99461 17.4148C10.4846 16.9354 11.0989 16.2985 11.612 15.6535C11.7026 15.5395 11.6837 15.3737 11.5697 15.283C11.4558 15.1924 11.2899 15.2112 11.1992 15.3252C10.7852 15.8457 10.3012 16.3627 9.87465 16.7913C10.373 15.6684 10.872 14.2823 11.0071 13.0606C11.0071 13.0602 11.0072 13.0597 11.0072 13.0593C11.0608 12.5741 11.064 12.0574 10.9512 11.5846L12.0166 12.1081L11.6915 12.7384C11.553 13.007 11.6036 13.3309 11.8175 13.5444L12.0224 13.7489C12.0664 13.7929 12.0819 13.8565 12.0628 13.9148C12.0215 14.0408 11.9586 14.1822 11.876 14.3352C11.8067 14.4634 11.8545 14.6233 11.9826 14.6925C12.1108 14.7618 12.2707 14.714 12.3399 14.5859C12.4375 14.4053 12.5128 14.2348 12.5639 14.0792C12.6454 13.8306 12.5807 13.5611 12.3949 13.3757L12.19 13.1712C12.1393 13.1206 12.1274 13.0437 12.1602 12.9801C12.5031 12.314 12.4914 12.3403 12.5054 12.3079L13.9115 12.753C14.6121 12.9748 15.0827 13.6175 15.0827 14.3523V14.8972C13.7083 16.3137 11.9287 17.19 9.99461 17.4148Z"></path>
                            </svg>
                            <p className=" ml-3">Ứng viên</p>
                        </Link>
                        <Link to={'/register/company'} onClick={() => setDropDownSignup(false)} className=" flex items-center w-full bg-gray-200 rounded-md px-3 py-2 duration-200 cursor-pointer hover:bg-gray-300">
                            <svg width="18" height="16" viewBox="0 0 18 16" xmlns="http://www.w3.org/2000/svg" fill="#00A7AC">
                                <path d="M17.1 2.66667H13.2V1.48148C13.199 0.663628 12.5281 0.00101273 11.7 0H6.3C5.47192 0.00101273 4.80103 0.663628 4.8 1.48148V2.66667H0.9C0.402979 2.66667 0 3.06467 0 3.55556V10.151C0.0019043 10.5269 0.241699 10.8613 0.6 10.9876V15.1111C0.6 15.602 1.00298 16 1.5 16H16.5C16.997 16 17.4 15.602 17.4 15.1111V10.9878C17.7583 10.8614 17.9982 10.5269 18 10.151V3.55556C18 3.06467 17.597 2.66667 17.1 2.66667ZM5.4 1.48148C5.4 0.990596 5.80298 0.592593 6.3 0.592593H11.7C12.197 0.592593 12.6 0.990596 12.6 1.48148V2.66667H12V1.48148C12 1.31785 11.8657 1.18519 11.7 1.18519H6.3C6.13433 1.18519 6 1.31785 6 1.48148V2.66667H5.4V1.48148ZM11.4 2.66667H6.6V1.77778H11.4V2.66667ZM16.8 15.1111C16.8 15.2747 16.6657 15.4074 16.5 15.4074H1.5C1.33433 15.4074 1.2 15.2747 1.2 15.1111V11.0894L7.8 11.9884V12.7407C7.8 13.2316 8.20298 13.6296 8.7 13.6296H9.3C9.79702 13.6296 10.2 13.2316 10.2 12.7407V11.9884L16.8 11.0894V15.1111ZM9.6 12.7407C9.6 12.9044 9.46567 13.037 9.3 13.037H8.7C8.53433 13.037 8.4 12.9044 8.4 12.7407V10.963C8.4 10.7993 8.53433 10.6667 8.7 10.6667H9.3C9.46567 10.6667 9.6 10.7993 9.6 10.963V12.7407ZM17.4 10.151C17.4001 10.2988 17.2901 10.424 17.142 10.4447L17.0588 10.456L10.2 11.3902V10.963C10.2 10.4721 9.79702 10.0741 9.3 10.0741H8.7C8.20298 10.0741 7.8 10.4721 7.8 10.963V11.3902L0.858252 10.4447C0.710156 10.4242 0.599854 10.2989 0.6 10.151V3.55556C0.6 3.39193 0.734326 3.25926 0.9 3.25926H17.1C17.2657 3.25926 17.4 3.39193 17.4 3.55556V10.151Z"></path>
                            </svg>
                            <p className=" ml-3">Công ty</p>
                        </Link>
                    </div>
                )}
            </div>
            <div className=" hidden lg:block tb:block mb:block" onClick={() => setSideMenu(!sideMenu)}>
                <FontAwesomeIcon icon={faBars} />
            </div>

            <SideMenu 
                sideMenu={sideMenu} 
                setSideMenu={setSideMenu} 
            />
            
        </div>
    );
}

export default NonLoginMenu;