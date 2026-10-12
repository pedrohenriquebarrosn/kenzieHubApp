import axios from "axios";

export const Api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL?.trim() || "https://kenziehub.herokuapp.com",
  timeout: 5000,
});
