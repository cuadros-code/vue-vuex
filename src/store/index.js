import { createStore } from 'vuex'
import { counterStore } from '@/store/counter'

export default createStore({
  modules: {
    counter: counterStore
  }
})


// import { createStore } from 'vuex'
// import { generateRandomInt } from '@/helpers/generateRandomInt'

// export default createStore({
  
//   state: {
//     count: 0,
//     lastMutation: 'none',
//     isLoading: false
//   },
//   // No pueden ser Asincronas
//   mutations: {
//     increment( state ) {
//       state.count++;
//       state.lastMutation = 'increment'
//     },
//     incrementBy( state, value ) {
//       state.count += value;
//       state.lastMutation = 'incrementBy'
//     },
//     setLoading( state, isLoading ) {
//       state.isLoading = isLoading
//     }
//   },
//   // Pueden ser Asincronas
//   actions: {
//     async incrementRandomInt( ctx ) {
//       ctx.commit('setLoading', true)
//       try {
//         const numberRnt = await generateRandomInt()
//         ctx.commit('incrementBy', numberRnt)
//       } catch (error) {
//         console.log({error});
//       } finally {
//         ctx.commit('setLoading', false)
//       }
//     }
//   },
//   getters: {
//     squareCount( state ){
//       return state.count * state.count
//     }
//   },
// })