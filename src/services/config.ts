import axios from "axios";
const baseURL = import.meta.env.VITE_BASE_URL;

const token = localStorage.getItem("accessToken") ?? "";
const tokenParse = JSON.parse(token);

const axiosHttp = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosHttp.interceptors.request.use(
  (config) => {
    if (tokenParse) {
      config.headers.Authorization = `Bearer ${tokenParse}`;
    } else {
      console.warn("Authorization header omitted due to missing token");
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);
export default axiosHttp;
