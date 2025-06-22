<script setup>
import cardShop from "../../components/Cardshop.vue";
</script>

<template>
  <section class="bg-danger p-5">
    <div class="container">
      <div class="row">
        <div class="text-center text-white mb-3">
          <h2 class="text-white montserrat-600 mb-3 display-6">
            Productos Destacados
          </h2>
          <p class="montserrat-400 p-3 lead">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui odit
            repellendus magnam.
          </p>
        </div>
        <cardShop
          titulo="camisa"
          precio="10.00"
          img="./src/assets/card1.png"
        ></cardShop>
        <cardShop
          titulo="camisa"
          precio="10.00"
          img="./src/assets/card1.png"
        ></cardShop>
        <cardShop
          titulo="camisa"
          precio="10.00"
          img="./src/assets/card1.png"
        ></cardShop>
      </div>
    </div>
  </section>
</template>

<style></style>
