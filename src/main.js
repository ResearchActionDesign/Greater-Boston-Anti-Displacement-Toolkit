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
    next({ params: { locale: language }});
  }
  else {
    next();
  }

  let title = i18n.t('header');
  let description = i18n.t('description');
  if (to.name !== 'Overview') {
    if (to.name in i18n.t('toolkits')) {
      title += `: ${i18n.t('toolkits')[to.name].name}`;
      description = i18n.t('toolkits')[to.name].question;
      // TODO: Dynamically set image too?
    } else if (to.name in i18n.t('strings.pageTitles')) {
      title += `: ${i18n.t('strings.pageTitles')[to.name]}`
    }
    document.title = title;
  }

  // Dynamically set metadata.
  // Find old metatags.
  const metaTags = Array.from(document.querySelectorAll('[data-vue-router-controlled]'));

  const metaTagDefinitions = {
    description: {
      content:
      description,
    },
    ogTitle: {
      content:
      title,
    },
    ogUrl: {
      content:
        'https://www.greaterbostontoolkit.org' + to.fullPath,
    },
    ogDescription: {
      content:
      description,
    },
  };

  metaTags.map((tag) => {
    const tagDef = metaTagDefinitions[tag.getAttribute('data-vue-router-controlled')];
    if (!tagDef) { return; }
    Object.keys(tagDef).forEach((key) => { tag.setAttribute(key, tagDef[key]); });
  });
});

new Vue({
  router,
  scss,
  i18n,
  render: h => h(App),
  mounted: () => document.dispatchEvent(new Event("x-app-rendered")),
}).$mount('#app');
