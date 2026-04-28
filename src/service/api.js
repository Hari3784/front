import axios from "axios";

const API = axios.create({
  baseURL: "https://art-gallery-project-production.up.railway.app/api",
});

API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");

  if (token && !req.url.includes("/auth")) {
    req.headers.Authorization = `Bearer ${token}`;
  }

  return req;
});

export default API;