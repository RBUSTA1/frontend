import Vue from "vue";
import VueRouter from "vue-router";
// import Home from '../views/Home.vue'
import Formulario from "../views/Formulario.vue";
import FormularioOld from "../views/FormularioRobinson.vue";
import Dashboard from "../views/Dashboard.vue";
import Bienvenida from "../views/Bienvenida.vue";

import Editar from "../views/Editar.vue";
import Nuevo from "../views/Nuevo.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Bienvenida",
    component: Bienvenida
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard
  },
  {
    path: "/editar/:id",
    name: "Editar",
    component: Editar
  },
  {
    path: "/nuevo",
    name: "Nuevo",
    component: Nuevo
  },
  {
    path: "/formularioOld",
    name: "formularioOld",
    component: FormularioOld
  },
  {
    path: "/formulario",
    name: "formulario",
    component: Formulario
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
