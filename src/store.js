//importo oggetto reattivo da 'vue'
import { reactive } from "vue";

// creo variabile store con oggetto

const store = reactive({

  movies: [],
  tvs:[],
  search: '',
  // imageSize: {
  //   format: 'poster_size',
  //   size: 'w500'
  // }

})


// per importare lo store devo prima ESPORTARLO proprio come ho fatto qui sotto
export default store