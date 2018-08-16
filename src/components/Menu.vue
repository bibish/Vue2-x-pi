<template>
  <div class="menu">
  <nav>
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li v-if="isUser"><router-link to="Todo">Todolist</router-link></li>
      <li v-if="isUser"><router-link to="Etodo">Etodolist</router-link></li>
      <li v-if="isUser"><router-link to="Profil">Profil</router-link></li>
    </ul>
    <Signup v-if="isUser !== true" />
    <Logout v-else />
  </nav>
  </div>
</template>

<script>
import Signup from './layout/Signup'
import Logout from './layout/Logout'
import { mapGetters } from 'vuex'
export default {
  name: 'Menu',
  components: { Signup, Logout },
  data () {
    return {}
  },
  computed: {
    ...mapGetters({
      isUser: 'isConnected'
    })
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.menu{
  width:100%;
  }

nav {
  display: flex;
  flex-direction: row;
  justify-content: space-between
}
ul{
  margin: 0;
  display:flex;
  flex-direction: row;
  height: 100%;

}
ul li{
  margin:8px;
}
ul li:nth-last-child(){
  align-items: flex-end
}
.router-link-exact-active{
  font-weight:bold;
  padding:3px;
  border:1px solid ;
}

</style>
