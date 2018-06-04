import Vue from 'vue'
import Router from 'vue-router'
import Container from '@/components/Container'
import Todo from '@/components/layout/Todo'
import Post from '@/components/layout/Post'
import Signup from '@/components/layout/Signup'
import Test from '@/components/layout/Test'

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
