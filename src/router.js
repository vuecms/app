import Vue from 'vue'
import Router from 'vue-router'
import Roles from './views/roles/Roles.vue'

const Type = () => import(/* webpackChunkName: "type" */'./views/type/Type.vue')
const Plan = () => import(/* webpackChunkName: "plan" */'./views/plan/Plan.vue')
const Top = () => import(/* webpackChunkName: "top" */'./views/top/Top.vue')

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'roles',
      component: Roles
    },
    {
      path: '/about',
      name: 'Type',
      component: Type
    },
    {
      path: '/plan',
      name: 'plan',
      component: Plan
    },
    {
      path: '/top',
      name: 'top',
      component: Top
    }
  ]
})
