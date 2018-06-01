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
    users: [],
    connectedUser: false
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
      // console.log('mutate', state)
    },
    REMOVE_TODO (state, todo) {
      const todos = state.todos
      // console.log('remove from local state', todos.indexOf(todo), 'in state', typeof state.todos)
      todos.splice(todos.indexOf(todo), 1)
    },
    UPDATE_TODO (state, todo) {
      // nothing here
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
        .then(r => {
          // console.log(r)
          const body = r.data
          commit('ADD_TODO', body)
        })
        .catch(error => {
          console.log(error)
        })
    },
    removeTodo ({ commit }, todo) {
      // console.log('before remove func in api', todo)
      axios
        .delete(`${API}/todos/${todo.id}`)
        .then(r => {
          commit('REMOVE_TODO', todo)
        })
    },
    doneTodo ({ commit }, updatedTodo) {
      axios
        .patch(`${API}/todos/${updatedTodo.id}`, updatedTodo)
        // .then(r => {
        //   commit('UPDATE_TODO', updatedTodo)
        // })
    }
  }

})

export default store
