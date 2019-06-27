import Vue from 'vue'
import Router from 'vue-router'
import Overview from './views/Overview.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/',
      name: 'Overview',
      component: Overview
    },
    {
      path: '/Toolkits',
      name: 'Toolkits',
      component: () => import( /* webpackChunkName: "Toolkits" */ './views/Toolkits.vue')
    },
    {
      path: '/Workshop/:WorkshopName',
      name: 'Mapping',
      component: () => import( /* webpackChunkName: "Mapping" */ './views/Mapping.vue')
    },
    {
      path: '/Workshop/:WorkshopName',
      name: 'FindData',
      component: () => import( /* webpackChunkName: "FindData" */ './views/FindData.vue')
    },
    {
      path: '/Workshop/:WorkshopName',
      name: 'UseData',
      component: () => import( /* webpackChunkName: "UseData" */ './views/UseData.vue')
    },
    {
      path: '/Workshop/:WorkshopName',
      name: 'Policies',
      component: () => import( /* webpackChunkName: "Policies" */ './views/Policies.vue')
    },
    {
      path: '/Workshop/:WorkshopName',
      name: 'Strategies',
      component: () => import( /* webpackChunkName: "Strategies" */ './views/Strategies.vue')
    },
    {
      path: '/Workshop/:WorkshopName',
      name: 'Stories',
      component: () => import( /* webpackChunkName: "Stories" */ './views/Stories.vue')
    },
    {
      path: '/Film',
      name: 'Film',
      component: () => import( /* webpackChunkName: "Film" */ './views/Film.vue')
    },
    {
      path: '*',
      redirect: '/'
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})