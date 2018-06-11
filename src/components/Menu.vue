<template>
  <div class="menu">
  <nav>
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="Todo">Todolist</router-link></li>
      <li><router-link to="Etodo">Etodolist</router-link></li>
    </ul>
  </nav>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Menu',
  data () {
    return {}
  },
  computed: {
    ...mapGetters({
      user: 'state'
    })
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul{
  display:inline-table;

}
ul li{
  display:inline-block;
  padding:0 5px;
}
.router-link-exact-active{
  font-weight:bold;
  padding:3px;
  border:1px solid ;
}

</style>
