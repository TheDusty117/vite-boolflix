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
  // computed: {
  //   items(){
  //     // return this.store.movies

  //   }
  // }
}

</script>

<template>
  <main>
    <section class="bg-black"> 
      <div class="container2 posters">
        <div class="row justify-content-between align-items-center">
          
          <div class="col-12">
            
            <h2 class="content-type">FILM</h2>
            <ul class="films grid p-2">
              <!--LA CARD VIENE CICLATA-->
              <CardMain v-for="el in store.movies" :key="el.id" :item="el" />
  
            </ul>
  
            <h2 class="content-type">SERIE TV</h2>
            <ul class="films grid p-2">
  
              <CardMain v-for="el in store.tvs" :key="el.id" :item="el" />
  
            </ul>

          </div>

        </div>
      </div>
    </section>
  </main>
</template>

<style lang="scss" scoped>

section{
  padding-top: 170px;
}
.container2{
  width: 1920px;
  margin: 0 auto;
}
.grid{
  display: grid;
  grid-template-columns: repeat(5,1fr);
  justify-content: center;
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

.content-type{
  background: rgb(0,0,0);
background: linear-gradient(261deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 52%, rgba(255,0,0,1) 100%);
}

</style>
