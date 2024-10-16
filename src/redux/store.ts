import { configureStore } from "@reduxjs/toolkit";
import headerSlice from "../layout/MainLayout/components/Header/HeaderSlice";
import authSlice from "../redux/slice/authSlice";
// import productsSlice from "~/pages/Products/productsSlice";

const store = configureStore({
    reducer: {
        header: headerSlice.reducer,
        auth: authSlice.reducer,
        // products: productsSlice.reducer,
    },
});

export default store;
