<template>
  <div id="app">
    <button class="button button-primary" @click="show = !show">Mostrar/Ocultar</button>
    <br><br>
    <transition>
      <h1 v-if="show" class="title is-1">Transiciones con Vue</h1>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      show: true,
    }
  }
}
</script>

<style>

#app {
  padding: 1em;
  width: 80%;
  margin: 0 auto;
}
</style>
