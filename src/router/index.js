import Vue from "vue";
import VueRouter from "vue-router";
import LayoutBasicVue from "@/layouts/basic/index.vue";
import HomeViewVue from "@/views/home-view/index.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "",
    component: LayoutBasicVue,
    children: [
      {
        path: "/",
        name: "home",
        component: HomeViewVue,
      },
    ],
  },
  { path: "*", redirect: "/" },
];

const router = new VueRouter({
  routes,
});

export default router;
