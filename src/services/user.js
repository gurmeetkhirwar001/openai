import Config from "./config";

const SignIn = async (params) => await Config.post("/user/register",params);
const LogIn = async (params) => await Config.post("/user/login",params);
const getCurrentuser = async (params) =>
  await Config.get("/user/currentuser", {
    headers: {
      Authorization: localStorage.getItem("token"),
    },
  });
const updateProfile = async (params, id) =>
  Config.patch(`/user/updateuser/${id}`, params);
const updatePassword = async (params, id) =>
  Config.patch(`/user/updatepassword/${id}`, params);
const data = { SignIn, LogIn, getCurrentuser, updateProfile, updatePassword };
export default data;
