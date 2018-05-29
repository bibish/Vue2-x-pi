<template>
  <div class="todo">
  <h3>todoList</h3>
  <input placeholder="new todo" type="text" v-model="newDo.title">
  <Button v-on:click="sendTodo">Add lodo</Button>
  <ul>
    <li :key="item.id" v-for="item in todoList" v-bind:class="[item.done ?  'done' : 'todoN']" class="list">
    <span>{{item.title}}</span>
    <i class="material-icons" v-if="!item.done" v-on:click="deleteTodo(item)">clear</i>
    <i class="material-icons" v-if="!item.done">done</i>
    </li>
  </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Todo',
  data () {
    return {
      newDo: {
        title: '',
        done: false
      }
    }
  },
  methods: {
    sendTodo: function () {
      if (this.$data.newDo.title.length > 0) {
        this.$store.dispatch('addTodo', this.$data.newDo)
      }
    },
    deleteTodo: function (todo) {
      console.log('remove this',todo)
      this.$store.dispatch('removeTodo', todo)
    }
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
i{
  vertical-align:bottom;
  float:right;
}
.list{
  text-align:left;
  clear:both
}
.list span{
  padding-left:10px;
}
.todoN:nth-child(even){
  background-color:#efefef;

}
.todoN:nth-child(odd){
  background-color:#efe;

}
.done{
  background-color: #42b983
}

</style>
