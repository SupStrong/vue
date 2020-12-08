<template>
  <div id="app">
    <keep-alive> 
       <!-- 缓存组件，提高运行性能 -->
    <el-container>
      <el-aside width="200px">
        <menus></menus>
      </el-aside>
      <el-container class=" is-vertical">
        <headers></headers>
          <router-view></router-view>
       <!-- <foot></foot> -->
      </el-container>
    </el-container>
    </keep-alive>
  </div>
</template>

<script>
import Vue from 'vue'
import { Button } from 'element-ui'
import App from './App.vue'
import headers from './components/assets/headers';
import foot from './components/assets/foot';
import menus from './components/assets/menus';
export default {
  name: 'App',
  components: {
    headers,
    foot,
    menus
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 0;
  height: 100%;
}
html,body{
  height: 100%;
  overflow: hidden;
  padding: 0;
  margin: 0;
}
</style>
