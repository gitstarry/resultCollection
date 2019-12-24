import Vue from 'vue'
import Router from 'vue-router'
import AppIndex from '@/components/home/AppIndex'
import Login from '@/components/Login'
import Home from "../components/Home";
import InputInfo from "../components/InputInfo";
import Information from "../components/Information";
import Register from "../components/Register";
import View from "../components/View";
Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/login'//重定向
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      // home页面并不需要被访问
      redirect: '/index',
      children: [
        {
          path: '/index',
          name: 'AppIndex',
          component: AppIndex,
          meta: {
            requireAuth: true
          }
        },
        {
          path: '/inputInfo',
          name: 'InputInfo',
          component: InputInfo,
          meta: {
            requireAuth: true
          }
        },
        {
          path:'/information',
          name:'Information',
          component:Information,
          meta: {
             requireAuth:true
          }
        },
        {
          path: '/register',
          name: 'Register',
          component: Register
        },
        {
          path:'/view',
          name:'View',
          component:View,
        },
      ]
    },
  ]
})
