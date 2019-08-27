import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Test from '@/components/Test'
import Login from '@/components/Login'
import Dashboard from '@/components/Dashboard'
import Analytics from '@/components/Analytics'
import Report from '@/components/Report'
import Videos from '@/components/Videos'
import Photos from '@/components/Photos'
import Default from '@/components/Default'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Default',
      component: Default
    },
    {
      path: '/test',
      name: 'Test',
      component: Test
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/analytics',
      name: 'Analytics',
      component: Analytics
    }, {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/report',
      name: 'Report',
      component: Report
    },
    {
      path: '/photos',
      name: 'Photos',
      component: Photos
    },
    {
      path: '/videos',
      name: 'Videos',
      component: Videos
    }
  ]
})
