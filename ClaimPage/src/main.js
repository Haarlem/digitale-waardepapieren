import Vue from 'vue'
import App from './App'
import router from './router'
import VueProgress from 'vue-progress-path'

Vue.use(VueProgress)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
