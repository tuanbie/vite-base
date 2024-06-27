import "./App.css";
// import { useAppDispatch, useAppSelector } from "./hooks/useActionRedux";
// import { setAuth } from "./redux/slice/authSlice";
import AppRoutes from "./routers";

function App() {
  // const auth = useAppSelector((state) => state.authSlice.email);
  // const dispatch = useAppDispatch();
  // const handleAddEmail = (email: string) => {
  //   dispatch(setAuth({ isAuthenticated: true, email: "tuansk1002@gmail.com" }));
  // };
  return (
    <>
      <AppRoutes />
    </>
  );
}

export default App;
