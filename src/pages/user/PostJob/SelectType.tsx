import Category from '@/types/Category';
import { Select, MenuItem } from '@mui/material';
interface SelectField {
    title: string;
    fieldName: string;
    options: Category[];
    icon?: string;
    error: string | undefined;
    touched: boolean | undefined;
    value?: string;
    onChange: any;
}
const SelectType = ({ title, fieldName, options, icon, error, touched, value, onChange }: SelectField) => {
    return (
        <div className="flex flex-col gap-2">
            <h5 className="text-[15px] font-medium text-content-text">{title}*</h5>
            <div
                className={`flex items-center  border-2 border-primary-40 pl-3  rounded ${
                    error && touched && 'border-red-800'
                }`}
            >
                <img className="w-4 h-4" src={icon} alt={icon} />
                <span className="w-[1px] h-6 bg-gray-300 mx-2"></span>
                <div className="w-full h-[48px]">
                    <Select
                        value={value}
                        onChange={onChange}
                        name={fieldName}
                        variant="standard"
                        className="select w-full h-[48px]  text-content-s-text items-center"
                    >
                        {options.map((option, index) => (
                            <MenuItem key={index} value={option.id}>
                                {option.categoryName}
                            </MenuItem>
                        ))}
                    </Select>
                </div>
            </div>
            {error && touched ? <div className="text-red-700 text-sm font-semibold">{error}</div> : null}
        </div>
    );
};

export default SelectType;
