import axios from 'axios';

const api = axios.create({
  withCredentials: true,
  baseURL: "http://carpi.cs.rpi.edu:8000/api/v1/",
  headers: {
    'Content-Type': 'application/json',
  }
});

export default api;