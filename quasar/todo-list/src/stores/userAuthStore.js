import { defineStore } from "pinia";

export const userAuthStore = defineStore("auth", {
  state: () => ({
    token: localStorage.getItem("token") || null,
    user: localStorage.getItem("user") || null
  }),
  getters: {},
  actions: {
    setAuth (user, token) {
      this.token = token;
      this.user = JSON.stringify(user);
      localStorage.setItem("token", this.token);
      localStorage.setItem("user", this.user);
    },
    getUser () {
      return JSON.parse(this.user);
    },
    clearAuth () {
      localStorage.clear();
      this.token = null;
      this.user = null;
    }
  }
});
