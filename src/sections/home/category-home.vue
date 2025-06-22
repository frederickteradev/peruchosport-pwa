<script setup>
import cardCategory from "../../components/cardCategory.vue";
</script>

<template>
  <section class="bg-dark p-5">
    <div class="container">
      <div class="row">
        <div class="text-center text-light mb-3">
          <h2 class="text-danger montserrat-600 mb-3 display-6">Categorías</h2>
          <p class="montserrat-400 p-3">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui odit
            repellendus magnam.
          </p>
        </div>
        <cardCategory
          titulo="Camisas"
          img="./src/assets/camisanike.jpg"
        ></cardCategory>
        <cardCategory
          titulo="Suéteres"
          img="./src/assets/card1.png"
        ></cardCategory>
        <cardCategory
          titulo="Pantalones y Jeans"
          img="./src/assets/card1.png"
        ></cardCategory>
        <cardCategory
          titulo="Shorts"
          img="./src/assets/card1.png"
        ></cardCategory>
        <cardCategory
          titulo="Gorras"
          img="./src/assets/card1.png"
        ></cardCategory>
        <cardCategory
          titulo="Accesorios"
          img="./src/assets/card1.png"
        ></cardCategory>
      </div>
    </div>
  </section>
</template>

<style></style>
