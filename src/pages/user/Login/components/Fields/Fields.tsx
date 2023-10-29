type FieldPropsType = {
    type: string
    label: string
    id: string
    name: string
    value: string
    onChange: any   
    onBlur: any
    error: string | undefined
    touched: boolean | undefined
    placeholder: string
}
function Fields ({type, label, id, name, value, onChange, onBlur, error, touched, placeholder}: FieldPropsType) {
    return (
        <div className=" flex flex-col mb-4">
            <label 
                htmlFor={id}
                className=" text-white text-base font-semibold"
            >
                {label}
            </label>
            
            <input
                type={type}
                id={id}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                className={"h-14 rounded-lg outline-none px-5 py-[5px] "}
            />

            {(error && touched) ? <p className=" mt-2 p-1 text-red-900 italic select-none">{error}</p> : null }
        </div>
    );
}

export default Fields
;