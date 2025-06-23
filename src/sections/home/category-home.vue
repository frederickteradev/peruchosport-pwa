<script setup>
import cardCategory from "../../components/cardCategory.vue";
</script>

<template>
  <section class="bg-dark p-5" id="categorias">
    <div class="container">
      <div class="row">
        <div class="text-center text-light mb-3">
          <h2 class="text-danger montserrat-600 mb-3 display-5">Categorías</h2>
          <p class="montserrat-500 lead p-3">
            Explora nuestra selección de ropa y accesorios diseñados para el
            hombre moderno. Encuentra moda y calidad en cada prenda.
          </p>
        </div>
        <cardCategory
          titulo="Camisas"
          img="./src/assets/camisa.png"
        ></cardCategory>
        <cardCategory
          titulo="Suéteres"
          img="./src/assets/sueter.png"
        ></cardCategory>
        <cardCategory
          titulo="Pantalones y Jeans"
          img="./src/assets/short.png"
        ></cardCategory>
        <cardCategory
          titulo="Shorts"
          img="./src/assets/short.png"
        ></cardCategory>
        <cardCategory
          titulo="Gorras"
          img="./src/assets/gorras.png"
        ></cardCategory>
        <cardCategory
          titulo="Accesorios"
          img="./src/assets/accesorios.png"
        ></cardCategory>
      </div>
    </div>
  </section>
</template>

<style></style>
