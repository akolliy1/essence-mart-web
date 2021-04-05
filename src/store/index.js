import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

import services from './modules/services'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    services
  },
  plugins: [
    createPersistedState({
      storage: {
        getItem: key => sessionStorage.getItem(key),
        setItem: (key, value) => sessionStorage.setItem(key, value),
        removeItem: key => sessionStorage.removeItem(key)
      }
    }),
  ],
  mutations: {
    setItems(state, { resource, items }) {
      state[resource].items = items
    },
    setActiveItems(state, { resource, activeItems }) {
      state[resource].activeItems = activeItems
    },
    setActiveItem(state, { resource, activeItem }) {
      state[resource].activeItem = activeItem
    },
    setItem(state, { resource, item }) {
      state[resource].item = item
    },
    addItemToArray(state, { item, index, resource }) {
      Vue.set(state[resource].items, index, item)
    }
  }
})
