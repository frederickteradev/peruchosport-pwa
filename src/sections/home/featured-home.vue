<script setup>
import cardShop from "../../components/Cardshop.vue";
</script>

<template>
  <section class="bg-danger p-5" id="productos">
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
          titulo="Camisetas de Marca con Diseños Modernos"
          descripcion=" Nike, Calvin Klein y Hugo Boss hasta Converse y Lacoste, estas prendas ofrecen estilo y comodidad para cualquier ocasión. Perfectas para quienes buscan calidad y buen gusto en su ropa diaria.
"
          img="/camisetas_fetured.webp"
        ></cardShop>
        <cardShop
          titulo="Polos casual de marcas reconocidas"
          descripcion="Perfectos para el día a día, estos polos combinan estilo, comodidad y calidad. Ideales para quienes buscan un look con buen gusto."
          img="/polos_fetured.webp"
        ></cardShop>
        <cardShop
          titulo="Gorras con estilo para el día a día"
          descripcion="Ideales para looks casuales o deportivos, estos modelos combinan comodidad y diseño. Perfectas para completar tu outfit sin perder el toque urbano.
"
          img="/gorras_fetured.webp"
        ></cardShop>
        <cardShop
          titulo="Jeans y Pantalones "
          descripcion="Pantalones de marcas como Pierre Cardin y Tommy Hilfiger, ideales para un look casual o más formal. Comodidad y estilo para todos los días.
"
          img="/jeans_fetured.webp"
        ></cardShop>
        <cardShop
          titulo="Camisetas Gráficas
Diseños con Personajes Icónicos.
"
          descripcion="Camisetas con estampados de Bugs Bunny, Bender y otros estilos únicos. Perfectas para quienes quieren destacar con un look casual y creativo.
"
          img="/camiseta_grafica_fetured.webp"
        ></cardShop>
        <cardShop
          titulo="Outfit Urbano Estilo moderno con camiseta, jeans y bolso cruzado."
          descripcion="Un look casual y llamativo, ideal para quienes buscan destacar con prendas únicas y detalles originales. Perfecto para salir con actitud y comodidad.

"
          img="/outfit_fetured.webp"
        ></cardShop>
        <cardShop
          titulo=" Hoodies y Sudaderas
Estilo urbano con diseños únicos."
          descripcion="Desde Lacoste hasta estampados gráficos llamativos, estas prendas ofrecen comodidad y personalidad. Perfectas para días frescos o para destacar con un look relajado.

"
          img="/sueter_fetured.webp"
        ></cardShop>
        <cardShop
          titulo="Shorts Deportivos
Modelos cómodos y modernos."
          descripcion="Disponibles en varios colores, estos shorts son ideales para entrenar o vestir casual. Calidad garantizada con estilo deportivo.

"
          img="/short_fetured.webp"
        ></cardShop>

        <cardShop
          titulo="Looks Casual
Outfits sencillos y modernos"
          descripcion="Camisas básicas, jeans y accesorios como gorra y cangurera que completan un estilo relajado y urbano. Perfectos para salir cómodo sin perder el toque de estilo.

"
          img="/outfit2_fetured.webp"
        ></cardShop>
      </div>
    </div>
  </section>
</template>

<style></style>
