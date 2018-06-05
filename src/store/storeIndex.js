import Vue from 'vue'
import Vuex from 'vuex'
// import users from './modules/users'
import todos from './modules/todos'
import fireStore from './modules/fireStore'

Vue.use(Vuex)
const store = new Vuex.Store({
  modules: {
    todos,
    fireStore
  }
})

export default store
