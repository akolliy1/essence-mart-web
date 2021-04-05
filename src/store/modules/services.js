import baseService from '@/services/api'

import { rejectError } from '@/helpers'

const baseUrl = 'services'

export default {
  namespaced: true,
  state: {
    items: [],
    item: {},
    activeItems: []
  },

  getters: {
    item(state) {
      return state.item
    },
    items(state) {
      return state.items
    }
  },

  actions: {
    fetchServices({ state, commit }, options = { reset: true }) {
      if (options.reset) {
        commit('setItems', { resource: 'services', items: [] }, { root: true })
      }
      return baseService
        .get(`${baseUrl}/index?`)
        .then(res => {
          const { data } = res.data
          commit('setItems', { resource: 'services', items: data }, { root: true })
          return state.items
        })
        .catch(err => rejectError(err))
    },
    createService(context, service) {
      return baseService
        .post(`${baseUrl}/create`, service)
        .then(res => res.data)
        .catch(err => rejectError(err))
    },
    updateService(context, service) {
      return baseService
        .patch(`${baseUrl}/${service._id}`, service)
        .then(res => res.data)
        .catch(err => rejectError(err))
    }
  }
}
