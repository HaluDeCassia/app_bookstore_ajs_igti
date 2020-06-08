import axios from "axios";

const now = new Date();

const api = axios.create({
  baseURL: "http://localhost:3000"
});

api.interceptors.request.use(async config => {
  if (config.method === "post")
    config.data = {...config.data, createdAt: now.toISOString(), updatedAt: now.toISOString()};
  if (config.method === "put")
    config.data = {...config.data, updatedAt: now.toISOString()};
  
  return config;
});

export default api;