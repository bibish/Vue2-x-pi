<template>
  <div class="user">
    <img v-bind:src="userData.userPic" >
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'User',
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters({
      userData: 'userData'
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.user{
  border:1px solid purple;
  width:95%;
  margin:10px auto
}
.user img {
  border-radius:50%;
  width:150px;
}
</style>
