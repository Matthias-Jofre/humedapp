import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import LogIn from '../views/LogIn.vue'
import RegistroPage from '../views/RegistroPage.vue'
import SpinerPage from '../views/SpinerPage.vue'

const routes: Array<RouteRecordRaw> = [
  // {
  //   path: '',
  //   redirect: '/folder/Inbox'
  // },
  {
    path: '',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'LogIn',
    component: LogIn
  },
  {
    path: '/registro',
    name: 'RegistroPage',
    component: RegistroPage
  },
  {
    path: '/loading',
    name: 'SpinerPage',
    component: SpinerPage
  },
  {
    path: '/folder/:id',
    component: () => import('../views/FolderPage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
