<template>
  <div class="buttons">
    <button @click="increaseAction(100)">Incrementar</button>
    <button @click="decreaseAction">Disminuir</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  methods: {
    ...mapActions([
      'increaseAction',
      'decreaseAction',
    ]),
  }
}
</script>

<style lang="css">
</style>
