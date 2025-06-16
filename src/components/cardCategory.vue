<script setup>
defineProps({
  titulo: String,
  descripcion: Number,
  img: String,
});
</script>

<template>
  <div class="col-md-4 mb-4">
    <div class="card-mb-4 mb-4 bg-light rounded-1">
      <div class="card bg-light rounded-1 mb-2">
        <img :src="img" alt="" class="card-img img-fluid" />
      </div>
      <div class="card-body">
        <h2 class="card-title text-primary text-center">{{ titulo }}</h2>
        <p class="card-text text-dark m-3 montserrat-400">
          {{ descripcion }}
        </p>
      </div>
      <div class="d-flex justify-content-center p-3">
        <router-link to="Shop"
          ><button class="btn btn-outline-primary">
            Ir a La Tienda
          </button></router-link
        >
      </div>
    </div>
  </div>
</template>

<style></style>
