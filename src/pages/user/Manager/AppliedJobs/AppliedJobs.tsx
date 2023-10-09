import images from '@/assets/images';

const AplliedJobs = () => {
    return (
        <>
            <table className="border border-primary-100 w-full text-sm text-left ">
                <thead className="w-full  bg-primary-100  justify-between items-center p-4  text-white uppercase">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Title
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Apply Date
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Company
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Status
                        </th>
                    </tr>
                </thead>
                <tbody className="">
                    <tr className="bg-white border-b border-primary-100   hover:bg-gray-50 ">
                        <th
                            scope="row"
                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                            <div className="flex gap-4">
                                <img
                                    className="w-12 h-12 rounded-full"
                                    src="https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/bg/company-logo/company-06.png"
                                    alt="avt-company"
                                />
                                <div className="flex flex-col gap-1">
                                    <div className="flex gap-6">
                                        <h5 className="text-content-title font-title">Senior UI/UX Designer</h5>
                                        <div className="flex gap-1 items-center text-sm">
                                            <img src={images.logo.calender2} alt={images.logo.calender2} />
                                            <p className="text-content-text">1 days ago</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-3">
                                        <div className="flex gap-1 items-center text-sm">
                                            <img src={images.logo.location} alt={images.logo.calender2} />
                                            <p className="text-content-text">Ho Chi Minh, City</p>
                                        </div>
                                        <span className="w-[1px] bg-blue-gray-200 "></span>
                                        <div className="flex gap-1 items-center text-sm text-content-text">
                                            <img src={images.logo.location} alt={images.logo.calender2} />
                                            Salary:
                                            <span className="ml-2 text-content-title font-title">60$-90$</span>/ Hour
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </th>
                        <td className="px-6 py-4">03/07/2022</td>
                        <td className="px-6 py-4">Gangster Group</td>
                        <td className="px-6 py-4 ">
                            <div className="px-3 py-1 text-center text-white font-semibold text-sm rounded-lg bg-[#7307C9]">
                                Viewed
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    );
};

export default AplliedJobs;
