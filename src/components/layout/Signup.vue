<template>
  <div class="signup">
  <label>connect Page</label>
  <input type="text" required v-model="username" placeHolder="jhonos doesos">
  <input type="password" required v-model="password" placeHolder="xxxx">
  <button type="submit"> login </button>
  </div>
</template>

<script>
export default {
  name: 'Signup',
  data () {
    return {
      username: null,
      password: null
    }
  },
  methods: {
    connect: function () {
      const { username, password } = this
      this.$store.dispatch(AUTH_REQUEST, { username, password }).then(() => {
        this.$router.push('/')
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.signup{
  width:100%;
  margin: 0 auto;
  text-align:left;
}
</style>
