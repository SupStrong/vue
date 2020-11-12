<template>
  <div>
    <form>
      账户：<input type="text" :model="user">
      密码：<input type="text" :model="pass">
      <button @click="updateR">修改权限</button>
      <input type="button" value="登录" @click="Login">
    </form>
  </div>
</template>

<script>
  import {router,dynamicRouter} from '../router/index' //获取路由配置文件里的两个路由表
  export default {
    name: "login",
    data(){
      return{
        user:'',
        pass:'',
        roles:'user'
      }
    },
    methods:{
      Login(){
    console.log(dynamicRouter);
        let dR = new Array(); //创建一个数组用来存储符合权限的路由
        for (let i=0;i<dynamicRouter.length;i++){ //第一层循环遍历动态路由表的每一个路由
          for (let j=0;j<dynamicRouter[i].meta.roles.length;j++){ //第二次循环遍历每一个路由里的roles设置的权限并和当前登录账号的权限比较
            if (dynamicRouter[i].meta.roles[j] == this.roles){//此处因为没有后台我就把权限写死在data里面了
              dR.push(dynamicRouter[i]); //符合条件的路由信息就放进数组里
            }
          }
        }
        this.$router.addRoutes(dR.concat([{ //动态添加符合条件的路由
          path: '*',
          redirect: '/404' //所有不匹配路径(*)都重定向到404
        }]));
        this.$router.push({path:'/one'}); //登录验证后跳转到主页home页面
      }
    },
    updateR(){
      if (this.roles === 'admin'){
        this.roles === 'user'
      } else{
        this.roles === 'admin'
      }
    }
  }
</script>

<style scoped>

</style>
