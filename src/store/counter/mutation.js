
export function increment( state ) {
  state.count++;
  state.lastMutation = 'increment'
}

export function incrementBy( state, value ) {
  state.count += value;
  state.lastMutation = 'incrementBy'
}

export function setLoading( state, isLoading ) {
  state.isLoading = isLoading
}