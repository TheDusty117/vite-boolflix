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
}

</script>

<template>
  <main>
    <section class="bg-black"> 
      <div class="container posters">
        <div class="row justify-content-between align-items-center">

          <ul class="films">
            <!--LA CARD VIENE CICLATA-->
            <CardMain v-for="el in store.movies" :key="el.id" :movie="el" />

          </ul>

        </div>
      </div>
    </section>
  </main>
</template>

<style lang="scss" scoped>

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
