import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface UserState {
    username: string,
    firstName: string,
    lastName: string,
    points: number,
    pending: [],
    loggedIn: boolean,
}

const initialState: UserState = {
    username: "",
    firstName: "",
    lastName: "",
    points: 0,
    pending: [],
    loggedIn: false,
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        //is actually counter/increment for name
        setGlobalUser: (_state, action: PayloadAction<UserState>) => { //can also take action. I.E. (state, action)
            return _state = {...action.payload, loggedIn: true};
        },
        updateGlobalUser: (_state, action: PayloadAction<UserState>) => {
            return _state = {...action.payload}
        },
    },
});

export const {setGlobalUser, updateGlobalUser} = userSlice.actions;

export default userSlice.reducer;