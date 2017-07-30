<template>
  <div id="app">
    <app-parent-comp></app-parent-comp>
  </div>
</template>

<script>
import AppParentComp from './components/parent.vue';

export default {
  name: 'app',
  components: {
    AppParentComp,
  }
}
</script>

<style>

</style>
