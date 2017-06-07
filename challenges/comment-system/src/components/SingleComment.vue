<template>
  <article class="media">
    <figure class="media-left">
      <p class="image is-64x64">
        <img src="http://bulma.io/images/placeholders/128x128.png">
      </p>
    </figure>
    <div class="media-content">
      <div class="content">
        <p>
          <strong>{{comment.user}}</strong> <small>{{comment.userReference}}</small>
          <br>
          {{comment.message}}
        </p>
      </div>
    </div>
    <div class="media-right">
      <button class="delete" @click="EraseComment"></button>
    </div>
  </article>
</template>

<script>
export default {
  name: 'app-single-comment',
  props: ['comment', 'index'],
  methods: {
    EraseComment(index) {
      this.$emit('EraseComment', this.index);
    }
  }
}
</script>

<style>
</style>
