import { createStore } from 'vuex'
import { generateRandomInt } from '@/helpers/generateRandomInt'

export default createStore({
  
  state: {
    count: 0,
    lastMutation: 'none',
    isLoading: false
  },
  // No pueden ser Asincronas
  mutations: {
    increment( state ) {
      state.count++;
      state.lastMutation = 'increment'
    },
    incrementBy( state, value ) {
      state.count += value;
      state.lastMutation = 'incrementBy'
    }
  },
  actions: {
    async incrementRandomInt( ctx ) {
      try {
        const numberRnt = await generateRandomInt()
        ctx.commit('incrementBy', numberRnt)
      } catch (error) {
        console.log({error});
      } finally {
        console.log("Final");
      }
    }
  }

})