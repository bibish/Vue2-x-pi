<template>
  <div class="signup">
  <label>connect with your name</label>
  <input type="text" v-model="nameInput" placeHolder="jhonos doesos">
  <button @click="connect"> connect </button>
<br>
  <label>Or create user</label>
  <input type="text" v-model="nameInput" placeHolder="jhonos doesos">
  <button> create </button>
  </div>
</template>

<script>
export default {
  name: 'Signup',
  data () {
    return {
      nameInput: ''
    }
  },
  methods: {
    connect: function () {
      
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
