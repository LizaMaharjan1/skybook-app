import axios from "axios"

const baseURL = 'https://'

const axiosInstance = axios.create({
    baseURL: baseURL,
    headers: {
      Accept: "application/json",
    },
});

export default axiosInstance;