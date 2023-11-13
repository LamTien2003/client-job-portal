interface TextareaProps {
    fieldName: string;
    title: string;
    error: string | undefined;
    touched: boolean | undefined;
    type?: string;
    value?: string | Date | number;
    onChange: any;
    onBlur: any;
}

const Textarea = ({ fieldName, title, error, touched, value, onChange, onBlur }: TextareaProps) => {
    return (
        <div className="flex flex-col gap-2">
            <div className="font-medium text-content-text ">
                {title}
                <span className="ml-2 font-title text-primary-100">*</span>
            </div>

            <textarea
                name={fieldName}
                className={`font-family-text text-content-text  border-2 outline-none w-full p-3 rounded-md ${
                    error && touched && 'border-red-800'
                }`}
                id="introduce"
                value={value !== undefined && value !== null ? value.toString() : ''}
                onChange={onChange}
                onBlur={onBlur}
                cols={30}
                rows={4}
            ></textarea>
            {error && touched ? <div className="text-red-700 text-sm font-semibold">{error}</div> : null}
        </div>
    );
};

export default Textarea;
