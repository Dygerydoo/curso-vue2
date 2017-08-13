<template>
  <nav class="navbar">
    <ul class="navbar-list">
      <li class="navbar-list-item"><router-link to="/">Inicio</router-link></li>
      <li class="navbar-list-item"><router-link to="/page2">Page 2</router-link></li>
      <li class="navbar-list-item">
        <router-link :to="{ path: '/page2', hash: '#fourth'}">Page 2 Hash</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {

}
</script>

<style>
.navbar {
  display: flex;
  justify-content: flex-start;
  border-bottom: 1px solid #ddd;
  margin-bottom: 1em;
}

.navbar-list {
  display: flex;
  flex-direction: row;
}

.navbar-list-item {
  margin: 1em;
}
</style>
