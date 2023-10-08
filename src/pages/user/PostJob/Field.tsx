import { Field } from 'formik';

interface CustomFieldProps {
    fieldName: string;
    title: string;
    placeholder?: string;
    error: string | undefined;
    touched: boolean | undefined;
    icon: string;
    type?: string;
}

const CustomField = ({ fieldName, type, title, placeholder, error, touched, icon }: CustomFieldProps) => {
    return (
            <div className="flex flex-col gap-2">
                <div className="text-[15px] font-medium text-content-text">{title}*</div>
                <div
                    className={`flex items-center  border-2 border-primary-40 pl-3  rounded  ${
                        error && touched && 'border-red-800'
                    }`}
                >
                    <img className="w-4 h-4" src={icon} alt={icon} />
                    <span className="w-[1px] h-6 bg-gray-300 mx-2"></span>
                    <Field
                        name={fieldName}
                        className="text-content-s-text w-full h-[48px] outline-none"
                        type={type ? type : 'text'}
                        placeholder={placeholder}
                    />
                </div>
                {error && touched ? <div className="text-red-700 text-sm font-semibold">{error}</div> : null}
            </div>

            /* <div className="flex flex-col gap-1 w-full">
                <label className="font-bold text-primary-100" htmlFor={fieldName}>
                    {title}
                </label>
                <div
                    className={`flex items-center text-s-text w-full border-2 bg-input rounded-md ${
                        error && touched && 'border-red-800'
                    }`}
                >
                    <div className="text-xl px-3">{icon}</div>
                    <Field
                        name={fieldName}
                        className="w-full h-11 rounded-md py-2 outline-none bg-input"
                        type={type ? type : 'text'}
                        placeholder={placeholder}
                    />
                </div>
                {error && touched ? <div className="text-red-700 text-sm font-semibold">{error}</div> : null}
            </div> */
    );
};

export default CustomField;
