import { projectAuth } from "@/firebase/config";
import { createRouter, createWebHistory } from "vue-router";

// redirect to login screen if not logged in
const requireAuthGuard = (to, from, next) => {
  let user = projectAuth.currentUser;
  if (!user) {
    next({ name: "Welcome" });
  } else {
    next();
  }
};

// redirect to home screen if logged in
const redirectToChatrooomGuard = (to, from, next) => {
  let user = projectAuth.currentUser;
  if (user) {
    next({ name: 'Chatroom' })
  } else {
    next();
  }
}
const routes = [
  {
    path: "/",
    name: "Welcome",
    component: () => import("../views/Welcome.vue"),
    beforeEnter: redirectToChatrooomGuard,
  },
  {
    path: "/chatroom",
    name: "Chatroom",
    component: () => import("../views/Chatroom.vue"),
    beforeEnter: requireAuthGuard,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
