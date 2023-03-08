<script>

  export default {
    
    props: {
      movie:{
        type: Object,
        required: true
      }
    }
  }
</script>

<template>

  <li>
    <img src="" alt="">
    <h3>{{ movie.title }}</h3>
    <h3>{{ movie.original_title }}</h3>
    <p>{{ movie.overview }}</p>
  </li>

</template>

<style lang="scss" scoped>
</style>