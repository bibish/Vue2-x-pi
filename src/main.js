// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store/storeIndex'
import router from './router/index'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  components: { App },
  router,
  template: '<App/>'
})

// TODO: add getter singnup logique dans le store
// TODO: update router guard  virer some a cause des exact path ' /signup/lalala
// TODO: remove les todo avec les clefs de firestore
// TODO: virer la logique des mounteds
// TODO: add loader => before update => uodated a chaque dispatch
// TODO: create component toast qui affiche le state de chaque action
// TODO: filter in mixins
