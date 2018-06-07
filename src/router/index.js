import Vue from 'vue'
import Router from 'vue-router'
// import store from '../store/storeindex.js'
import Container from '@/components/Container'
import Todo from '@/components/layout/Todo'
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
          path: 'signup',
          component: Signup
        }
      ]
    }
  ],
  mode: 'history'
})
// outer.beforeEach((to, from, next) => {
// console.log('mais bordel')
// if (to.matched.some(record => record.meta.requiresAuth) && !store.getters.isConnected) {
//   if (!store.getters.isConnected) {
//     next({})
//   } else {
//     next()
//   }
// } else {
//   next() // make sure to always call next()!
// }
// })
export default router
