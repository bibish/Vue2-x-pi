<template>
  <div >
    <div >
      <div class="container" v-if=" (pending !== null) && (pending === 'success') || (pending === 'error')" >
      <Menu></Menu>
      <h1>Welcome there <span v-if="isUser">mr {{user.name}}</span></h1>
      <div id="parent">
      <transition :name="transitionName">
        <router-view class="child-view"></router-view>
      </transition>
      </div>
    </div>

    <div v-else class="lds-ripple"><div></div><div></div></div>
    </div>
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
      transitionName: 'slide-left'
    }
  },
  beforeRouteUpdate (to, from, next) {
    const toDepth = to.path.split('/').length
    const fromDepth = from.path.split('/').length
    this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
    next()
  },
  computed: {
    ...mapGetters({
      user: 'userData',
      pending: 'stateCo',
      isUser: 'isConnected'
    })
  },
  async mounted () {
    this.$store.dispatch('isAlreadyConnected')
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.container{
min-height: 100vh;
width:100%;
border:1px solid red
}
#parent{
margin: 10px 0;
position: relative;
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
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s ease;
}
.fade-enter, .fade-leave-active {
  opacity: 0
}
.child-view {
  position:absolute;
  left: 0;
  right: 0;
  top: 20%;
  transition: all 0.3s ease-in-out;
}
.slide-left-enter, .slide-right-leave-active {
  opacity: 0;
  -webkit-transform: translate(30px, 0);
  transform: translate(30px, 0);
}
.slide-left-leave-active, .slide-right-enter {
  opacity: 0;
  -webkit-transform: translate(-30px, 0);
  transform: translate(-30px, 0);
}
</style>
