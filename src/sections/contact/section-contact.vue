<script setup></script>

<template>
  <section class="imagen">
    <div class="container-fluid py-2">
      <div class="row no-gutters px-2">
        <div class="col-md-6 p-5">
          <h1 class="mb-4 text-danger">Contáctanos</h1>
          <p class="mb-4 text-white lead">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus
            doloribus labore, at quaerat mollitia incidunt earum tenetur dolore
            doloremque inventore nemo hic ipsum est voluptatem iusto
            consequuntur, fugiat quasi! Aperiam!
          </p>
        </div>
        <div class="col-md-6 bg-danger p-5">
          <h4>Información de Contacto</h4>
          <p><strong>Dirección:</strong></p>

          <p><strong>Horario:</strong></p>

          <hr />
          <div class="row">
            <a href="" class="btn btn-success mb-4">Whatsapp</a>
            <a href="" class="btn btn-light">Gmail</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
.imagen {
  background-image: url("../../assets/image.webp");

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  height: 130vh;
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

.imagen .container-fluid {
  position: relative;
  z-index: 1;
}
</style>
