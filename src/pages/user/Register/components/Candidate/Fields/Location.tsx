import { ChangeEvent } from "react";
import { locationArray } from "../../Candidate/Candidate";
import { MenuItem, Select } from "@mui/material";

type Props = {
    value: string
    error: string | undefined
    handleChange: (e:any) => void
    touched: any
}

function Location(props: Props) {
    const {value, error, touched, handleChange} = props
    return (
        <div className=" mb-4  mr-4 ml-4">
            <p className="block text-gray-700 text-sm font-bold mb-2">
                Địa chỉ
            </p>
            <div className="relative block mb-3">
                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                    <svg className="h-5 w-5 fill-teal-700" viewBox="0 0 20 20">
                        <path d="M17.388,4.751H2.613c-0.213,0-0.389,0.175-0.389,0.389v9.72c0,0.216,0.175,0.389,0.389,0.389h14.775c0.214,0,0.389-0.173,0.389-0.389v-9.72C17.776,4.926,17.602,4.751,17.388,4.751 M16.448,5.53L10,11.984L3.552,5.53H16.448zM3.002,6.081l3.921,3.925l-3.921,3.925V6.081z M3.56,14.471l3.914-3.916l2.253,2.253c0.153,0.153,0.395,0.153,0.548,0l2.253-2.253l3.913,3.916H3.56z M16.999,13.931l-3.921-3.925l3.921-3.925V13.931z"></path>
                    </svg>
                </span>
                <Select
                    id="location"
                    name="location"
                    value={value}
                    onChange={handleChange} 
                    className=" h-[41.6px] text-content-text bg-white w-full border border-teal-100 hover:border-teal-400 rounded-md pl-9 pr-3 cursor-pointer"
                >
                    {locationArray.map(location => {
                        return (
                            <MenuItem key={location} value={location} >
                                {location}
                            </MenuItem>
                        )
                    })}
                </Select>
                <p
                className={error && touched ? ' w-60 text-red-500 text-xs italic' : 'hidden'}
            >
                {error}
            </p>
            </div>
        </div>
    );
}

export default Location;