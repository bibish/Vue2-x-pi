const statePlugin = store => {
  // called when the store is initialized
  store.subscribe((mutation, state) => {
    console.log(mutation.type, 'plugin subrscibe')
  })
}
export default statePlugin
