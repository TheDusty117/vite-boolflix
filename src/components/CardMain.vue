<script>

  export default {
    
    props: {
      item:{
        type: Object,
        required: true
      }
    },
    methods:{
      createImgPath(){

      }
    }
    
  }
</script>

<template>

  <li>
    <img src="" alt="">
    <h3>{{ item.title === undefined ? item.name : item.title }}</h3>
    <h4>{{ item.original_title === undefined ? item.original_name : item.original_title }}</h4>
    <p>{{ item.original_language }}</p>
    <p>{{ item.vote_average }}</p>
    <h2>image.tmdb.org/t/p/w342{{ item.poster_path }}</h2>
    
  </li>

</template>

<style lang="scss" scoped>
</style>