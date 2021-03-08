import Vue from 'vue'
import Router from 'vue-router'
import Accueil from '@/components/accueil'
import About from '@/components/about'
import Acadenum from '@/components/acadenum'
import Mentions from '@/components/mentions'
import Portfolio from '@/components/portfolio'
import ProjetS1 from '@/components/projets1'
import Topspot from '@/components/topspot'


Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'accueil', component: Accueil },
    { path: '/about', name: 'about', component: About },
    { path: '/acadenum', name: 'acadenum', component: Acadenum },
    { path: '/mentions', name: 'mentions', component: Mentions },
    { path: '/portfolio', name: 'portfolio', component: Portfolio },
    { path: '/projets1', name: 'projets1', component: ProjetS1 },
    { path: '/topspot', name: 'topspot', component: Topspot },

  ]
})
