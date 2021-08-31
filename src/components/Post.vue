<template>
  <div>
    <!-- IMPLEMENTAR EL ROUTER VIEW QUE MUSTRE EL ARTICULO-->
    <!-- incluir router-link y router-view para mostrar Comentrios.vue que esta anidado en Blog en router.js -->
    <router-link :to="{ name: 'articulo' }"></router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Post",
};
</script>

<style></style>
