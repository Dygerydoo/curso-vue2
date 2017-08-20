<template>
  <div id="app">
    <button class="button button-primary" @click="show = !show">Mostrar/Ocultar</button>
    <br><br>
    <transition name="scale-fade" mode="out-in">
      <h1 v-if="show" class="title is-1" key="1">Transiciones con Vue</h1>
      <h1 v-else class="title is-1" key="2">Texto del else</h1>
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
.scale-fade-enter {
  transform: scale(2);
  opacity: 0;
  color: red;
}

.scale-fade-enter-active {
  transition: all 1s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.scale-fade-leave-active {
  transition: all 1s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.scale-fade-leave-to{
  transform: scale(.8);
  opacity: 0;
  color: red;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
