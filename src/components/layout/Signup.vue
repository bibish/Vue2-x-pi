<template>
  <div class="signup">
     <a href="#" @click="fireGoogleAuth">SignIn</a>
  </div>
</template>

<script>
export default {
  name: 'Signup',
  data () {
    return {
      username: null,
      password: null,
      error: null
    }
  },
  // TODO: remove the promise and redirect by getter state
  methods: {
    fireGoogleAuth: function () {
      this.$store.dispatch('googleAuth').then((r) => {
        this.$router.push('/')
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.signup {
  padding: 8px;
}
.signup a{
  background: orangered;
  display: block;
    padding: 8px;
    color: #fff;
    font-weight: bold;
    font-size: 15px;
    text-align: center;
    border-radius: 8px;
    /* color: black; */
    margin: 0 auto;
}
</style>
