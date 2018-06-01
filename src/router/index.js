import Vue from 'vue'
import Router from 'vue-router'
import Container from '@/components/Container'
import Todo from '@/components/layout/Todo'
import Signup from '@/components/layout/Signup'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Container,
      children: [
        {
          path: 'todo',
          component: Todo
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
