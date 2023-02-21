import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import UserView from "../views/UserView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    
    {
      path: "/userlist",
      name: "userlist",
      component: UserView,
    },
  ],
});

export default router;
