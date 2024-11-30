import axios from "axios";

const HTTP_URL = import.meta.env.VITE_API_URL;

const axiosClient = axios.create();

axiosClient.interceptors.request.use(async (config) => {
  config.baseURL = HTTP_URL;

  return config;
});

export default axiosClient;
