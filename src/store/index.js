import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sum: 0,
    lastTeam: '',
  },
  mutations: {
    incrementCounter(state) {
      state.sum++
    },
    updateSelectedTeamName(state, teamName) {
      state.lastTeam = teamName
    }
    }
  }
)