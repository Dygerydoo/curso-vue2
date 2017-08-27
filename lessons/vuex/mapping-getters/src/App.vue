<template>
  <div id="app">
    <h1>Ejemplo básico de Vuex</h1>
    <p>El contador está a: {{ $store.state.counter }}</p>
    <p> El contador sin dividir está a: {{ $store.state.counter }} y es {{ evenOrOdd }}</p>
    <counter></counter>
  </div>
</template>

<script>
import Counter from './components/counter.vue'
import { mapGetters } from 'vuex'

console.log({key: 'value', mapGetters(['divideCounter', 'evenOrOdd'])});

// Ejemplo de porque Spread Operator: Y esque devuelve {{lalala}} en lugar de { key: {}}
// o sea objeto sin key, directamente objeto.

export default {
  name: 'app',
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters([
      'divideCounter',
      'evenOrOdd'
    ])
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
