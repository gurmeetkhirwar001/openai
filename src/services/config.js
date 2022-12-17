import axios from "axios";

const Config = axios.create({
  baseURL: "https://api.yogjyotish.com",
});

export default Config; 