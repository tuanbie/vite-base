import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/useActionRedux";
import authSlice, { setAuth } from "../../redux/slice/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as authServices from "../../services/authApi";
import { currentUserSelector, messageLogin } from "../../redux/selector";
import Notification from "../Notification/Notification";
// import { login } from "../../services/authApi";

const LoginForm = ({}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const currentUser = useSelector(currentUserSelector);
    const warningMessage = useSelector(messageLogin);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showNotification, setShowNotification] = useState<boolean>(false);

    useEffect(() => {
        console.log("ssss", currentUser);

        if (currentUser && currentUser.code == 201) {
            navigate("/product");
        }
        // eslint-disable-next-line
    }, [currentUser]);

    const handleLogin = (e: any) => {
        e.preventDefault();
        const newUser = {
            email: email,
            password: password,
        };
        authServices.loginUser(newUser, dispatch);
    };

    return (
        <div className=" sm:py-6">
            <div className="sm:px-[13%]">
                <h2 className="text-base font-semibold leading-7 text-gray-900 pb-12">I already have an account</h2>
                <div className="flex justify-between">
                    <p>Email*</p>
                    <p>Mandatory fields *</p>
                </div>
                <form onSubmit={handleLogin}>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)}
                        className="pl-4 pr-4 py-4 rounded-xl border border-gray-300 shadow-sm w-full mb-8 mt-2"
                    />
                    <p>Password*</p>
                    <input
                        type="text"
                        name="password"
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                        className="pl-4 pr-4 py-4 rounded-xl border border-gray-300 shadow-sm w-full my-2"
                    />
                    <p className=" ">Forgot your password?</p>
                    <button type="submit" className="bg-black w-full pr-4 py-4 text-white rounded-full my-7 ">
                        {" "}
                        Sign in
                    </button>
                    {warningMessage && (
                        <Notification
                            message={warningMessage}
                            type="success"
                            // onClose={() => setShowNotification(false)}
                        />
                    )}
                </form>
            </div>

            <hr className=" border-t border-gray-300 pt-6" />
            <div className="sm:px-[13%]">
                <h2 className="text-base font-semibold leading-7 text-gray-900 sm:py-6">I don't have an account</h2>
                <p>Enjoy added benefits and a richer experience by creating a personal account</p>

                <button className="bg-white w-full pr-4 py-4 border-[1px] border-black text-black rounded-full my-7 ">
                    Create My Jan Account
                </button>
            </div>
        </div>
    );
};

export default LoginForm;
