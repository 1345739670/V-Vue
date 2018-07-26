import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index'
import watch from '@/pages/watch'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: index
    },
    {
      path: '/watch',
      component: watch
    }
  ]
})
