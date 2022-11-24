<template>
  <h1 class="title">Resultados</h1>
  <table class="table">
    <thead>
      <tr>
        <th scope="col">Serie</th>
        <th scope="col">Número triangular</th>
        <th scope="col">Sucesión de Fibonacci</th>
        <th scope="col">Número primo</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th>{{ prueba.serie(numeroOperacion) }}</th>
        <td>{{ prueba.triangular(numeroOperacion) }}</td>
        <td>{{ prueba.fibonacci(numeroOperacion) }}</td>
        <td>{{ prueba.primo(numeroOperacion) }}</td>
      </tr>
    </tbody>
  </table>
</template>
<script>
import { ref } from "vue";
import useList from "./useList";

export default {
  props: { numeroOperacion: Number },
  setup() {
    const { Prueba } = useList();
    const prueba = new Prueba();
    return { prueba };
  },
};
</script>

<style scoped>
.title {
  text-align: center;
}
.name {
  text-align: center;
}
</style>
