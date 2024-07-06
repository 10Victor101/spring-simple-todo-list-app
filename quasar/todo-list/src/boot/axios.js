import { boot } from "quasar/wrappers";
import axios from "axios";
import { userAuthStore } from "stores/userAuthStore";

const api = axios.create({ baseURL: "http://localhost:8080" });

export default boot(({ app }) => {
  axios.interceptors.request.use(
    (config) => {
      const token = userAuthStore().token;
      if (token) {
        config.headers.Authorization = `Bearer ${ token }`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  axios.interceptors.response.use(
    response => response,
    error => {
      if (error.response && error.response.status === 403){
        userAuthStore().clearAuth();
        window.location.href = "/login";
      }
      return Promise.reject(error);
    }
  );

  app.config.globalProperties.$axios = axios;
  app.config.globalProperties.$api = api;
});

export { api };
