import axiosClient from "@/services/axiosClient";
const BASE_URL = 'https://job-portal-server-e9q1.onrender.com'

export const axiosPrivate = axiosClient.create({
    baseURL: BASE_URL,
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true
})