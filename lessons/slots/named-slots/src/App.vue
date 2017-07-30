<template>
  <div id="app">
    <song-list>
      <h1 slot="header" class="title is-1">Lista de canciones</h1>
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
