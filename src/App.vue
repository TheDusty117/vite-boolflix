<script>
import 'bootstrap/dist/css/bootstrap.min.css';

import axios from 'axios'

import store from './store';

import Header from './components/Header.vue';

import Main from './components/Main.vue';
import SearchbarHeader from './components/SearchbarHeader.vue';

export default{
  components: {
    Header,
    Main,
  },

  //grazie a postman posso vedere che l'api mi restituisce "results" che e' l'array che continene tutti i vari oggetti-film, ora voglio prendere con fetch e salvarmelo dentro films:[]
  data(){
    return{
      // films: [],
      store,
    }
  },
  methods:{
    fetchFilms(){
      console.log('fetching data')
      //fare chiamata in get ad endpoint
      axios
      .get('https://api.themoviedb.org/3/search/movie?api_key=721c5aed0cfc1266b55669523e4a8355&language=it-IT',{
        params: {
          query: 'back to the'
        }
      })
      //si usa arrow function perche' ci consente di acceder qui sopra a FILMS:[]
      .then((res)=>{
        //accedo grazie a then nel mio array di film e result quindi
        console.log(res.data.results)
        //appena viene fatta la chiamata assegno a films , res.data.restuls 
        this.store.films = res.data.results
      })
    },
    onSearchFn(){
      this.fetchFilms()
      console.log(this.onSearchFn)
    }
  },
  created(){
    console.log('store',this.store)
    this.fetchFilms()
  },
}


</script>

<!--        TEMPLATE         ------------------------------->

<template>

  <Header />

  <Main  />
  
  <!-- <ul>
    <li v-for="film in store.films" :key="film.id">
      <img src="" alt="">
      <h1>{{ film.title }}</h1>
    </li>
  </ul> -->

</template>






<style lang="scss">
@use './style/general.scss' as *;

body{
  background-color: teal;
}

</style>
