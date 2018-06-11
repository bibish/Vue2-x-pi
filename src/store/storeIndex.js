import Vue from 'vue'
import Vuex from 'vuex'
import TodoStore from './modules/TodoStore'
import AuthStore from './modules/AuthStore'
Vue.use(Vuex)
const store = new Vuex.Store({
  modules: {
    TodoStore,
    AuthStore
  }
})

export default store
