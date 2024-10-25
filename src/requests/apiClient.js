import axios from "axios";

export const API_URL = `https://gateway.scan-interfax.ru/api/v1`;

const $api = axios.create({
  baseURL: API_URL,
});

$api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    const expire = localStorage.getItem("expire");

    if (expire && new Date(expire) <= new Date()) {
      console.warn("Токен истек, требуется повторная авторизация.");
      localStorage.removeItem("token");
      localStorage.removeItem("expire");
      window.location.href = "/auth";
      return Promise.reject("Token expired");
    }

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
      console.log("Токен добавлен в заголовок:", token);
    } else {
      console.warn("Токен не найден");
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default $api;
