import { useIntersectionObserver } from '@vueuse/core'
// 定义懒加载插件
export const lazyPlugin = {
  install (app) {
    // 定义全局指令
    app.directive('img-lazy', {
      mounted(el, binding) {
        // el 代表指令绑定的元素 img
        // bingding 表示指令表达式的值 url
        const { stop } = useIntersectionObserver(
          el,
          ([{ isIntersecting }]) => {
            console.log(isIntersecting)
            if(isIntersecting) {
              el.src = binding.value
              stop()
            }
          },
        )
      }
    })
  }
}
// 把懒加载逻辑封装到这里，main.js只需注册
// 加了个stop方法，这样加载后就不会重复加载了
