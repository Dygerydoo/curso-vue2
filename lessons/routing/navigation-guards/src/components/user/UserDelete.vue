<template>
  <div class="tile is-parent">
      <article class="tile is-child notification is-danger">
        <p class="title">¿Quieres eliminar el usuario {{ $route.params.userName }}?</p>
        <p class="subtitle">No podrás deshacer esta acción</p>
        <div class="content">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
        </div>
      </article>
      <button class="button" @click="saved = true">Guardar</button>
    </div>
</template>

<script>
export default {
  data() {
    return {
      saved: false,
    };
  },
  beforeRouteLeave(to, from, next) {
    if(this.saved) {
      next();
    } else {
      alert('No puedes continuar sin guardar');
    }
  }
}
</script>

<style>
</style>
