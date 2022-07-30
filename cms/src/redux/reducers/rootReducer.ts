import { combineReducers } from 'redux';
import UserSlice from '../slice/userSice'

const rootReducer = combineReducers({
    usersReducer: UserSlice
});

export default rootReducer;