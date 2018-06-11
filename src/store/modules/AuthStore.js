import {
  firebase,
  firestore
} from './../../firebase'
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
      firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(data => {
        const userData = {
          name: data.user.displayName,
          userId: data.user.uid
        }
        const refs = firestore.collection('users')
        // .where('userId', '==', userData.userId)
        refs.where('userId', '==', userData.userId)
          .get().then(querySnapshot => {
            userData.dbId = querySnapshot.docs[0].id
            if (querySnapshot.empty === true) {
              console.log('create user')
              refs.doc().set(userData)
              commit('AUTH_SUCCESS', userData)
              resolve(data)
              // add users
            } else {
              // just commit
              commit('AUTH_SUCCESS', userData)
              resolve(data)
            }
          }).catch(function (error) {
            console.log('Error getting documents: ', error)
          })
      }).catch(function (error) {
        console.log(error)
        const {
          errorCaptured
        } = error
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
