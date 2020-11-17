import Vue from 'vue'
import Router from 'vue-router'
import layouts from '@/page/layouts' // 直属下线代理查询
import ArticleTextList from '@/page/ArticleText/list' // 直属下线代理查询
import ArticleTextDetails from '@/page/ArticleText/details' // 直属下线代理查询
import CircleList from '@/page/circle/list'
import CircleDeails from '@/page/circle/details'
import UserList from '@/page/User/list'
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
          path: '/user/list',
          name: 'UserList',
          component:UserList
        },
        {
          path: '/ArticleText/list',
          name: '营销文章',
          component:ArticleTextList
        },
        {
          path: '/article/details',
          name: '创建营销文章',
          component:ArticleTextDetails
        },
        // ArticleVideo
        {
          path: '/articleVideo/list',
          name: '营销视频',
          component:ArticleVideoList
        },
        {
          path: '/articleVideo/details',
          name: '创建营销视频',
          component:ArticleVideoDetails
        },
        {
          path: '/circle/list',
          name: '圈子列表',
          component:CircleList
        },
        {
          path: '/circle/details',
          name: '创建圈子',
          component:CircleDeails
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