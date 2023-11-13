import { useLayoutEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useLoginMutation } from '@/services/authApiSlice';
import { setToken } from '@/utils/storage';
import { setCurrentUser, setcredentialsToken } from '@/store/userSlice';
import { useFormik } from 'formik';
import * as Yup from 'Yup';
import Title from './components/Title/Title';
import Others from './components/Others/Others';
import Fields from './components/Fields/Fields';
import Loader from '@/components/Loader/Loader';
import { EMAILREGEX } from '@/constants/regex';
import { toast } from 'react-toastify';

const Login = () => {
    const [login, { isLoading }] = useLoginMutation();
    
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: Yup.object({
            email: Yup.string().required('Không được để trống').matches(EMAILREGEX, 'Email phải đúng định dạng'),
            password: Yup.string()
                .required('Không được để trống')
                .min(8, 'Mật khẩu phải có ít nhất 8 ký tự')
        }),
        onSubmit: async (values) => {
            try {
                const response = await login(values).unwrap();
                if(response?.status === 200) {
                    toast.success(response.data.msg)
                    const user = response.data.data;
                    const accessToken = response.data.accessToken;
                    if (user && accessToken) {
                        dispatch(setCurrentUser(user));
                        dispatch(setcredentialsToken(accessToken));
                        setToken(accessToken);
                    }
                    navigate(-1);
                }
            } catch(error:any) {
                toast.error(error.data.msg)
            }
            
        },
    });

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            {isLoading && <Loader/>}
            <div className=" max-w-[540px] h-auto bg-primary-100 rounded mt-16 mx-auto p-[50px] ">
                <Title />

                <form onSubmit={formik.handleSubmit}>
                    <Fields
                        type="text"
                        label="Email"
                        id="email"
                        name="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.errors.email}
                        touched={formik.touched.email}
                        placeholder="info@example.com"
                    />
                    <Fields
                        type="password"
                        label="Password"
                        id="password"
                        name="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.errors.password}
                        touched={formik.touched.password}
                        placeholder="Enter your password"
                    />
                    <Others />
                </form>
            </div>
        </>
    );
};

export default Login;
