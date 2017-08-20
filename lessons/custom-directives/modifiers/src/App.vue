<template>
  <div id="app">
    <div class="my-block" v-rotate:big.orange="50">
      Estoy siendo modificado por una directiva
    </div>
  </div>
</template>

<script>
</script>

<style>
.my-block {
  color: white;
  background: black;
  max-width: 300px;
  margin: 2em auto;
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
