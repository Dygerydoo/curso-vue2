<template>
  <div id="app">
    <button class="button" @click="show = !show">Mostrar/Ocultar</button>
    <br>
    <br>
    <transition>
      <h1 v-if="show" class="title is-1">Transiciones en Vue</h1>
      <h1 v-if="show" class="title is-1">Transiciones en Vue</h1>
      <h1 v-if="show" class="title is-1">Transiciones en Vue</h1>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      show: 'true',
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 1em;
  width: 80%;
  margin: 0 auto;
}
</style>
