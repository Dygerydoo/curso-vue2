<template>
  <div style="background: #ddd; padding: 1em;">
    <h1 class="title is-3">Bienvenido a tu página {{userName}}</h1>
    <div class="box">
      <article class="media">
        <figure class="media-left">
          <p class="image is-64x64">
            <img src="http://bulma.io/images/placeholders/128x128.png">
          </p>
        </figure>
        <div class="media-content">
          <div class="content" style="white-space: normal;">
            <p>
              <strong>{{userName}}</strong> <small>31m</small>
              <br>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
            </p>
          </div>
        </div>
      </article>
      <router-link :to="`/usuario/${$route.params.userName}/delete`">Eliminar usuario</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userName: this.$route.params.userName,
    };
  }
}
</script>

<style>
</style>
