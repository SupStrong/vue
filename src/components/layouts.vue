<template>
  <section class="container" style="float:left">
    <!-- 根据menuOpen的值来判断是否使用menu-open样式 -->
    <el-container>
      <el-aside width="200px">
        <menus></menus>
      </el-aside>
      <el-container>
        <el-header>
          <p>Header</p>
        </el-header>
        <el-main>
          <router-view>
          </router-view>
        </el-main>
        <el-footer>
          Footer
        </el-footer>
      </el-container>
    </el-container>
    </section>
  </section>
</template>

<script>
import menus from './menus';
export default {
  name:'layouts',
  components: {
    menus,
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
    }
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
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
