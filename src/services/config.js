import axios from "axios";

const Config = axios.create({
  baseURL: process.env.REACT_APP_API_URL_PROD,
});

export default Config; 