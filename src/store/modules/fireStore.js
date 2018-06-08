import { firebase, firestore } from './../../firebase'

const state = {
  isConnected: false,
  userData: null,
  stateCo: null
}
const getters = {
  stateCo: state => {
    return state.stateCo
  },
  userData: state => {
    return state.userData
  },
  isConnected: state => {
    return state.isConnected
  }
}

const mutations = {
  AUTH_PENDING (data) {
    this.state.stateCo = 'pending'
  },
  AUTH_SUCCESS (state, payload) {
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
      firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL).then(() => {
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
    })
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
