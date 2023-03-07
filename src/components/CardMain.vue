<script>

  export default {
    
    props: {
      film:{
        type: Object,
        required: true
      }
    }
  }
</script>

<template>

  <li>
    <img src="" alt="">
    <h3>{{ film.original_title }}</h3>
    <h3>{{ film.title }}</h3>
  </li>

</template>

<style lang="scss" scoped>
</style>