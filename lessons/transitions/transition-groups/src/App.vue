<template>
  <div id="app">
    <button v-on:click="add">Add</button>
    <button v-on:click="remove">Remove</button>
    <transition-group name="scale-fade" tag="ul" class="list-group" type="animation">
      <li v-for="number in numbers" :key="number" class="list-group-item">
        {{ number }}
      </li>
    </transition-group>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      show: true,
      numbers: [1,2,3,4,5,6,7,8,9],
      nextNum: 10,
    }
  },
  methods: {
    randomIndex: function () {
      return Math.floor(Math.random() * this.numbers.length)
    },
    add: function () {
      this.numbers.splice(this.randomIndex(), 0, this.nextNum++)
    },
    remove: function () {
      this.numbers.splice(this.randomIndex(), 1)
    },
  }
}
</script>

<style>
.scale-fade-enter-active {
  animation: bounce-in .5s;
}

.scale-fade-leave-active {
  animation: bounce-in .5s reverse;
  transition: background 2s;
  background: red;
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0 auto;
  margin-top: 60px;
  width: 60%;
}
</style>
