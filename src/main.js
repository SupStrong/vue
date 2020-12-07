// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from './store/index'
import VueCookies from 'vue-cookies'
import echarts from 'echarts'
import axios from 'axios'
import VueAxios from 'vue-axios'
import {post,fetch,patch,put,del} from './utils/http'
Vue.use(VueAxios,axios);
//定义全局变量
Vue.use(Element, { size: 'small' })
Vue.use(VueCookies)

Vue.prototype.$post=post;
Vue.prototype.$fetch=fetch;
Vue.prototype.$patch=patch;
Vue.prototype.$put=put;
Vue.prototype.$del=del;

Vue.prototype.$echarts = echarts
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
