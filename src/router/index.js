import Vue from 'vue'
import Router from 'vue-router'
import layouts from '@/page/layouts' // 直属下线代理查询
// 营销文章
import ArticleTextList from '@/page/ArticleText/list' // 直属下线代理查询
import ArticleTextDetails from '@/page/ArticleText/details' // 直属下线代理查询
// 营销视频
import ArticleVideoList from '@/page/ArticleVideo/list' // 直属下线代理查询
import ArticleVideoDetails from '@/page/ArticleVideo/details' // 直属下线代理查询
import CircleList from '@/page/Circle/list'
import CircleDetails from '@/page/Circle/details'
// 用户
import UserList from '@/page/User/list'
// 保护机构
import OrganizationList from '@/page/Organization/list'
import OrganizationDetails from '@/page/Organization/details'
Vue.use(Router)
// 营销文章
let article = [
    // ArticleText 营销文章
    {
      path: '/articleText/list',
      name: '营销文章',
      component:ArticleTextList
    },
    {
      path: '/articleText/details/:id',
      name: '创建营销文章',
      component:ArticleTextDetails
    },
    // ArticleVideo 营销视频
    {
      path: '/articleVideo/list',
      name: '营销视频',
      component:ArticleVideoList
    },
    {
      path: '/articleVideo/details',
      name: '创建营销视频',
      component:ArticleVideoDetails
    }
],
circle = [
  // 圈子 Circle
  {
    path: '/circle/list',
    name: '圈子列表',
    component:CircleList
  },
  {
    path: '/circle/details',
    name: '创建圈子',
    component:CircleDetails
  },
],
Organization = [
  {
    path: '/organization/list',
    name: '保护机构列表',
    component:OrganizationList
  },
  {
    path: '/organization/details',
    name: '创建保护机构',
    component:OrganizationDetails
  }
],
userList = [
  {
    path: '/user/list',
    name: 'UserList',
    component:UserList
  }
];
const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: ArticleTextList,
      redirect:'/articleText/list',
    },
    {
      path: '/layouts',
      name: 'layouts',
      component:layouts,
      children:[
        // 用户列表
        ...userList,
        // 营销系列
        ...article,
        // 圈子
        ...circle,
        // 保护机构
        ...Organization
      ]
    }
  ]
})
export default router;//我们把静态的路由表导出去