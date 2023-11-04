import images from '@/assets/images';

const JobItem = () => {
    return (
        <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-lg ">
            <div className="flex justify-between gap-3">
                <img
                    className="w-24 bg-red-200  object-fit rounded-lg"
                    src="data:image/png;base64,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"
                    alt="company"
                />
                <div className="flex flex-col gap-1">
                    <h5 className="font-family-title font-title text-lg">Senior UX Design</h5>
                    <p className="font-family-text font-normal text-sm">Highspeed Studios</p>
                </div>
            </div>

            <div className="flex justify-between gap-3">
                <div className="flex items-center p-3 bg-[#2bc155] rounded-lg">
                    <img className="w-7 h-7 object-contain" src={images.logo.money} alt={images.logo.money} />
                </div>
                <div className="flex flex-col gap-1">
                    <h5 className="font-family-title font-semibold ">14,000$ - 25,000$</h5>
                    <p className="font-family-text font-normal text-sm">Monthly Salary</p>
                </div>
            </div>

            <div className="flex justify-between gap-3">
                <div className="flex items-center p-3 bg-[#fba555] rounded-lg">
                    <img
                        className="w-7 h-7 object-contain"
                        src={images.logo.locationAdmin}
                        alt={images.logo.locationAdmin}
                    />
                </div>
                <div className="flex flex-col gap-1">
                    <h5 className="font-family-title font-semibold ">Ho Chi Minh City</h5>
                    <p className="font-family-text font-normal text-sm">Location</p>
                </div>
            </div>

            <div className="flex gap-2 w-">
                <button className="p-3 border-[#c00a4d]">Ẩn</button>
                <button className="py-2 px-4 text-white bg-[#c00a4d] rounded-lg">Xoá</button>
            </div>
        </div>
    );
};

export default JobItem;
