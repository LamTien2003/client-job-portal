import { useEffect } from 'react'
import useRefleshToken from "./useRefreshToken";
import useAuth from "./useAuth";
import { axiosPrivate } from "@/api/axios";

const useAxiosPrivate = () => {
    const refresh = useRefleshToken()
    const {auth} = useAuth()

    useEffect(() => {

        const requestIntercept = axiosPrivate.interceptors.request.use(
            (config:any) => {
                if(!config.headers['Authorization']) {
                    config.headers['Authorization'] = 'Bearer' + auth?.accessToken
                }
                return config
            }, (err:any) => Promise.reject(err)
        )
    
        const responseIntercept = axiosPrivate.interceptors.response.use(
            (response:any) => response,
            async (err:any) => {
                const prevRequest = err?.config
                if(err?.response?.status === 403 && !prevRequest?.sent) {
                    prevRequest.sent = true
                    const newAccessToken = await refresh()
                    prevRequest.headers['Authorization'] = 'Bearer' + newAccessToken
                    return axiosPrivate(prevRequest)
                }
                return Promise.reject(err)
            }
        )
    
        return () => {
            axiosPrivate.interceptors.request.eject(requestIntercept)
            axiosPrivate.interceptors.response.eject(responseIntercept)
        }

    }, [auth, refresh])


    return axiosPrivate
}

export default useAxiosPrivate