const useGetCurrentUser = () => {
  const user: any = localStorage.getItem("user");
  const checkUser = JSON.parse(user);

  return checkUser;
};
export default useGetCurrentUser;
