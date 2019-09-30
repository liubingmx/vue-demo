import Vue from 'vue';
import App from './App.vue';
import router from '@/router/index.js';
import store from './store/index.js';
import api from '@/api/index.js';

Vue.config.productionTip = false;
Vue.prototype.$api = api;
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
