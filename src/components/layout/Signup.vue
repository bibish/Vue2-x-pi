<template>
  <div class="signup">
    <h1>connect here for more fun</h1>
     <button @click="fireGoogleAuth">Google</button>
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
  methods: {
    fireGoogleAuth: function () {
      this.$store.dispatch('googleAuth').then((r) => {
        this.$router.push('/')
        this.$store.dispatch('authValid', r)
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
  text-align:center;
}
button{
  background: orangered;
    padding: 12px;
    color: #fff;
    font-weight: bold;
    font-size: 15px;
    text-align: center;
    border-radius: 8px;
    /* color: black; */
    margin: 0 auto;
}
</style>
