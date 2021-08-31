import Vue from "vue";
import Router from "vue-router";
import Inicio from "./components/Inicio.vue";
import SobreMi from "./components/SobreMi.vue";
import Contacto from "./components/Contacto.vue";
import Post from "./components/Post.vue";
import Articulo from "./components/1.vue";
import NotFound from "./components/NotFound.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      component: Inicio,
      name: ".",
    },
    {
      path: "/sobremi",
      component: SobreMi,
      name: "sobre-mi",
    },
    {
      path: "/Contacto",
      component: Contacto,
    },
    {
      path: "/Post",
      component: Post,
      children: [
        {
          path: "1",
          component: Articulo,
          name: "articulo",
        },
      ],
    },
    {
      path: "*",
      component: NotFound,
    },
  ],
});
