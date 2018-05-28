<template>
  <div class="todo">
  {{this.msg}}
  <ul>
    <li v-for="list in todoList">{{list}}</li>
  </ul>
  </div>
</template>

<script>
export default {
  name: 'Todo',
  data () {
    return {
      msg: 'vue todo'
    }
  },
  mounted () {
   // this.getData()
  },
  computed: {
    todoList () {
      return this.$store.getters.getTodos
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.todo{
  width:30%;
  border:1px solid yellow;
}
</style>
