<template>
  <div id="parent">
    <h1 class="title">{{title}}</h1>
    <app-comment-block v-if="show"
                       :title="title"
                       @hide="show = false"></app-comment-block>
    <button v-if="!show"
            class="button is-danger"
            @click="showBlock">Mostrar de nuevo</button>
  </div>
</template>

<script>
import AppCommentBlock from './ChildOne.vue';

export default {
  data() {
    return {
      show: true,
      title: 'Título',
    };
  },
  methods: {
    showBlock() {
      this.show = true;
    },
  },
  components: {
    AppCommentBlock,
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
