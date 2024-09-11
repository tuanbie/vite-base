import axiosHttp from "./config";

const login = async () => {
  const response = await axiosHttp.get("/auth/login");
  return response.data;
};
export { login };
