import axios from 'axios'
const API = 'http://localhost:3000'

const state = {
  todos: [{
    'id': '',
    'userId': '',
    'title': '',
    'done': '',
    'err': ''
  }]
}

const getters = {
  getTodos: state => {
    return state.todos
  }
}

const mutations = {
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
  ERROR_CALL (state, err) {
    state.todos.err = `error with API, ${err.response.status}`
  }
}

const actions = {
  loadTodos ({ commit, state }) {
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
  updateTodo ({ commit }, updatedTodo) {
    axios
      .patch(`${API}/todos/${updatedTodo.id}`, updatedTodo)
  }
}

export default {
  state,
  actions,
  getters,
  mutations
}
