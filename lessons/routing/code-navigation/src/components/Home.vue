<template>
  <div class="box column is-half is-offset-3">
    <h1 class="title is-1">Hola, estás en la home</h1>
    <p>Navega a cualquier sección</p>
    <hr>
    <p>Si tienes cualquier duda</p>
    <br>
    <button class="is-primary button"
            @click="contactUs"> Contacta con nosotros</button>
  </div>
</template>

<script>
export default {
  methods: {
    contactUs() {
      this.$router.push('/contacto');
    }
  }
}
</script>

<style>
</style>
