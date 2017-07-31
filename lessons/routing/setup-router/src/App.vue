<template>
  <div id="app">
    <nav class="navbar">
      <ul class="navbar-list">
        <li class="navbar-list-item">Inicio</li>
        <li class="navbar-list-item">Contacto</li>
        <li class="navbar-list-item">Usuario</li>
      </ul>
    </nav>
  </div>
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
