import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

//elements bootstrap
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

//icons fortawesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEye, faTrashAlt, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faEye, faTrashAlt, faPhone)
Vue.component('font-awesome-icon', FontAwesomeIcon)

//



Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
