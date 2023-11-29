import Company from "@/types/Company";

type Props = {
    data: Company
}

function AboutCompany(props: Props) {

    const {data: company} = props
    return (
        <div className=" w-2/3 pr-3 lg:w-full tb:w-full mb:w-full">
            <div className=" mb-10">
                <h3 className=" text-content-title text-lg font-semibold mb-2">Mô tả về công ty</h3>
                <p className=" text-base font-medium">
                    {company?.description}
                </p>
            </div>
            
        </div>
    );
}

export default AboutCompany;