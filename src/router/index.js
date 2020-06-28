import Vue from 'vue'
import VueRouter from 'vue-router'
import baseCase from '../components/subPro/baseCase.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: '/formCase',
    component: () => import(/* WebpackChunkName: 'form' */ '../components/subPro/formCase.vue')
  },
  {
    path: '/baseCase',
    component: baseCase
  },
  {
    path: '/noticeCase',
    component: () => import(/*WebpackChunkName: 'notice' */ '../components/subPro/noticeCase.vue')
  },
  {
    path: '/othersCase',
    component: () => import(/*WebpackChunkName: 'others' */ '../components/subPro/othersCase.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router