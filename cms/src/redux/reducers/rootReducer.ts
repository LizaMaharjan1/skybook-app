import { combineReducers } from 'redux';
import HotelSlice from '../slice/hotelSlice';
import UserSlice from '../slice/userSice'

const rootReducer = combineReducers({
    usersReducer: UserSlice,
    hotelsReducer: HotelSlice
});

export default rootReducer;