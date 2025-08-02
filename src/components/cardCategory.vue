<script setup>
defineProps({
  titulo: String,
  descripcion: Number,
  img: String,
});
</script>

<template>
  <div class="col-md-4 mb-4">
    <div class="card bg-light rounded-circle">
      <div class="card-body">
        <img
          :src="img"
          alt=""
          class="card-img img-fluid rounded-circle border"
        />
      </div>
      <!-- <div class="d-flex justify-content-center p-3">
        <button class="btn btn-outline-primary">Ir a La Tienda</button>
      </div>  -->
    </div>
    <h2 class="card-title text-danger text-center mt-3 mb-3">{{ titulo }}</h2>
    <div class="d-flex justify-content-center">
      <a
        href="https://wa.me/584120801682"
        class="btn btn-success text-center d-flex justify-content-center align-items-center gap-1"
        ><i class="bi bi-whatsapp fs-4"></i> Hacer Pedido</a
      >
    </div>
  </div>
</template>

<style>
.nodeform {
  object-fit: cover;
}
</style>
