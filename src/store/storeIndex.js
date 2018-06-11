import Vue from 'vue'
import Vuex from 'vuex'
import TodoStore from './modules/TodoStore'
import AuthStore from './modules/AuthStore'
import EtodoStore from './modules/EtodoStore'
Vue.use(Vuex)
const store = new Vuex.Store({
  modules: {
    TodoStore,
    EtodoStore,
    AuthStore
  }
})

export default store
