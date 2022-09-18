<template>
  <h1>Counter - Vuex</h1>
  <h2>Direct Access: {{ $store.state.count }}</h2>
  <h2>Computed: {{ countComputed }}</h2>

  <button @click="increment" >Increment +1</button>
  <button @click="incrementBy" >Increment +5</button>
  <button @click="randomInt" :disabled="isLoading" >Increment Random</button>
  <!-- <button @click="incrementRandomInt" >Increment Random</button> -->

  <h2>MapState: {{ count }}</h2>
  <h2>MapState: {{ lastMutation }}</h2>

</template>

<script>

import { mapState, mapActions } from 'vuex'

export default {

  computed: {
    countComputed() {
      return this.$store.state.count
    },
    ...mapState(['count']),
    ...mapState(['isLoading']),
    ...mapState({
      counter: state => state.count,
      lastMutation: state => state.lastMutation
    })
  },
  methods:{
    increment() {
      this.$store.commit('increment')
    },
    incrementBy() {
      this.$store.commit('incrementBy', 5)
    },
    ...mapActions({
      randomInt: 'incrementRandomInt'
    })
    // ...mapActions(['incrementRandomInt'])
    // incrementRandom() {
    //   this.$store.dispatch('incrementRandomInt')
    // }
  }

}
</script>

<style>

</style>