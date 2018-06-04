<template>
  <div class="todo">
  <h3>todoList</h3>
  <input placeholder="new todo" type="text" v-model="newDo.title">
  <Button v-on:click="sendTodo">Add lodo</Button>
  <button v-on:click="armaguedon(todoList)">Armaguedon</button>
  <button v-on:click="shuffle(todoList)">shuffle</button>
  <ul>
    <li :key="item.id" v-for="item in todoList" v-bind:class="[item.done ?  'done' : 'todoN']" class="list">
    <span>{{item.title}}</span>
    <i class="material-icons"  v-on:click="deleteTodo(item)">clear</i>
    <i class="material-icons" v-if="!item.done" v-on:click="updateTodo(item)">done</i>
    </li>
  </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import shuffle from '../../mixins/shuffleMixin'
export default {
  name: 'Todo',
  mixins: [shuffle],
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
      // console.log('remove this', todo)
      this.$store.dispatch('removeTodo', todo)
    },
    armaguedon: function (todoList) {
      for (const todo of todoList) {
        this.deleteTodo(todo)
      }
    },
    updateTodo: function (todo) {
      todo.done = !todo.done
      this.$store.dispatch('updateTodo', todo)
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
  width:90%;
  border:1px solid yellow;
  margin:0 auto;
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
