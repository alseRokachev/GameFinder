import {createSlice} from "@reduxjs/toolkit";

export const UserData = createSlice({
    name : 'User',
    initialState : {
        darkTheme : false
    },
    reducers: {
        changeTheme: (state) => {
            state.darkTheme = !state.darkTheme
        }
    }
})


export default UserData.reducer
export const {changeTheme} = UserData.actions