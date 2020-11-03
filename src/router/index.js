import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import agencySearch from '@/components/agencySearch' // 直属下线代理查询
import agencySet from '@/components/agencySet' // 直属下线代理设置
Vue.use(Router)

export default new Router({
  mode: 'history',
  scrollBehavior: () => ({
  y: 0
  }),
  routes: [
  {
   // 主页
   path: '/',
   component: Home,
   name: '代理事物',
   iconCls: 'el-icon-message',
   children: [
      {
        path: '/agencySearch',
        component: agencySearch,
        name: '直属下线代理查询',
        hidden: true
      },
      {
      path: '/agencySet',
      component: agencySet,
      name: '直属下线代理设置'
      }
    ]
  },
  {
   // 主页
   path: '/',
   component: Home,
   name: '财务报表',
   iconCls: 'el-icon-menu',
   children: [
     {
    path: '/financialIncome',
    component: financialIncome,
    name: '财务收益数据报表',
    hidden: true
    }
    ]
  }]
 })