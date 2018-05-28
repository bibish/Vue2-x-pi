<template>
  <div class="todo">
  {{this.msg}}
  <ul>
    <li v-model="todoList" v-for="list in todoList">{{list.title}}</li>
  </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Todo',
  data () {
    return {
      msg: 'vue todo'
    }
  },
  mounted () {

  },
  computed: {
    ...mapGetters({
      todoList: 'getTodos'
    })
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
