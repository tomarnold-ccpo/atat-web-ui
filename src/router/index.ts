import VueRouter from "vue-router";
import {stepperRoutes} from "./stepper";
import RouteResolver from "./resolvers/RouteResolver.vue";
import PathResolver from "./resolvers/PathResolver.vue";

const routes = [
  ...stepperRoutes,
  {
    name: 'routeResolver',
    component: RouteResolver,
    path: '/routeRsesolver'
  },
  {
    name: 'pathResolver',
    component: PathResolver,
    path: '/pathResolver'
  }
];

const router = new VueRouter({
  routes, // short for `routes: routes`
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});

export default router;
