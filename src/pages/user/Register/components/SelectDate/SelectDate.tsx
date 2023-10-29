import { DatePicker } from '@mui/x-date-pickers';
import { FormikTouched } from 'formik';

type SelectFieldPropsType = {
    label: string;
    id: string;
    value: string | Date;
    onChange: any;
    error: any;
    touched: boolean | undefined | FormikTouched<Date> | any;
};
function SelectDate({ label, id, value, onChange, error, touched }: SelectFieldPropsType) {
    return (
        <div className="w-1/2 flex flex-col p-2">
            <label htmlFor={id} className=" text-white text-base font-semibold">
                {label}
            </label>

            <DatePicker className=" w-full h-12 bg-white rounded-lg border-none outline-none px-10" />

            {error && touched ? <p className=" mt-2 text-red-900 italic select-none">{error}</p> : null}
        </div>
    );
}

export default SelectDate;
