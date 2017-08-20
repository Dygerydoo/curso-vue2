<template>
  <div id="app">
    <app-navigation></app-navigation>
    <transition name="scale-fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import AppNavigation from './components/Navigation.vue';
export default {
  components: {
    AppNavigation,
  }
}
</script>

<style>
.scale-fade-enter {
  opacity: 0;
}

.scale-fade-enter-active {
  animation: bounce-in .5s;
  transition: opacity .5s;
}

.scale-fade-leave-active {
  animation: bounce-in .5s reverse;
  transition: opacity .5s;
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
</style>
