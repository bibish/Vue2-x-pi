import { firebase, firestore } from './../../firebase'

console.log(firebase, firestore)
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
  AUTH_SUCCESS (state, payload) {
    console.log(payload, 'inside mutation')
    state.stateCo = 'success'
    state.userData = payload
    state.isConnected = true
  },
  AUTH_ERROR (data) {
    this.state.fireStore.stateCo = 'error'
  }
}

const actions = {
  googleAuth ({ commit, state }, payload) {
    commit('AUTH_PENDING')
    return new Promise((resolve, reject) => {
      firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(data => {
        const userData = {
          username: data.user.displayName,
          userId: data.user.uid
        }
        firestore.collection('users').where('userId', '==', userData.userId).get().then(snapshot => {
          snapshot.forEach(doc => {
            if (doc.exists === false) {
              firestore.collection('users').add(userData).then(() => {
                commit('AUTH_SUCCESS', userData)
                resolve(data)
              })
            } else {
              commit('AUTH_SUCCESS', userData)
              resolve(data)
            }
          })
        })
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
