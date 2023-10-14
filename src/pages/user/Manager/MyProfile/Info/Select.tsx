import { Select, MenuItem } from '@mui/material';
import { BsGenderTrans } from 'react-icons/bs';
interface SelectInfo {
    title: string;
    fieldName: string;
    value?: string;
    onChange: any;
}
const SelectInfo = ({ title, fieldName, value, onChange }: SelectInfo) => {
    const options: string[] = ['Nam', 'Nữ', 'Khác'];
    return (
        <div className="flex flex-col gap-1 w-full">
            <label className="font-bold text-primary-100" htmlFor={fieldName}>
                {title}
            </label>
            <div className="flex items-center text-s-text w-full border-2 bg-input rounded-md">
                <div className="text-lg px-3">
                    <BsGenderTrans />
                </div>

                <Select
                    value={value}
                    onChange={onChange}
                    name={fieldName}
                    variant="standard"
                    className="select w-full h-[48px]  text-content-s-text items-center"
                >
                    {options.map((option, index) => (
                        <MenuItem key={index} value={option}>
                            {option}
                        </MenuItem>
                    ))}
                </Select>
            </div>
        </div>
    );
};

export default SelectInfo;
