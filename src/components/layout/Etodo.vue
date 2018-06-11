<template>
  <div class="Etodo">
  <h3>EtodoList (this one is online and todos are stored on firestore)</h3>
  <input placeholder="new todo" type="text" v-model="newTodo">
  <Button @click="addTodo(newTodo)">Add lodo</Button>
  <button @click="shuffle(todoList)">shuffle</button>
  <ul>
    <li v-for="item in todoList"  class="list todoN">
    <span>{{item}}</span>
    <i class="material-icons" v-on:click="removeTodo(item)" >clear</i>
    </li>
  </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import shuffle from '../../mixins/shuffleMixin'
import { firebase, firestore } from './../../firebase'
export default {
  name: 'Etodo',
  mixins: [shuffle],
  data () {
    return {
      newTodo: null // string
    }
  },
  methods: {
    addTodo: function (todo) {
     this.todoList.push(todo)
     this.$store.dispatch('updateDbETodo', this.todoList)
    },
    removeTodo: function (todo) {
      console.log(todo)
      const index = this.todoList.indexOf(todo)
      this.todoList.splice(index,1)
      this.$store.dispatch('updateDbETodo', this.todoList)
    }
  },
  mounted () {
    this.$store.dispatch('getETodos')
    // console.log(this.$store.getters.Users)
  },
  computed: {
     ...mapGetters({
      todoList: 'getTodolist'
    })

  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.Etodo{
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
