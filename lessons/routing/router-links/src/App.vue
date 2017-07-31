<template>
  <div id="app">
    <app-navigation></app-navigation>
    <router-view></router-view>
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
</style>
