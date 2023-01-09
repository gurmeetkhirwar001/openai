import Config from "./config";

const SignIn = async (params) => await Config.post("/user/register",params);
const LogIn = async (params) => await Config.post("/user/login",params);
const getCurrentuser = async (params) =>
  await Config.get("/user/currentuser", {
    headers: {
      Authorization: localStorage.getItem("token"),
    },
  });

const data = { SignIn, LogIn, getCurrentuser };
export default data;
