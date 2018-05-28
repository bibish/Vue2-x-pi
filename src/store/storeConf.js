import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

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
    addPosts: function (state, posts) {
      Object.assign(state.posts, posts)
    },
    addUsers: function (state, users) {
      Object.assign(state.users, users)
    },
    addTodos: function (state, todos) {
      Object.assign(state.todos, todos)
    }
  },
  actions: {}

})

export default store
