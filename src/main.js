// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store/storeIndex'
import router from './router/index'
import VueFire from 'vuefire'
import firebase from 'firebase/app'
import 'firebase/firestore'

Vue.use(VueFire)

firebase.initializeApp({
  apiKey: 'AIzaSyAVG4huT8BYAfxp9n7XeapWmNCXjL4E8-Q',
  authDomain: 'kekvue.firebaseapp.com',
  databaseURL: 'https://kekvue.firebaseio.com',
  projectId: 'kekvue',
  storageBucket: 'kekvue.appspot.com',
  messagingSenderId: '1080081749456'
})

export const db = firebase.firestore()

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  components: { App },
  router,
  template: '<App/>'
})
