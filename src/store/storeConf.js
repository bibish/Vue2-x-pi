import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
const API = 'http://localhost:3000'
const store = new Vuex.Store({
  state: {
    todos: [{
      'id': '',
      'title': '',
      'done': ''
    }],
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
    },
    ADD_TODO (state, todos) {
      state.todos.push(todos)
    },
    REMOVE_TODO (state, todo) {
      const todos = state.todos
      todos.splice(todos.indexOf(todo), 1)
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
    },
    addTodo ({ commit }, newDo) {
      axios
        .post(`${API}/todos`, {
          'title': newDo.title,
          'done': newDo.done
        })
        .then(function (response) {
          commit('ADD_TODO', newDo)
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    removeTodo ({ commit }, todo) {
      axios
        .delete(`${API}/todos/${todo.id}`)
        .then(() => {
          console.log('removed todo', todo.id, 'from the server')
          commit('REMOVE_TODO', todo.id)
        })
    }
  }

})

export default store
