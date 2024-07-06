import { route } from "quasar/wrappers";
import { createRouter, createMemoryHistory, createWebHistory, createWebHashHistory } from "vue-router";
import routes from "./routes";
import { userAuthStore } from "stores/userAuthStore";

export default route(function(/* { store, ssrContext } */) {
  const createHistory = process.env.SERVER
    ? createMemoryHistory
    : (process.env.VUE_ROUTER_MODE === "history" ? createWebHistory : createWebHashHistory);

  const Router = createRouter({
    scrollBehavior: () => ({ left: 0, top: 0 }),
    routes,
    history: createHistory(process.env.VUE_ROUTER_BASE)
  });

  // Router.beforeEach((to, from, next) => {
  //   const { requiresAuth } = to.meta || {};
  //   if (!requiresAuth) next();
  //
  //   const token = useAuthStore().token;
  //   if (!token) {
  //     next("/login");
  //   } else {
  //     next();
  //   }
  // });

  return Router;
});
