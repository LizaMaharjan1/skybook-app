import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../api/axios';

export const getAllUsers = createAsyncThunk<any,any>(
    'users/getAllUsers',
    async() => {
        const response = await axiosInstance.get('/users');
        return response?.data
    }
)

export const getAllHotels = createAsyncThunk<any,any>(
    'hotels/getAllHotels', 
    async() => {
        const response = await axiosInstance.get('/hotels')
        return response?.data
    }
)