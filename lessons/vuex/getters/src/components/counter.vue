<template>
  <div class="buttons">
    <button @click="increaseCounter">Incrementar</button>
    <button @click="decreaseCounter">Disminuir</button>
  </div>
</template>

<script>
export default {
  methods: {
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
