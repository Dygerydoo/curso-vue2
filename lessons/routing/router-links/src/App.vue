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
.navbar {
  display: flex;
  justify-content: flex-start;
  border-bottom: 1px solid #ddd;
  margin-bottom: 1em;
}

.navbar-list {
  display: flex;
  flex-direction: row;
}

.navbar-list-item {
  margin: 1em;
}
</style>
