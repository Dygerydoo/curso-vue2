<template>
  <div class="column is-half is-offset-one-quarter">
    <h1 class="title is-1 has-text-centered">Bienvenido a tu página de usuario</h1>
    <div class="box">
      <article class="media">
        <figure class="media-left">
          <p class="image is-64x64">
            <img src="http://bulma.io/images/placeholders/128x128.png">
          </p>
        </figure>
        <div class="media-content">
          <div class="content">
            <p>
              <strong>John Smith</strong> <small>{{userName}}</small> <small>31m</small>
              <br>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
            </p>
          </div>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
export default {
  // data() {
  //   return {
  //     userName: this.$route.params.userName,
  //   };
  // }
}
</script>

<style>
</style>
