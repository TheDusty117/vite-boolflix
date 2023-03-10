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
    data(){
      return {
        isHovering: false,
        flags: {
          // it:
          en: '/images/english.webp',
          jp: '/images/japanese.jpg',
          ko: '/images/korean.jpg',
          ch: '/images/chinese.webp',
        }
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
        if (this.item.original_language === 'ko'){
          return '/images/korean.jpg'
        }
        if (this.item.original_language === 'en'){
          return '/images/english.webp'
        }
        if (this.item.original_language === 'zh'){
          return '/images/chinese.webp'
        } 
      },
      convertVote(votooriginale){
        return Math.ceil(votooriginale / 2)
      },
     

    },
    computed:{
      title(){
        return this.item.title
      },
      name(){
        return this.item.name
      },
      original_title(){
        return this.item.original_title
      },
      original_name(){
        return this.item.original_name
      },
      overview(){
        return this.item.overview
      },
      vote_average(){
        return this.item.vote_average
      }

    }
    
  }
</script>

<template>

  <li class="card-item" @mouseenter="isHovering=true" @mouseleave="isHovering=false" >
    
    <img class="main-poster"  :src="createImgPath()" alt="">
    <div class="specs"  :class="isHovering === true ? 'd-block' : 'd-none' " >
      <h3>{{ title === undefined ? name : title }}</h3>
      <h4>{{ original_title === undefined ? original_name : original_title }}</h4>
      <img class="language-flag" :src="createFlag()" alt="">
      <p class="item-overview">{{ overview }}</p>

  
      <ul class="d-flex p-0">
        <li v-for="n in 5">
          <font-awesome-icon
          :icon="n <= convertVote(vote_average)? 'fa-solid fa-star' : 'fa-regular fa-star' "
          :class="n <= convertVote(vote_average)? 'fullstar' : '' "
           />
        </li>
      </ul>
    </div>

  </li>

</template>

<style lang="scss" scoped>

.card-item{
  position: relative;

  
  .specs{
    position: absolute;
    top: 0%;
    background-color: rgba(0, 0, 0, 0.788);
    width: 100%;
    height: 100%;
  }
}

li{
  .main-poster{
    width: 350px;
    height: 525px;
    h3{
      width: 90%;
    }
  }
  .language-flag{
    width: 20px;
  }
  
  .item-overview{
    width: 90%;
  }

  h3, h4{
    font-size: 18px;
  }

  .emptystar{
    color: grey;
  }

  .fullstar{
    color: yellow
  }
}

</style>