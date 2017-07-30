<template>
  <div id="parent">
    <div class="tile is-child box">
      <p class="title">{{title}}</p>
      <p>Estoy viendo: {{watching}}</p>
      <div class="content">
      </div>
      <div class="columns">
        <div class="column">
          <app-card-one :watching="watching"></app-card-one>
          <app-card-two></app-card-two>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppCardOne from './ChildOne.vue';
import AppCardTwo from './ChildTwo.vue';

export default {
  data() {
    return {
      title: 'Componente padre',
      watching: 'Reservoir dogs',
    };
  },
  components: {
    AppCardOne,
    AppCardTwo,
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
</style>
