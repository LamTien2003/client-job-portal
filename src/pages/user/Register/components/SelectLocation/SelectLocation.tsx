
import { MenuItem, Select } from "@mui/material";
import { locationArray } from "../../Register";
import { FormikTouched } from "formik";

type SelectFieldPropsType = {
    label: string
    id: string
    name: string
    value: string | Date
    onChange: any   
    onBlur: any
    error: any
    touched: boolean | undefined | FormikTouched<Date> | any
}
function SelectFields({label, id, name, value, onChange, onBlur, error, touched}: SelectFieldPropsType) {
    return (
        <div className=" flex flex-col mb-4">
            <label 
                htmlFor={id}
                className=" text-white text-base font-semibold"
            >
                {label}
            </label>
            
            <div className=" w-[234.4px] bg-white rounded-lg">
                <Select
                    id={id}
                    name={name}
                    value={value}
                    onChange={onChange}
                    onBlur={onBlur}
                    className={" w-full h-12 outline-none px-1 py-[5px] "}
                >
                    {locationArray.map(location => (
                        <MenuItem key={location} value={location} >
                            {location}
                        </MenuItem>
                    ))}
                </Select>
            </div>

            {(error && touched) ? <p className=" mt-2 p-1 text-red-900 italic select-none">{error}</p> : null }
        </div>
    );
}

export default SelectFields;