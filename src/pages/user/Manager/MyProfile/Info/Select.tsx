import { Select, Option } from '@material-tailwind/react';
import { BsGenderTrans } from 'react-icons/bs';
interface SelectInfo {
    title: string;
    fieldName: string;
}
const SelectInfo = ({ title, fieldName }: SelectInfo) => {
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
                    name={fieldName}
                    className="w-full h-11 text-content-s-text border-none outline-none items-center"
                    variant="standard"
                    color="blue"
                >
                    <Option>Nam</Option>
                    <Option>Nữ</Option>
                    <Option>Khác</Option>
                </Select>
            </div>
        </div>
    );
};

export default SelectInfo;
