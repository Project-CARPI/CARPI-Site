import axios, { AxiosInstance } from "axios";

const api: AxiosInstance = axios.create({
  baseURL: "http://carpi.cs.rpi.edu:8000/api/v1/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;