// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store/storeIndex'
import router from './router/index'
import VueMaterialIcon from 'vue-material-icon'

Vue.component(VueMaterialIcon.name, VueMaterialIcon)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  components: { App },
  router,
  template: '<App/>'
})
