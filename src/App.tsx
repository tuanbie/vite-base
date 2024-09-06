import "./App.css";
import { useAppDispatch, useAppSelector } from "./hooks/useActionRedux";
import { setAuth } from "./redux/slice/authSlice";
import AppRoutes from "./routers";

function App() {
  return (
    <>
      <div className="bg-black text-white  ">
        <AppRoutes />
      </div>
    </>
  );
}

export default App;
