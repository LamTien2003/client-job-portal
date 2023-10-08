import { Field } from 'formik';
import { ReactNode } from 'react';

interface CustomFieldProps {
    fieldName: string;
    title: string;
    placeholder?: string;
    error: string | undefined;
    touched: boolean | undefined;
    icon: ReactNode;
    type?: string;
}

const CustomField = ({ fieldName, type, title, placeholder, error, touched, icon }: CustomFieldProps) => {
    return (
        <div className="flex flex-col gap-1 w-full">
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
        </div>
    );
};

export default CustomField;
