import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import UserList from "@/views/user-list.vue";
import UserProfile from "@/views/user-profile.vue";
import routerNames from "@/constants/router-name";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: routerNames.USERLIST,
    component: UserList,
  },
  {
    path: "/userProfile/:id",
    name: routerNames.USERPROFILE,
    component: UserProfile,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
