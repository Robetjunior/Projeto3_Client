import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API + "/announcement",
  withCredentials: true,
});

export default api;
