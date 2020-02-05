import Vue from 'vue';
import App from './App.vue';
import store from './store';

/* directives */
import './utils/directives';

/* filters */
import './utils/filters';

/* plugins */
import './plugins/compostion-api'; // vue-compostion-api
import './plugins/elemen-ui'; // elemen-ui

Vue.config.productionTip = false;

new Vue({
  store,
  render: (h) => h(App),
}).$mount('#app');
