import Vue from 'vue'
import Router from 'vue-router'
import layouts from '@/components/layouts' // 直属下线代理查询
import one from '@/components/one' // 直属下线代理查询
import two from '@/components/two' // 直属下线代理设置
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
   component: layouts,
   name: '代理事物',
   iconCls: 'el-icon-message',
   redirect:'/one',
   children: [
    {
      path: '/two',
      component: two,
      name: '财务收益数据报表',
      hidden: true
    },
    {
      path: '/one',
      component: one,
      name: '财务收益数据报表',
      hidden: true
    }
  ]
  }]
 })