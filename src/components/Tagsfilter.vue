<script setup></script>

<template>
  <div class="col">
    <h5 class="text-dark">Filtrar por Etiquetas</h5>
    <div class="mb-4">
      <button class="btn btn-outline-dark m-1 filter-btn" data-filter="all">
        Todos
      </button>
      <button
        class="btn btn-outline-dark m-1 filter-btn"
        data-filter="tag-blusas"
      >
        Camisas
      </button>
      <button
        class="btn btn-outline-dark m-1 filter-btn"
        data-filter="tag-faldas"
      >
        Pantalones
      </button>
      <button
        class="btn btn-outline-dark m-1 filter-btn"
        data-filter="tag-vestidos"
      >
        Sueteres
      </button>
      <button
        class="btn btn-outline-dark m-1 filter-btn"
        data-filter="tag-pantalones"
      >
        Shorts
      </button>
      <button
        class="btn btn-outline-dark m-1 filter-btn"
        data-filter="tag-conjuntos"
      >
        Accesorios
      </button>
    </div>
  </div>
</template>

<style>
.btn {
  outline: none;
}
</style>
