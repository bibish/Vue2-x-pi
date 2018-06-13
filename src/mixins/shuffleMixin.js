const shuffle = {
  methods: {
    // randomize array entry
    shuffle: arr => arr.sort(() => Math.random() - 0.5)
  }
  // TODO: add filter mixin and validator for each inputs
}
export default shuffle
