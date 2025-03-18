import axios from "axios";

const API_BASE_URL = "http://127.0.0.1:8001"; 

const api = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true, 
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
