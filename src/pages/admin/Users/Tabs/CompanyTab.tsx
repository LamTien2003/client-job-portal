import { useEffect, useState } from "react";
import { Avatar, Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useBanUserMutation } from "@/services/usersApiSlice";
import { toast } from "react-toastify";
import UserActions from "../UserActions/UserActions";
import Company from "@/types/Company";
import { useGetCompaniesQuery } from "@/services/companiesApiSlice";

function CompanyTab({setIsLoading}: {setIsLoading: (arg: boolean) => void}) {

    const [companyList, setCompanyList] = useState<Company[]>([])
    const [companyCount, setCompanyCount] = useState<number>(0)
    const [paginationModel, setPaginationModel] = useState({
        page: 0,
        pageSize: 5
    })

    const {data: dataCompany, isLoading: isLoadingCompany, isError: isErrorCompany} = useGetCompaniesQuery({page: paginationModel.page + 1, limit: paginationModel.pageSize})
    const [banUser, {isLoading: isLoadingBan, isError: isErrorBan}] = useBanUserMutation()

    const handleAction = async (id: string) => {

        const isConfirm = confirm(`Bạn có chắc muốn cấm người dùng này`)
        if(isConfirm) {
            try {
                const response = await banUser(id).unwrap()
                if(response.status === 200) {
                    toast.success(response.data.msg)
                }
            } catch(err) {
                toast.error('sth')
            }
        }
    }

    useEffect(() => {
        if(dataCompany?.data?.data && !isLoadingCompany && !isErrorCompany) {
            setCompanyList(dataCompany?.data?.data)
        }
    }, [dataCompany?.data?.data, isLoadingCompany, isErrorCompany])

    useEffect(() => {
        if(dataCompany?.data?.totalItems && !isLoadingCompany && !isErrorCompany) {
            setCompanyCount(dataCompany?.data?.totalItems)
        }
    }, [dataCompany?.data?.totalItems, isLoadingCompany, isErrorCompany])

    useEffect(() => {
        setIsLoading(isLoadingBan)
    }, [isLoadingBan])

    const columns = [
        { field: 'photo', headerName: 'Ảnh', width: 90, renderCell: (params: any) => <Avatar src={params.row.photo} /> },
        { field: 'companyName', headerName: 'Tên công ty', width: 130 },
        { field: 'location', headerName: 'Trụ sở chính ở', width: 150, renderCell: (params: any) => <>{params.row.location.city}</> },
        { field: 'email', headerName: 'Email', width: 230 },
        { field: 'phoneNumber', headerName: 'Số điện thoại', width: 150 },
        { field: 'establishDate', headerName: 'Ngày thành lập', width: 150, renderCell: (params: any) => new Intl.DateTimeFormat('en-US', ).format(new Date(params.row.establishDate)) },
        { field: 'createdAt', headerName: 'Ngày tham gia', width: 150, renderCell: (params: any) => new Intl.DateTimeFormat('en-US', ).format(new Date(params.row.createdAt)) },
        { field: 'actions', headerName: 'Hành động', type: 'actions', width: 100, renderCell: (params: any) => <UserActions params={params} onAction={handleAction} actionType="ban" title='Cấm doanh nghiệp này'/> },
    ];

    return (
        <Box sx={{marginBottom: 10, width: '100%', height: 370}}>
            <DataGrid
                columns={columns}
                rows={companyList}
                rowCount={companyCount}
                pageSizeOptions={[5, 10, 25]}
                paginationModel={paginationModel}
                onPaginationModelChange={setPaginationModel}
                disableRowSelectionOnClick
            />
        </Box>
    );
}

export default CompanyTab;