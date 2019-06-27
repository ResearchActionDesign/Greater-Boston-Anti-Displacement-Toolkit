import Vue from 'vue'
import Router from 'vue-router'
import Overview from './views/Overview.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Overview',
      component: Overview
    },
    {
      path: '/Toolkits',
      name: 'Toolkits',
      component: () => import(/* webpackChunkName: "Toolkits" */ './views/Toolkits.vue')
    },
    {
      path: '/Film',
      name: 'Film',
      component: () => import(/* webpackChunkName: "Film" */ './views/Film.vue')
    }
  ]
})
