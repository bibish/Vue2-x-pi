const shuffle = {
  methods: {
    shuffle: arr => arr.sort(() => Math.random() - 0.5)
  }
}
export default shuffle
