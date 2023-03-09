<script>

import store from '../store';

import SearchbarHeader from './SearchbarHeader.vue';

export default {
  components:{
    SearchbarHeader,
  },

  data(){
    return{
      store,
    
    }
  },
  methods:{
    // onSearchFn(){
    //   this.fetchFilms()
    //   console.log(this.onSearchFn)
    // }
    consoleFn(){
      console.log(this.consoleFn, 'il click funza')
    }
  }
}

</script>

<template>
  <header>
    <section class="section-header bg-fume-custom py-3"> 
      <div class="container2">
        <div class="row justify-content-between align-items-center">
          <div class="col-4">
            <a href="">
              <img class="main-logo" src="/images/logonetflix.png" alt="">
            </a>
          </div>
          <div class="col-4 d-flex align-items-center">
            <SearchbarHeader @onSearch="$emit('onSearch')"/>

            <ul class="d-flex">
              <li>
                <img class="profile" src="/images/profile-image.jpg" alt="">
                <h4>Gabriele</h4>
              </li>
            
            </ul>

          </div>
          
          
        </div>
      </div>
    </section>
  </header>
</template>

<style lang="scss" scoped>

.profile{
  width: 80px;
}

.container2{
  width: 1920px;
  margin: 0 auto;
  color: white;
}

.section-header{
  position: fixed;
  width: 100%;
  z-index: 1;
}

.main-logo{
  width: 200px;
}

.bg-fume-custom{
  background: rgb(0,0,0);
  background: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 35%, rgba(66,66,66,1) 100%);
}
.bg-grey{
  background-color: grey;
}

.main-logo{
  color: red;
}

</style>
