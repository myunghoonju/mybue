import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        news: [],
        jobs: [],
        asks: [],
        user: {},
        item: [],

    },
    getters: {
      fetchedAsk(state) {
          return state.asks
      },
      fetchedItem(state) {
          return state.item
      }
    },
    mutations,
    actions
})