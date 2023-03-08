<script>

  // import store from '../store'

  const basePath = 'https://image.tmdb.org/t/p/'

  const imageSize = 'w342'
  
  // const fileName = item.poster_path

  export default {
    
    props: {
      item:{
        type: Object,
        required: true
      }
    },
    methods:{
      //questa funzione concatena le varie stringhe di path base e dimensione immagine, aggiunte a cio' che si trova dentro this.item.poster_path
      createImgPath(){
        return basePath + imageSize + this.item.poster_path
      },
      createFlag(){
        if (this.item.original_language === 'ja'){
          return '/images/japanese.jpg'
        }
      }
    }
    
  }
</script>

<template>

  <li>
    <!-- <img src="" alt=""> -->
    <img :src="createImgPath()" alt="">
    <h3>{{ item.title === undefined ? item.name : item.title }}</h3>
    <h4>{{ item.original_title === undefined ? item.original_name : item.original_title }}</h4>
    <img :src="createFlag()" alt="">
    <p>{{ item.original_language }}</p>
    <p>{{ item.vote_average }}</p>
    
  </li>

</template>

<style lang="scss" scoped>
</style>