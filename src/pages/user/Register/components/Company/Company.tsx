import { useRef, useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { RegisterCompanyRequest, useRegisterCompanyMutation } from '@/services/authApiSlice';
import { useFormik } from 'formik';
import * as Yup from 'Yup';
import { EMAIL_REGEX, PNUMBER_REGEX, PWD_REGEX } from '../Candidate/Candidate';
import FirstName from './Fields/FirstName';
import LastName from './Fields/LastName';
import Email from './Fields/Email';
import Location from './Fields/Location';
import PhoneNumber from './Fields/PhoneNumber';
import PasswordConfirm from './Fields/PasswordConfirm';
import Password from './Fields/Password';
import CompanyName from './Fields/CompanyName';
import EstablishDate from './Fields/EstablishDate';
import CompanySizeTo from './Fields/CompanySizeTo';
import CompanySizeFrom from './Fields/CompanySizeFrom ';

function Company() {
    const navigate = useNavigate();

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    const [RegisterCompany] = useRegisterCompanyMutation();

    const formik = useFormik({
        initialValues: {
            type: 'company',
            firstName: '',
            lastName: '',
            email: '',
            location: 'Hồ Chí Minh',
            phoneNumber: '',
            password: '',
            passwordConfirm: '',
            companyName: '',
            description: 'Mô tả công ty',
            establishDate: new Date,
            photo: '', // chưa làm
            coverPhoto: '', // chưa làm
            companySizeFrom: 0,
            companySizeTo: 0,
        },
        validationSchema: Yup.object({
            firstName: Yup
                .string()
                .required('Không được để trống')
                .min(2, 'Họ phải tối thiểu 2 kí tự')
                .max(30, 'Họ chỉ tối đa 30 kí tự'),
            lastName: Yup
                .string()
                .required('Không được để trống')
                .min(2, 'Tên phải tối thiểu 2 kí tự')
                .max(30, 'Tên chỉ tối đa 30 kí tự'),
            email: Yup
                .string()
                .required('Không được để trống')
                .matches(EMAIL_REGEX, 'Email phải đúng định dạng'),
            phoneNumber: Yup
                .string()
                .required('Không được để trống')
                .matches(PNUMBER_REGEX, 'Số điện thoại phải đúng định dạng'),
            companyName: Yup
                .string()
                .required('Không được để trống')
                .min(2, 'Tên công ty phải tối thiểu 2 kí tự')
                .max(100, 'Tên công ty chỉ tối đa 100 kí tự'),
            description: Yup
                .string()
                .max(500, 'Mô tả chỉ tối đa 500 kí tự'),
            EstablishDate: Yup
                .date()
                .min(Yup.ref('originalEndDate'),
                ({ min }) => `Thời gian thành lập phải là quá khứ ${formatDate(min)}!!`,),
            companySizeFrom: Yup
                .number()
                .required('Không được để trống')
                .min(1, 'Số lượng bắt đầu quy mô công ty phải có ít nhất 1 người'),
            companySizeTo: Yup
                .number()
                .required('Không được để trống')
                .moreThan(Yup.ref('companySizeFrom'), 'Số lượng kết thúc quy mô công ty phải nhiều hơn số lượng bắt đầu'),
            password: Yup
                .string()
                .required('Không được để trống')
                .matches(
                    PWD_REGEX,
                    'Mật khẩu phải từ 8 đến 24 kí tự. Phải có ít nhất 1 chữ hoa, 1 chữ thường, số và 1 kí tự đặc biệt',
                ),
            passwordConfirm: Yup
                .string()
                .required('Không được để trống')
                .oneOf([Yup.ref('password')], 'Mật khẩu không trùng khớp'),
        }),
        onSubmit: (values) => {
            try {
                const myValues = {
                    type: values.type,
                    firstName: values.firstName,
                    lastName: values.lastName,
                    email: values.email,
                    location: values.location,
                    phoneNumber: values.phoneNumber,
                    password: values.password,
                    passwordConfirm: values.passwordConfirm,
                    companyName: values.companyName,
                    description: values.description,
                    establishDate: values.establishDate,
                    photo: values.photo,
                    coverPhoto: values.coverPhoto,
                    companySize: {
                        from: values.companySizeFrom,
                        to: values.companySizeTo,
                    } 
                } as RegisterCompanyRequest
                const response = RegisterCompany(myValues);
                setSuccess(true);
            } catch (error) {
                error;
                setErrMsg('Đăng ký không thành công');
            }
        },
    });

    function formatDate(date:Date | string) {
        return new Date(date).toLocaleDateString()
    }

    // clear error msg when user, pwd, matchpwd change
    useEffect(() => {
        setErrMsg('');
    }, [
        formik.values,
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
                        className="bg-white rounded-2xl border-teal-100 border py-10 mb-4"
                    >
                        <div className='flex flex-wrap justify-center'>
                            <FirstName 
                                value={formik.values.firstName} 
                                error={formik.errors.firstName}
                                handleChange={formik.handleChange} 
                            />
                            <LastName 
                                value={formik.values.lastName} 
                                error={formik.errors.lastName} 
                                handleChange={formik.handleChange}
                            />
                            <Email 
                                value={formik.values.email} 
                                error={formik.errors.email} 
                                handleChange={formik.handleChange}
                            />
                            <PhoneNumber 
                                value={formik.values.phoneNumber} 
                                error={formik.errors.phoneNumber} 
                                handleChange={formik.handleChange}
                            />
                            <Password
                                value={formik.values.password} 
                                error={formik.errors.password} 
                                handleChange={formik.handleChange}
                            />
                            <PasswordConfirm 
                                value={formik.values.passwordConfirm} 
                                error={formik.errors.passwordConfirm} 
                                handleChange={formik.handleChange}
                            />
                            <CompanyName 
                                value={formik.values.companyName} 
                                error={formik.errors.companyName} 
                                handleChange={formik.handleChange} 
                            />
                            <Location 
                                value={formik.values.location} 
                                error={formik.errors.location} 
                                handleChange={formik.handleChange} 
                            />
                            <CompanySizeFrom
                                value={formik.values.companySizeFrom}    
                                error={formik.errors.companySizeFrom}    
                                handleChange={formik.handleChange}    
                            />
                            <CompanySizeTo
                                value={formik.values.companySizeTo}    
                                error={formik.errors.companySizeTo}    
                                handleChange={formik.handleChange}    
                            />
                            <EstablishDate 
                                value={formik.values.establishDate} 
                                error={formik.errors.establishDate} 
                                handleChange={formik.handleChange} 
                            />
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
                        <div className=' pr-16 pl-16'>
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
                            <div className="flex justify-center button mt-6 flex-wrap">
                                <button
                                    className="flex items-center bg-white hover:bg-teal-400 hover:text-white text-black font-bold py-2 px-4 mx-3 w-56 focus:outline-none focus:shadow-outline rounded border-teal-100 border"
                                    type="button"
                                >
                                    <img
                                        className='mr-2'
                                        src="https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/icon/google1.svg"
                                        alt=""
                                    />
                                    <a href="https://myaccount.google.com/">Log in with Google</a>
                                </button>
                                <button
                                    className="bg-white hover:bg-teal-400 hover:text-white text-black font-bold py-2 px-4 mx-3 w-56 focus:outline-none focus:shadow-outline rounded border-teal-100 border"
                                    type="button"
                                >
                                    Company
                                </button>
                            </div>
                        </div>
                    </form>
                </section>
            )}
        </>
    );
}

export default Company;
