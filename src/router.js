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
    {
      path: '/',
      name: 'intranet',
      component: () => import('./views/Intranet.vue')
    },

//ADMIN
    {
      path: '/admin/commerciaux',
      name: 'commerciaux',
      component: () => import('./views/Commerciaux.vue')
    },
    {
      path: '/admin/commerciaux/:id',
      name: 'profilcommercial',
      component: () => import('./views/ProfilCommercial.vue')
    },

    {
      path: '/admin/prospects',
      name: 'prospects',
      component: () => import('./views/Prospects.vue')
    },
    {
      path: '/admin/prospects/:id',
      name: 'profilprospects',
      component: () => import('./views/ProfilProspect.vue')
    }








  ]
})
