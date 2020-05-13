import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/exp02",
    component: () => import("@/views/exp02/exp02.vue")
  },
  {
    path: "/exp03",
    component: () => import("@/views/exp03/exp03.vue")
  },
  {
    path: "/exp04",
    component: () => import("@/views/exp04/exp04.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
