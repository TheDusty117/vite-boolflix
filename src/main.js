import { createApp } from 'vue'
import './style.css'
import App from './App.vue'



import { library } from '@fortawesome/fontawesome-svg-core'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faStar as faStarEmpty } from '@fortawesome/free-regular-svg-icons'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'


library.add( faStar, faStarEmpty, faMagnifyingGlass)




createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
