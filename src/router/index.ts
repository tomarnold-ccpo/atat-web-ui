import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";
import Dashboard from "../views/Dashboard.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/sample/style",
    name: "Style",
    component: () =>
      import(/* webpackChunkName: "style" */ "../views/sample/Style.vue"),
  },
  {
    path: "/wizard/step1",
    name: "step1",
    component: () =>
      import(
        /* webpackChunkName: "style" */ "../wizard/Step1/views/Step1.vue"
      ),
  },
  {
    path: "/wizard",
    name: "wizard",
    component: () =>
      import(
        /* webpackChunkName: "style" */ "../wizard/wizard.vue"
      ),
  },
  {
    path: "/wizard/step2",
    name: "step2",
    component: () =>
      import(
        /* webpackChunkName: "style" */ "../wizard/Step2/views/Step2.vue"
      ),
  },
  {
    path: "/portfolios",
    name: "portfolios",
    component: () =>
      import(
        /* webpackChunkName: "style" */ "../wizard/Step0/components/ViewPortfolio/ViewPortfolio.vue"
      ),
  },
  {
    path: "/createportfolio",
    name: "createPortfolio",
    component: () =>
      import(
        /* webpackChunkName: "style" */ "../wizard/Step0/components/CreatePortfolio/CreatePortfolio.vue"
      ),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
