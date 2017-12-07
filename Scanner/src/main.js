import Vue from 'vue';
import App from './App';
import router from './router';
require('./global.js')

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});
