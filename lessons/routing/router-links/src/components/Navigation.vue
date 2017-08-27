<template>
  <nav class="navbar">
    <ul class="navbar-list">
      <router-link class="navbar-list-item" active-class="active" tag="li" exact to="/">
        <a>Inicio</a>
      </router-link>
      <router-link class="navbar-list-item" active-class="active" tag="li" exact to="/contacto">Contacto</router-link>
      <router-link class="navbar-list-item" active-class="active" tag="li" exact to="/usuario">Usuario</router-link>
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

.active {
  font-size: .8rem;
}
</style>
