//importo oggetto reattivo da 'vue'
import { reactive } from "vue";

// creo variabile store con oggetto

// const basePath = 'https://image.tmdb.org/t/p'
// const imageSize = 'w342'
// const fileName = {{item.poster_path}}

const store = reactive({

  movies: [],
  tvs:[],
  search: '',
  hover: true
  //creare un dato che reperisco dall'api,
  //che concateni:
  //base
  //formato
  //item.poster_path

})


// per importare lo store devo prima ESPORTARLO proprio come ho fatto qui sotto
export default store