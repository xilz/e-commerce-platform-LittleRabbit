import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import '@/styles/common.scss'
// 测试接口函数
import { getCategory } from './apis/testAPI'

import { useIntersectionObserver } from '@vueuse/core'
getCategory().then(res => {
  console.log(res);
})
const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

// 定义全局指令
app.directive('img-lazy', {
  mounted(el, binding) {
    // el 代表指令绑定的元素 img
    // bingding 表示指令表达式的值 url
    useIntersectionObserver(
      el,
      ([{ isIntersecting }]) => {
        console.log(isIntersecting)
        if(isIntersecting) {
          el.src = binding.value
        }
      },
    )
  }
})
