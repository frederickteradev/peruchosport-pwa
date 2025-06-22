<script setup></script>

<template>
  <section class="imagen pt-1">
    <div class="container-fluid pt-2 mb-2">
      <div class="row px-2">
        <div class="col-md-6 p-5">
          <h1 class="mb-4 text-danger display-4 montserrat-500">Contáctanos</h1>
          <p class="mb-4 text-white lead">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus
            doloribus labore, at quaerat mollitia incidunt earum tenetur dolore
            doloremque inventore nemo hic ipsum est voluptatem iusto
            consequuntur, fugiat quasi! Aperiam!
          </p>
        </div>
        <div class="col-md-6 bg-dark p-5">
          <div class="px-3">
            <h4 class="pb-4 display-5 montserrat-500 text-danger">
              Información de Contacto
            </h4>
            <p class="h6">
              <strong
                ><i class="bi bi-geo-alt fs-4 text-danger"></i> Dirección:
              </strong>
            </p>

            <p class="h6">
              <strong
                ><i class="bi bi-clock-fill fs-4 text-danger"></i>
                Horario:</strong
              >
            </p>

            <hr />
            <div class="row">
              <a
                href=""
                class="btn btn-success mb-4 d-flex justify-content-center align-items-center gap-1"
                ><i class="bi bi-whatsapp fs-4"></i> Whatsapp</a
              >
              <a
                href=""
                class="btn btn-light d-flex mb-4 justify-content-center align-items-center gap-1"
                ><i class="bi bi-envelope-at fs-3"></i> Gmail</a
              >
              <a
                href=""
                class="btn btn-primary d-flex mb-4 justify-content-center align-items-center gap-1"
                ><i class="bi bi-facebook fs-4"></i> peruchosport</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
.imagen {
  background-image: url("../../assets/heros-contact.jpg");

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  height: 130vh;
  position: relative;
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
