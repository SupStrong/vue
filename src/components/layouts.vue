<template>
  <section class="container" style="float:left">
    <!-- 根据menuOpen的值来判断是否使用menu-open样式 -->
    <el-container>
      <el-aside width="200px">
        <menus></menus>
      </el-aside>
      <el-container class=" is-vertical">
        <headers></headers>
          <div class="main">
            <router-view>
            </router-view>
          </div>
       <foot></foot>
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

<style scoped>
@import '../assets/css/static.css';
</style>
