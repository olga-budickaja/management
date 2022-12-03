
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
  {
    path: '/users-list',
    name: 'users-list-page',
    meta: {layout: 'bars'},
    component: () => import('../views/UsersListPage.vue')
  },
  {
    path: '/users/:id',
    name: 'user-page',
    meta: {layout: 'main'},
    component: () => import('../views/UserPage.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router