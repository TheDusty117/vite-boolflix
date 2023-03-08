//importo oggetto reattivo da 'vue'
import { reactive } from "vue";

// creo variabile store con oggetto

const store = reactive({

  movies: [],
  tv:[],
  search: '',

})


// per importare lo store devo prima ESPORTARLO proprio come ho fatto qui sotto
export default store