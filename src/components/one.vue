<template>
  <div class="G-col-main">
    <el-row :gutter="20">
      <el-col :span="6"><el-input v-model="input" placeholder="请输入内容"></el-input></el-col>
      <el-col :span="6"><el-input v-model="input" placeholder="请输入内容"></el-input></el-col>
      <el-col :span="6">
        <el-date-picker
        v-model="value1"
        type="daterange"
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期">
      </el-date-picker>
      </el-col>
      <el-col :span="6">
        <el-select v-model="value" placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      </el-col>
    </el-row>
    <el-row class="G-M-top-10">
      <div class="G-align-center">
      <el-button type="primary">主要按钮</el-button>
      <el-button type="primary">主要按钮</el-button>
      </div>
    </el-row>
  </div>
</template>
<script>
import { a } from '../assets/js/static'
export default {
  name:'one',
  components: {
  },
  computed: {
  }
};
</script>
<style>
  .el-row {
    margin-top:10px;
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
  .el-select{
  width: 100%;
}
</style>