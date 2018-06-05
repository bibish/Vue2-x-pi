import firebase from 'firebase'

const provider = new firebase.auth.GoogleAuthProvider()

const state = {
  isConnected: false,
  userData: [],
  stateCo: null
}
const getters = {
  stateCo: state => {
    return state.stateCo
  }
}

const mutations = {
  AUTH_PENDING (data) {
    this.state.stateCo = 'pending'
  },
  AUTH_SUCCESS (data) {
    console.log(this.state)
    // this.state.fireStore.stateCo = 'success'
    // this.state.fireStore.isConnected = true
    // this.state.fireStore.userData.push(data)
  },
  AUTH_ERROR (data) {
    this.state.fireStore.stateCo = 'error'
  }
}

const actions = {
  googleAuth ({ commit }) {
    // commit('AUTH_PENDING')
    return new Promise((resolve, reject) => {
      firebase.auth().signInWithPopup(provider).then(function (result) {
        commit('AUTH_SUCCESS', result)
        // console.log(result)
        resolve(result)
      }).catch(function (error) {
        console.log(error)
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
