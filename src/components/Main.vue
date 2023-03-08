<script>

import CardMain from './CardMain.vue';

import store from '../store';



export default {
  components:{
    CardMain,
  },

  data(){
    return{
      // films: [],
      store,
      
    }
  },
  computed: {
    items(){
      return this.store.movies

    }
  }
}

</script>

<template>
  <main>
    <section class="bg-black"> 
      <div class="container posters">
        <div class="row justify-content-between align-items-center">

          <h2>FILM</h2>
          <ul class="films grid">
            <!--LA CARD VIENE CICLATA-->
            <CardMain v-for="el in store.movies" :key="el.id" :item="el" />

          </ul>

          <h2>SERIE TV</h2>
          <ul class="films grid">

            <CardMain v-for="el in store.tvs" :key="el.id" :item="el" />

          </ul>

        </div>
      </div>
    </section>
  </main>
</template>

<style lang="scss" scoped>

.grid{
  display: grid;
  grid-template-columns: repeat(4,1fr);
  gap: 40px
}

main{
  color: white;
}

.col-4{
  border: 2px solid white;
  min-height: 150px;
}

.posters{
  min-height: 200px;
}


.films{
  li{
    
  }
}

</style>
