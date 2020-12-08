<template>
  <section class="container" style="float:left">
    <!-- 根据menuOpen的值来判断是否使用menu-open样式 -->
    <div class="main">
      <router-view>
      </router-view>
    </div>
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
@import '../assets/css/all.css';
</style>
