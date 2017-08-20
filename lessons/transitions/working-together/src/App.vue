<template>
  <div id="app">
    <button class="button button-primary" @click="show = !show">Mostrar/Ocultar</button>
    <br><br>
    <transition name="scale-fade" type="animation" appear>
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
.scale-fade-enter {
  opacity: 0;
}

.scale-fade-enter-active {
  animation: bounce-in .5s;
  transition: opacity 1s;
}

.scale-fade-leave-active {
  animation: bounce-in .5s reverse;
  transition: opacity 1s;
  opacity: 0;
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
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
