import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/:locale',
      name: 'Overview',
      component: () => import( /* webpackChunkName: "Overview" */ './views/Overview.vue'),
    },
    // English-language routes.
    {
      path: '/:locale/toolkit',
      name: 'Toolkit',
      component: () => import( /* webpackChunkName: "Toolkits" */ './views/ToolkitList.vue'),
    },
    {
      path: '/:locale/toolkit/mapping',
      name: 'Mapping',
      component: () => import( /* webpackChunkName: "Mapping" */ './views/Toolkit/Mapping.vue')
    },
    {
      path: '/:locale/toolkit/finding-data',
      name: 'FindingData',
      component: () => import( /* webpackChunkName: "FindData" */ './views/Toolkit/FindData.vue')
    },
    {
      path: '/:locale/toolkit/using-data',
      name: 'UsingData',
      component: () => import( /* webpackChunkName: "UseData" */ './views/Toolkit/UsingData.vue')
    },
    {
      path: '/:locale/toolkit/policies',
      name: 'Policies',
      component: () => import( /* webpackChunkName: "Policies" */ './views/Toolkit/Policies.vue')
    },
    {
      path: '/:locale/toolkit/strategies',
      name: 'Strategies',
      component: () => import( /* webpackChunkName: "Strategies" */ './views/Toolkit/Strategies.vue')
    },
    {
      path: '/:locale/toolkit/stories',
      name: 'Stories',
      component: () => import( /* webpackChunkName: "Stories" */ './views/Toolkit/Stories.vue')
    },
    {
      path: '/:locale/film',
      name: 'Film',
      component: () => import( /* webpackChunkName: "Film" */ './views/Film.vue')
    },
    {
      path: '/:locale/resources',
      name: 'Resources',
      component: () => import( /* webpackChunkName: "Resources" */ './views/Resources.vue')
    },

    // Spanish-language routes
    {
      path: '/:locale/manual',
      name: 'Toolkit-es',
      component: () => import( /* webpackChunkName: "Toolkits" */ './views/ToolkitList.vue'),
    },
    {
      path: '/:locale/manual/mapeo',
      name: 'Mapping-es',
      component: () => import( /* webpackChunkName: "Mapping" */ './views/Toolkit/Mapping.vue')
    },
    {
      path: '/:locale/manual/búsqueda-de-datos',
      name: 'FindingData-es',
      component: () => import( /* webpackChunkName: "FindData" */ './views/Toolkit/FindData.vue')
    },
    {
      path: '/es/manual/busqueda-de-datos', // Without accent.
      redirect: { name: 'FindingData-es', params: { locale: 'es' }},
    },
    {
      path: '/:locale/manual/uso-de-estadísticas',
      name: 'UsingData-es',
      component: () => import( /* webpackChunkName: "UseData" */ './views/Toolkit/UsingData.vue')
    },
    {
      path: '/es/manual/uso-de-estadisticas', // Without accent.
      redirect: { name: 'UsingData-es', params: { locale: 'es' }},
    },
    {
      path: '/:locale/manual/políticas',
      name: 'Policies-es',
      component: () => import( /* webpackChunkName: "Policies" */ './views/Toolkit/Policies.vue')
    },
    {
      path: '/es/manual/politicas', // Without accent.
      redirect: { name: 'Policies-es', params: { locale: 'es' }},
    },
    {
      path: '/:locale/manual/estrategias',
      name: 'Strategies-es',
      component: () => import( /* webpackChunkName: "Strategies" */ './views/Toolkit/Strategies.vue')
    },
    {
      path: '/:locale/manual/historias',
      name: 'Stories-es',
      component: () => import( /* webpackChunkName: "Stories" */ './views/Toolkit/Stories.vue')
    },
    {
      path: '/:locale/película',
      name: 'Film-es',
      component: () => import( /* webpackChunkName: "Film" */ './views/Film.vue')
    },
    {
      path: '/es/pelicula', // Without accent.
      redirect: { name: 'Film-es', params: { locale: 'es' }},
    },
    {
      path: '/:locale/recursos',
      name: 'Resources-es',
      component: () => import( /* webpackChunkName: "Resources" */ './views/Resources.vue')
    },
    {
      path: '/',
      name: 'Home',
      beforeEnter(to, from, next) {
        let browserLanguage = navigator.language.toLowerCase().substr(0, 2);
        next({name: 'Overview', params: {locale: browserLanguage}});
      },
    },
    {
      path: '*',
      redirect: '/en'
    }
  ],
  scrollBehavior() {
    return { x: 0, y: 0 }
  }
})