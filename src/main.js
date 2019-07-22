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

new Vue({
  router,
  scss,
  i18n,
  render: h => h(App)
}).$mount('#app');
