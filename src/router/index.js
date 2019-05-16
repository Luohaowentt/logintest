import Vue from 'vue'
import Router from 'vue-router'
import SignIn from '@/views/SignIn'
import SignUp from '@/views/SignUp'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/signin'
    },
    {
      path: '/signin',
      name: 'SignIn',
      component: SignIn
    },
    {
      path: '/signup',
      name: 'SignUp',
      component: SignUp
    }
  ]
})
