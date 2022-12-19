import Config from "./config";

const SignIn = async (params) => await Config.post("/user/register",params);
const LogIn = async (params) => await Config.post("/user/login",params);

const data = { SignIn, LogIn };
export default data;
