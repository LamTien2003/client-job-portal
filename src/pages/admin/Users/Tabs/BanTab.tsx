import { useEffect, useState } from "react";
import { Avatar, Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useGetBannedUsersQuery, useUnbanUserMutation } from "@/services/usersApiSlice";
import { toast } from "react-toastify";
import UserActions from "../UserActions/UserActions";
import User from "@/types/User";
import Loader from "@/components/Loader/Loader";

function BanTab({setIsLoading}: {setIsLoading: (arg: boolean) => void}) {

    const [bannedUserList, setBannedUserList] = useState<User[]>([])
    const [bannedUserCount, setBannedUserCount] = useState<number>(0)
    const [paginationModel, setPaginationModel] = useState({
        page: 0,
        pageSize: 5
    })

    const {data: dataBannedUser, isLoading: isLoadingBannedUser, isError: isErrorBannedUser} = useGetBannedUsersQuery({page: paginationModel.page + 1, limit: paginationModel.pageSize})
    const [unbanUser, {isLoading: isLoadingUnban}] = useUnbanUserMutation()

    const handleAction = async (id: string) => {
        const isConfirm = confirm(`Bạn có chắc muốn bỏ cấm người dùng này`)
        if(isConfirm) {
            try {
                const response = await unbanUser(id).unwrap()
                if(response.status === 200) {
                    toast.success(response.data.msg)
                }
            } catch(err: any) {
                toast.error(err.data.msg)
            }
        }
    }

    useEffect(() => {
        if(dataBannedUser?.data?.data && !isLoadingBannedUser && !isErrorBannedUser) {
            setBannedUserList(dataBannedUser?.data?.data)
        }
    }, [dataBannedUser?.data?.data, isLoadingBannedUser, isErrorBannedUser])

    useEffect(() => {
        if(dataBannedUser?.data?.totalItems && !isLoadingBannedUser && !isErrorBannedUser) {
            setBannedUserCount(dataBannedUser?.data?.totalItems)
        }
    }, [dataBannedUser?.data?.totalItems, isLoadingBannedUser, isErrorBannedUser])

    useEffect(() => {
        setIsLoading(isLoadingUnban)
    }, [isLoadingUnban])

    const columns = [
        { field: 'photo', headerName: 'Ảnh', width: 90, renderCell: (params: any) => <Avatar src={params.row.photo} /> },
        { field: 'firstName', headerName: 'Họ', width: 100 },
        { field: 'lastName', headerName: 'Tên', width: 100 },
        { field: 'email', headerName: 'Email', width: 200 },
        { field: 'phoneNumber', headerName: 'Số điện thoại', width:  130 },
        { field: 'location', headerName: 'Vị trí', width: 170, renderCell: (params: any) => <>{params.row.location.city}</> },
        { field: 'createdAt', headerName: 'Ngày tham gia', width: 140, renderCell: (params: any) => new Intl.DateTimeFormat('en-US', ).format(new Date(params.row.createdAt)) },
        { field: 'role', headerName: 'Loại người dùng', width: 140, renderCell: (params: any) => <>{params.row.companyName ? 'Doanh nghiệp' : 'Người tìm việc'}</> },
        { field: 'actions', headerName: 'Hành động', type: 'actions', width: 90, renderCell: (params: any) => <UserActions params={params} actionType="unban" onAction={handleAction} title='Bỏ cấm người dùng này'/> },
    ];

    return (
        <>
            {isLoadingUnban && <Loader />}
            <Box sx={{marginBottom: 10, width: '100%', minHeight: 400}}>
                <DataGrid
                    columns={columns}
                    rows={bannedUserList}
                    rowCount={bannedUserCount}
                    pageSizeOptions={[5, 10, 25]}
                    paginationModel={paginationModel}
                    onPaginationModelChange={setPaginationModel}
                    paginationMode="server"
                />
            </Box>
        </>
    );
}

export default BanTab;