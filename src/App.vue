<template>
  <header>
    <h1 class="title">Prueba Tecnica</h1>
  </header>
  <main>
    <div class="container text-center">
      <div class="row">
        <div class="col-6">
          <Formulario @datosFormulario="datos" />
        </div>
        <div class="col-6">
          <Resultados :numeroOperacion="numeroOperacion" />
        </div>
      </div>
    </div>
  </main>
</template>
<script>
import Formulario from "@/components/Formulario.vue";
import Resultados from "@/components/Resultados.vue";

import { ref } from "vue";
export default {
  components: { Formulario, Resultados },
  setup() {
    const numeroOperacion = ref();
    const datos = (numero) => {
      numeroOperacion.value = numero;
      console.log(numero);
    };
    return { datos, numeroOperacion };
  },
};
</script>

<style scoped>
.title {
  text-align: center;
  margin-top: 50px;
  margin-bottom: 50px;
}
</style>
