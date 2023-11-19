import { DatePicker } from '@mui/x-date-pickers';
import dayjs from 'dayjs';
import { FormikTouched } from 'formik';
import { PiHeadlightsFill } from 'react-icons/pi';

type SelectFieldPropsType = {
    label: string;
    id: string;
    value: string | Date;
    onChange: any;
    error: any;
    touched: boolean | undefined | FormikTouched<Date>;
};
function SelectDate({ label, id, value = new Date(Date.now()), onChange, error, touched }: SelectFieldPropsType) {
    return (
        <div className="w-1/2 flex flex-col p-2">
            <label htmlFor={id} className=" text-white text-base font-semibold">
                {label}
            </label>

            <div className='max-h-[45.6px] mt-[6px]'>
                <DatePicker
                    disableFuture
                    value={dayjs(value)}
                    onChange={(sth: any) => onChange('establishDate', dayjs(sth).toISOString())}
                    className=" w-full h-full bg-white rounded-lg border-none outline-none px-10"
                    sx={{borderColor: '#00A7AC'}}
                />
            </div>

            {error && touched ? <p className=" mt-2 text-red-900 italic select-none">{error}</p> : null}
        </div>
    );
}
//
export default SelectDate;
