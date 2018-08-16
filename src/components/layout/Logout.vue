<template>
  <div class="logout">
     <a href="#" @click="fireGoogleAuth">logout</a>
  </div>
</template>

<script>
export default {
  name: 'Logout',
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
      this.$store.dispatch('logout').then((r) => {
        this.$router.push('/')
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.logout {
  padding: 8px;
}
.logout a{
  background:lightskyblue;
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
