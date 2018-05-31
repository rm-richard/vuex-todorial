import Vue from 'vue'
import App from './App.vue'
import VeeValidate from 'vee-validate'

import router from './router'
import store from './store'

Vue.use(VeeValidate);

new Vue({
  router,
  store,
  el: '#app',
  render: h => h(App)
})
