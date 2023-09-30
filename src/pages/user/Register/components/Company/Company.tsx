import { useRef, useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const FNAME_REGEX = /^[a-zA-Z]{2,30}/;
const LNAME_REGEX = /^[a-zA-Z]{2,30}/;
const COMPANYNAME_REGEX = /^[a-zA-Z]{2,100}/;
const EMAIL_REGEX = /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/;
const PNUMBER_REGEX = /[0-9]{2}\d{8}/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const REGISTER_URL = 'https://job-portal-server-e9q1.onrender.com/auth/signup';

function Company() {
    const navigate = useNavigate();

    const firstNameRef = useRef();
    // const errRef = useRef()

    const [firstName, setFirstName] = useState('');
    const [validFirstName, setValidFirstName] = useState(false);
    const [firstNameFocus, setFirstNameFocus] = useState(false);

    const [lastName, setLastName] = useState('');
    const [validLastName, setValidLastName] = useState(false);
    const [lastNameFocus, setLastNameFocus] = useState(false);

    const [email, setEmail] = useState('');
    const [validEmail, setValidEmail] = useState(false);
    const [emailFocus, setEmailFocus] = useState(false);

    const [phoneNumber, setPhoneNumber] = useState('');
    const [validPhoneNumber, setValidPhoneNumber] = useState(false);
    const [phoneNumberFocus, setPhoneNumberFocus] = useState(false);

    const [companyName, setCompanyName] = useState('');
    const [validCompanyName, setValidCompanyName] = useState(false);
    const [companyNameFocus, setCompanyNameFocus] = useState(false);

    const [location, setLocation] = useState('');

    const [password, setPassword] = useState('');
    const [validPassword, setValidPassword] = useState(false);
    const [passwordFocus, setPasswordFocus] = useState(false);

    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [validPasswordConfirm, setValidPasswordConfirm] = useState(false);
    const [passwordConfirmFocus, setPasswordConfirmFocus] = useState(false);

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    // focus input username when access page
    useEffect(() => {
        firstNameRef.current.focus();
    }, []);

    // check valid first name
    useEffect(() => {
        const result = FNAME_REGEX.test(firstName);
        setValidFirstName(result);
    }, [firstName]);

    // check valid last name
    useEffect(() => {
        const result = LNAME_REGEX.test(lastName);
        setValidLastName(result);
    }, [lastName]);

    // check valid email
    useEffect(() => {
        const result = EMAIL_REGEX.test(email);
        setValidEmail(result);
    }, [email]);

    // check valid phone number
    useEffect(() => {
        const result = PNUMBER_REGEX.test(phoneNumber);
        setValidPhoneNumber(result);
    }, [phoneNumber]);

    // check valid company name
    useEffect(() => {
        const result = COMPANYNAME_REGEX.test(companyName);
        setValidCompanyName(result);
    }, [companyName]);

    // check valid password and match password
    useEffect(() => {
        const result = PWD_REGEX.test(password);
        console.log(result);
        console.log(password);
        setValidPassword(result);
        const match = password === passwordConfirm;
        setValidPasswordConfirm(match);
    }, [password, passwordConfirm]);

    // clear error msg when user, pwd, matchpwd change
    useEffect(() => {
        setErrMsg('');
    }, [firstName, lastName, email, phoneNumber, password, passwordConfirm]);

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        console.log(e);
        const v1 = FNAME_REGEX.test(firstName);
        const v2 = LNAME_REGEX.test(lastName);
        const v3 = EMAIL_REGEX.test(email);
        const v4 = PNUMBER_REGEX.test(phoneNumber);
        const v5 = COMPANYNAME_REGEX.test(companyName);
        const v6 = PWD_REGEX.test(password);
        if (!v1 || !v2 || !v3 || !v4 || !v5 || !v6) {
            setErrMsg('Invalid Entry');
            return;
        }
        const userInfo = {
            type: 'company',
            firstName,
            lastName,
            email,
            location,
            phoneNumber,
            companyName,
            password,
            passwordConfirm,
            description: 'Mô tả công ty' + companyName,
        };
    };

    return (
        <>
            {success ? (
                <section>
                    <h1>Success!</h1>
                    <p onClick={() => navigate('/login')}>Sign in</p>
                </section>
            ) : (
                <section>
                    <p>{errMsg}</p>
                    <form
                        onSubmit={handleSubmit}
                        className="bg-white rounded-2xl border-teal-100 border px-16 py-12 mb-4"
                    >
                        {/* First name */}
                        <div className=" mb-4 pb-2">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstname">
                                Họ
                                <span className={validFirstName ? 'text-primary-100 ml-1' : 'hidden'}>
                                    <FontAwesomeIcon icon={faCheck} />
                                </span>
                                <span className={validFirstName || !firstName ? 'hidden' : ' text-red-400 ml-1'}>
                                    <FontAwesomeIcon icon={faTimes} />
                                </span>
                            </label>
                            {/* <span className="w-1 h-1 border-black bg-black absolute inset-y-0 left-0 flex items-center pl-2"></span> */}
                            <div className="relative block mb-3">
                                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                                    <svg className="h-5 w-5 fill-teal-700" viewBox="0 0 20 20">
                                        <path d="M17.388,4.751H2.613c-0.213,0-0.389,0.175-0.389,0.389v9.72c0,0.216,0.175,0.389,0.389,0.389h14.775c0.214,0,0.389-0.173,0.389-0.389v-9.72C17.776,4.926,17.602,4.751,17.388,4.751 M16.448,5.53L10,11.984L3.552,5.53H16.448zM3.002,6.081l3.921,3.925l-3.921,3.925V6.081z M3.56,14.471l3.914-3.916l2.253,2.253c0.153,0.153,0.395,0.153,0.548,0l2.253-2.253l3.913,3.916H3.56z M16.999,13.931l-3.921-3.925l3.921-3.925V13.931z"></path>
                                    </svg>
                                </span>
                                <input
                                    type="text"
                                    id="firstname"
                                    ref={firstNameRef}
                                    autoComplete="off"
                                    onChange={(e) => setFirstName(e.target.value)}
                                    required
                                    aria-invalid={validFirstName ? 'false' : 'true'}
                                    aria-describedby="uidnote"
                                    onFocus={() => setFirstNameFocus(true)}
                                    onBlur={() => setFirstNameFocus(false)}
                                    className=" placeholder:text-slate-400 block bg-white w-full border  border-teal-100  hover:border-teal-400 rounded-md py-2 pl-9 pr-3 focus:outline-none focus:border-teal-200  focus:shadow-outline"
                                />
                            </div>
                            <p
                                id="uidnote"
                                className={
                                    firstNameFocus && firstName && !validFirstName
                                        ? 'text-red-500 text-xs italic'
                                        : 'hidden'
                                }
                            >
                                tối đa 30 ký tự <br />
                                Chỉ được sử dụng chữ <br />
                            </p>
                        </div>

                        {/* Last name */}
                        <div className=" mb-4 pb-2">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastname">
                                Tên
                                <span className={validLastName ? 'text-primary-100 ml-1' : 'hidden'}>
                                    <FontAwesomeIcon icon={faCheck} />
                                </span>
                                <span className={validLastName || !lastName ? 'hidden' : ' text-red-400 ml-1'}>
                                    <FontAwesomeIcon icon={faTimes} />
                                </span>
                            </label>
                            {/* <span className="w-1 h-1 border-black bg-black absolute inset-y-0 left-0 flex items-center pl-2"></span> */}
                            <div className="relative block mb-3">
                                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                                    <svg className="h-5 w-5 fill-teal-700" viewBox="0 0 20 20">
                                        <path d="M17.388,4.751H2.613c-0.213,0-0.389,0.175-0.389,0.389v9.72c0,0.216,0.175,0.389,0.389,0.389h14.775c0.214,0,0.389-0.173,0.389-0.389v-9.72C17.776,4.926,17.602,4.751,17.388,4.751 M16.448,5.53L10,11.984L3.552,5.53H16.448zM3.002,6.081l3.921,3.925l-3.921,3.925V6.081z M3.56,14.471l3.914-3.916l2.253,2.253c0.153,0.153,0.395,0.153,0.548,0l2.253-2.253l3.913,3.916H3.56z M16.999,13.931l-3.921-3.925l3.921-3.925V13.931z"></path>
                                    </svg>
                                </span>
                                <input
                                    type="text"
                                    id="lastname"
                                    autoComplete="off"
                                    onChange={(e) => setLastName(e.target.value)}
                                    required
                                    aria-invalid={validFirstName ? 'false' : 'true'}
                                    aria-describedby="uidnote"
                                    onFocus={() => setLastNameFocus(true)}
                                    onBlur={() => setLastNameFocus(false)}
                                    className=" placeholder:text-slate-400 block bg-white w-full border  border-teal-100  hover:border-teal-400 rounded-md py-2 pl-9 pr-3 focus:outline-none focus:border-teal-200  focus:shadow-outline"
                                />
                            </div>
                            <p
                                id="uidnote"
                                className={
                                    lastNameFocus && lastName && !validLastName
                                        ? 'text-red-500 text-xs italic'
                                        : 'hidden'
                                }
                            >
                                tối đa 30 ký tự <br />
                                Chỉ được sử dụng chữ <br />
                            </p>
                        </div>

                        {/* Email */}
                        <div className=" mb-4 pb-2">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                Email
                                <span className={validEmail ? 'text-primary-100 ml-1' : 'hidden'}>
                                    <FontAwesomeIcon icon={faCheck} />
                                </span>
                                <span className={validEmail || !email ? 'hidden' : ' text-red-400 ml-1'}>
                                    <FontAwesomeIcon icon={faTimes} />
                                </span>
                            </label>
                            {/* <span className="w-1 h-1 border-black bg-black absolute inset-y-0 left-0 flex items-center pl-2"></span> */}
                            <div className="relative block mb-3">
                                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                                    <svg className="h-5 w-5 fill-teal-700" viewBox="0 0 20 20">
                                        <path d="M17.388,4.751H2.613c-0.213,0-0.389,0.175-0.389,0.389v9.72c0,0.216,0.175,0.389,0.389,0.389h14.775c0.214,0,0.389-0.173,0.389-0.389v-9.72C17.776,4.926,17.602,4.751,17.388,4.751 M16.448,5.53L10,11.984L3.552,5.53H16.448zM3.002,6.081l3.921,3.925l-3.921,3.925V6.081z M3.56,14.471l3.914-3.916l2.253,2.253c0.153,0.153,0.395,0.153,0.548,0l2.253-2.253l3.913,3.916H3.56z M16.999,13.931l-3.921-3.925l3.921-3.925V13.931z"></path>
                                    </svg>
                                </span>
                                <input
                                    type="email"
                                    id="email"
                                    autoComplete="off"
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    aria-invalid={validFirstName ? 'false' : 'true'}
                                    aria-describedby="uidnote"
                                    onFocus={() => setEmailFocus(true)}
                                    onBlur={() => setEmailFocus(false)}
                                    className=" placeholder:text-slate-400 block bg-white w-full border  border-teal-100  hover:border-teal-400 rounded-md py-2 pl-9 pr-3 focus:outline-none focus:border-teal-200  focus:shadow-outline"
                                />
                            </div>
                            <p
                                id="uidnote"
                                className={
                                    emailFocus && email && !validEmail ? 'text-red-500 text-xs italic' : 'hidden'
                                }
                            >
                                Yêu cầu đúng định dạng gmail <br />
                            </p>
                        </div>

                        {/* Phone Number */}
                        <div className=" mb-4 pb-2">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phonenumber">
                                Số điện thoại
                                <span className={validPhoneNumber ? 'text-primary-100 ml-1' : 'hidden'}>
                                    <FontAwesomeIcon icon={faCheck} />
                                </span>
                                <span className={validPhoneNumber || !phoneNumber ? 'hidden' : ' text-red-400 ml-1'}>
                                    <FontAwesomeIcon icon={faTimes} />
                                </span>
                            </label>
                            {/* <span className="w-1 h-1 border-black bg-black absolute inset-y-0 left-0 flex items-center pl-2"></span> */}
                            <div className="relative block mb-3">
                                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                                    <svg className="h-5 w-5 fill-teal-700" viewBox="0 0 20 20">
                                        <path d="M17.388,4.751H2.613c-0.213,0-0.389,0.175-0.389,0.389v9.72c0,0.216,0.175,0.389,0.389,0.389h14.775c0.214,0,0.389-0.173,0.389-0.389v-9.72C17.776,4.926,17.602,4.751,17.388,4.751 M16.448,5.53L10,11.984L3.552,5.53H16.448zM3.002,6.081l3.921,3.925l-3.921,3.925V6.081z M3.56,14.471l3.914-3.916l2.253,2.253c0.153,0.153,0.395,0.153,0.548,0l2.253-2.253l3.913,3.916H3.56z M16.999,13.931l-3.921-3.925l3.921-3.925V13.931z"></path>
                                    </svg>
                                </span>
                                <input
                                    type="number"
                                    id="phonenumber"
                                    autoComplete="off"
                                    onChange={(e) => setPhoneNumber(e.target.value)}
                                    required
                                    aria-invalid={validFirstName ? 'false' : 'true'}
                                    aria-describedby="uidnote"
                                    onFocus={() => setPhoneNumberFocus(true)}
                                    onBlur={() => setPhoneNumberFocus(false)}
                                    className=" placeholder:text-slate-400 block bg-white w-full border  border-teal-100  hover:border-teal-400 rounded-md py-2 pl-9 pr-3 focus:outline-none focus:border-teal-200  focus:shadow-outline"
                                />
                            </div>
                            <p
                                id="uidnote"
                                className={
                                    phoneNumberFocus && phoneNumber && !validPhoneNumber
                                        ? 'text-red-500 text-xs italic'
                                        : 'hidden'
                                }
                            >
                                Số điện thoại phải đúng 10 số <br />
                            </p>
                        </div>

                        {/* Company name */}
                        <div className=" mb-4 pb-2">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="companyName">
                                Tên Công Ty
                                <span className={validCompanyName ? 'text-primary-100 ml-1' : 'hidden'}>
                                    <FontAwesomeIcon icon={faCheck} />
                                </span>
                                <span className={validCompanyName || !companyName ? 'hidden' : ' text-red-400 ml-1'}>
                                    <FontAwesomeIcon icon={faTimes} />
                                </span>
                            </label>
                            {/* <span className="w-1 h-1 border-black bg-black absolute inset-y-0 left-0 flex items-center pl-2"></span> */}
                            <div className="relative block mb-3">
                                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                                    <svg className="h-5 w-5 fill-teal-700" viewBox="0 0 20 20">
                                        <path d="M17.388,4.751H2.613c-0.213,0-0.389,0.175-0.389,0.389v9.72c0,0.216,0.175,0.389,0.389,0.389h14.775c0.214,0,0.389-0.173,0.389-0.389v-9.72C17.776,4.926,17.602,4.751,17.388,4.751 M16.448,5.53L10,11.984L3.552,5.53H16.448zM3.002,6.081l3.921,3.925l-3.921,3.925V6.081z M3.56,14.471l3.914-3.916l2.253,2.253c0.153,0.153,0.395,0.153,0.548,0l2.253-2.253l3.913,3.916H3.56z M16.999,13.931l-3.921-3.925l3.921-3.925V13.931z"></path>
                                    </svg>
                                </span>
                                <input
                                    type="text"
                                    id="companyName"
                                    autoComplete="off"
                                    onChange={(e) => setCompanyName(e.target.value)}
                                    required
                                    aria-invalid={validCompanyName ? 'false' : 'true'}
                                    aria-describedby="uidnote"
                                    onFocus={() => setCompanyNameFocus(true)}
                                    onBlur={() => setCompanyNameFocus(false)}
                                    className=" placeholder:text-slate-400 block bg-white w-full border  border-teal-100  hover:border-teal-400 rounded-md py-2 pl-9 pr-3 focus:outline-none focus:border-teal-200  focus:shadow-outline"
                                />
                            </div>
                            <p
                                id="uidnote"
                                className={
                                    companyNameFocus && companyName && !validCompanyName
                                        ? 'text-red-500 text-xs italic'
                                        : 'hidden'
                                }
                            >
                                tối đa 100 ký tự <br />
                                Chỉ được sử dụng chữ
                            </p>
                        </div>

                        {/* Location */}
                        <div className=" mb-4 pb-2">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phonenumber">
                                Nơi ở
                                <span className={validPhoneNumber ? 'text-primary-100 ml-1' : 'hidden'}>
                                    <FontAwesomeIcon icon={faCheck} />
                                </span>
                                <span className={validPhoneNumber || !phoneNumber ? 'hidden' : ' text-red-400 ml-1'}>
                                    <FontAwesomeIcon icon={faTimes} />
                                </span>
                            </label>
                            {/* <span className="w-1 h-1 border-black bg-black absolute inset-y-0 left-0 flex items-center pl-2"></span> */}
                            <div className="relative block mb-3">
                                {/* <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                                    <svg className="h-5 w-5 fill-teal-700" viewBox="0 0 20 20"><path d="M17.388,4.751H2.613c-0.213,0-0.389,0.175-0.389,0.389v9.72c0,0.216,0.175,0.389,0.389,0.389h14.775c0.214,0,0.389-0.173,0.389-0.389v-9.72C17.776,4.926,17.602,4.751,17.388,4.751 M16.448,5.53L10,11.984L3.552,5.53H16.448zM3.002,6.081l3.921,3.925l-3.921,3.925V6.081z M3.56,14.471l3.914-3.916l2.253,2.253c0.153,0.153,0.395,0.153,0.548,0l2.253-2.253l3.913,3.916H3.56z M16.999,13.931l-3.921-3.925l3.921-3.925V13.931z"></path></svg>
                                </span> */}
                                {/* <input 
                                    type="number" 
                                    id="phonenumber"
                                    autoComplete="off"
                                    onChange={e => setPhoneNumber(e.target.value)}
                                    required
                                    aria-invalid={validFirstName ? "false" : "true"}
                                    aria-describedby="uidnote"
                                    onFocus={() => setPhoneNumberFocus(true)}
                                    onBlur={() => setPhoneNumberFocus(false)}
                                    className=" placeholder:text-slate-400 block bg-white w-full border border-teal-100 hover:border-teal-400 rounded-md py-2 pl-2 pr-3 focus:outline-none focus:border-teal-200 focus:shadow-outline" 
                                /> */}
                                <select onChange={(e) => setLocation(e.target.value)}>
                                    <option>Tp Hồ Chí Minh, (Quận 1)</option>
                                    <option>Tp Hồ Chí Minh, (Quận 2)</option>
                                    <option>Tp Hồ Chí Minh, (Quận 3)</option>
                                    <option>Tp Hồ Chí Minh, (Quận 4)</option>
                                    <option>Tp Hồ Chí Minh, (Quận 5)</option>
                                    <option>Tp Hồ Chí Minh, (Quận 6)</option>
                                    <option>Tp Hồ Chí Minh, (Quận 7)</option>
                                    <option>Tp Hồ Chí Minh, (Quận 8)</option>
                                    <option>Tp Hồ Chí Minh, (Quận 9)</option>
                                    <option>Tp Hồ Chí Minh, (Quận 10)</option>
                                    <option>Tp Hồ Chí Minh, (Quận 11)</option>
                                    <option>Tp Hồ Chí Minh, (Quận 12)</option>
                                    <option>Tp Hồ Chí Minh, (Quận Bình Tân)</option>
                                    <option>Tp Hồ Chí Minh, (Quận Bình Thạnh)</option>
                                    <option>Tp Hồ Chí Minh, (Quận Gò Vấp)</option>
                                    <option>Tp Hồ Chí Minh, (Quận Phú Nhuận)</option>
                                    <option>Tp Hồ Chí Minh, (Quận Tân Bình)</option>
                                    <option>Tp Hồ Chí Minh, (Quận Tân Phú)</option>
                                    <option>Tp Hồ Chí Minh, (Quận Thủ Đức)</option>
                                    <option>Tp Hồ Chí Minh, (Huyện Bình Chánh)</option>
                                    <option>Tp Hồ Chí Minh, (Huyện Cần Giờ)</option>
                                    <option>Tp Hồ Chí Minh, (Huyện Củ Chi)</option>
                                    <option>Tp Hồ Chí Minh, (Huyện Hóc Môn)</option>
                                    <option>Tp Hồ Chí Minh, (Huyện Nhà Bè)</option>
                                    <option>Hà Nội, (Quận Ba Đình)</option>
                                    <option>Hà Nội, (Quận Bắc Từ Liêm)</option>
                                    <option>Hà Nội, (Quận Đống Đa)</option>
                                    <option>Hà Nội, (Quận Hà Đông)</option>
                                    <option>Hà Nội, (Quận Hai Bà Trưng)</option>
                                    <option>Hà Nội, (Quận Hoàn Kiếm)</option>
                                    <option>Hà Nội, (Quận Hoàng Mai)</option>
                                    <option>Hà Nội, (Quận Long Biên)</option>
                                    <option>Hà Nội, (Quận Nam Từ Liêm)</option>
                                    <option>Hà Nội, (Quận Tây Hồ)</option>
                                    <option>Hà Nội, (Quận Thanh Xuân)</option>
                                    <option>Hà Nội, (Huyện Ba Vì)</option>
                                    <option>Hà Nội, (Huyện Chương Mỹ)</option>
                                    <option>Hà Nội, (Huyện Đan Phượng)</option>
                                    <option>Hà Nội, (Huyện Đông Anh)</option>
                                    <option>Hà Nội, (Huyện Gia Lâm)</option>
                                    <option>Hà Nội, (Huyện Hoài Đức)</option>
                                    <option>Hà Nội, (Huyện Mê Linh)</option>
                                    <option>Hà Nội, (Huyện Mỹ Đức)</option>
                                    <option>Hà Nội, (Huyện Phú Xuyên)</option>
                                    <option>Hà Nội, (Huyện Phúc Thọ)</option>
                                    <option>Hà Nội, (Huyện Quốc Oai)</option>
                                    <option>Hà Nội, (Huyện Sóc Sơn)</option>
                                    <option>Hà Nội, (Huyện Thạch Thất)</option>
                                    <option>Hà Nội, (Huyện Thanh Oai)</option>
                                    <option>Hà Nội, (Huyện Thanh Trì)</option>
                                    <option>Hà Nội, (Huyện Thường Tín)</option>
                                    <option>Hà Nội, (Huyện Ứng Hòa.)</option>
                                    <option>Hà Nội, (Thị xã Sơn Tây)</option>
                                    <option>Khác</option>
                                </select>
                            </div>
                            <p
                                id="uidnote"
                                className={
                                    phoneNumberFocus && phoneNumber && !validPhoneNumber
                                        ? 'text-red-500 text-xs italic'
                                        : 'hidden'
                                }
                            >
                                Số điện thoại phải đúng 10 số <br />
                            </p>
                        </div>

                        {/* password */}
                        <div className=" mb-4 pb-2">
                            {/* Label */}
                            <label className="block text-gray-700 text-sm font-bold mb-2 mr-2" htmlFor="password">
                                Mật khẩu
                                <span className={validPassword ? 'text-primary-100 ml-1' : 'hidden'}>
                                    <FontAwesomeIcon icon={faCheck} />
                                </span>
                                <span className={validPassword || !password ? 'hidden' : ' text-red-400 ml-1'}>
                                    <FontAwesomeIcon icon={faTimes} />
                                </span>
                            </label>

                            {/* Input */}
                            <input
                                type="password"
                                id="password"
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                aria-invalid={validPassword ? 'false' : 'true'}
                                aria-describedby="pwdnote"
                                onFocus={() => setPasswordFocus(true)}
                                onBlur={() => setPasswordFocus(false)}
                                className=" mb-3 placeholder:text-slate-400 block bg-white w-full border  border-teal-100  hover:border-teal-400 rounded-md py-2 pl-2 pr-3 focus:outline-none focus:border-teal-200  focus:shadow-outline"
                            />

                            {/* Thông báo */}
                            <p
                                id="pwdnote"
                                className={passwordFocus && !validPassword ? 'text-red-500 text-xs italic' : 'hidden'}
                            >
                                8 đến 25 ký tự <br />
                                Phải bao gồm chữ hoa, chữ thường, số và ký tự đặc biệt <br />
                                Ký tự đặc biệt:
                                <span aria-label="exclamation mark">!</span>
                                <span aria-label="at symbol">@</span>
                                <span aria-label="hashtag">#</span>
                                <span aria-label="dollar sign">$</span>
                                <span aria-label="percent">%</span>
                            </p>
                        </div>

                        {/* Comfirm password */}
                        <div className=" mb-4 pb-2">
                            {/* Label */}
                            <label className="block text-gray-700 text-sm font-bold mb-2 mr-2" htmlFor="comfirm_pwd">
                                Nhập lại mật khẩu
                                <span
                                    className={
                                        validPasswordConfirm && passwordConfirm ? 'text-primary-100 ml-1' : 'hidden'
                                    }
                                >
                                    <FontAwesomeIcon icon={faCheck} />
                                </span>
                                <span
                                    className={
                                        validPasswordConfirm || !passwordConfirm ? 'hidden' : ' text-red-400 ml-1'
                                    }
                                >
                                    <FontAwesomeIcon icon={faTimes} />
                                </span>
                            </label>

                            {/* input */}
                            <input
                                type="password"
                                id="comfirm_pwd"
                                onChange={(e) => setPasswordConfirm(e.target.value)}
                                required
                                aria-invalid={validPasswordConfirm ? 'false' : 'true'}
                                aria-describedby="confirmnote"
                                onFocus={() => setPasswordConfirmFocus(true)}
                                onBlur={() => setPasswordConfirmFocus(false)}
                                className=" placeholder:text-slate-400 block bg-white w-full border  border-teal-100  hover:border-teal-400 rounded-md py-2 pl-2 pr-3 focus:outline-none focus:border-teal-200  focus:shadow-outline"
                            />

                            {/* Thông báo */}
                            <p
                                id="confirmnote"
                                className={
                                    passwordConfirmFocus && !validPasswordConfirm
                                        ? 'text-red-500 text-xs italic'
                                        : 'hidden'
                                }
                            >
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
                                <span className="text-sm ">Tôi đồng ý vào các điều khoản & điều kiện của công ty</span>
                            </label>
                        </div>
                        <div className="flex items-center justify-between">
                            <button
                                type="submit"
                                className="bg-teal-500 hover:bg-teal-900 text-white font-bold py-2 px-4 my-6 w-full rounded focus:outline-none focus:shadow-outline"
                            >
                                Sign up
                            </button>
                        </div>
                        <div className="flex flex-wrap">
                            <h6>Already have an account? </h6>
                            <p>
                                {' '}
                                <a className="font-bold  text-teal-500 pl-2" onClick={() => navigate('/login')}>
                                    Login{' '}
                                </a>
                                here
                            </p>
                        </div>
                        <div className="button mt-16 mb-10 flex-wrap">
                            <button
                                className="bg-white hover:bg-teal-400 hover:text-white text-black font-bold  mx-3 w-44 focus:outline-none focus:shadow-outline rounded border-teal-100 border"
                                type="button"
                            >
                                <a href="https://myaccount.google.com/">Log in with Google</a>
                                <img
                                    src="https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/icon/google1.svg"
                                    alt=""
                                />
                            </button>
                            <button
                                className="bg-white hover:bg-teal-400 hover:text-white text-black font-bold py-2 px-4 mx-3 w-44 focus:outline-none focus:shadow-outline rounded border-teal-100 border"
                                type="button"
                            >
                                Company
                            </button>
                        </div>
                    </form>
                </section>
            )}
        </>
    );
}

export default Company;
