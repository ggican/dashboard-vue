import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import UserDetail from "../views/UserDetail.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/user-detail/:id",
    name: "user",
    component: UserDetail,
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/About.vue"),
  },
];

const router = createRouter({
  mode: "history",
  history: createWebHistory(),
  linkActiveClass: "bg-sidebar-button-active",
  linkExactActiveClass: "exact-active",
  routes,
});

export default router;
