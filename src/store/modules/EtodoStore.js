import { firestore } from './../../firebase'

const state = {
  todolist: [],
  status: ''
}
const getters = {
  getTodolist: state => {
    return state.todolist
  }
}
const mutations = {
  SET_TODOLIST: function (state, data) {
    state.todolist = []
    for (const todo of data) {
      state.todolist.push(todo)
    }
    state.status = 'done'
  },
  DB_ERROR: function (state, args) {
    state.status = 'error try again '
  },
  DB_PENDING: function (state, args) {
    state.status = 'writting in db'
  }
}

const actions = {
  /**
   * get all todo from my user document in the DB
   */
  getETodos: function ({ commit, rootGetters }) {
    commit('DB_PENDING')
    const id = rootGetters.docId
    const ref = firestore.collection('users').doc(id)
    ref.onSnapshot(r => {
      const data = r.data().todolist
      console.log(r.data(), 'data from firestore')
      if (data !== undefined) {
        // console.log(data)
        commit('SET_TODOLIST', data)
      }
    })
  },
  /**
   * Overwrite the todolist array in my user document with the new / less todo
   */
  addETodo: function ({commit, store, rootGetters, state}, args) {
    // send status to state
    commit('DB_PENDING')
    const todolist = state.todolist
    todolist.push(args)
    // get doc id from the auth module to know where push data
    const id = rootGetters.docId
    const ref = firestore.collection('users').doc(id)
    ref.set({todolist}, {merge: true}).then(r => {
      commit('SET_TODOLIST', todolist)
    }).catch(r => {
      // catch error and send the array nop updated
      commit('DB_ERROR', todolist)
      console.log(r)
    })
  },
  /**
   * Overwrite the todolist array in my user document with the new / less todo
   */
  removeETodo: function ({commit, store, rootGetters}, args) {
    // send status to state
    commit('DB_PENDING')
    console.log(args, 'args in remove')
    const todolist = state.todolist
    const index = todolist.indexOf(args)
    todolist.splice(index, 1)
    // get doc id from another module in store
    const id = rootGetters.docId
    const ref = firestore.collection('users').doc(id)
    ref.set({todolist}, {merge: true}).then(r => {
      commit('SET_TODOLIST', todolist)
    }).catch(r => {
      // catch error and send the array nop updated
      commit('DB_ERROR', todolist)
      console.log(r)
    })
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
