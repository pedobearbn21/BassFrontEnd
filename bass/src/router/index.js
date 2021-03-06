import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Myblog from "../views/Myblog.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: () =>
        import(/* webpackChunkName: "about" */ "../views/Login.vue")
  },
  {
    path: "/timeline",
    component: Home,
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
    path: "/myblog",
    name: "Myblog",
    component: Myblog
  },
  {
    path: "/login",
    name: "Login",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Login.vue")
  },
  {
    path: "/profile",
    name: "Profile",
    component: () =>
    import(/* webpackChunkName: "about" */ "../views/Profile.vue")
  },
  {
    path: "/warehouse",
    name: "Warehouse",
    component: () =>
    import(/* webpackChunkName: "about" */ "../views/warehouse.vue")
  },

  
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
