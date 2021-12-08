import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export const indexMap = [
  {
    path: '/',
    name: 'index',
    component: () => import('../pages/demo')
  }
]

export default new Router({
  routes: [ ...indexMap ]
})
