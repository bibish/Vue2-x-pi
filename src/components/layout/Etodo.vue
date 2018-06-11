<template>
  <div class="Etodo">
  <h3>EtodoList (this one is online)</h3>
  <input placeholder="new todo" type="text" v-model="newTodo">
  <Button @click="addTodo">Add lodo</Button>
  <button>Armaguedon</button>
  <button>shuffle</button>
  <ul>
    <li class="list">
    <span></span>
    <i class="material-icons" >clear</i>
    <i class="material-icons" >done</i>
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
      todolist: null, // array
      newTodo: null, // string
    }
  },
  methods: {
    addTodo: function () {
      console.log(this.$data.newTodo)
      // db.store todo
    },
    changeTodo: function () {
      // db.store state
    }
  },
  computed: {
    refs: function(){
      firestore.collection('users').where('userId', '==', this.$store.userData.userId)
    },
    getTodos: function (){ 
      // db.get all todo
    }

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
