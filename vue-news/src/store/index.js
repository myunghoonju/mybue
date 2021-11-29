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
        item: {},

    },
    getters: {
      fetchNews(state) {
        return state.news
      },
      fetchedAsk(state) {
          return state.asks
      },
      fetchedJobs(state) {
        return state.jobs
      },
      fetchedItem(state) {
          return state.item
      }
    },
    mutations,
    actions
})
