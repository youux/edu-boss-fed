import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)

// 路由配置规则
const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
    children: [
      {
        path: '/role',
        name: 'role',
        component: () => import(/* webpackChunkName: "role" */ '@/pages/role/index.vue')
      },
      {
        path: '/advert-space',
        name: 'advert-space',
        component: () => import(/* webpackChunkName: "advertspace" */ '@/pages/advert-space/index.vue')
      },
      {
        path: '/advert',
        name: 'advert',
        component: () => import(/* webpackChunkName: "p-advert" */ '@/pages/advert/index.vue')
      },
      {
        path: '/course',
        name: 'course',
        component: () => import(/* webpackChunkName: "course" */ '@/pages/course/index.vue')
      },
      {
        path: '/menu-list',
        name: 'menu-list',
        component: () => import(/* webpackChunkName: "menu-list" */ '@/pages/menu-list/index.vue')
      },
      {
        path: '/resource',
        name: 'resource',
        component: () => import(/* webpackChunkName: "resource" */ '@/pages/resource/index.vue')
      },
      {
        path: '/user',
        name: 'user',
        component: () => import(/* webpackChunkName: "user" */ '@/pages/user/index.vue')
      }
    ]
  },
  {
    path: '*',
    name: 'not-fount',
    component: () => import(/* webpackChunkName: "not-fount" */ '@/views/not-fount.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '@/views/Login.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
