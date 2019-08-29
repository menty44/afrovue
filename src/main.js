// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// import store from './store'
import Axios from 'axios'

import VueParticles from 'vue-particles'

import { BulmaAccordion, BulmaAccordionItem } from 'vue-bulma-accordion'



Vue.use(VueParticles)
Vue.use(ElementUI);
Vue.config.productionTip = false

Vue.prototype.$http = Axios;
const token = localStorage.getItem('token')
if (token) {
  Vue.prototype.$http.defaults.headers.common['Authorization'] = token
}

// Vue.component(
//   BulmaAccordion,
//     BulmaAccordionItem
//
// )
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App,
    name: BulmaAccordion,
    BulmaAccordionItem
  },
  template: '<App/>'
})
