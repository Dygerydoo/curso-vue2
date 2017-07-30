<template>
  <div class="">
    <div class="field">
      <input v-model="movieName" class="input is-primary">
    </div>
    <button class="button is-primary" @click="changeMovie">Cambiar película</button>
  </div>
</template>

<script>
import { eventBus } from '../main';
export default {
  data() {
    return {
      movieName: '',
    }
  },
  methods: {
    changeMovie() {
      eventBus.$emit('newMovie', this.movieName);
    }
  },
}
</script>

<style>
ol {
  margin: 1em;
}
</style>
