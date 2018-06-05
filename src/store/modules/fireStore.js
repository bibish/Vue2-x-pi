import firebase from 'firebase'

const provider = new firebase.auth.GoogleAuthProvider()

const state = {
  user: null,
  todos: [],
  stateCo: null,
  isConnected: false
}
const getters = {
  todos: state => {
    return state.todos
  },
  stateCo: state => {
    return state.stateCo
  }
}

const mutations = {
  AUTH_PENDING (data) {
    this.state.stateCo = 'pending'
  },
  AUTH_SUCCESS (data) {
    this.state.stateCo = 'success'
    this.state.isconnected = true
    this.state.user.name = data.user.displayName
    this.state.user.userId = data.user.uid
  },
  AUTH_ERROR (data) {
    this.state.stateCo = 'error'
  }
}

const actions = {
  googleAuth ({ commit }) {
    commit('AUTH_PENDING')
    return new Promise((resolve, reject) => {
      firebase.auth().signInWithPopup(provider).then(function (result) {
        commit('AUTH_SUCCESS', result)
        console.log(result)
        resolve(result)
      }).catch(function (error) {
        const { errorCaptured } = error
        reject(errorCaptured)
        commit('AUTH_ERROR')
      })
    })
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
