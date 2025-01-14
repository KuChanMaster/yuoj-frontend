import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { routes } from "@/router/routes";//将此文件中的路由配置抽象出来到routers.ts中

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
