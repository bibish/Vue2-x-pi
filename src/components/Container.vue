<template>
  <div >
    <div v-if="pending == 'success'">
      <div class="container" >
      <Menu></Menu>
      <h1>Welcome there <span v-if="isUser">mr {{user.name}}</span></h1>
      <router-view></router-view>
    </div>
    </div>
    <div v-else class="lds-ripple"><div></div><div></div></div>
  </div>
</template>

<script>
import Menu from './Menu'
import Todo from './layout/Todo'
import Etodo from './layout/Etodo'
import { mapGetters } from 'vuex'
export default {
  name: 'Container',
  components: { Todo, Menu, Etodo },
  data () {
    return {
      data: false
    }
  },
  computed: {
    ...mapGetters({
      user: 'userData',
      pending: 'stateCo',
      isUser: 'isConnected'
    })
  },
  created () {
    this.$store.dispatch('isAlreadyConnected')
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.container{
 display:flex;
 width:100%;
 flex-flow:row;
 flex-wrap:wrap;
 justify-content:space-between;
 align-items: flex-start;
align-content: flex-start;
border:1px solid red
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
  padding:5px 0;
}
a {
  color: #42b983;
}
.lds-ripple {
    position: relative;
    width: 64px;
    height: 64px;
    margin: 0 auto;
}
.lds-ripple div {
  position: absolute;
  border: 4px solid rgb(18, 218, 151);
  opacity: 1;
  border-radius: 50%;
  animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
}
.lds-ripple div:nth-child(2) {
  animation-delay: -0.5s;
}
@keyframes lds-ripple {
  0% {
    top: 28px;
    left: 28px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: -1px;
    left: -1px;
    width: 58px;
    height: 58px;
    opacity: 0;
  }
}
</style>
