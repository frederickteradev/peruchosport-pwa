<script setup>
defineProps({
  titulo: String,
  descripcion: String,
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
        <h4 class="card-title text-danger text-center p-2">{{ titulo }}</h4>
        <div class="tags-container m-3">
          <!--<span class="badge shadow fs-6 mb-2">Blusa & Tops</span>
          <span class="badge shadow fs-6 mb-2"> Pantalones & Shorts</span>
          <span class="badge shadow fs-6">Conjuntos</span>-->
        </div>

        <p class="card-text text-white m-3">
          {{ descripcion }}
        </p>
      </div>
      <div class="d-flex justify-content-between p-3">
        <a href="https://wa.me/584120801682" class="btn btn-success ms-2">
          <i class="bi bi-whatsapp fs-4"></i> Hacer Pedido
        </a>
      </div>
    </div>
  </div>
</template>

<style></style>
