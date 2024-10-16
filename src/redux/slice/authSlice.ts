import { createSlice } from "@reduxjs/toolkit";
// import {IUserInfo} from "../../../types/User/index"

// type UserOmit = Omit<IUserInfo, 'createdAt' | 'updatedAt'>;

export interface AuthState {
    isAuthenticated: boolean;
    currentUser: any;
}

const initialState: AuthState = {
    isAuthenticated: false,
    currentUser: null,
};

export const authSlice = createSlice({
    name: "auth",
    initialState: {
        login: {
            isFetching: false,
            error: false,
            message: null,
        },
        currentUser: null,
        isAuthenticated: false,
    },
    reducers: {
        setAuth: (state, action) => {
            state.isAuthenticated = true;
            state.currentUser = action.payload;
        },
        loginFailed: (state, action) => {
            state.login.isFetching = false;
            state.login.error = true;
            state.login.message = action.payload.response.data.msg;
        },
        // reset: () => initialState,
    },
});

export const { setAuth, loginFailed } = authSlice.actions;

export default authSlice;
