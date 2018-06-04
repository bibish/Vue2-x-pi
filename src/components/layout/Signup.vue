<template>
  <div class="signup">
  <label>What's your name</label>
  <input type="text" required v-model="username" placeHolder="jhonos doesos">
  <button @click="connect">GO</button>
   <label v-if ="error === true">
    minimum 3 letters
  </label>
  </div>
</template>

<script>
export default {
  name: 'Signup',
  data () {
    return {
      username: null,
      password: null,
      error:null
    }
  },
  methods: {
    connect: function () {
      const { username } = this
      if(username.length < 3){
        this.error = true
      }else{
        this.$store.dispatch('connectUser', { username }).then(() => {
                this.$router.push('/')
              })
      }
      
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
