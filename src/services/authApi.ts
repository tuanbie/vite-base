import authSlice from "../redux/slice/authSlice";
import axiosHttp from "./config";

const loginUser = async (user: any, dispatch: any) => {
    const { email, password } = user;
    // dispatch(authSlice.actions);
    try {
        const res = await axiosHttp.post("/auth/login", {
            username: email,
            password,
        });
        console.log(res.data);

        dispatch(authSlice.actions.setAuth(res.data));
    } catch (error) {
        console.log(error);
        dispatch(authSlice.actions.loginFailed);
        console.log(error);
    }
};
export { loginUser };
