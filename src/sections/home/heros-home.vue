<script setup></script>

<template>
  <section class="bg-light imagen">
    <div class="container mt-5 p-5">
      <div class="aling-center">
        <div class="row text-center text-light animate">
          <h1 class="text-danger pb-3 display-3 montserrat-700">
            Tienda de Ropa Masculina
          </h1>
          <p class="pb-3 montserrat-600 lead mb-4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut, esse
            ab. Cumque repellendus.
          </p>
          <div class="">
            <a href="" class="btn btn-outline-danger btn-lg montserrat-600"
              >MOSTRAR MÁS</a
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.imagen {
  background-image: url("../../assets/image.webp");

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  height: 100vh;
  position: relative;

  padding-top: 120px;
}

.imagen::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  z-index: 0;
}

.imagen .container {
  position: relative;
  z-index: 1;
}

.animate {
  animation: fadeInUp 1.2s ease forwards;
  opacity: 0;
  transform: translateY(40px);
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
