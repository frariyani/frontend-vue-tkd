import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

Vue.config.productionTip = false

Vue.prototype.$http = axios
Vue.prototype.$api = 'http://127.0.0.1:8000/api'

new Vue({
  el: '#app',
  render: h => h(App)
})
