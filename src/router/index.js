import Vue from 'vue'
import Router from 'vue-router'
import store from '../store/storeIndex'
import Container from '@/components/Container'
import Todo from '@/components/layout/Todo'
import Etodo from '@/components/layout/Etodo'
import Signup from '@/components/layout/Signup'
Vue.use(Router)

const isNoUser = (to, from, next) => {
  if (store.getters.isConnected === false) {
    next()
    return
  }
  next('/')
}

const ifUser = (to, from, next) => {
  if (store.getters.isConnected === true) {
    next()
    return
  }
  next('/signup')
}

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Container,
      // meta: { requiresAuth: true },
      children: [
        {
          path: 'todo',
          component: Todo
        },
        {
          path: 'etodo',
          component: Etodo,
          beforeEnter: ifUser
        },
        {
          path: 'signup',
          component: Signup,
          beforeEnter: isNoUser
        }
      ]
    }
  ],
  mode: 'history'
})

export default router
