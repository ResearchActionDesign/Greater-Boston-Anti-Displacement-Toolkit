import Vue from 'vue'
import App from './App.vue'
import router from './router'
import scss from './scss/main.scss'
import './registerServiceWorker'
import i18n from './i18n'

Vue.config.productionTip = false;

Vue.directive('grid', {
  bind: function (el, binding) {
    const columns = binding.value;
    el.style.display = 'grid';
    el.style.gridTemplateColumns = columns;
  }
});

// Router navigation guard:
// Handles locale switching and redirecting from root URL to language-specific
// homepage. Also handles setting title & metadata.
router.beforeEach((to, from, next) => {
  // Language handling.
  let language = to.params.locale;
  if (!from || !from.params.locale) {
    language = navigator.language.toLowerCase().substr(0, 2);
  }

  if (!language) {
    language = i18n.locale;
  } else {
    i18n.locale = language;
  }
  if (to.params.locale !== language) {
    to.params.locale = language;
    next(to);
  }
  next();

  // let title = '';
  // if (to.name.indexOf('home') === 0) {
  //   title = i18n.t(`strings.pageTitles.home`);
  // }
  // else {
  //   title = i18n.t(`strings.pageTitles.${to.name}`, to.params);
  // }
  // if (title.indexOf('strings') === 0) {
  //   title = i18n.t('strings.pageTitles.home');
  // }
  // document.title = title;

  // Set metadata. For now just use a single description for all pages except tracts.

  // Find old metatags.
  // const metaTags = Array.from(document.querySelectorAll('[data-vue-router-controlled]'));
  //
  // let description = i18n.t('strings.pageMetaDescriptions.home');
  // if (to.name === 'infosheet' && store.getters.dataLoaded) {
  //   // Use dynamic tract diabetes data in meta if possible.
  //   // @TODO: Replace this with better text.
  //   description = store.getters.currentTractTitle;
  // }
  //
  // const metaTagDefinitions = {
  //   description: {
  //     content:
  //     description,
  //   },
  //   ogTitle: {
  //     content:
  //     title,
  //   },
  //   ogUrl: {
  //     content:
  //       siteConfig.baseUrl + to.fullPath,
  //   },
  //   ogDescription: {
  //     content:
  //     description,
  //   },
  //   ogType: {
  //     content: to.name === 'infosheet' ? 'article' : 'website',
  //   },
  // };
  //
  // metaTags.map((tag) => {
  //   const tagDef = metaTagDefinitions[tag.getAttribute('data-vue-router-controlled')];
  //   if (!tagDef) { return; }
  //   Object.keys(tagDef).forEach((key) => { tag.setAttribute(key, tagDef[key]); });
  // });
});

new Vue({
  router,
  scss,
  i18n,
  render: h => h(App)
}).$mount('#app');
