import { useEffect, useState } from "react";
import Location from "./Location/Location";

type Props = {
    filter: (city: string) => void
};
function Sidebar(props: Props) {
    const [city, setcity] = useState<string>('')
    
    useEffect(() => {
        props.filter(city)
    }, [city])
    
    return (
        <div className=" w-1/4 pr-3 mx-auto mb-8 lg:pr-0 tb:pr-0 mb:pr-0 lg:w-10/12 tb:w-10/12 mb:w-11/12">
            <div className=" w-full bg-[#f8f8f8] rounded-xl pl-5 pr-5 pt-5 pb-1">
                <Location locationChange={setcity} />
            </div>
        </div>
    );
}

export default Sidebar;