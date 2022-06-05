import axios from "axios";

const axiosInstance = axios.create({
  withCredentials: true,
  baseURL: process.env.BASE_URL + "api",
});

export default axiosInstance;
