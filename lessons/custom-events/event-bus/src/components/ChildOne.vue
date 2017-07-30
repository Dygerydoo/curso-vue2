<template>
  <div class="tile notification is-danger">
    <p class="subtitle">¿Qué película estás viendo?</p>
    <div class="content">
      <p>{{watching}}</p>
    </div>
  </div>
</template>

<script>
import { eventBus } from '../main';
export default {
  props: {
    watching: {
      type: String,
      required: true,
    }
  },
  created() {
    eventBus.$on('newMovie', (movie) => {
      this.watching = movie;
    });
  },
}
</script>

<style>
.tile {
  flex-direction: column;
}
</style>
