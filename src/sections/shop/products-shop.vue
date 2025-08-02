<script setup>
import Cardshop from "../../components/Cardshop.vue";
import Tagsfilter from "../../components/Tagsfilter.vue";
</script>

<template>
  <section class="bg-danger py-5">
    <div class="container">
      <h2 class="display-5 montserrat-700 text-center text-dark">Tienda</h2>
      <div class="row my-4">
        <Tagsfilter></Tagsfilter>
      </div>
      <div class="row">
        <Cardshop titulo="vestidos azul"></Cardshop>
        <Cardshop></Cardshop>
        <Cardshop></Cardshop>
      </div>
    </div>
  </section>
</template>

<style></style>
