import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: JSON.parse(window.localStorage.getItem('user') || 'null')
  },

  mutations: {
    setUser(state, key) {
      state.user = JSON.parse(key)
      window.localStorage.setItem('user', key)
    }
  },

  actions: {},

  modules: {}
})
