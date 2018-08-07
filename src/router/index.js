import Vue from 'vue'
import Router from 'vue-router'
import store from '../store/storeIndex'
import Container from '@/components/Container'
import Todo from '@/components/layout/Todo'
import Etodo from '@/components/layout/Etodo'
import Signup from '@/components/layout/Signup'
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
          path: 'etodo',
          component: Etodo
        }
      ]
    },
    {
      path: '/signup',
      component: Signup
    }
  ],
  mode: 'history'
})

// TODO: put guards in a specific file to make the router folder easier

/**
 * Check before each route change if the route have an auth guard requiresAuth
 * Check if there is an user if the route need to be connected
 */
router.beforeEach((to, from, next) => {
  const isUser = store.getters.isConnected
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  if (requiresAuth && isUser === false) {
    next('/signup')
  } else if (isUser === true && to.path === '/signup') {
    next('/')
  } else {
    next()
  }
})
export default router
