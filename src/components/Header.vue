<script>

import SearchbarHeader from './SearchbarHeader.vue';

export default {
  components:{
    SearchbarHeader
  }
}

</script>

<template>
  <header>
    <section class="bg-grey"> 
      <div class="container">
        <div class="row justify-content-between align-items-center">
          <div class="col-4">
            <h1 class="main-logo">NETFLIX</h1>
          </div>
          <SearchbarHeader />
        </div>
      </div>
    </section>
  </header>
</template>

<style lang="scss" scoped>


.bg-black{
  background-color: black;
}
.bg-grey{
  background-color: grey;
}

.main-logo{
  color: red;
}

</style>
