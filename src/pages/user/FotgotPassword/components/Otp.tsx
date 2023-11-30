import { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";


function Otp({changePage}: {changePage: (page: 'email' | 'otp' | 'newPassword') => void}) {
    // call api lấy otp

    const [otp, setOtp] = useState(new Array(6).fill(''))

    const handleChange = (e: any, index: number) => {
        if(isNaN(e.value)) return false

        setOtp([...otp.map((d, i) => (i === index) ? e.value : d)])

        if(e.value !== '' && e.nextSibling) {
            e.nextSibling.focus()
        }
    }

    const handleSubmit = (e: any) => {
        e.preventDefault()
        if(otp.join('').length === 6) {
            changePage('newPassword')
        } else {
            toast.error('Bạn chưa nhập đủ số của mã OTP')
        }
    }

    return (
        <form onSubmit={handleSubmit} >
            <div className=" flex items-center justify-between">
                {otp?.map((data, index) => {
                    return (
                        <input
                            key={index}
                            type="text"
                            placeholder="0"
                            className=" w-16 h-16 text-center text-3xl text-content-title bg-gray-100 border-2 border-gray-500 rounded-lg outline-none"
                            maxLength={1}
                            onChange={e => handleChange(e.target, index)}
                        />
                    )
                })}
                
                
            </div>

            <div className=" text-center">
                <button
                    type="submit"
                    className=" w-full h-[50px] text-white font-semibold bg-primary-100 rounded-[0.625rem] mt-6 "
                >
                    Xác nhận mã OTP
                </button>
            </div>
        </form>
    );
}

export default Otp;