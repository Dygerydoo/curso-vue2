<template>
  <div class="buttons">
    <button @click="increaseCounter">Incrementar</button>
    <button @click="decreaseCounter">Disminuir</button>
  </div>
</template>

<script>
export default {
  methods: {
    // Antes de aplicar Vuex
    // increaseCounter() {
    //   this.$emit('increase', 1);
    // },
    // decreaseCounter() {
    //   this.$emit('decrease', 1);
    // }

    // Después de aplicar Vuex
    increaseCounter() {
      this.$store.state.counter++;
    },
    decreaseCounter() {
      this.$store.state.counter--;
    }
  }
}
</script>

<style lang="css">
</style>
