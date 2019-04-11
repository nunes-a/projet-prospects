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
      path: '/admin',
      name: 'admin',
      component: () => import('./views/Admin.vue')
    },
    {
      path: '/admin/mescommerciaux',
      name: 'mescommerciaux',
      component: () => import('./views/MesCommerciaux.vue')
    },
    {
      path: '/admin/mescommerciaux/profil/:id',
      name: 'profilcommercial',
      component: () => import('./views/ProfilCommercial.vue')
    },
    {
      path: '/admin/mescommerciaux/inscription',
      name: 'inscriptioncommercial',
      component: () => import('./views/InscriptionCommercial.vue')
    },




    {
      path: '/commercial',
      name: 'commercial',
      component: () => import('./views/Commercial.vue')
    },



  ]
})
