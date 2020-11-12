import Vue from 'vue'
import Router from 'vue-router'
import layouts from '@/components/layouts' // 直属下线代理查询
import one from '@/components/one' // 直属下线代理查询
import two from '@/components/two' // 直属下线代理设置
import login from '@/components/login' // 直属下线代理设置
import error from '@/components/404' // 直属下线代理设置
Vue.use(Router)
const router = new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/404',
      name: 'err',
      component: error
    }
  ]
})
export default router;//我们把静态的路由表导出去

//我们使用meta标签来定义里面的权限
export const layoutsRouter = [
  {
    path: '/layouts',
    name: 'layouts',
    component:layouts,
    children:[]
  },
]
export const dynamicRouter = [
    {
      path: '/one',
      name: 'one',
      meta: {
        roles:['user']//表示只有user的权限才能够访问这个界面
      },
      component:one
    },
    {
      path: '/two',
      name: 'two',
      meta: {
        roles:['admin']
      },
      component:two
    }
]