import Vue from 'vue'
import Router from 'vue-router'
//import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: Home
    // },
    // {
    //   path: '/about',
    //   name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
//      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
//    },
    {
      path: '/',
      name: 'intranet',
      component: () => import('./views/Intranet.vue')
    },
    {
      path: '/accueiladmin',
      name: 'accueiladmin',
      component: () => import('./views/AccueilAdmin.vue')
    },
    {
      path: '/accueilcommercial',
      name: 'accueilcommercial',
      component: () => import('./views/AccueilCommercial.vue')
    },
    {
      path: '/intranet/mesprospects',
      name: 'mesprospects',
      component: () => import('./views/MesProspects.vue')
    }
  ]
})
