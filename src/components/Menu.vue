<template>
  <div class="menu">
  <ul>
    <li><router-link to="/">Home</router-link></li>
    <li><router-link to="Todo">Todolist</router-link></li>
  </ul>
  </div>
</template>

<script>
export default {
  name: 'Menu',
  data () {
    return {
     
    }
  },
  mounted () {
    
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

</style>
