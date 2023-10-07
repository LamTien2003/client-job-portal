import { useRef, useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { RegisterCompanyRequest, useRegisterCompanyMutation,  } from '@/services/authApiSlice';
import { useFormik } from 'formik';
import * as Yup from 'yup'

const EMAIL_REGEX = /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/;
const PNUMBER_REGEX = /[0-9]{2}\d{8}/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;


function Company() {
    const navigate = useNavigate();

    const firstNameRef = useRef<HTMLInputElement | null>();

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    const [RegisterCompany] = useRegisterCompanyMutation()

    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            email: "",
            phoneNumber: "",
            location: "Tp Hồ Chí Minh, (Quận 1)",
            password: "",
            companyName: "",
            passwordConfirm: "",
        },
        validationSchema: Yup.object({
            firstName: Yup
                .string()
                .required("Không được để trống")
                .min(2, "Họ phải tối thiểu 2 kí tự")
                .max(30, "Họ chỉ tối đa 30 kí tự"),
            lastName: Yup
                .string()
                .required("Không được để trống")
                .min(2, "Tên phải tối thiểu 2 kí tự")
                .max(30, "Họ chỉ tối đa 30 kí tự"),
            email: Yup.string()
                .required("Không được để trống")
                .matches(EMAIL_REGEX, "Email phải đúng định dạng"),
            phoneNumber: Yup.string()
                .required("Không được để trống")
                .matches(PNUMBER_REGEX, "Số điện thoại phải đủ 10 số"),
            location: Yup.string()
                .required("Không được để trống"),
            companyName: Yup
                .string()
                .required("Không được để trống")
                .min(2, "Tên công ty phải tối thiểu 2 kí tự")
                .max(100, "Họ chỉ tối đa 30 kí tự"),
            password: Yup
                .string()
                .required("Không được để trống")
                .matches(PWD_REGEX, "Mật khẩu phải từ 8 đến 24 kí tự. Phải có ít nhất 1 chữ hoa, 1 chữ thường, số và 1 kí tự đặc biệt"),
            passwordConfirm: Yup
                .string()
                .required("Không được để trống")
                .oneOf([Yup.ref("password")], "Mật khẩu không trùng khớp"),
        }),
        onSubmit: (values) => {
            const myValues = {
                ...values,
                type: "company",
                introduce: "Giới thiệu về tôi"
            } as RegisterCompanyRequest
            console.log(myValues)
            try {
                const response = RegisterCompany(myValues)
                console.log(response);
                setSuccess(true);
            } catch (error) {
                console.log(error)
                setErrMsg('Đăng ký không thành công');
            }
        },
    })

    // focus input username when access page
    useEffect(() => {
        firstNameRef.current?.focus();
    }, []);

    // clear error msg when user, pwd, matchpwd change
    useEffect(() => {
        setErrMsg('');
    }, [formik.values.firstName, 
        formik.values.lastName, 
        formik.values.email, 
        formik.values.phoneNumber, 
        formik.values.companyName, 
        formik.values.password, 
        formik.values.passwordConfirm
    ]);

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
                        onSubmit={formik.handleSubmit}
                        className="bg-white rounded-2xl border-teal-100 border px-16 py-12 mb-4"
                    >
                        {/* First name */}
                        <div className=" mb-4 pb-2">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">
                                Họ
                                <span className={!formik.errors.firstName && formik.values.firstName ? 'text-primary-100 ml-1' : 'hidden'}>
                                    <FontAwesomeIcon icon={faCheck} />
                                </span>
                                <span className={!formik.errors.firstName || !formik.values.firstName ? 'hidden' : ' text-red-400 ml-1'}>
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
                                    id="firstName"
                                    ref={firstNameRef}
                                    autoComplete="off"
                                    value={formik.values.firstName}
                                    onChange={formik.handleChange}
                                    required
                                    aria-invalid={formik.errors.firstName ? 'false' : 'true'}
                                    aria-describedby="uidnote"
                                    className=" placeholder:text-slate-400 block bg-white w-full border  border-teal-100  hover:border-teal-400 rounded-md py-2 pl-9 pr-3 focus:outline-none focus:border-teal-200  focus:shadow-outline"
                                />
                            </div>
                            <p
                                id="uidnote"
                                className={formik.errors.firstName ? 'text-red-500 text-xs italic' : 'hidden'
                                }
                            >
                                {formik.errors.firstName}
                            </p>
                        </div>

                        {/* Last name */}
                        <div className=" mb-4 pb-2">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">
                                Tên
                                <span className={!formik.errors.lastName && formik.values.lastName ? 'text-primary-100 ml-1' : 'hidden'}>
                                    <FontAwesomeIcon icon={faCheck} />
                                </span>
                                <span className={!formik.errors.lastName || !formik.values.lastName ? 'hidden' : ' text-red-400 ml-1'}>
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
                                    id="lastName"
                                    autoComplete="off"
                                    value={formik.values.lastName}
                                    onChange={formik.handleChange}
                                    required
                                    aria-invalid={formik.errors.lastName ? 'false' : 'true'}
                                    aria-describedby="uidnote"
                                    className=" placeholder:text-slate-400 block bg-white w-full border  border-teal-100  hover:border-teal-400 rounded-md py-2 pl-9 pr-3 focus:outline-none focus:border-teal-200  focus:shadow-outline"
                                />
                            </div>
                            <p
                                id="uidnote"
                                className={formik.errors.lastName ? 'text-red-500 text-xs italic' : 'hidden'
                                }
                            >
                                {formik.errors.lastName}
                            </p>
                        </div>

                        {/* Email */}
                        <div className=" mb-4 pb-2">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                Email
                                <span className={!formik.errors.email && formik.values.email ? 'text-primary-100 ml-1' : 'hidden'}>
                                    <FontAwesomeIcon icon={faCheck} />
                                </span>
                                <span className={!formik.errors.email || !formik.values.email ? 'hidden' : ' text-red-400 ml-1'}>
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
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                    required
                                    aria-invalid={formik.errors.email ? 'false' : 'true'}
                                    aria-describedby="uidnote"
                                    className=" placeholder:text-slate-400 block bg-white w-full border  border-teal-100  hover:border-teal-400 rounded-md py-2 pl-9 pr-3 focus:outline-none focus:border-teal-200  focus:shadow-outline"
                                />
                            </div>
                            <p
                                id="uidnote"
                                className={formik.errors.email ? 'text-red-500 text-xs italic' : 'hidden'}
                            >
                                {formik.errors.email}
                            </p>
                        </div>

                        {/* Phone Number */}
                        <div className=" mb-4 pb-2">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phoneNumber">
                                Số điện thoại
                                <span className={!formik.errors.phoneNumber && formik.values.phoneNumber ? 'text-primary-100 ml-1' : 'hidden'}>
                                    <FontAwesomeIcon icon={faCheck} />
                                </span>
                                <span className={!formik.errors.phoneNumber || !formik.values.phoneNumber ? 'hidden' : ' text-red-400 ml-1'}>
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
                                    id="phoneNumber"
                                    autoComplete="off"
                                    value={formik.values.phoneNumber}
                                    onChange={formik.handleChange}
                                    required
                                    aria-invalid={formik.errors.phoneNumber ? 'false' : 'true'}
                                    aria-describedby="uidnote"
                                    className=" placeholder:text-slate-400 block bg-white w-full border  border-teal-100  hover:border-teal-400 rounded-md py-2 pl-9 pr-3 focus:outline-none focus:border-teal-200  focus:shadow-outline"
                                />
                            </div>
                            <p
                                id="uidnote"
                                className={formik.errors.phoneNumber ? 'text-red-500 text-xs italic' : 'hidden'}
                            >
                                {formik.errors.phoneNumber}
                            </p>
                        </div>

                        {/* Company name */}
                        <div className=" mb-4 pb-2">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="companyName">
                                Tên Công Ty
                                <span className={!formik.errors.companyName && formik.values.companyName ? 'text-primary-100 ml-1' : 'hidden'}>
                                    <FontAwesomeIcon icon={faCheck} />
                                </span>
                                <span className={!formik.errors.companyName || !formik.values.companyName ? 'hidden' : ' text-red-400 ml-1'}>
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
                                    value={formik.values.companyName}
                                    onChange={formik.handleChange}
                                    required
                                    aria-invalid={formik.errors.companyName ? 'false' : 'true'}
                                    aria-describedby="uidnote"
                                    className=" placeholder:text-slate-400 block bg-white w-full border  border-teal-100  hover:border-teal-400 rounded-md py-2 pl-9 pr-3 focus:outline-none focus:border-teal-200  focus:shadow-outline"
                                />
                            </div>
                            <p
                                id="uidnote"
                                className={formik.errors.companyName ? 'text-red-500 text-xs italic' : 'hidden' }
                            >
                                {formik.errors.companyName}
                            </p>
                        </div>

                        {/* Location */}
                        <div className=" mb-4 pb-2">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor='location'>
                                Địa chỉ
                            </label>
                            <div className="relative block mb-3">
                                <select id='location' value={formik.values.location} onChange={formik.handleChange}>
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
                        </div>
                        
                        {/* password */}
                        <div className=" mb-4 pb-2">
                            {/* Label */}
                            <label className="block text-gray-700 text-sm font-bold mb-2 mr-2" htmlFor="password">
                                Mật khẩu
                                <span className={!formik.errors.password && formik.values.password ? 'text-primary-100 ml-1' : 'hidden'}>
                                    <FontAwesomeIcon icon={faCheck} />
                                </span>
                                <span className={!formik.errors.password || !formik.values.password ? 'hidden' : ' text-red-400 ml-1'}>
                                    <FontAwesomeIcon icon={faTimes} />
                                </span>
                            </label>

                            {/* Input */}
                            <input
                                type="password"
                                id="password"
                                value={formik.values.password}
                                onChange={formik.handleChange}
                                required
                                aria-invalid={formik.errors.password ? 'false' : 'true'}
                                aria-describedby="pwdnote"
                                className=" mb-3 placeholder:text-slate-400 block bg-white w-full border  border-teal-100  hover:border-teal-400 rounded-md py-2 pl-2 pr-3 focus:outline-none focus:border-teal-200  focus:shadow-outline"
                            />

                            {/* Thông báo */}
                            <p
                                id="pwdnote"
                                className={formik.errors.password ? 'text-red-500 text-xs italic' : 'hidden'}
                            >
                                {formik.errors.password}
                            </p>
                        </div>

                        {/* Comfirm password */}
                        <div className=" mb-4 pb-2">
                            {/* Label */}
                            <label className="block text-gray-700 text-sm font-bold mb-2 mr-2" htmlFor="passwordConfirm">
                                Nhập lại mật khẩu
                                <span className={!formik.errors.passwordConfirm && formik.values.passwordConfirm ? 'text-primary-100 ml-1' : 'hidden'}>
                                    <FontAwesomeIcon icon={faCheck} />
                                </span>
                                <span className={!formik.errors.passwordConfirm || !formik.values.passwordConfirm ? 'hidden' : ' text-red-400 ml-1'}>
                                    <FontAwesomeIcon icon={faTimes} />
                                </span>
                            </label>

                            {/* input */}
                            <input
                                type="password"
                                id="passwordConfirm"
                                value={formik.values.passwordConfirm}
                                onChange={formik.handleChange}
                                required
                                aria-invalid={formik.errors.passwordConfirm ? 'false' : 'true'}
                                aria-describedby="confirmnote"
                                className=" placeholder:text-slate-400 block bg-white w-full border  border-teal-100  hover:border-teal-400 rounded-md py-2 pl-2 pr-3 focus:outline-none focus:border-teal-200  focus:shadow-outline"
                            />

                            {/* Thông báo */}
                            <p
                                id="confirmnote"
                                className={formik.errors.passwordConfirm ? 'text-red-500 text-xs italic' : 'hidden'}
                            >
                                {formik.errors.passwordConfirm}
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
