import { firestore } from './../../firebase'

const state = {
  todolist: []
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
  }
}
const actions = {
  getETodos: function ({ commit, rootGetters }) {
    const id = rootGetters.docId
    const ref = firestore.collection('users').doc(id)
    ref.onSnapshot(r => {
      const data = r.data().todolist
      console.log(r.data())
      if (data !== undefined) {
        console.log(data)
        commit('SET_TODOLIST', data)
      }
    })
  },
  updateDbETodo: function ({commit, store, rootGetters}, todolist) {
    const id = rootGetters.docId
    const ref = firestore.collection('users').doc(id)
    console.log('add todo')
    ref.set({todolist}, {merge: true})

    commit('SET_TODOLIST', todolist)
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
