<script setup>
import cardShop from "../../components/Cardshop.vue";
</script>

<template>
  <section class="bg-danger p-5" id="descatados">
    <div class="container">
      <div class="row">
        <div class="text-center text-white mb-3">
          <h2 class="text-white montserrat-600 mb-3 display-6">
            Productos Destacados
          </h2>
          <p class="montserrat-500 p-3 lead">
            Descubre los productos más destacados y con mas estilos para que
            encuentres fácilmente tu favorito.
          </p>
        </div>
        <cardShop
          titulo="Producto 1"
          precio="10.00"
          img="./src/assets/card1.png"
        ></cardShop>
        <cardShop
          titulo="Producto 2"
          precio="10.00"
          img="./src/assets/card1.png"
        ></cardShop>
        <cardShop
          titulo="Producto 3"
          precio="10.00"
          img="./src/assets/card1.png"
        ></cardShop>
      </div>
    </div>
  </section>
</template>

<style></style>
