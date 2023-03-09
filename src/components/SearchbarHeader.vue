<script>

import store from '../store';

export default {
  data(){
    return{
      store,
      search: '',
    }
  }
}

</script>

<template>
  <div class=" d-flex justify-content-end">
    <div @click="$emit('onSearch')" class="button-search overstyle">
      <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
    </div>
    <input type="text" @keyup.enter="$emit('onSearch')" placeholder="cerca un film/serie" v-model="store.search">
  </div>

</template>

<style lang="scss" scoped>

  input{
    background: rgb(0,0,0);
    background: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 35%, rgba(66,66,66,1) 100%);
    border: 1px solid white;
    color: white;
    width: 400px;
    height: 40px;
  }

  .button-search{
    color: white;
    font-size: 30px;
    padding-right: 10px;
  }

  .overstyle:hover{
    color: red;
  }


</style>