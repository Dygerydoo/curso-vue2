<template>
  <div class="buttons">
    <button @click="increaseAction(100)">Incrementar</button>
    <button @click="decreaseAction">Disminuir</button>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  methods: {
    ...mapActions([
      'increaseAction',
      'decreaseAction',
    ]),
    // increaseCounter() {
    //   this.$store.dispatch('increaseAction');
    // },
    // decreaseCounter() {
    //   this.$store.dispatch('decreaseAction');
    // }
  }
}
</script>

<style lang="css">
</style>
