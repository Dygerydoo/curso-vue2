<template>
  <div class="app-CommentBox">
      <app-comment-form @newComment="addComment"></app-comment-form>
      <slot name="extra-info"></slot>
      <div class="app-CommentBox_List">
          <app-single-comment v-for="(comment, index) in comments"
                              :comment="comment"
                              :index="index"
                              :key="index"
                              @EraseComment="removeComment">
          </app-single-comment>
      </div>
    </div>
</template>

<script>
import AppSingleComment from './SingleComment.vue';
import AppCommentForm from './CommentForm.vue';

export default {
  name: 'app-comment-box',
  data () {
    return {
      comments: [
        {user: 'Alejandro Ramos', userReference: '@alram', message: 'Me gusta la idea'},
        {user: 'Manuel R.', userReference: '@monpatu', message: 'Genial, es un avance importante!'},
      ],
    }
  },
  methods: {
    addComment(user, userReference, message) {
      this.comments.push({
        user: user,
        userReference: userReference,
        message: message
      });
    },
    removeComment(index) {
      this.comments.splice(index, 1);
    }
  },
  components: {
    AppSingleComment,
    AppCommentForm
  }
}
</script>

<style>
</style>
