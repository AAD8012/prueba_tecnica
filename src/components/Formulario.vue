<template>
  <h1 class="title">Formulario</h1>
  <form>
    <div class="mb-3 text-start">
      <label for="exampleInputPassword1" class="form-label">Numero</label>
      <input type="number" class="form-control" v-model="numero" />
    </div>
    <button
      type="button"
      class="btn btn-primary"
      @click="envioDatosFormulario()"
    >
      Calcular
    </button>
  </form>
</template>
<script>
import { ref } from "vue";

export default {
  emits: ["datosFormulario"],
  setup(props, { emit }) {
    const nombre = ref("");
    const numero = ref();
    const envioDatosFormulario = () => {
      emit("datosFormulario", numero.value);
    };
    return { nombre, numero, envioDatosFormulario };
  },
};
</script>

<style scoped></style>
