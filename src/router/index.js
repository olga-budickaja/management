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

// import Vue from 'vue'
// import VueRouter from 'vue-router'
// import i18n from "@/i18n";
//
// Vue.use(VueRouter)
//
// function load(component) {
//   return () => import(`../views/${component}.vue`)
// }
//
// const routes = [
//   {
//     path: '/:locale',
//     component: {
//       template: "<router-view></router-view>"
//     },
//     beforeEnter(to, from, next) {
//       const locale = to.params.locale
//       let arr = []
//       const supported_locales = [...arr, process.env.VUE_APP_I18N_LOCALE, process.env.VUE_APP_I18N_FALLBACK_LOCALE]
//       console.log(next('en'))
//
//       if (supported_locales.includes(locale)) return next('en')
//
//       if (i18n.locale !== locale) {
//         i18n.locale = locale;
//       }
//
//       return next()
//     },
//     children: [
//       {
//         path: '',
//         name: 'home',
//         meta: {layout: 'main'},
//         component: load('HomeView')
//       },
//       {
//         path: '/form-create-user',
//         name: 'form-create-user',
//         meta: {layout: 'form'},
//         component: load('FormCreateUse')
//       },
//       {
//         path: '/checkbox-create-user',
//         name: 'checkbox-create-user',
//         meta: {layout: 'form'},
//         component: load('CheckboxCreateUser')
//       },
//       {
//         path: '/users-list',
//         name: 'users-list-page',
//         meta: {layout: 'bars'},
//         component: load('UsersListPage')
//       },
//       {
//         path: '/users/:id',
//         name: 'user-page',
//         meta: {layout: 'main'},
//         component: load('UserPage')
//       },
//       {
//         path: '*',
//         redirect() {
//           return process.env.VUE_APP_I18N_LOCALE
//         }
//       }
//     ]
//   },
//
// ]
//
// const router = new VueRouter({
//   mode: 'history',
//   base: process.env.BASE_URL,
//   routes
// })
//
// export default router