<template>
  <div class="buttons">
    <button @click="increase(100)">Incrementar</button>
    <button @click="decrease(100)">Disminuir</button>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  methods: {
    ...mapMutations([
      'increase',
      'decrease',
    ]),
    // increaseCounter() {
    //   // this.$store.state.counter++;
    //   this.$store.commit('increase');
    // },
    // decreaseCounter() {
    //   // this.$store.state.counter--;
    //   this.$store.commit('decrease');
    // }
  }
}
</script>

<style lang="css">
</style>
