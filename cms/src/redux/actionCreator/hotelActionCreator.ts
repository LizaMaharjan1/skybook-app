import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../api/axios';

export const getAllHotels = createAsyncThunk<any,any>(
    'hotels/getAllHotels', 
    async() => {
        const response = await axiosInstance.get('/hotels')
        return response?.data
    }
)
