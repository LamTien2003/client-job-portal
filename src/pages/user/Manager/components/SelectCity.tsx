import { useGetProvincesQuery } from '@/services/utilsApiSlice';
import { Select, MenuItem } from '@mui/material';
import { useEffect, useState, Dispatch } from 'react';
import { CiLocationOn } from 'react-icons/ci';

interface SelectInfo {
    title: string;
    fieldName: string;
    value?: string;
    onChange: any;
    error: string | undefined;
    touched: boolean | undefined;
    onSetCode: Dispatch<React.SetStateAction<number | undefined>>;
}

const SelectCity = ({ title, fieldName, value, onChange, error, touched, onSetCode }: SelectInfo) => {
    const { data, isLoading, isError } = useGetProvincesQuery();

    const [provices, setProvinces] = useState<any[]>([]);

    useEffect(() => {
        if (!isLoading && !isError && data?.data?.data) {
            setProvinces(data?.data?.data);
        }
    }, [data?.data?.data, isError, isLoading]);
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
                <div className="text-lg px-3">
                    <CiLocationOn />
                </div>
                <Select
                    value={value}
                    onChange={onChange}
                    name={fieldName}
                    variant="standard"
                    className="select w-full h-11 text-content-s-text items-center"
                >
                    {provices.map((item: any, index: any) => {
                        return (
                            <MenuItem onClick={() => onSetCode(item.code)} key={index} value={item.name}>
                                {item.name}
                            </MenuItem>
                        );
                    })}
                </Select>
            </div>
            {error && touched ? <div className="text-red-700 text-sm font-semibold">{error}</div> : null}
        </div>
    );
};

export default SelectCity;
