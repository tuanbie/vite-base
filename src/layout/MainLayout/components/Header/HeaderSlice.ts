import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
    name: "header",
    initialState: {
        navigation: "",
    },
    reducers: {
        navigationChange: (state, action) => {
            state.navigation = action.payload;
        },
    },
});
