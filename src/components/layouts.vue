<template>
  <section class="container" style="float:left">
    <!-- 根据menuOpen的值来判断是否使用menu-open样式 -->
    <el-container>
      <el-aside width="200px">
        <menus></menus>
      </el-aside>
      <el-container class=" is-vertical">
        <headers></headers>
        <el-main>
          <router-view>
          </router-view>
        </el-main>
        <!-- <foot></foot> -->
      </el-container>
    </el-container>
    </section>
</template>

<script>
import headers from './assets/headers';
import foot from './assets/foot';
import menus from './assets/menus';
export default {
  name:'layouts',
  components: {
    headers,
    foot,
    menus
  },
  computed: {
    menuOpen() {
      return this.$store.state.menuOpen;
    }
  }
};
</script>

<style>
    .container{
      width:100%;
      height: 100%;
    }
  .el-header, .el-footer {
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  .el-container{
    height: 100%;
  }
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
    height: 100%;
    overflow-x: hidden;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
