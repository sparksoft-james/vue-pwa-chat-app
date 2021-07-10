import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    user: {
      loggedIn: false,
      data: null
    },
    currentTabs: 'all'
  },
  getters: {
    user (state) {
      return state.user
    },
    currentTabs (state) {
      return state.currentTabs
    }
  },
  mutations: {
    SET_LOGGED_IN (state, value) {
      state.user.loggedIn = value
    },
    SET_USER (state, data) {
      state.user.data = data
    },
    SET_CURRENT_PAGE (state, data) {
      state.currentTabs = data
    }
  },
  actions: {
    fetchUser ({ commit }, user) {
      commit('SET_LOGGED_IN', user !== null)
      if (user) {
        commit('SET_USER', {
          displayName: user.displayName,
          email: user.email,
          uid: user.uid,
          photoURL: user.photoURL
        })
      } else {
        commit('SET_USER', null)
      }
    },
    changeCurrentPage ({ commit }, value) {
      commit('SET_CURRENT_PAGE', value)
    }
  }
})
