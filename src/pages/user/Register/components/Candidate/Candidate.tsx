import { useRef, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import axiosClient from "@/services/axiosClient";

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{5,23}/
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{7,24}$/
const REGISTER_URL = 'https://job-portal-server-e9q1.onrender.com/auth/signup'

function Candidate() {

    const navigate = useNavigate()

    const userRef = useRef()
    // const errRef = useRef()

    const [user, setUser] = useState('')
    const [validName, setValidName] = useState(false)
    const [userFocus, setUserFocus] = useState(false)

    const [pwd, setPwd] = useState('')
    const [validPwd, setValidPwd] = useState(false)
    const [pwdFocus, setPwdFocus] = useState(false)

    const [matchPwd, setMatchPwd] = useState('')
    const [validMatch, setValidMatch] = useState(false)
    const [matchFocus, setMatchFocus] = useState(false)

    // const [errMsg, setErrMsg] = useState('')
    const [success, setSuccess] = useState(false)

    // focus input username when access page
    useEffect(() => {
        userRef.current.focus()
    }, [])

    // check valid username
    useEffect(() => {
        const result = USER_REGEX.test(user)
        console.log(result);
        console.log(user);
        setValidName(result)
    }, [user])

    // check valid password and match password
    useEffect(() => {
        const result = PWD_REGEX.test(pwd)
        console.log(result);
        console.log(pwd);
        setValidPwd(result)
        const match = pwd === matchPwd
        setValidMatch(match)
    }, [pwd, matchPwd])

    // clear error msg when user, pwd, matchpwd change
    // useEffect(() => {
    //     setErrMsg('')
    // }, [user, pwd, matchPwd])

    const handleSubmit = async (e:any) => {
        e.preventDefault()
        const v1 = USER_REGEX.test(user)
        const v2 = PWD_REGEX.test(pwd)
        if(!v1 || !v2) {
            // setErrMsg("Invalid Entry")
            return
        }

        try {
            const response = await axiosClient.post(REGISTER_URL, JSON.stringify({user, pwd}))
        } catch (error) {
        
        }
    }


    return (
        <>
            {success ? (
                <section>
                    <h1>Success!</h1>
                    <p onClick={() => navigate('/login')}>Sign in</p>
                </section>
            ) : (
                <form className="bg-white rounded-2xl border-teal-100 border px-16 py-12 mb-4">

                    {/* username */}
                    <div className=" mb-4 pb-2">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                            Tài khoản
                            <span className={validName ? "text-primary-100 ml-1" : "hidden"}>
                                <FontAwesomeIcon icon={faCheck} />
                            </span>
                            <span className={validName || !user ? "hidden" : " text-red-400 ml-1"}>
                                <FontAwesomeIcon icon={faTimes} />
                            </span>
                        </label>
                        {/* <span className="w-1 h-1 border-black bg-black absolute inset-y-0 left-0 flex items-center pl-2"></span> */}
                        <div className="relative block mb-3">
                            <span className="sr-only">Search</span>
                            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                                <svg className="h-5 w-5 fill-teal-700" viewBox="0 0 20 20"><path d="M17.388,4.751H2.613c-0.213,0-0.389,0.175-0.389,0.389v9.72c0,0.216,0.175,0.389,0.389,0.389h14.775c0.214,0,0.389-0.173,0.389-0.389v-9.72C17.776,4.926,17.602,4.751,17.388,4.751 M16.448,5.53L10,11.984L3.552,5.53H16.448zM3.002,6.081l3.921,3.925l-3.921,3.925V6.081z M3.56,14.471l3.914-3.916l2.253,2.253c0.153,0.153,0.395,0.153,0.548,0l2.253-2.253l3.913,3.916H3.56z M16.999,13.931l-3.921-3.925l3.921-3.925V13.931z"></path></svg>
                            </span>
                            <input 
                                type="text" 
                                id="username"
                                ref={userRef}
                                autoComplete="off"
                                onChange={e => setUser(e.target.value)}
                                required
                                aria-invalid={validName ? "false" : "true"}
                                aria-describedby="uidnote"
                                onFocus={() => setUserFocus(true)}
                                onBlur={() => setUserFocus(false)}
                                className=" placeholder:text-slate-400 block bg-white w-full border  border-teal-100  hover:border-teal-400 rounded-md py-2 pl-9 pr-3 focus:outline-none focus:border-teal-200  focus:shadow-outline" 
                            />
                        </div>
                        <p id="uidnote" className={userFocus && user && !validName
                            ? "text-red-500 text-xs italic"
                            : 'hidden'}>
                            6 đến 24 ký tự <br/>
                            Phải bắt đầu bằng chữ <br/>
                            Được cho phép nhập ký tự, số, dấu gạch dưới, dấu gạch nối
                        </p>
                    </div>

                    {/* password */}
                    <div className=" mb-4 pb-2">

                        {/* Label */}
                        <label className="block text-gray-700 text-sm font-bold mb-2 mr-2" htmlFor="password">
                            Mật khẩu
                            <span className={validPwd ? "text-primary-100 ml-1" : "hidden"}>
                                <FontAwesomeIcon icon={faCheck} />
                            </span>
                            <span className={validPwd || !user ? "hidden" : " text-red-400 ml-1"}>
                                <FontAwesomeIcon icon={faTimes} />
                            </span>
                        </label>

                        {/* Input */}
                        <input 
                            type="password" 
                            id="password"
                            onChange={e => setPwd(e.target.value)}
                            required
                            aria-invalid={validPwd ? "false" : "true"}
                            aria-describedby="pwdnote"
                            onFocus={() => setPwdFocus(true)}
                            onBlur={() => setPwdFocus(false)}
                            className=" mb-3 placeholder:text-slate-400 block bg-white w-full border  border-teal-100  hover:border-teal-400 rounded-md py-2 pl-2 pr-3 focus:outline-none focus:border-teal-200  focus:shadow-outline" 
                        />

                        {/* Thông báo */}
                        <p id="pwdnote" className={pwdFocus && !validPwd
                            ? "text-red-500 text-xs italic"
                            : 'hidden'}>
                            8 đến 25 ký tự <br/>
                            Phải bao gồm chữ hoa, chữ thường, số và ký tự đặc biệt <br/>
                            Ký tự đặc biệt: 
                            <span aria-label="exclamation mark">!</span> 
                            <span aria-label="at symbol">@</span> 
                            <span aria-label="hashtag">!</span> 
                            <span aria-label="dollar sign">$</span> 
                            <span aria-label="percent">%</span> 
                        </p>
                    </div>

                    {/* Comfirm password */}
                    <div className=" mb-4 pb-2">
                        
                        {/* Label */}
                        <label className="block text-gray-700 text-sm font-bold mb-2 mr-2" htmlFor="comfirm_pwd">
                            Nhập lại mật khẩu
                            <span className={validMatch && matchPwd ? "text-primary-100 ml-1" : "hidden"}>
                                <FontAwesomeIcon icon={faCheck} />
                            </span>
                            <span className={validMatch || !matchPwd ? "hidden" : " text-red-400 ml-1"}>
                                <FontAwesomeIcon icon={faTimes} />
                            </span>
                        </label>

                        {/* input */}
                        <input 
                            type="password" 
                            id="comfirm_pwd"
                            onChange={e => setMatchPwd(e.target.value)}
                            required
                            aria-invalid={validMatch ? "false" : "true"}
                            aria-describedby="confirmnote"
                            onFocus={() => setMatchFocus(true)}
                            onBlur={() => setMatchFocus(false)}
                            className=" placeholder:text-slate-400 block bg-white w-full border  border-teal-100  hover:border-teal-400 rounded-md py-2 pl-2 pr-3 focus:outline-none focus:border-teal-200  focus:shadow-outline" 
                        />

                        {/* Thông báo */}
                        <p id="confirmnote" className={matchFocus && !validMatch
                            ? "text-red-500 text-xs italic"
                            : 'hidden'}>
                            Bắt buộc phải giống mật khẩu đã nhập ở trên
                        </p>
                    </div>
                    {/* <div className="mb-4 pb-2">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Password*
                        </label>
                        <input className=" placeholder:text-slate-400 appearance-none border border-teal-100  hover:border-teal-400 rounded w-full py-2 px-3 focus:border-teal-200 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
                        <p className="text-red-500 text-xs italic">Please choose a password.</p>
                    </div>
                    <div className="mb-4 pb-2">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Password*
                        </label>
                        <input className=" placeholder:text-slate-400 appearance-none border border-teal-100  hover:border-teal-400 rounded w-full py-2 px-3 focus:border-teal-200 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
                        <p className="text-red-500 text-xs italic">Please choose a password.</p>
                    </div> */}
                    <div className="flex flex-wrap place-content-between ">
                        <label className="block text-gray-500 font-bold">
                            <input className="mr-2 leading-tight" type="checkbox" />
                            <span className="text-sm ">
                                Tôi đồng ý vào các điều khoản & điều kiện của công ty
                            </span>
                        </label>
                    </div>
                    <div className="flex items-center justify-between">
                        <button onClick={handleSubmit} type="submit" className="bg-teal-500 hover:bg-teal-900 text-white font-bold py-2 px-4 my-6 w-full rounded focus:outline-none focus:shadow-outline">
                            Sign up
                        </button>
                    </div>
                    <div className="flex flex-wrap">
                        <h6>Already have an account? </h6>
                        <p> <a className="font-bold  text-teal-500 pl-2" onClick={() => navigate('/login')}>Login </a>here</p>
                    </div>
                    <div className="button mt-16 mb-10 flex-wrap">
                        <button className="bg-white hover:bg-teal-400 hover:text-white text-black font-bold  mx-3 w-44 focus:outline-none focus:shadow-outline rounded border-teal-100 border" type="button">
                            <a href="https://myaccount.google.com/">Log in with Google</a>
                            <img src="https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/icon/google1.svg" alt="" />
                        </button>
                        <button className="bg-white hover:bg-teal-400 hover:text-white text-black font-bold py-2 px-4 mx-3 w-44 focus:outline-none focus:shadow-outline rounded border-teal-100 border" type="button">
                            Company
                        </button>
                    </div>
                </form>
            )}
            
        </>
    );
}

export default Candidate;