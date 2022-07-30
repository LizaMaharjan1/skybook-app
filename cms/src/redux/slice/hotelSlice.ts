import { createSlice } from '@reduxjs/toolkit';
import { getAllHotels } from '../actionCreator/hotelActionCreator';

const initialState:any = {
    hotelData: null,
    hotelLoading: false
}

const HotelSlice = createSlice({
    name: 'hotels',
    initialState,
    reducers: {},
    extraReducers: {
        [getAllHotels.pending.toString()] : (state:any)=> {
            state.hotelLoading = true;
        },
        [getAllHotels.fulfilled.toString()] : (state:any,action:any) => {
            state.hotelLoading = false;
            state.hotelData = action.payload
        },
        [getAllHotels.rejected.toString()]: (state:any) => {
            state.hotelLoading = false
        }
    }
})

export default HotelSlice.reducer;