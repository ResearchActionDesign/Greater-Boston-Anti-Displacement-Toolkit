require('normalize.css');

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import scss from './scss/main.scss'
import './registerServiceWorker'
import i18n from './i18n'

Vue.config.productionTip = false;

// Router navigation guard:
// Handles locale switching and redirecting from root URL to language-specific
// homepage. Also handles setting title & metadata.
router.beforeEach((to, from, next) => {
  // Language handling.
  let language = to.params.locale;

  const browserLanguage = navigator.language.toLowerCase().substr(0, 2);
  if (browserLanguage === 'es' && (!from || !from.params.locale)) {
    language = browserLanguage;
  }

  if (['en','es'].indexOf(language) === -1) {
    language = 'en';
  }
  if (!language) {
    language = i18n.locale;
  } else {
    i18n.locale = language;
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

  let newName = to.name;
  const nameEn = newName.endsWith('-es') ? newName.slice(0,-3) : newName; // Store these separately for hreflang links, below
  const nameEs = !newName.endsWith('-es') && newName !== 'Overview' && newName !== 'Home' ? newName + '-es' : newName;
  if (newName.endsWith('-es') && language === 'en') {
    newName = newName.slice(0, -3);
  }
  else if (!(newName.endsWith('-es')) && language === 'es' && newName !== 'Overview' && newName !== 'Home') {
    newName = newName + '-es';
  }

  if (to.params.locale !== language || newName !== to.name) {
    return next({ name: newName, params: { locale: language }});
  }

  // Dynamically set metadata.
  // Find old metatags.
  const metaTags = Array.from(document.querySelectorAll('[data-vue-router-controlled]'));
  const newUrl = router.resolve({ name: newName, params: { locale: language } }).href;

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
        'https://www.greaterbostontoolkit.org' + newUrl,
    },
    ogDescription: {
      content:
      description,
    },
    linkCanonical: {
      href: 'https://www.greaterbostontoolkit.org' + newUrl,
    },
    linkEn: {
      href: 'https://www.greaterbostontoolkit.org' + router.resolve({ name: nameEn, params: { locale: 'en' }}).href,
    },
    linkEs: {
      href: 'https://www.greaterbostontoolkit.org' + router.resolve({ name: nameEs, params: { locale: 'es' }}).href,
    }
  };

  metaTags.map((tag) => {
    const tagDef = metaTagDefinitions[tag.getAttribute('data-vue-router-controlled')];
    if (!tagDef) { return; }
    Object.keys(tagDef).forEach((key) => { tag.setAttribute(key, tagDef[key]); });
  });

  next();
});

new Vue({
  router,
  scss,
  i18n,
  render: h => h(App),
}).$mount('#app');
