<script setup></script>

<template>
  <section class="bg-light imagen">
    <div class="container mt-2 p-2">
      <div class="d-flex align-items-center">
        <div class="row text-center text-light animate">
          <div class="d-flex justify-content-center">
            <img
              src="../../assets/logo.png"
              class="img-fluid logo-heros"
              alt=""
            />
          </div>
          <h1 class="pb-1 display-3 montserrat-700">
            Perucho <span class="text-danger">Sport</span>
          </h1>
          <h2 class="display-6 text-info montserrat-700">Moda y Calidad</h2>
          <p class="lead montserrat-500 p-4">
            Diseñado para el hombre que cuida su imagen sin perder su identidad.
          </p>
          <div class="">
            <a
              href="#acerca-de"
              class="btn btn-outline-danger btn-lg montserrat-600"
              ><i class="bi bi-arrow-down"></i
            ></a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.imagen {
  background-image: url("../../assets/heros-image.webp");

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  min-height: 110vh;
  height: auto;
  position: relative;

  padding-top: 80px;
}

.imagen::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
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

.logo-heros {
  max-width: 200px;
}
</style>
