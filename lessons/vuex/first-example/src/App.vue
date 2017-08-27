<template>
  <div id="app">
    <h1>Ejemplo básico de Vuex</h1>
    <p>El contador está a: {{ counter }}</p>
    <!-- <counter @increase="counter += $event"
             @decrease="counter -= $event">
    </counter> -->
    <counter></counter>
  </div>
</template>

<script>
import Counter from './components/counter.vue'

export default {
  name: 'app',
  data () {
    return {
    }
  },
  computed: {
    counter() {
      return this.$store.state.counter;
    }
  },
  components: {
    Counter,
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
  margin-top: 60px;
}
</style>
