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
  },
  {
    path: "/exp05",
    component: () => import("@/views/exp05/exp05.vue")
  },
  {
    path: "/exp06",
    component: () => import("@/views/exp06/exp06.vue")
  },
  {
    path: "/exp07",
    component: () => import("@/views/exp07/exp07.vue")
  },
  {
    path: "/exp08",
    component: () => import("@/views/exp08/exp08.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
