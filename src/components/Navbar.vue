<template>
  <nav
    :class="[
      'navbar',
      'navbar-expand-lg',
      'fixed-top',
      'px-3',
      'py-0',
      scrolled ? 'bg-dark shadow-sm' : 'bg-transparent',
    ]"
  >
    <div class="container-fluid">
      <span class="m-2">
        <img
          src="../assets/logo.png"
          alt=""
          :class="[
            'img-fluid',
            'navbar-logo ',
            scrolled ? 'logo-small' : 'logo-large',
          ]"
        />
      </span>
      <span href="#" class="text-light ms-1 montserrat-700 shop-title">
        Perucho
      </span>
      <span class="text-danger montserrat-700 shop-title">Sport</span>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbar"
      >
        <i class="bi bi-list"></i>
      </button>
      <div class="collapse navcollapse navbar-collapse" id="navbar">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <a class="nav-link items montserrat-800 text-light" href="#inicio"
              >Inicio</a
            >
          </li>
          <li class="nav-item">
            <a
              href="#acerca-de"
              class="nav-link items montserrat-800 text-light"
              >Acerca de</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link items montserrat-800 text-light"
              href="#servicios"
              >Servicios</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link items montserrat-800 text-light"
              href="#categorias"
              >Categorías</a
            >
          </li>
          <li class="nav-item">
            <a
              href="#productos"
              class="nav-link items montserrat-800 text-light"
              >Productos</a
            >
          </li>
          <li class="nav-item">
            <a
              href="#contactos"
              class="nav-link items montserrat-800 text-light"
              >Contactos</a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const scrolled = ref(false);

const handleScroll = () => {
  scrolled.value = window.scrollY > 50;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped>
.navbar {
  transition: all 0.4s ease;
  top: 0;
}

.shop-title {
  font-size: 1.5rem;
}

.items:hover {
  color: #ff942a !important;
  transition: all ease 0.3s;
  box-shadow: 0 2px 8px rgba(218, 165, 32, 0.5);
}

.navbar-logo {
  transition: all 0.3s ease;
  max-width: 70px;
}

.logo-small {
  max-width: 90px;
}

.logo-large {
  max-width: 100px;
}
</style>
