<template>
  <div class="container">
    <Menu></Menu>
    <h1>Welcome there <span v-if="isUser">mr {{user.name}}</span></h1>
    <toast position="ne"></toast>
    <router-view></router-view>
  </div>
</template>

<script>
import Menu from './Menu'
import Todo from './layout/Todo'
import Etodo from './layout/Etodo'
import { Toast, ADD_TOAST_MESSAGE } from 'vuex-toast'
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'Container',
  components: { Todo, Menu, Etodo, Toast },
  data () {
    return {
      data: false
    }
  },
  mounted () {
    this.$store.dispatch('loadTodos')
    // console.log(this.$store.getters.Users)
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      if (vm.$store.getters.stateCo !== 'success') {
        next({path: '/signup'})
      }
    })
  },
  computed: {
    ...mapGetters({
      user: 'userData',
      pending: 'stateCo',
      isUser: 'isConnected'
    })
  },
  // TODO: create plugin to send notification for each muation state
  methods: {
    ...mapActions({
      addToast: ADD_TOAST_MESSAGE
    }),
    sendNotification(text) {
      console.log('pending trigger')
    }
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
 align-items: flex-start;
align-content: flex-start;
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
</style>
