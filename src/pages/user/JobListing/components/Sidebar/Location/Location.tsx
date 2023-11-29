import { useState } from "react";


function Location({locationChange}: {locationChange: (city: string) => void}) {
    const [id, setId] = useState<string>('')

    const handleChangeLocation = (city: string, id: string) => {
        setId(id)
        locationChange(city)
    } 

    return (
        <div className=" bg-white border-[#eee] border rounded-md pt-5 pb-5 pl-6 pr-3 mb-5">
            <h3 className=" font-family-title text-content-title font-semibold text-lg mb-2 lg:text-lg">Tìm việc theo tỉnh, thành</h3>
            <div className=" max-h-64 overflow-scroll">
                <div className=" mb-2 flex relative">
                    <div className=" flex items-center cursor-pointer">
                        <input
                            id='allLocation'
                            type="radio"
                            className=" mr-1.5"
                            checked={id === 'allLocation'}
                            onChange={() => handleChangeLocation('allLocation', 'allLocation')}
                        />
                        <label
                            htmlFor='allLocation'
                            className=" text-content-text text-sm font-medium lg:text-sm cursor-pointer"
                        >
                            Tất cả
                        </label>
                    </div>
                </div>
                <div className=" mb-2 flex relative">
                    <div className=" flex items-center cursor-pointer">
                        <input
                            id='hcm'
                            type="radio"
                            className=" mr-1.5"
                            checked={id === 'hcm'}
                            onChange={() => handleChangeLocation('Thành phố Hồ Chí Minh', 'hcm')}
                        />
                        <label
                            htmlFor='hcm'
                            className=" text-content-text text-sm font-medium lg:text-sm cursor-pointer"
                        >
                            Hồ Chí Minh
                        </label>
                    </div>
                </div>
                <div className=" mb-2 flex relative">
                    <div className=" flex items-center cursor-pointer">
                        <input
                            id='hn'
                            type="radio"
                            className=" mr-1.5"
                            checked={id === 'hn'}
                            onChange={() => handleChangeLocation('Thành phố Hà Nội', 'hn')}
                        />
                        <label
                            htmlFor='hn'
                            className=" text-content-text text-sm font-medium lg:text-sm cursor-pointer"
                        >
                            Hà Nội
                        </label>
                    </div>
                </div>
                <div className=" mb-2 flex relative">
                    <div className=" flex items-center cursor-pointer">
                        <input
                            id='hb'
                            type="radio"
                            className=" mr-1.5"
                            checked={id === 'hb'}
                            onChange={() => handleChangeLocation('Thành phố Hòa Bình', 'hb')}
                        />
                        <label
                            htmlFor='hb'
                            className=" text-content-text text-sm font-medium lg:text-sm cursor-pointer"
                        >
                            Hòa Bình
                        </label>
                    </div>
                </div>
                <div className=" mb-2 flex relative">
                    <div className=" flex items-center cursor-pointer">
                        <input
                            id='hue'
                            type="radio"
                            className=" mr-1.5"
                            checked={id === 'hue'}
                            onChange={() => handleChangeLocation('Tỉnh Thừa Thiên Huế', 'hue')}
                        />
                        <label
                            htmlFor='hue'
                            className=" text-content-text text-sm font-medium lg:text-sm cursor-pointer"
                        >
                            Huế
                        </label>
                    </div>
                </div>
                <div className=" mb-2 flex relative">
                    <div className=" flex items-center cursor-pointer">
                        <input
                            id='nt'
                            type="radio"
                            className=" mr-1.5"
                            checked={id === 'nt'}
                            onChange={() => handleChangeLocation('Tỉnh Bình Dương', 'nt')}
                        />
                        <label
                            htmlFor='nt'
                            className=" text-content-text text-sm font-medium lg:text-sm cursor-pointer"
                        >
                            Bình Dương
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Location;