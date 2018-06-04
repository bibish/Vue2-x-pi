import Vue from 'vue'
import Vuex from 'vuex'
import users from './modules/users'
import todos from './modules/todos'
// import { mutations, getters, actions } from './stStore'

Vue.use(Vuex)
const store = new Vuex.Store({
  modules: {
    todos,
    users
  }
})

export default store
