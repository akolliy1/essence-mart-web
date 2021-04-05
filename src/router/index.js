import Vue from 'vue'
import VueRouter from 'vue-router'
import config from '../config'
import ErrorPage from '../views/ErrorPages/ErrorPage'
import Webview from '../views/Webviews/Webview'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Webview',
    component: Webview
  },
  // {
  //   path: '/auths',
  //   name: 'auths',
  //   component: NewAuthLayout,
  //   meta: { onlyGuestUser: true },
  //   children: newAuthRoutes('auths')
  // },
  {
    path: '*',
    name: 'not-found',
    component: ErrorPage
  }
]

const router = new VueRouter({
  mode: 'history',
  base: config.client.url,
  routes
})


export default router
