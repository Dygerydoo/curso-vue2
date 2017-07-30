<template>
  <div class="notification is-primary">
    <h1 class="title">Componente hijo 2</h1>
    Primar lorem ipsum dolor sit amet, consectetur
    adipiscing elit lorem ipsum dolor sit amet,
    consectetur adipiscing elit

    <ol>
      <li v-for="color in arrayReverse">{{color}}</li>
    </ol>
  </div>
</template>

<script>
export default {
  props: {
    colors: {
      type: Array,
      default: function() {
        return ['A', 'B']
      },
    },
  },
  computed: {
    arrayReverse() {
      return this.colors.reverse();
    }
  }
}
</script>

<style>
ol {
  margin: 1em;
}
</style>
