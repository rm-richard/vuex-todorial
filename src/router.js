import Vue from 'vue'
import Router from 'vue-router'
import Skills from './Skills.vue'
import About from './About.vue'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'skills',
      component: Skills
    }, {
      path: '/about',
      name: 'about',
      component: About
    }
  ]
})
