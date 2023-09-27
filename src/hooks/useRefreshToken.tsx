
import useAuth from "./useAuth";
import axiosClient from "@/services/axiosClient";

const REFRESH_API = 'https://job-portal-server-e9q1.onrender.com/auth/refreshToken'

const useRefleshToken = () => {
    const {setAuth} = useAuth()

    const reflesh = async () => {
        const response = await axiosClient.get(REFRESH_API, {
            withCredentials: true
        })

        setAuth(prev => {
            console.log(JSON.stringify(prev))
            console.log(JSON.stringify(response.data.accessToken))
            return { 
                ...prev, 
                roles: response?.data?.data?.role,
                accessToken: response.data.accessToken}
        })
        return response.data.accessToken
    }

    return reflesh
}

export default useRefleshToken