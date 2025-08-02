<script setup></script>

<template>
  <section class="imagen pt-1" id="contactos">
    <div class="container-fluid pt-5">
      <div class="row px-2">
        <div class="col-md-6 p-5">
          <h1 class="mb-4 text-danger display-4 montserrat-500">Contáctanos</h1>
          <p class="mb-4 text-white montserrat-500 lead">
            ¿Tienes dudas, o ¿necesitas alguno de nuestros productos? Estamos
            para ti. Comunicate con nosotros y recibe la atencion cercana y
            personalizada que mereces.
          </p>
        </div>
        <div class="col-md-6 bg-dark p-5 mb-3">
          <h4 class="pb-4 display-5 montserrat-500 text-danger">
            Información de Contacto
          </h4>
          <p class="h6 lead mb-3">
            <strong
              ><i class="bi bi-geo-alt fs-4 text-danger"></i> Dirección:
            </strong>
            Mini Centro Comercial "Betulia Ordaz", al lado de la Escuela "Pedro
            Gual", Mercado Municipal, Caripito - Estado Monagas.
          </p>

          <p class="h6 lead">
            <strong
              ><i class="bi bi-clock-fill fs-4 text-danger"></i>
              Horario:</strong
            >
            7:00 AM a 12:00PM
          </p>

          <hr />
          <div class="row">
            <a
              href="https://wa.me/584120801682"
              class="btn btn-success mb-4 d-flex justify-content-center align-items-center gap-1"
              ><i class="bi bi-whatsapp fs-4"></i> +58 412-0801682</a
            >
            <a
              href="mailto:larezpedro405@gmail.com"
              class="btn btn-light d-flex mb-4 justify-content-center align-items-center gap-1"
              ><i class="bi bi-envelope-at fs-3"></i> larezpedro405@gmail.com</a
            >
            <a
              href=""
              class="btn btn-primary d-flex mb-4 justify-content-center align-items-center gap-1"
              ><i class="bi bi-facebook fs-4"></i> Peruchosport Larez</a
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
.imagen {
  background-image: url("../../assets/heros-contact.webp");

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  min-height: 120vh;
  height: auto;
  position: relative;
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

.imagen .container-fluid {
  position: relative;
  z-index: 1;
}
</style>
