import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "",
    component: () => import("@/App.vue"),
    children: [
      {
        path: "/",
        name: "auth",
        component: () => import("@/components/Auth/Auth.vue"),
      },
      // {
      //   path: "/table",
      //   name: "table",
      //   component: () => import("@/components/UserTable/UserTable.vue"),
      // },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
