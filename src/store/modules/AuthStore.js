import {
  firebase,
  firestore
} from './../../firebase'
const state = {
  isConnected: false,
  userData: {
    name: null,
    userId: null,
    docID: null,
    todolist: null,
    userPic: null
  },
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
  },
  docId: state => {
    return state.userData.docId
  }
}

const mutations = {
  AUTH_PENDING (state, data) {
    state.stateCo = 'pending'
  },
  AUTH_SUCCESS (state, payload) {
    state.stateCo = 'success'
    state.userData = payload
    state.isConnected = true
  },
  AUTH_ERROR (data) {
    state.stateCo = 'error'
  },
  UNAUTH_SUCCES (state) {
    state.userData = {}
    state.isConnected = false
  }
}

const actions = {
  isAlreadyConnected ({ commit, state }) {
    console.log('test')
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        console.log(user)
        const userData = {
          name: user.displayName,
          userId: user.uid,
          userPic: user.photoURL,
          todolist: []
        }
        const refs = firestore.collection('users')
        refs.where('userId', '==', userData.userId)
          .get().then(querySnapshot => {
            userData.docId = querySnapshot.docs[0].id
          })
          .then(r => {
            commit('AUTH_SUCCESS', userData)
          })
      } else {
        console.log('lol nop')
      }
    })
  },
  logout ({ commit }) {
    firebase.auth().signOut().then(r => {
      console.log('disconnected')
      commit('UNAUTH_SUCCES')
    }).catch(er => {
      console.log('error during deco', er)
    })
  },
  googleAuth ({ commit, state }, payload) {
    commit('AUTH_PENDING')
    return new Promise((resolve, reject) => {
      firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider())
        .then(data => {
          const userData = {
            name: data.user.displayName,
            userId: data.user.uid,
            userPic: data.user.photoURL,
            todolist: []
          }
          const refs = firestore.collection('users')
          const ref = refs.doc()
          // check if my user exist in db
          refs.where('userId', '==', userData.userId)
            .get().then(querySnapshot => {
              if (querySnapshot.empty === true) {
                // check if there is user in DB if not, get the documentID and set a new user
                userData.docId = ref.id
                ref.set(userData)
                commit('AUTH_SUCCESS', userData)
                resolve(data)
              } else {
                // if there is user just keep the documentID and resolve promise
                userData.docId = querySnapshot.docs[0].id
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
