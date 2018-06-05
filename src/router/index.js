import Vue from 'vue'
import Router from 'vue-router'
import store from '../store/storeindex.js'
import Container from '@/components/Container'
import Todo from '@/components/layout/Todo'
import Post from '@/components/layout/Post'
import Signup from '@/components/layout/Signup'
import Test from '@/components/layout/Test'

Vue.use(Router)
const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Container,
      meta: { requiresAuth: true },
      children: [
        {
          path: 'todo',
          component: Todo
        },
        {
          path: 'blog',
          component: Post
        },
        {
          path: 'signup',
          component: Signup
        },
        {
          path: 'onVerraPlusTard',
          component: Test
        }
      ]
    }
  ],
  mode: 'history'
})
router.beforeEach((to, from, next) => {
  console.log('mais bordel')
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.getters.isConnected) {
      next({})
    } else {
      next()
    }
  } else {
    next() // make sure to always call next()!
  }
})
export default router
