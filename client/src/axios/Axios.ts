import axios from "axios"


const baseURL = process.env.APP_URL

const axiosInstance = axios.create({
    baseURL: baseURL,
    headers: {
      Accept: "application/json",
    },
});

export default axiosInstance;