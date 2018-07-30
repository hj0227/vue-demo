import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/Home.vue'
import Production from '../pages/Production.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/production',
      name: 'production',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.


      // component: () => import(/* webpackChunkName: "about" */ './pages/Home.vue'),
      // component: () => import(/* webpackChunkName: "about" */ './pages/Production.vue'),

      component: Production
      
    }
  ]
})
