// import axios from 'axios'
// const API = 'http://localhost:3000'
const state = {
  users: [],
  isUser: false
}
const getters = {
  Users: state => {
    return state
  }
}
const mutations = {
  SET_USER (state, user) {
    // state.users.push(user)
    state.isUser = true
  }
}

const actions = {
  connectUser: ({ commit }, user) => {
    return new Promise((resolve, reject) => {
      // axios
      //   .post(`${API}/users`, user)
      //   .then(resp => {
      //     commit('SET_USER', resp.data)
      //     resolve(resp)
      //   })
      //   .catch(err => {
      //     reject(err)
      //   })
      commit('SET_USER')
    })
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
