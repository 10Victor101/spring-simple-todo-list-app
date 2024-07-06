const routes = [
  {
    path: "",
    children: [
      { path: "/login", component: () => import("pages/LoginPage.vue") },
      { path: "/register", component: () => import("pages/RegisterPage.vue") },
      { path: "/", redirect: "/login" }
    ]
  },
  {
    path: "/home",
    component: () => import("layouts/MainLayout.vue"),
    meta: { requiresAuth: true },
    children: [
      { path: "", component: () => import("pages/HomePage.vue") }
    ]
  },
  {
    path: "/user",
    component: () => import("layouts/MainLayout.vue"),
    meta: { requiresAuth: true },
    children: [
      { path: "", component: () => import("pages/UserPage.vue") }
    ]
  },
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue")
  }
];

export default routes;
