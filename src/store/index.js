import Vue from 'vue'
import Vuex from 'vuex'

import skillModule from './skillModule'
import aboutModule from './aboutModule'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    skillModule,
    aboutModule
  }
})
