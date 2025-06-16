<script setup>
defineProps({
  titulo: String,
  precio: Number,
  img: Number,
});
</script>

<template>
  <div class="col-12 col-md-4 mb-4">
    <div class="card-mb-4 mb-4 bg-dark rounded-1">
      <div class="card bg-dark rounded-1 mb-2">
        <img :src="img" alt="" class="card-img img-fluid rounded-0" />
      </div>
      <div class="card-body">
        <h2 class="card-title text-danger text-center">{{ titulo }}</h2>
        <div class="tags-container m-3">
          <!--<span class="badge shadow fs-6 mb-2">Blusa & Tops</span>
          <span class="badge shadow fs-6 mb-2"> Pantalones & Shorts</span>
          <span class="badge shadow fs-6">Conjuntos</span>-->
        </div>

        <h3 class="text-center mb-3">
          <span class="text-success">$</span>{{ precio }}
        </h3>
        <p class="card-text text-white m-3">
          {{ descripcion }}
        </p>
      </div>
      <div class="d-flex justify-content-between p-3">
        <button class="btn btn-outline-primary">Ver Mas</button>
        <button class="btn btn-outline-success">Hacer Pedido</button>
      </div>
    </div>
  </div>
</template>

<style></style>
