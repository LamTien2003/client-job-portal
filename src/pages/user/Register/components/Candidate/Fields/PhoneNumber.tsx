import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ChangeEvent } from "react";

type Props = {
    value: string
    error: string | undefined
    handleChange: (e:ChangeEvent) => void
    touched: any
}

function PhoneNumber(props: Props) {
    const {value, error, touched, handleChange} = props
    return (
        <div className=" mb-4  mr-4 ml-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
                Số điện thoại
                <span
                    className={
                        !error && value
                            ? 'text-primary-100 ml-1'
                            : 'hidden'
                    }
                >
                    <FontAwesomeIcon icon={faCheck} />
                </span>
                <span
                    className={
                        !error || !value
                            ? 'hidden'
                            : ' text-red-400 ml-1'
                    }
                >
                    <FontAwesomeIcon icon={faTimes} />
                </span>
            </label>
            {/* <span className="w-1 h-1 border-black bg-black absolute inset-y-0 left-0 flex items-center pl-2"></span> */}
            <div className="relative block mb-3">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <img className=" w-4 h-4" src="https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/icon/phone-5.svg" />
                </span>
                <input
                    type="text"
                    id="phoneNumber"
                    name="phoneNumber"
                    autoComplete="off"
                    value={value}
                    onChange={handleChange}
                    className=" placeholder:text-slate-400 block bg-white w-full border  border-teal-100  hover:border-teal-400 rounded-md py-2 pl-9 pr-3 focus:outline-none focus:border-teal-200  focus:shadow-outline"
                />
            </div>
            <p
                className={error && touched ? ' w-60 text-red-500 text-xs italic' : 'hidden'}
            >
                {error}
            </p>
        </div>
    );
}

export default PhoneNumber;