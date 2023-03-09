<script>
import 'bootstrap/dist/css/bootstrap.min.css';

import axios from 'axios'

import store from './store';

import Header from './components/Header.vue';
import Main from './components/Main.vue';
// import SearchbarHeader from './components/SearchbarHeader.vue';

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
    fetchData() {
      console.log('fetch data movies and tvs')

      // this.fetchMovies()
      // this.fetchData()
      // usare questo fetch data anche per le serie tv
    },

    //FUNZIONE DI RICERCA SERIE TV---------
    fetchTVs(){
      console.log('fetching data 2')

      axios
      .get('https://api.themoviedb.org/3/search/tv?api_key=721c5aed0cfc1266b55669523e4a8355&language=it-IT',{
        params: {
          query: this.store.search
        }
      })
      .then((res)=>{
        console.log(res.data.results)
        this.store.tvs = res.data.results
      })
      .catch(err=> {
        this.store.tvs=[]
      })
    },

    //FUNZIONE DI RICERCA FILM---------
    fetchMovies(){
      console.log('fetching data')

      axios
      .get('https://api.themoviedb.org/3/search/movie?api_key=721c5aed0cfc1266b55669523e4a8355&language=it-IT',{
        params: {
          //IMPORTANTE, VA USATO IL THIS E POI SEGUITO IL PERCORSO PER ARRIVARE ALLO STORE!!!
          query: this.store.search
        }
      })
      .then((res)=>{
        console.log(res.data.results)
        this.store.movies = res.data.results
      })
      .catch(err => {
        this.store.movies=[]
      })
    },
    onSearchFn(){
      this.fetchMovies()
      this.fetchTVs()
      console.log(this.onSearchFn)
    }
  },

  created(){
    console.log('store',this.store)
    this.fetchMovies()
    this.fetchTVs()
  },
}


</script>

<!--        TEMPLATE         ------------------------------->

<template>
  
  
  
  

  <Header @onSearch="onSearchFn"/>
 
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
  background-color: black;
}

</style>
