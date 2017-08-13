<template>
  <div class="tile is-parent">
      <article class="tile is-child notification is-danger">
        <p class="title">¿Quieres eliminar el usuario {{ $route.params.userName }}?</p>
        <p class="subtitle">No podrás deshacer esta acción</p>
        <div class="content">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>

          <p>Nuestra query es: {{ $route.query.search }}</p>
        </div>
      </article>
    </div>
</template>

<script>
export default {
}
</script>

<style>
</style>
