<template>
  <div id="parent">
    <h1 class="title">{{title}}</h1>
    <app-comment-block :title="title"></app-comment-block>
    <app-info :colors="colors"></app-info>
    <button class="button is-danger" @click="newTitle">Cambiar título</button>
  </div>
</template>

<script>
import AppCommentBlock from './ChildOne.vue';
import AppInfo from './ChildTwo.vue';

export default {
  data() {
    return {
      title: 'Título del padre',
      colors: ['Naranja', 'Azul', 'Turquesa', 'Granate'],
    };
  },
  methods: {
    newTitle() {
      this.title = 'Título modificado';
    }
  },
  components: {
    AppCommentBlock,
    AppInfo,
  }
}
</script>

<style scoped>
#parent {
  width: 80%;
  margin: 2em auto;
  background: #8655b7;
  padding: 3em;
}

.title {
  color: white;
}
</style>
