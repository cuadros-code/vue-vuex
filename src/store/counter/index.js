import state from './state'
import * as mutations from './mutation'
import * as actions from './actions'
import * as getters from './getters'

export const counterStore = {
  
  namespaced: true,

  // Estado modulo
  state,

  // No pueden ser Asincronas
  mutations,

  // Pueden ser Asincronas
  actions,

  getters,
}