<template>
<el-col class="el-col-s">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template slot="title">营销菜单</template>
          <el-menu-item index="1-4-1">
            <router-link :to="{path:'/articleText/list'}">营销文章</router-link>
          </el-menu-item>
          <el-menu-item index="1-4-2">
            <router-link :to="{path:'/articleVideo/list'}">营销视频</router-link>
          </el-menu-item>
        </el-submenu>
        <el-submenu index="1-5">
          <template slot="title">圈子列表</template>
          <el-menu-item index="1-5-1">
            <router-link :to="{path:'/circle/list'}">列表</router-link>
          </el-menu-item>
          <el-menu-item index="1-5-2">
            <router-link :to="{path:'/circle/details'}">创建详情</router-link>
          </el-menu-item>
        </el-submenu>
        <el-submenu index="1-6">
          <template slot="title">用户</template>
          <el-menu-item index="1-6-1">
            <router-link :to="{path:'/user/list'}">用户列表</router-link>
          </el-menu-item>
        </el-submenu>
        <el-submenu index="1-7">
          <template slot="title">保护机构</template>
          <el-menu-item index="1-6-1">
            <router-link :to="{path:'/organization/list'}">保护机构列表</router-link>
          </el-menu-item>
          <el-menu-item index="1-6-1">
            <router-link :to="{path:'/organization/details'}">创建保护机构</router-link>
          </el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <i class="el-icon-document"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
      </el-menu-item>
    </el-menu>
  </el-col>
</template>
<style>
  .el-header {
    /* background-color: #B3C0D1; */
    color: #333;
    display: flex;
    align-items: center;
  }
  .el-col-s{
    height: 100%;
    background-color: rgb(84, 92, 100);
  }
  .el-aside {
    color: #333;
  }
</style>

<script>
  export default {
  name: 'menus',
    data() {
      const item = {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      };
      return {
        tableData: Array(20).fill(item)
      }
    },
      methods: {
          handleOpen(key, keyPath) {
              console.log(key, keyPath);
          },
          handleClose(key, keyPath) {
              console.log(key, keyPath);
          }
      }
  };
</script>