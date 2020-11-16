import Vue from 'vue'
import Router from 'vue-router'
import layouts from '@/page/layouts' // 直属下线代理查询
import ArticleList from '@/page/Article/list' // 直属下线代理查询
import ArticleDetails from '@/page/Article/details' // 直属下线代理查询
import one from '@/components/one' // 直属下线代理查询
import two from '@/components/two' // 直属下线代理设置
import login from '@/components/login' // 直属下线代理设置
import error from '@/components/404' // 直属下线代理设置
import form from '@/components/form' // 直属下线代理设置
Vue.use(Router)
const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: layouts
    },
    {
      path: '/layouts',
      name: 'layouts',
      component:layouts,
      children:[
        {
          path: '/article/list',
          name: 'ArticlList',
          meta: {
            roles:['user']//表示只有user的权限才能够访问这个界面
          },
          component:ArticleList
        },
        {
          path: '/article/details',
          name: 'form',
          meta: {
            roles:['user']//表示只有user的权限才能够访问这个界面
          },
          component:ArticleDetails
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
    },
    {
      path: '/404',
      name: 'err',
      component: error
    }
  ]
})
export default router;//我们把静态的路由表导出去