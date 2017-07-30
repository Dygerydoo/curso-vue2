<template>
  <div id="app">
    <song-list>
      <button class="button is-primary">Botón</button>
    </song-list>
  </div>
</template>

<script>
import SongList from './components/SongList.vue';

export default {
  name: 'app',
  components: {
    SongList,
  }
}
</script>

<style>
</style>
