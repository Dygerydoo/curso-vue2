<template>
  <article class="media">
    <figure class="media-left">
      <p class="image is-64x64">
        <img src="http://bulma.io/images/placeholders/128x128.png">
      </p>
    </figure>
    <div class="media-content">
      <div class="field">
        <p class="control">
          <textarea class="textarea" placeholder="Añadir un comentario" v-model="message"></textarea>
        </p>
      </div>
      <nav class="level">
        <div class="level-left">
          <div class="level-item">
            <a class="button is-primary" @click="addComment">Comentar</a>
          </div>
        </div>
      </nav>
    </div>
  </article>
</template>

<script>
export default {
  data() {
    return {
      name: 'Random',
      userReference: '@randoman',
      message: '',
    };
  },
  methods: {
    addComment() {
      this.$emit('newComment', this.name, this.userReference, this.message);
      this.message = '';
    }
  }
}
</script>

<style scoped>
.media {
  padding: 1em 0;
  margin: 1em 0;
}
</style>
