import axios from 'axios';
import axiosClient from './axiosClient';
import { ResponseApi } from '@/types/ResponseApi';
import Job from '@/types/Job';

export const getAllPost = async () => {
    try {
        const response = await axiosClient.get<ResponseApi<Job>>('/jobs');
        return response;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.log('error message: ', error.message);
            return error.message;
        } else {
            console.log('unexpected error: ', error);
            return 'An unexpected error occurred';
        }
    }
};
