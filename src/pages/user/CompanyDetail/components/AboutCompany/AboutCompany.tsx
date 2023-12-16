import Company from "@/types/Company";

type Props = {
    data: Company
}

function AboutCompany(props: Props) {

    const {data: company} = props
    return (
        <div className=" w-2/3 pr-3 lg:w-full tb:w-full mb:w-full">
            <div className=" mb-9">
                <p className=" text-content-text text-base font-medium mb-3">
                    <span className=" font-family-title text-content-title text-lg font-semibold mr-2">Mô tả công việc:</span>
                    <p className=" whitespace-pre-line">{company.description === '' ? 'Đang cập nhật' : company.description}</p>
                </p>
            </div>
            
        </div>
    );
}

export default AboutCompany;