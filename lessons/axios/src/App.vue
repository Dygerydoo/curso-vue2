<template>
  <div id="app">
    <ul>
      <li v-for="character in charactersList">
        {{ character.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      charactersList: [],
    }
  },
  mounted() {
    this.getCharacterBios();
  },
  methods: {
    getCharacterBios() {
      axios.get('https://swapi.co/api/people/')
        .then(response => {
          this.charactersList = response.data.results;
        });
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
  margin: 0 auto;
  max-width: 250px;
}

li {
  border: 1px solid #ddd;
  padding: .2em;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
