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
      getStars(voto){
        voto = Math.ceil(voto /2)
        let output = [];

        for (let i = voto; i >= 1; i--)
          output.push('+')
        
        for(let i = (5 - voto); i >= 1; i--)
          output.push('o')

        return output.join('')
      }

    }
    
  }
</script>

<template>

  <li>
    <!-- <img src="" alt=""> -->
    <img class="main-poster" :src="createImgPath()" alt="">
    <h3>{{ item.title === undefined ? item.name : item.title }}</h3>
    <h4>{{ item.original_title === undefined ? item.original_name : item.original_title }}</h4>
    <img class="language-flag" :src="createFlag()" alt="">
    <p>{{ item.original_language }}</p>
    <!-- <p>{{ item.vote_average }}</p> -->
    <p>{{ convertVote(item.vote_average) }}</p>

    <h2>{{ getStars(item.vote_average) }}</h2>
    <h2>{{ getStars(item.vote_average) }}</h2>

    
    <!-- <ul class="d-flex p-0">
      <li>
        <font-awesome-icon class="fullstar" icon="fa-solid fa-star" />
      </li>
      <li>
        <font-awesome-icon class="emptystar" icon="fa-solid fa-star" />
      </li>
      <li>
        <font-awesome-icon class="fullstar" icon="fa-regular fa-star" />
      </li>
      <li>
        <font-awesome-icon class="emptystar" icon="fa-regular fa-star" />
      </li>
    </ul> -->
    

  </li>

</template>

<style lang="scss" scoped>

li{
  .main-poster{
    width: 300px;
    
  }
  .language-flag{
    width: 50px;
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