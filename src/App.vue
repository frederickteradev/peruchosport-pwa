<script setup>
import navBar from "./components/Navbar.vue";
import footerShop from "./components/Footer.vue";
</script>

<template>
  <navBar></navBar>

  <router-view></router-view>
  <footerShop></footerShop>
</template>

<style scoped></style>
