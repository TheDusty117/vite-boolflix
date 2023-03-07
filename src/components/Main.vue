<script>

import store from '../store';

export default {
  
}

</script>

<template>
  <main>
    <section class="bg-black"> 
      <div class="container posters">
        <div class="row justify-content-between align-items-center">
          <ul class="films">
            <li class="film-card">
              <img src="" alt="">
              <h3 class="film-name"></h3>
            </li>
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

</style>
