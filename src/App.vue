<template>
  <div id="app">
    <keep-alive> 
       <!-- 缓存组件，提高运行性能 -->
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import Vue from 'vue'
import { Button } from 'element-ui'
import App from './App.vue'
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0;
}
</style>
