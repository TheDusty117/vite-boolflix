//importo oggetto reattivo da 'vue'
import { reactive } from "vue";

// creo variabile store con oggetto

const store = reactive({

  movies: [],
  tvs:[],
  search: '',
  //creare un dato che reperisco dall'api,
  //che concateni:
  //base
  //formato
  //item.poster_path

})


// per importare lo store devo prima ESPORTARLO proprio come ho fatto qui sotto
export default store