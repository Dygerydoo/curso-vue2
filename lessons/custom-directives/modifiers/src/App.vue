<template>
  <div id="app">
    <div class="my-block" v-rotate:big="50">
      Estoy siendo modificado por una directiva
    </div>
  </div>
</template>

<script>
export default {
  directives: {
    rotate: {
      bind(el, binding, vnode) {
        el.style.transform = "rotate(6deg)";

        if(binding.value) {
          el.style.transform = `rotate(${binding.value}deg)`;
        }

        if(binding.arg === 'big') {
          el.style.transform = 'scale(2)';
        } else if(binding.arg === 'small') {
          el.style.transform = 'scale(.6)';
        }

        if(binding.modifiers) {
          el.style.backgroundColor = Object.keys(binding.modifiers)[0];
        }
      }
    }
  }
}
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
