// import axios from "axios";
// // const baseURL = process.env.VITE_BASE_URL;
// const baseURL = "http://localhost:3000/api";

// const token = localStorage.getItem("accessToken") ?? "";
// const tokenParse = JSON.parse(token);
// console.log(baseURL);
// const axiosHttp = axios.create({
//     baseURL,
//     headers: {
//         "Content-Type": "application/json",
//     },
// });

// axiosHttp.interceptors.request.use(
//     (config) => {
//         if (tokenParse) {
//             config.headers.Authorization = `Bearer ${tokenParse}`;
//         } else {
//             console.warn("Authorization header omitted due to missing token");
//         }
//         return config;
//     },
//     (error) => {
//         return Promise.reject(error);
//     },
// );
// export default axiosHttp;
import axios from "axios";
//import jwt_decode from "jwt-decode";
const baseURL = "http://localhost:3000/api";
//
const axiosHttp = axios.create({
    baseURL,
});
export default axiosHttp;
