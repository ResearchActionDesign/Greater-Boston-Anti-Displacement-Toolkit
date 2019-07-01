import Vue from 'vue'
import Router from 'vue-router'
import Overview from './views/Overview.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/',
      alias: '/Overview',
      name: 'Overview',
      component: Overview
    },
    {
      path: '/Toolkit',
      name: 'Toolkit',
      component: () => import( /* webpackChunkName: "Toolkits" */ './views/Toolkits.vue'),
    },
    {
      path: '/Toolkit/Mapping_power_and_money',
      name: 'Mapping',
      component: () => import( /* webpackChunkName: "Mapping" */ './views/Toolkit/Mapping.vue')
    },
    {
      path: '/Toolkit/Finding_data_about_your_community',
      name: 'FindData',
      component: () => import( /* webpackChunkName: "FindData" */ './views/Toolkit/FindData.vue')
    },
    {
      path: '/Toolkit/Using_data_&_storytelling_to_make_arguments',
      name: 'UseData',
      component: () => import( /* webpackChunkName: "UseData" */ './views/Toolkit/UseData.vue')
    },
    {
      path: '/Toolkit/Identifying_&_evaluating_policies',
      name: 'Policies',
      component: () => import( /* webpackChunkName: "Policies" */ './views/Toolkit/Policies.vue')
    },
    {
      path: '/Toolkit/Identifying_community_strategies_&_tactics',
      name: 'Strategies',
      component: () => import( /* webpackChunkName: "Strategies" */ './views/Toolkit/Strategies.vue')
    },
    {
      path: '/Toolkit/Sharing_our_stories',
      name: 'Stories',
      component: () => import( /* webpackChunkName: "Stories" */ './views/Toolkit/Stories.vue')
    },
    {
      path: '/Toolkit/Toolkit_Overview',
      name: 'ToolkitOverview',
      component: () => import( /* webpackChunkName: "ToolkitOverview" */ './views/Toolkit/ToolkitOverview.vue')
    },
    {
      path: '/Film',
      name: 'Film',
      component: () => import( /* webpackChunkName: "Film" */ './views/Film.vue')
    },
    {
      path: '/Resources',
      name: 'Resources',
      component: () => import( /* webpackChunkName: "Resources" */ './views/Resources.vue')
    },
    {
      path: '*',
      redirect: '/'
    }
  ],
  scrollBehavior() {
    return { x: 0, y: 0 }
  }
})