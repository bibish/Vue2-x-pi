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
      // meta: { requiresAuth: true },
      children: [
        {
          path: 'todo',
          component: Todo
        },
        {
          path: 'etodo',
          component: Etodo,
          meta: { requiresAuth: true }
        },
        {
          path: 'signup',
          component: Signup
        }
      ]
    }
  ],
  mode: 'history'
})
router.beforeEach((to, from, next) => {
  const isUser = store.getters.isConnected
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  if (isUser === false && to.path !== '/signup') {
    next('/signup')
  } else if (requiresAuth && isUser === true) {
    next()
  } else {
    next()
  }
})
export default router
