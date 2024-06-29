import "./App.css";
import { useAppDispatch, useAppSelector } from "./hooks/useActionRedux";
import { setAuth } from "./redux/slice/authSlice";
import AppRoutes from "./routers";

function App() {
  return (
    <>
      <AppRoutes />
    </>
  );
}

export default App;
