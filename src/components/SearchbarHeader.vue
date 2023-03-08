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
  <div class="col-4">
    <input type="text" @keyup.enter="$emit('onSearch')" placeholder="cerca un film/serie" v-model="store.search">
  </div>

</template>

<style lang="scoped">
</style>