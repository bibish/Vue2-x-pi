<template>
  <div class="container">
    <h1>{{msg}}</h1>
    
    <Album ></Album>
    <Todo ></Todo>
    <Post ></Post>
  </div>
</template>

<script>
import Album from './layout/Album'
import Todo from './layout/Todo'
import Post from './layout/Post'
export default {
  name: 'Container',
  components: { Album, Todo, Post },
  data () {
    return {
      msg: 'container',
      data: false
    }
  },
  mounted () {
    this.$store.dispatch('loadTodos')
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.container{
 display:flex;
 width:100%;
 flex-flow:row;
 border:1px solid red;
 flex-wrap:wrap;
 justify-content:space-between;
}
h1, h2 {
  font-weight: normal;
  width:100%;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
