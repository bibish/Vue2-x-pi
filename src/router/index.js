import Vue from 'vue'
import Router from 'vue-router'
import store from '../store/storeindex.js'
import Container from '@/components/Container'
import Todo from '@/components/layout/Todo'
import Signup from '@/components/layout/Signup'
console.log('router', store)
Vue.use(Router)
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
          path: 'signup',
          component: Signup,
          meta: { requiresAuth: true }
        }
        // ,
        // {
        //   path: 'etodo',
        //   component: Etodo,
        //   meta: { requiresAuth: true }
        // }
      ]
    }
  ],
  mode: 'history'
})
router.beforeEach((to, from, next) => {
  console.log('plop')
  const isUser = store.getters.isConnected
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  if (isUser === false && to.path !== '/signup') {
    next('/signup')
  } else if (requiresAuth && isUser === true) {
    next('/')
  } else {
    next()
  }
})
export default router
