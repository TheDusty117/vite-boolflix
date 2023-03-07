<script>
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header.vue';

import Main from './components/Main.vue';

export default{
  components: {
    Header,
    Main,
  },

  data(){
    return{
      films:[]
    }
  },
  methods:{
    fetchFilms(){
      console.log('fetching data')
      //fare chiamata in get ad endpoint
    }
  },
  created(){
    this.fetchFilms()
  },
}


</script>

<template>

  <Header />

  <Main />
  
</template>

<style lang="scss">
@use './style/general.scss' as *;

body{
  background-color: teal;
}

</style>
