import { createRouter, createWebHistory } from 'vue-router'
// createRouter: 创建 router 实例对象
// createWebHistory：创建 history 模式的路由
import Login from '@/views/Login/index.vue'
import Layout from '@/views/Layout/index.vue'
import Home from '@/views/Home/index.vue'
import Catecory from '@/views/Category/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  // path 和 component 对应关系的位置
  routes: [
    {
      path:'/',
      component: Layout,
      children: [
        {
          path:'',
          component: Home
        },
        {
          path:'category',
          component: Catecory
        }
      ]
    },
    {
      path:'/login',
      component: Login
    },
  ],
})

export default router
