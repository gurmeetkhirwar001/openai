import axios from "axios";

const Config = axios.create({
  baseURL: "http://localhost:3001",
});

export default Config; 