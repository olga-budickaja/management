import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    meta: {layout: 'main'},
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/form-create-user',
    name: 'form-create-user',
    meta: {layout: 'form'},
    component: () => import('../views/FormCreateUser.vue')
  },
  {
    path: '/checkbox-create-user',
    name: 'checkbox-create-user',
    meta: {layout: 'form'},
    component: () => import('../views/CheckboxCreateUser.vue')
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
