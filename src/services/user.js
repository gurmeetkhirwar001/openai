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
  await Config.patch(`/user/updateuser/${id}`, params);
const otpVerification = async (params) =>
  await Config.patch("/user/verifyotp", params);
const updatePassword = async (params, id) =>
  await Config.patch(`/user/updatepassword/${id}`, params);
const data = {
  SignIn,
  LogIn,
  getCurrentuser,
  updateProfile,
  updatePassword,
  otpVerification,
};
export default data;
