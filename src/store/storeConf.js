import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
const API = 'https://my-json-server.typicode.com/bibish/kekvue'
const store = new Vuex.Store({
  state: {
    todos: [],
    posts: [],
    users: []
  },
  getters: {
    getPosts: state => {
      return state.posts
    },
    getUsers: state => {
      return state.users
    },
    getTodos: state => {
      return state.todos
    }
  },
  mutations: {
    SET_TODOS (state, todos) {
      state.todos = todos
    }
  },
  actions: {
    loadTodos ({ commit }) {
      axios
        .get(`${API}/todos`)
        .then(r => r.data)
        .then(todos => {
          commit('SET_TODOS', todos)
        })
    }
  }

})

export default store
