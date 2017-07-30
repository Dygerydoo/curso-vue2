<template>
  <div class="box">
    <slot name="header"></slot>
    <table class="table">
      <thead>
        <tr>
          <th>Song Name</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="songNumber in 5">
          <td>Song {{songNumber}}</td>
        </tr>
      </tbody>
    </table>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: ['playlist'],
}
</script>

<style>
.box {
  width: 80%;
  margin: 1em auto;
}
</style>
